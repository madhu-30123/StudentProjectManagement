import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // For navigation
import '../css/SharedStyles.css'; // Shared styles for both login and signup pages

const Signup = () => {
    const [formData, setFormData] = useState({
        email: '',
        collegeId: '',
        branch: '',
        username: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic
    };

    return (
        <div className="page-container">
            <div className="form-container">
                <h1>Sign Up</h1>
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
                            type="text" 
                            name="collegeId" 
                            value={formData.collegeId} 
                            onChange={handleChange} 
                            maxLength={10} 
                            required 
                            placeholder="College ID (10 digits)"
                        />
                    </div>

                    <div className="input-container">
                        <input 
                            type="text" 
                            name="branch" 
                            value={formData.branch} 
                            onChange={handleChange} 
                            required 
                            placeholder="Branch"
                        />
                    </div>

                    <div className="input-container">
                        <input 
                            type="text" 
                            name="username" 
                            value={formData.username} 
                            onChange={handleChange} 
                            required 
                            placeholder="Set username"
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

                    <div className="input-container">
                        <input 
                            type="password" 
                            name="confirmPassword" 
                            value={formData.confirmPassword} 
                            onChange={handleChange} 
                            required 
                            placeholder="Confirm your password"
                        />
                    </div>

                    <button type="submit">Sign Up</button>

                    {/* Add 'Already have an account?' section */}
                    <div className="login-link">
                        <p>Already have an account? <Link to="/login">Login</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;
