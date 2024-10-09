import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../css/ProjectSelection.css'; // Import the CSS file

const ProjectSelection = () => {
    const navigate = useNavigate(); // Initialize the useNavigate hook

    const projects = [
        { id: 1, title: 'E-Commerce Website', description: 'Develop a fully functional e-commerce website.' },
        { id: 2, title: 'Portfolio Website', description: 'Create a personal portfolio website to showcase projects.' },
        { id: 3, title: 'Blog Platform', description: 'Build a platform for users to create and share blogs.' },
        { id: 4, title: 'Online Learning Platform', description: 'Develop a website for online courses and tutorials.' },
        { id: 5, title: 'Social Media Website', description: 'Create a website for users to connect and share content.' },
        { id: 6, title: 'Travel Booking Website', description: 'Build a site for booking travel and accommodations.' },
        { id: 7, title: 'Recipe Sharing Website', description: 'Create a platform for users to share and discover recipes.' },
        { id: 8, title: 'Event Management Website', description: 'Develop a website for managing events and registrations.' },
        { id: 9, title: 'Job Board', description: 'Create a job listing platform for employers and job seekers.' },
        { id: 10, title: 'Fitness Tracker', description: 'Build a site for users to track their fitness goals and progress.' },
    ];

    const handleSubmit = () => {
        // Handle project selection logic here
        // You can also add logic to store the selected project if needed

        // Redirect to the UserDashboard page
        navigate('/user'); // Replace '/user' with the actual path of your UserDashboard
    };

    return (
        <div className="project-selection-container">
            <h2>Select a Project</h2>
            <div className="project-options">
                {projects.map((project) => (
                    <div key={project.id} className="project-option">
                        <input
                            type="radio"
                            id={`project-${project.id}`}
                            name="project"
                            value={project.title}
                        />
                        <label htmlFor={`project-${project.id}`}>
                            {project.title}: {project.description}
                        </label>
                    </div>
                ))}
            </div>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default ProjectSelection;
