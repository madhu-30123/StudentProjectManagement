// src/components/ProjectSubmission.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/ProjectSubmission.css'; // Import the CSS file

const ProjectSubmission = () => {
    const [projectName, setProjectName] = useState('');
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission

        if (projectName && file) {
            // Simulate file submission logic here (e.g., sending to a server)
            console.log('Project Name:', projectName);
            console.log('File:', file);

            // Display success message
            setMessage('Project submitted successfully!');

            // Redirect to user dashboard after submission
            setTimeout(() => {
                navigate('/user'); // Adjust path if needed
            }, 2000); // Redirect after 2 seconds
        } else {
            alert('Please enter a project name and select a ZIP file.');
        }
    };

    return (
        <div className="project-submission-container">
            <h2>Project Submission</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="projectName">Project Name:</label>
                    <input
                        type="text"
                        id="projectName"
                        value={projectName}
                        onChange={(e) => setProjectName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="fileUpload">Upload ZIP File:</label>
                    <input
                        type="file"
                        id="fileUpload"
                        accept=".zip"
                        onChange={(e) => setFile(e.target.files[0])}
                        required
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
            {message && <div className="submission-message">{message}</div>}
        </div>
    );
};

export default ProjectSubmission;
