import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // For navigation
import '../css/SharedStyles.css'; // Shared styles for both login and signup pages

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const navigate = useNavigate(); // For navigation after login

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Simulated login credentials for admin and user
        if (formData.email === "admin@example.com" && formData.password === "admin123") {
            navigate('/admin'); // Navigate to Admin Dashboard
        } else if (formData.email === "user@example.com" && formData.password === "user123") {
            navigate('/user'); // Navigate to User Dashboard
        } else {
            alert("Invalid credentials. Please try again.");
        }
    };

    return (
        <div className="page-container">
            <div className="form-container">
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className="input-container">
                        <input 
                            type="email" 
                            name="email" 
                            value={formData.email} 
                            onChange={handleChange} 
                            required 
                            placeholder="Enter your email"
                        />
                    </div>

                    <div className="input-container">
                        <input 
                            type="password" 
                            name="password" 
                            value={formData.password} 
                            onChange={handleChange} 
                            required 
                            placeholder="Enter your password"
                        />
                    </div>

                    <button type="submit">Login</button>

                    {/* Add 'Don't have an account?' section */}
                    <div className="signup-link">
                        <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
