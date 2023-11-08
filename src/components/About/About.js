// About.js

import React from 'react';
import './About.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import profileImage from '../assets/about.png'; // Import your profile image
import { Link, useHistory } from 'react-router-dom'; // Import Link and useHistory from react-router-dom

const About = () => {
  const history = useHistory(); // Get the history object

  const navigateToMyExperiences = () => {
    // Use history to navigate to the "My Experiences" page
    history.push('/my-experiences');
  };

  return (
    <div className="about-container glass-card"> {/* Add the "glass-card" class for the glass effect */}
      <div className="about-content">
        <h2>About Me</h2>
        <p>
          Hi, I'm Waseem Akram, a passionate and dedicated full-stack web developer with a strong foundation in both front-end and back-end technologies. I love turning ideas into functional and visually appealing websites and applications.
        </p>
        <p className="signature">Waseem Akram</p>

        {/* Use a function to navigate to the "My Experiences" page */}
        <button onClick={navigateToMyExperiences} className="my-experiences-button">
          My Experiences
        </button>

        {/* You can add a similar button for the "Social" page */}
        <Link to="/social" className="social-button">
          Connect With Waseem Akram
        </Link>
      </div>
      <div className="profile-image-container">
        <img src={profileImage} alt="Profile" className="profile-image" />
      </div>
    </div>
  );
};

export default About;
