// src/components/UserDashboard.js

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/UserDashboard.css'; // Import the CSS file

const UserDashboard = () => {
    const navigate = useNavigate(); // Initialize the navigate function

    const handleLogout = () => {
        // Add any logout logic here (like clearing user data, etc.)
        navigate('/'); // Redirect to the homepage
    };

    return (
        <div className="dashboard-container">
            <div className="vertical-navbar">
                <h2>Menu</h2>
                <ul>
                    <li>
                        <Link to="/team-selection">Team Selection</Link>
                    </li>
                    <li>
                        <Link to="/project-selection">Project Selection</Link>
                    </li>
                    <li>
                        <Link to="/group-discussion">Group Discussion</Link>
                    </li>
                    <li>
                        <Link to="/project-submission">Project Submission</Link>
                    </li>
                    <li>
                        <button onClick={handleLogout} className="logout-button">
                            Logout
                        </button>
                    </li>
                </ul>
            </div>
            <div className="dashboard-content">
                <h2>Welcome Student!</h2>
            </div>
        </div>
    );
};

export default UserDashboard;
