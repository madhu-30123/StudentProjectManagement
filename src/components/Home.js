import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // You'll add styles here later

const Home = () => {
    return (
        <div className="home-container">
            <nav className="navbar">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/signup">Sign Up</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </nav>

            <div className="content">
                <p>Ready to transform group work into a rewarding experience?</p>
                <h1>Welcome to Student Group Projects Management!</h1>
                
            </div>
        </div>
    );
};

export default Home;
