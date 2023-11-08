import React, { useState } from 'react';
// import RegistrationForm from './Backend/mern1/frontend/RegistrationForm';
import axios from 'axios';
const AdvancedProjects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false);

  // Function to handle project selection
  const handleProjectClick = (projectName) => {
    if (selectedProject === projectName) {
      setSelectedProject(null); // Deselect the project if it's already selected
      setIsFormVisible(false); // Hide the form
    } else {
      setSelectedProject(projectName); // Select the new project
      setIsFormVisible(true); // Show the form
    }
  };

  return (
    <div className='AdvancedProjects'>
      <h1>Advanced Projects Details for FrontEndWebDeveloper</h1>

      <div>
        <button onClick={() => handleProjectClick('Project1')}>
          Project 1
        </button>
        {/* Add similar buttons for other projects */}
      </div>

      {selectedProject === 'Project1' && (
        <div>
          <h2>Project 1 Details</h2>
          
          {/* Add project-specific details here */}
          <p>Description: This is a description of Project 1.</p>
          
          {/* Render the Project1Details component when 'Project1' is selected */}
        </div>
      )}

      {/* Conditionally render the Form component */}
      {/* {isFormVisible && <RegistrationForm />} */}
    </div>
  );
};

export default AdvancedProjects;
