// src/components/GroupDiscussion.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import '../css/GroupDiscussion.css'; // Import the CSS file

const GroupDiscussion = () => {
    const [discussionText, setDiscussionText] = useState('');
    const [discussions, setDiscussions] = useState([]);
    const navigate = useNavigate(); // Initialize useNavigate

    const handleDiscussionSubmit = () => {
        if (discussionText) {
            setDiscussions([...discussions, discussionText]);
            setDiscussionText(''); // Clear the input field
            
            // Redirect to the user dashboard after submission
            navigate('/user'); // Adjust the path if your UserDashboard component is located elsewhere
        } else {
            alert('Please enter a discussion text.');
        }
    };

    return (
        <div className="group-discussion-container">
            <h2>Group Discussion</h2>
            <textarea
                rows="4"
                cols="50"
                placeholder="Enter your discussion here..."
                value={discussionText}
                onChange={(e) => setDiscussionText(e.target.value)}
            />
            <button onClick={handleDiscussionSubmit}>Submit</button>

            <div className="discussion-list">
                <h3>Discussions</h3>
                {discussions.length > 0 ? (
                    discussions.map((discussion, index) => (
                        <div key={index} className="discussion-item">
                            {discussion}
                        </div>
                    ))
                ) : (
                    <p>No discussions yet.</p>
                )}
            </div>
        </div>
    );
};

export default GroupDiscussion;
