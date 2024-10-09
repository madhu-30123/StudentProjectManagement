// src/components/GradeProjects.js

import React, { useState } from 'react';

const GradeProjects = () => {
    const [projects, setProjects] = useState([
        // Example data structure; replace with actual data fetching logic
        { id: 1, name: 'AI Research', file: 'ai_research.zip', grade: '' },
        { id: 2, name: 'Web Development', file: 'web_dev.zip', grade: '' },
    ]);

    const handleGradeChange = (id, e) => {
        const updatedProjects = projects.map((project) =>
            project.id === id ? { ...project, grade: e.target.value } : project
        );
        setProjects(updatedProjects);
    };

    const handleSubmitGrades = () => {
        // Logic to handle grades submission
        alert('Grades submitted successfully!');
    };

    return (
        <div className="grade-projects-container">
            <h2>Grade Projects</h2>
            <table>
                <thead>
                    <tr>
                        <th>Project Name</th>
                        <th>File</th>
                        <th>Grade</th>
                    </tr>
                </thead>
                <tbody>
                    {projects.map((project) => (
                        <tr key={project.id}>
                            <td>{project.name}</td>
                            <td>
                                <a href={project.file} download>
                                    {project.file}
                                </a>
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={project.grade}
                                    onChange={(e) => handleGradeChange(project.id, e)}
                                    placeholder="Enter grade"
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={handleSubmitGrades}>Submit Grades</button>
        </div>
    );
};

export default GradeProjects;
