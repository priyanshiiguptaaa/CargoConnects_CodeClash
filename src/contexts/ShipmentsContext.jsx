import React, { createContext, useContext, useState, useEffect } from 'react';
import {
    getAllShipments,
    getShipmentById,
    createShipment,
    updateShipmentStatus,
    getShipmentStats
} from '../api/shipments';

const ShipmentsContext = createContext();

export const useShipments = () => {
    const context = useContext(ShipmentsContext);
    if (!context) {
        throw new Error('useShipments must be used within a ShipmentsProvider');
    }
    return context;
};

export const ShipmentsProvider = ({ children }) => {
    const [shipments, setShipments] = useState([]);
    const [stats, setStats] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchShipments = async () => {
        try {
            setLoading(true);
            const [shipmentsData, statsData] = await Promise.all([
                getAllShipments(),
                getShipmentStats()
            ]);
            setShipments(shipmentsData);
            setStats(statsData);
            setError(null);
        } catch (err) {
            console.error('Error fetching shipments:', err);
            setError('Failed to fetch shipments');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchShipments();
    }, []);

    const getShipment = async (shipmentId) => {
        try {
            const shipment = await getShipmentById(shipmentId);
            return shipment;
        } catch (err) {
            console.error('Error fetching shipment:', err);
            throw err;
        }
    };

    const addShipment = async (shipmentData) => {
        try {
            const newShipment = await createShipment(shipmentData);
            setShipments(prev => [...prev, newShipment]);
            await fetchShipments(); // Refresh stats
            return newShipment;
        } catch (err) {
            console.error('Error creating shipment:', err);
            throw err;
        }
    };

    const updateStatus = async (shipmentId, status) => {
        try {
            const updatedShipment = await updateShipmentStatus(shipmentId, status);
            setShipments(prev => 
                prev.map(shipment => 
                    shipment.id === shipmentId ? updatedShipment : shipment
                )
            );
            await fetchShipments(); // Refresh stats
            return updatedShipment;
        } catch (err) {
            console.error('Error updating shipment status:', err);
            throw err;
        }
    };

    const value = {
        shipments,
        stats,
        loading,
        error,
        getShipment,
        addShipment,
        updateShipmentStatus: updateStatus,
        refreshShipments: fetchShipments
    };

    return (
        <ShipmentsContext.Provider value={value}>
            {children}
        </ShipmentsContext.Provider>
    );
};

export default ShipmentsContext;
