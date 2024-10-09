// src/components/ManageTeams.js

import React, { useState } from 'react';

const ManageTeams = () => {
    const [teamNumber, setTeamNumber] = useState('');

    const handleAddTeam = (e) => {
        e.preventDefault();
        // Logic to handle team creation
        alert(`Team ${teamNumber} added successfully!`);
        setTeamNumber('');
    };

    return (
        <div className="manage-teams-container">
            <h2>Manage Teams</h2>
            <form onSubmit={handleAddTeam}>
                <div>
                    <label>Team Number:</label>
                    <input
                        type="text"
                        value={teamNumber}
                        onChange={(e) => setTeamNumber(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Add Team</button>
            </form>
        </div>
    );
};

export default ManageTeams;
