// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import AdminDashboard from './components/AdminDashboard';
import UserDashboard from './components/UserDashboard';
import TeamSelection from './components/TeamSelection';
import ProjectSelection from './components/ProjectSelection';
import GroupDiscussion from './components/GroupDiscussion';
import ProjectSubmission from './components/ProjectSubmission';
import ProjectStatement from './components/ProjectStatement';
import ManageTeams from './components/ManageTeams'; // New Component
import GradeProjects from './components/GradeProjects'; // New Component

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/admin" element={<AdminDashboard />} />
                <Route path="/user" element={<UserDashboard />} />
                <Route path="/team-selection" element={<TeamSelection />} />
                <Route path="/project-selection" element={<ProjectSelection />} />
                <Route path="/group-discussion" element={<GroupDiscussion />} />
                <Route path="/project-submission" element={<ProjectSubmission />} />
                <Route path="/add-project-statement" element={<ProjectStatement />} />
                <Route path="/manage-teams" element={<ManageTeams />} /> {/* New Route */}
                <Route path="/grade-projects" element={<GradeProjects />} /> {/* New Route */}
            </Routes>
        </Router>
    );
};

export default App;
