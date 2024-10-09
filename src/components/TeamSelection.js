// src/components/TeamSelection.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TeamSelection = () => {
    const [selectedTeam, setSelectedTeam] = useState(null);
    const navigate = useNavigate();

    const teams = Array.from({ length: 20 }, (_, index) => `Team ${index + 1}`);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (selectedTeam) {
            alert(`You selected: ${selectedTeam}`);
            // Redirect to UserDashboard after selection
            navigate('/user'); // Change this to your user dashboard route
        } else {
            alert('Please select a team before submitting.');
        }
    };

    return (
        <div className="team-selection-container">
            <h2>Select Your Team</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    {teams.map((team) => (
                        <div key={team}>
                            <input
                                type="radio"
                                id={team}
                                name="team"
                                value={team}
                                onChange={(e) => setSelectedTeam(e.target.value)}
                            />
                            <label htmlFor={team}>{team}</label>
                        </div>
                    ))}
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default TeamSelection;
