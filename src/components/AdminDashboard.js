// src/components/AdminDashboard.js

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/AdminDashboard.css'; // Import the CSS file

const AdminDashboard = () => {
    const navigate = useNavigate(); // Initialize the navigate function

    const handleLogout = () => {
        // Add any logout logic here (like clearing user data, etc.)
        navigate('/'); // Redirect to the homepage
    };

    return (
        <div className="admin-dashboard-container">
            <div className="vertical-navbar">
                <h2>Admin Menu</h2>
                <ul>
                    <li>
                        <Link to="/add-project-statement">Add Project Statement</Link>
                    </li>
                    <li>
                        <Link to="/manage-teams">Manage Teams</Link>
                    </li>
                    <li>
                        <Link to="/grade-projects">Grade Projects</Link>
                    </li>
                    <li>
                        <button onClick={handleLogout} className="logout-button">
                            Logout
                        </button>
                    </li>
                </ul>
            </div>
            <div className="admin-dashboard-content">
                <h2>Welcome Admin!</h2>
                {/* You can use React Router to display the selected component here */}
            </div>
        </div>
    );
};

export default AdminDashboard;
