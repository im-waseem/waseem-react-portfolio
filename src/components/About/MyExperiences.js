import React, { useState } from 'react';
import './MyExperiences.css'; // Import your custom CSS for styling

const MyExperiences = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState(null);

  const togglePopup = (experience) => {
    setSelectedExperience(experience);
    setShowPopup(!showPopup);
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Sample data for experiences
  const experiences = [
    {
      company: 'KreditBee',
      position: 'Senior Operations Executive',
      employmentType: 'Full-time',
      startDate: '2021-03-15',
      endDate: 'Present',
      location: 'Bengaluru, Karnataka, India',
      responsibilities:
        "🔍 About Me:\nAs a Recovery Agent at KreditBee, I am driven by a strong commitment to assist individuals in overcoming financial challenges and regaining control of their financial situations. My goal is to provide exceptional customer service and deliver positive outcomes for our valued clients.\n\n💼 Role & Responsibilities:\nIn my role, I specialize in the recovery process, working closely with customers to understand their unique circumstances and develop tailored repayment solutions. I leverage my communication and negotiation skills to engage with customers respectfully and empathetically, ensuring a positive customer experience throughout the recovery process.",
    },
    {
        company: 'Second Pay Finserve PVT LTD Company',
        position: 'Senior Operation Executive',
        employmentType: 'Full-time',
        startDate: '2020-01-01',
        endDate: '2021-02-21',
        location: 'Bengaluru, Karnataka, India',
        responsibilities:
          'As an Senior Operation Executive, I served as an Assistant Team Leader, where I played a vital role in the team by creating detailed Excel reports, facilitating data sharing, and ensuring the smooth functioning of the team for Second Pay Finserve PVT LTD Company.',
      },
      
    // Add more experiences as needed
  ];

  return (
    <div>
      <h2>My Experiences</h2>

      <div className="card-container">
        {experiences.map((experience, index) => (
          <div key={index} className="experience-card">
            <div className="experience-details">
              <h3>{experience.position}</h3>
              <p>
                {experience.company} · {experience.employmentType}
              </p>
              <p>
                {formatDate(experience.startDate)} -{' '}
                {experience.endDate === 'Present' ? 'Present' : formatDate(experience.endDate)} · {experience.location}
              </p>

              <button className="show-details-button" onClick={() => togglePopup(experience)}>
                {showPopup && selectedExperience === experience ? 'Hide Details' : 'Show Details'}
              </button>
            </div>
          </div>
        ))}
      </div>

      {showPopup && selectedExperience && (
        <div className="responsibilities-overlay">
          <div className="popup-content">
            <span className="close-button" onClick={() => togglePopup(null)}>
              &times;
            </span>
            <h4>Roles & Responsibilities:</h4>
            <div className="responsibilities-text">
              {selectedExperience.responsibilities}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyExperiences;
