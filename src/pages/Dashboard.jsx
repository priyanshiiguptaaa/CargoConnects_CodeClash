import React from 'react';
import { useAuth } from '../auth/AuthContext';
import { BarChart3, Package, FileText, TrendingUp, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';

const StatCard = ({ title, value, icon: Icon, change }) => (
  <div className="bg-white rounded-lg shadow p-6">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-[#565959]">{title}</p>
        <h3 className="mt-2 text-3xl font-semibold text-[#0F1111]">{value}</h3>
      </div>
      <div className="p-3 bg-[#EAEDED] rounded-full">
        <Icon className="h-6 w-6 text-[#FF9900]" />
      </div>
    </div>
    <div className="mt-4">
      <span className={`text-sm ${change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
        {change >= 0 ? '↑' : '↓'} {Math.abs(change)}%
      </span>
      <span className="text-sm text-[#565959] ml-2">vs last month</span>
    </div>
  </div>
);

const Dashboard = () => {
  const { user } = useAuth();

  const stats = [
    {
      title: 'Total Orders',
      value: '156',
      icon: Package,
      change: 12.5
    },
    {
      title: 'Documents Pending',
      value: '8',
      icon: FileText,
      change: -4.2
    },
    {
      title: 'Revenue',
      value: '$24,500',
      icon: TrendingUp,
      change: 18.3
    },
    {
      title: 'Active Shipments',
      value: '23',
      icon: BarChart3,
      change: 8.1
    }
  ];

  return (
    <div className="min-h-screen bg-[#EAEDED] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Sustainability Link */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-medium text-[#0F1111]">Welcome back, {user?.name || 'User'}</h1>
            <p className="mt-1 text-sm text-[#565959]">Here's what's happening with your business today.</p>
          </div>
          <Link 
            to="/carbon-quest" 
            className="flex items-center px-4 py-2 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-colors"
          >
            <Leaf className="h-5 w-5 mr-2" />
            <span className="text-sm font-medium">Sustainability</span>
          </Link>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Activity Feed */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold text-[#0F1111] mb-4">Recent Activity</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="h-8 w-8 rounded-full bg-[#EAEDED] flex items-center justify-center">
                    <FileText className="h-4 w-4 text-[#FF9900]" />
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-sm text-[#0F1111]">New document uploaded</p>
                  <p className="text-xs text-[#565959]">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="h-8 w-8 rounded-full bg-[#EAEDED] flex items-center justify-center">
                    <Package className="h-4 w-4 text-[#FF9900]" />
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-sm text-[#0F1111]">Order #1234 shipped</p>
                  <p className="text-xs text-[#565959]">5 hours ago</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold text-[#0F1111] mb-4">Quick Actions</h2>
            <div className="grid grid-cols-2 gap-4">
              <Link 
                to="/documents" 
                className="p-4 border border-[#D5D9D9] rounded-lg hover:border-[#FF9900] hover:bg-[#F7F8F8] transition-all duration-200 text-center"
              >
                <FileText className="h-6 w-6 text-[#FF9900] mx-auto" />
                <span className="block mt-2 text-sm text-[#0F1111]">Upload Document</span>
              </Link>
              <Link 
                to="/inventory" 
                className="p-4 border border-[#D5D9D9] rounded-lg hover:border-[#FF9900] hover:bg-[#F7F8F8] transition-all duration-200 text-center"
              >
                <Package className="h-6 w-6 text-[#FF9900] mx-auto" />
                <span className="block mt-2 text-sm text-[#0F1111]">Add Products</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
