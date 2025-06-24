<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Export Management Platform - Interactive README</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            color: #333;
            overflow-x: hidden;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }

        .header {
            text-align: center;
            margin-bottom: 50px;
            position: relative;
        }

        .title {
            font-size: 3.5rem;
            font-weight: 800;
            background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4);
            background-size: 300% 300%;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            animation: gradientShift 4s ease-in-out infinite;
            margin-bottom: 20px;
            text-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }

        @keyframes gradientShift {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
        }

        .subtitle {
            font-size: 1.3rem;
            color: white;
            margin-bottom: 10px;
            opacity: 0;
            animation: fadeInUp 1s ease-out 0.5s forwards;
        }

        .tagline {
            font-size: 1.1rem;
            color: rgba(255,255,255,0.8);
            font-style: italic;
            opacity: 0;
            animation: fadeInUp 1s ease-out 1s forwards;
        }

        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .floating-icons {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 100%;
            pointer-events: none;
            overflow: hidden;
        }

        .icon {
            position: absolute;
            font-size: 2rem;
            opacity: 0.1;
            animation: float 6s ease-in-out infinite;
        }

        .icon:nth-child(1) { left: 10%; animation-delay: 0s; }
        .icon:nth-child(2) { left: 80%; animation-delay: 1s; }
        .icon:nth-child(3) { left: 60%; animation-delay: 2s; }
        .icon:nth-child(4) { left: 30%; animation-delay: 3s; }

        @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(10deg); }
        }

        .section {
            background: rgba(255,255,255,0.95);
            backdrop-filter: blur(10px);
            border-radius: 20px;
            padding: 30px;
            margin-bottom: 30px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            border: 1px solid rgba(255,255,255,0.2);
            transition: all 0.3s ease;
            opacity: 0;
            transform: translateY(50px);
            animation: slideInUp 0.8s ease-out forwards;
        }

        .section:nth-child(odd) {
            animation-delay: 0.2s;
        }

        .section:nth-child(even) {
            animation-delay: 0.4s;
        }

        @keyframes slideInUp {
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .section:hover {
            transform: translateY(-5px);
            box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        }

        .section-title {
            display: flex;
            align-items: center;
            gap: 15px;
            font-size: 2rem;
            font-weight: 700;
            margin-bottom: 20px;
            color: #2c3e50;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .section-title:hover {
            color: #667eea;
            transform: scale(1.02);
        }

        .section-title .emoji {
            font-size: 2.5rem;
            transition: transform 0.3s ease;
        }

        .section-title:hover .emoji {
            transform: rotate(10deg) scale(1.1);
        }

        .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
            margin-top: 20px;
        }

        .feature-card {
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: white;
            padding: 25px;
            border-radius: 15px;
            transition: all 0.3s ease;
            cursor: pointer;
            position: relative;
            overflow: hidden;
        }

        .feature-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
            transition: left 0.5s ease;
        }

        .feature-card:hover::before {
            left: 100%;
        }

        .feature-card:hover {
            transform: translateY(-10px) rotateX(5deg);
            box-shadow: 0 15px 30px rgba(102, 126, 234, 0.4);
        }

        .feature-title {
            font-size: 1.3rem;
            font-weight: 600;
            margin-bottom: 10px;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .tech-stack {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 15px;
            margin-top: 20px;
        }

        .tech-item {
            background: linear-gradient(45deg, #ff9a9e, #fecfef);
            padding: 20px;
            border-radius: 12px;
            text-align: center;
            transition: all 0.3s ease;
            cursor: pointer;
            position: relative;
            overflow: hidden;
        }

        .tech-item::after {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 0;
            height: 0;
            background: rgba(255,255,255,0.3);
            border-radius: 50%;
            transform: translate(-50%, -50%);
            transition: all 0.3s ease;
        }

        .tech-item:hover::after {
            width: 300px;
            height: 300px;
        }

        .tech-item:hover {
            transform: scale(1.05);
            box-shadow: 0 10px 25px rgba(255, 154, 158, 0.4);
        }

        .tech-label {
            font-weight: 600;
            margin-bottom: 5px;
            position: relative;
            z-index: 1;
        }

        .tech-value {
            font-size: 1.1rem;
            font-weight: 700;
            color: #2c3e50;
            position: relative;
            z-index: 1;
        }

        .setup-steps {
            counter-reset: step-counter;
        }

        .setup-step {
            counter-increment: step-counter;
            position: relative;
            padding: 20px;
            margin-bottom: 20px;
            background: linear-gradient(135deg, #84fab0, #8fd3f4);
            border-radius: 15px;
            transition: all 0.3s ease;
            cursor: pointer;
            overflow: hidden;
        }

        .setup-step::before {
            content: counter(step-counter);
            position: absolute;
            left: 20px;
            top: 50%;
            transform: translateY(-50%);
            background: #2c3e50;
            color: white;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            font-size: 1.2rem;
        }

        .setup-step:hover {
            transform: translateX(10px);
            box-shadow: 0 10px 25px rgba(132, 250, 176, 0.4);
        }

        .setup-content {
            margin-left: 70px;
        }

        .setup-title {
            font-size: 1.3rem;
            font-weight: 600;
            margin-bottom: 10px;
            color: #2c3e50;
        }

        .code-block {
            background: #2c3e50;
            color: #ecf0f1;
            padding: 20px;
            border-radius: 10px;
            margin: 15px 0;
            font-family: 'Monaco', 'Menlo', monospace;
            position: relative;
            overflow-x: auto;
        }

        .copy-btn {
            position: absolute;
            top: 10px;
            right: 10px;
            background: #667eea;
            color: white;
            border: none;
            padding: 8px 12px;
            border-radius: 5px;
            cursor: pointer;
            font-size: 0.8rem;
            transition: all 0.3s ease;
        }

        .copy-btn:hover {
            background: #5a67d8;
            transform: scale(1.05);
        }

        .api-table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
            background: white;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }

        .api-table th {
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: white;
            padding: 15px;
            text-align: left;
            font-weight: 600;
        }

        .api-table td {
            padding: 12px 15px;
            border-bottom: 1px solid #eee;
            transition: all 0.3s ease;
        }

        .api-table tr:hover td {
            background: #f8f9fa;
            transform: scale(1.01);
        }

        .method-badge {
            padding: 4px 8px;
            border-radius: 4px;
            font-size: 0.8rem;
            font-weight: bold;
            color: white;
        }

        .method-get { background: #28a745; }
        .method-post { background: #007bff; }
        .method-put { background: #ffc107; color: #000; }
        .method-delete { background: #dc3545; }

        .contributing-steps {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            margin-top: 20px;
        }

        .contrib-card {
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: white;
            padding: 25px;
            border-radius: 15px;
            text-align: center;
            transition: all 0.3s ease;
            cursor: pointer;
            position: relative;
            overflow: hidden;
        }

        .contrib-card::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent);
            transform: rotate(45deg);
            transition: all 0.3s ease;
            opacity: 0;
        }

        .contrib-card:hover::before {
            opacity: 1;
            animation: shine 0.8s ease-in-out;
        }

        @keyframes shine {
            0% { transform: rotate(45deg) translate(-100px, -100px); }
            100% { transform: rotate(45deg) translate(100px, 100px); }
        }

        .contrib-card:hover {
            transform: translateY(-10px) scale(1.02);
            box-shadow: 0 15px 30px rgba(102, 126, 234, 0.4);
        }

        .footer {
            text-align: center;
            margin-top: 50px;
            padding: 30px;
            background: rgba(255,255,255,0.1);
            backdrop-filter: blur(10px);
            border-radius: 20px;
            color: white;
        }

        .footer-title {
            font-size: 2rem;
            font-weight: 700;
            margin-bottom: 15px;
            background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .progress-bar {
            position: fixed;
            top: 0;
            left: 0;
            width: 0%;
            height: 4px;
            background: linear-gradient(90deg, #ff6b6b, #4ecdc4, #45b7d1);
            z-index: 1000;
            transition: width 0.3s ease;
        }

        @media (max-width: 768px) {
            .title {
                font-size: 2.5rem;
            }
            
            .features-grid,
            .tech-stack,
            .contributing-steps {
                grid-template-columns: 1fr;
            }
            
            .section {
                padding: 20px;
            }
        }

        .interactive-demo {
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: white;
            padding: 30px;
            border-radius: 20px;
            text-align: center;
            margin: 30px 0;
            position: relative;
            overflow: hidden;
        }

        .demo-btn {
            background: white;
            color: #667eea;
            border: none;
            padding: 15px 30px;
            border-radius: 25px;
            font-size: 1.1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            margin: 10px;
        }

        .demo-btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 20px rgba(0,0,0,0.2);
        }

        .pulse {
            animation: pulse 2s infinite;
        }

        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
        }
    </style>
</head>
<body>
    <div class="progress-bar" id="progressBar"></div>
    
    <div class="container">
        <div class="header">
            <div class="floating-icons">
                <div class="icon">🌍</div>
                <div class="icon">📦</div>
                <div class="icon">🚀</div>
                <div class="icon">💼</div>
            </div>
            <h1 class="title">Export Management Platform</h1>
            <p class="subtitle">for Indian SMBs</p>
            <p class="tagline">Empowering SMBs to go global with ease and efficiency</p>
        </div>

        <div class="interactive-demo">
            <h3>🎮 Interactive Demo Zone</h3>
            <p>Experience the platform's power before diving in!</p>
            <button class="demo-btn pulse" onclick="showAlert('🚀 Demo: Shipment Created Successfully!')">Create Sample Shipment</button>
            <button class="demo-btn" onclick="showAlert('📊 Demo: Showing rates from 5 carriers!')">Get Shipping Rates</button>
            <button class="demo-btn" onclick="showAlert('📄 Demo: Document uploaded and verified!')">Upload Document</button>
        </div>

        <div class="section">
            <h2 class="section-title">
                <span class="emoji">🚀</span>
                <span>Features That Make Magic Happen</span>
            </h2>
            <div class="features-grid">
                <div class="feature-card" onclick="animateCard(this)">
                    <div class="feature-title">🔒 Secure Authentication</div>
                    <p>Bank-level security with JWT tokens and multi-factor authentication</p>
                </div>
                <div class="feature-card" onclick="animateCard(this)">
                    <div class="feature-title">📦 Smart Shipment Management</div>
                    <p>Track, manage, and optimize your shipments with AI-powered insights</p>
                </div>
                <div class="feature-card" onclick="animateCard(this)">
                    <div class="feature-title">🗂️ Intelligent Document Hub</div>
                    <p>Auto-organize, verify, and manage all your export documents</p>
                </div>
                <div class="feature-card" onclick="animateCard(this)">
                    <div class="feature-title">🌐 Real-time Carrier Network</div>
                    <p>Connect with 50+ carriers worldwide for seamless shipping</p>
                </div>
                <div class="feature-card" onclick="animateCard(this)">
                    <div class="feature-title">📊 Smart Rate Comparison</div>
                    <p>Get the best deals with our AI-powered rate comparison engine</p>
                </div>
                <div class="feature-card" onclick="animateCard(this)">
                    <div class="feature-title">🗓️ Dynamic Schedule Management</div>
                    <p>Never miss a deadline with smart scheduling and reminders</p>
                </div>
            </div>
        </div>

        <div class="section">
            <h2 class="section-title">
                <span class="emoji">🛠️</span>
                <span>Powered by Modern Tech Stack</span>
            </h2>
            <div class="tech-stack">
                <div class="tech-item" onclick="techPulse(this)">
                    <div class="tech-label">Frontend</div>
                    <div class="tech-value">React + Vite ⚡</div>
                </div>
                <div class="tech-item" onclick="techPulse(this)">
                    <div class="tech-label">Backend</div>
                    <div class="tech-value">Node.js + Express 🚀</div>
                </div>
                <div class="tech-item" onclick="techPulse(this)">
                    <div class="tech-label">Database</div>
                    <div class="tech-value">MongoDB 🍃</div>
                </div>
                <div class="tech-item" onclick="techPulse(this)">
                    <div class="tech-label">Authentication</div>
                    <div class="tech-value">JWT 🔐</div>
                </div>
                <div class="tech-item" onclick="techPulse(this)">
                    <div class="tech-label">File Handling</div>
                    <div class="tech-value">Multer 📁</div>
                </div>
            </div>
        </div>

        <div class="section">
            <h2 class="section-title">
                <span class="emoji">📋</span>
                <span>Prerequisites Checklist</span>
            </h2>
            <div class="features-grid">
                <div class="feature-card">
                    <div class="feature-title">✅ Node.js (v14+)</div>
                    <p>The JavaScript runtime that powers our backend magic</p>
                </div>
                <div class="feature-card">
                    <div class="feature-title">✅ MongoDB</div>
                    <p>Our flexible database for storing all your export data</p>
                </div>
                <div class="feature-card">
                    <div class="feature-title">✅ npm or yarn</div>
                    <p>Package managers to handle all dependencies smoothly</p>
                </div>
            </div>
        </div>

        <div class="section">
            <h2 class="section-title">
                <span class="emoji">⚙️</span>
                <span>Quick Setup Guide</span>
            </h2>
            <div class="setup-steps">
                <div class="setup-step" onclick="stepComplete(this)">
                    <div class="setup-content">
                        <div class="setup-title">Clone the Repository</div>
                        <div class="code-block">
                            <button class="copy-btn" onclick="copyCode(this)">Copy</button>
git clone &lt;repository-url&gt;
cd export-management-platform
                        </div>
                    </div>
                </div>
                
                <div class="setup-step" onclick="stepComplete(this)">
                    <div class="setup-content">
                        <div class="setup-title">Install Frontend Dependencies</div>
                        <div class="code-block">
                            <button class="copy-btn" onclick="copyCode(this)">Copy</button>
npm install
                        </div>
                    </div>
                </div>
                
                <div class="setup-step" onclick="stepComplete(this)">
                    <div class="setup-content">
                        <div class="setup-title">Install Backend Dependencies</div>
                        <div class="code-block">
                            <button class="copy-btn" onclick="copyCode(this)">Copy</button>
cd backend
npm install
                        </div>
                    </div>
                </div>
                
                <div class="setup-step" onclick="stepComplete(this)">
                    <div class="setup-content">
                        <div class="setup-title">Configure Environment Variables</div>
                        <p>Copy .env.example to .env and update your settings</p>
                    </div>
                </div>
                
                <div class="setup-step" onclick="stepComplete(this)">
                    <div class="setup-content">
                        <div class="setup-title">Start MongoDB</div>
                        <div class="code-block">
                            <button class="copy-btn" onclick="copyCode(this)">Copy</button>
mongodb://localhost:27017/exportPlatformDB
                        </div>
                    </div>
                </div>
                
                <div class="setup-step" onclick="stepComplete(this)">
                    <div class="setup-content">
                        <div class="setup-title">Launch Backend Server</div>
                        <div class="code-block">
                            <button class="copy-btn" onclick="copyCode(this)">Copy</button>
cd backend
npm run dev
                        </div>
                    </div>
                </div>
                
                <div class="setup-step" onclick="stepComplete(this)">
                    <div class="setup-content">
                        <div class="setup-title">Start Frontend Server</div>
                        <div class="code-block">
                            <button class="copy-btn" onclick="copyCode(this)">Copy</button>
npm run dev
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="section">
            <h2 class="section-title">
                <span class="emoji">📚</span>
                <span>API Documentation</span>
            </h2>
            
            <h3>🔐 Authentication Endpoints</h3>
            <table class="api-table">
                <thead>
                    <tr>
                        <th>Method</th>
                        <th>Endpoint</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><span class="method-badge method-post">POST</span></td>
                        <td>/api/auth/register</td>
                        <td>Register a new user</td>
                    </tr>
                    <tr>
                        <td><span class="method-badge method-post">POST</span></td>
                        <td>/api/auth/login</td>
                        <td>Login user</td>
                    </tr>
                    <tr>
                        <td><span class="method-badge method-get">GET</span></td>
                        <td>/api/auth/me</td>
                        <td>Get current user</td>
                    </tr>
                </tbody>
            </table>

            <h3>📦 Shipment Endpoints</h3>
            <table class="api-table">
                <thead>
                    <tr>
                        <th>Method</th>
                        <th>Endpoint</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><span class="method-badge method-get">GET</span></td>
                        <td>/api/shipments</td>
                        <td>Get all shipments</td>
                    </tr>
                    <tr>
                        <td><span class="method-badge method-get">GET</span></td>
                        <td>/api/shipments/:id</td>
                        <td>Get single shipment</td>
                    </tr>
                    <tr>
                        <td><span class="method-badge method-post">POST</span></td>
                        <td>/api/shipments</td>
                        <td>Create new shipment</td>
                    </tr>
                    <tr>
                        <td><span class="method-badge method-put">PUT</span></td>
                        <td>/api/shipments/:id</td>
                        <td>Update shipment</td>
                    </tr>
                    <tr>
                        <td><span class="method-badge method-delete">DELETE</span></td>
                        <td>/api/shipments/:id</td>
                        <td>Delete shipment</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="section">
            <h2 class="section-title">
                <span class="emoji">👥</span>
                <span>Join Our Community!</span>
            </h2>
            <p>We welcome contributions from developers around the world!</p>
            <div class="contributing-steps">
                <div class="contrib-card">
                    <h4>🍴 Fork Repository</h4>
                    <p>Create your own copy of the project</p>
                </div>
                <div class="contrib-card">
                    <h4>🌿 Create Branch</h4>
                    <p>Work on your amazing feature</p>
                </div>
                <div class="contrib-card">
                    <h4>💾 Commit Changes</h4>
                    <p>Document your improvements</p>
                </div>
                <div class="contrib-card">
                    <h4>🚀 Push & PR</h4>
                    <p>Share your contribution with us</p>
                </div>
            </div>
        </div>

        <div class="footer">
            <h2 class="footer-title">Let's Simplify Exporting Together! ✨</h2>
            <p>Building the future of international trade for Indian SMBs</p>
            <p style="margin-top: 20px; font-size: 0.9rem; opacity: 0.8;">
                📜 Licensed under MIT License | Made with ❤️ for Indian exporters
            </p>
        </div>
    </div>

    <script>
        // Progress bar animation
        window.addEventListener('scroll', () => {
            const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
            document.getElementById('progressBar').style.width = scrollPercent + '%';
        });

        // Interactive animations
        function animateCard(card) {
            card.style.transform = 'scale(0.95)';
            setTimeout(() => {
                card.style.transform = 'translateY(-10px) rotateX(5deg)';
            }, 150);
        }

        function techPulse(tech) {
            tech.classList.add('pulse');
            setTimeout(() => {
                tech.classList.remove('pulse');
            }, 1000);
        }

        function stepComplete(step) {
            step.style.background = 'linear-gradient(135deg, #4CAF50, #45a049)';
            step.style.transform = 'translateX(10px) scale(1.02)';
            
            setTimeout(() => {
                step.style.background = 'linear-gradient(135deg, #84fab0, #8fd3f4)';
                step.style.transform = 'translateX(0) scale(1)';
            }, 1000);
        }

        function copyCode(btn) {
            const codeBlock = btn.parentElement;
            const code = codeBlock.textContent.replace('Copy', '').trim();
            navigator.clipboard.writeText(code);
            
            btn.textContent = 'Copied!';
            btn.style.background = '#4CAF50';
            
            setTimeout(() => {
                btn.textContent = 'Copy';
                btn.style.background = '#667eea';
            }, 2000);
        }

        function showAlert(message) {
            // Create custom alert
            const alertDiv = document.createElement('div');
            alertDiv.innerHTML = message;
            alertDiv.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                background: linear-gradient(135deg, #4CAF50, #45a049);
                color: white;
                padding: 20px 30px;
                border-radius: 15px;
                box-shadow: 0 10px 30px rgba(0,0,0,0.3);
                z-index: 1000;
                font-size: 1.1rem;
                font-weight: 600;
                animation: slideInRight 0.5s ease-out;
                backdrop-filter: blur(10px);
            `;
            
            document.body.appendChild(alertDiv);
            
            setTimeout(() => {
                alertDiv.style.animation = 'slideOutRight 0.5s ease-out';
                setTimeout(() => {
                    document.body.removeChild(alertDiv);
                }, 500);
            }, 3000);
        }

        // Add keyframe animations for alerts
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideInRight {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            
            @keyframes slideOutRight {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(100%);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);

        // Add some interactive easter eggs
        let clickCount = 0;
        document.querySelector('.title').addEventListener('click', () => {
            clickCount++;
            if (clickCount === 5) {
                showAlert('🎉 Secret unlocked! You found the hidden feature!');
                document.querySelector('.title').style.animation = 'gradientShift 1s ease-in-out infinite';
                clickCount = 0;
            }
        });

        // Add floating animation to cards on hover
        document.querySelectorAll('.feature-card, .tech-item, .contrib-card').forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.animation = 'float 2s ease-in-out infinite';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.animation = 'none';
            });
        });

        // Add typing effect to subtitle
        const subtitle = document.querySelector('.subtitle');
        const originalText = subtitle.textContent;
        subtitle.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < originalText.length) {
                subtitle.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };

        setTimeout(typeWriter, 1500);

        // Add particle effect on scroll
        window.addEventListener('scroll', () => {
            if (Math.random() > 0.98) {
                createParticle();
            }
        });

        function createParticle() {
            const particle = document.createElement('div');
            particle.innerHTML = ['🌟', '✨', '💫', '⭐'][Math.floor(Math.random() * 4)];
            particle.style.cssText = `
                position: fixed;
                top: ${Math.random() * 100}vh;
                left: ${Math.random() * 100}vw;
                font-size: 1.5rem;
                pointer-events: none;
                z-index: 1000;
                animation: particleFloat 3s ease-out forwards;
            `;
            
            document.body.appendChild(particle);
            
            setTimeout(() => {
                if (document.body.contains(particle)) {
                    document.body.removeChild(particle);
                }
            }, 3000);
        }

        // Add particle animation
        const particleStyle = document.createElement('style');
        particleStyle.textContent = `
            @keyframes particleFloat {
                0% {
                    transform: translateY(0) rotate(0deg);
                    opacity: 1;
                }
                100% {
                    transform: translateY(-200px) rotate(360deg);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(particleStyle);

        // Add smooth scrolling behavior
        document.querySelectorAll('.section-title').forEach(title => {
            title.addEventListener('click', () => {
                title.parentElement.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            });
        });

        // Add loading animation
        window.addEventListener('load', () => {
            document.body.style.opacity = '0';
            document.body.style.transition = 'opacity 0.5s ease-in';
            
            setTimeout(() => {
                document.body.style.opacity = '1';
            }, 100);
        });

        // Add dynamic theme switching
        let themeToggle = false;
        document.addEventListener('keydown', (e) => {
            if (e.key === 't' && e.ctrlKey) {
                themeToggle = !themeToggle;
                if (themeToggle) {
                    document.body.style.background = 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)';
                    showAlert('🌙 Dark mode activated! Press Ctrl+T to toggle back');
                } else {
                    document.body.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
                    showAlert('☀️ Light mode activated!');
                }
            }
        });

        // Add interactive stats counter
        function animateValue(element, start, end, duration) {
            let startTimestamp = null;
            const step = (timestamp) => {
                if (!startTimestamp) startTimestamp = timestamp;
                const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                element.textContent = Math.floor(progress * (end - start) + start);
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                }
            };
            window.requestAnimationFrame(step);
        }

        // Initialize stats when they come into view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Add some stats animation here if needed
                }
            });
        });

        document.querySelectorAll('.section').forEach(section => {
            observer.observe(section);
        });

        console.log('🎉 Welcome to the Interactive Export Management Platform README!');
        console.log('🚀 Try clicking on the title 5 times for a surprise!');
        console.log('⌨️ Press Ctrl+T to toggle dark mode!');
        console.log('✨ Scroll to see particle effects!');
    </script>
</body>
</html>
