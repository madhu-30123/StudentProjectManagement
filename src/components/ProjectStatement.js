// src/components/ProjectStatement.js

import React, { useState } from 'react';

const ProjectStatement = () => {
    const [projectName, setProjectName] = useState('');
    const [projectDescription, setProjectDescription] = useState('');
    const [discussion, setDiscussion] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic to handle project creation
        alert('Project created successfully!');
        // Reset the fields
        setProjectName('');
        setProjectDescription('');
        setDiscussion('');
    };

    return (
        <div className="project-statement-container">
            <h2>Add Project Statement</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Project Name:</label>
                    <input
                        type="text"
                        value={projectName}
                        onChange={(e) => setProjectName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Project Description:</label>
                    <textarea
                        value={projectDescription}
                        onChange={(e) => setProjectDescription(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Discussion Points:</label>
                    <textarea
                        value={discussion}
                        onChange={(e) => setDiscussion(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Add Project</button>
            </form>
        </div>
    );
};

export default ProjectStatement;
