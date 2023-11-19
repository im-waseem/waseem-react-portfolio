// Skill.js
import React from 'react';
import { FaHtml5, FaCss3, FaJs, FaReact, FaJava, FaAws, FaPython, FaGithub, FaNodeJs, FaDatabase, FaCode, FaToolbox, FaQuestion , FaQuestionCircle} from 'react-icons/fa';
import { Card } from 'react-bootstrap';
import './Skill.css';

const Skill = () => {
  const frontendSkills = [
    { icon: <FaHtml5 color="#E44D26" size={120} />, name: 'HTML' },
    { icon: <FaCss3 color="#1572B6" size={120} />, name: 'CSS' },
    { icon: <FaJs color="#F0DB4F" size={120} />, name: 'JavaScript' },
    { icon: <FaReact color="#61DAFB" size={120} />, name: 'React' },
    { icon: <FaCode color="black" size={120} />, name: 'Bootstrap' },
    { icon: <FaQuestionCircle color="orange" size={120} />, name: 'jQuery' },
    // Add more frontend skills here
  ];
  const backendSkills = [
    { icon: <FaNodeJs color="#68A063" size={120} />, name: 'Node.js' },
    { icon: <FaDatabase color="#47A248" size={120} />, name: 'MongoDB' },
    { icon: <FaDatabase color="#007ACC" size={120} />, name: 'SQL' }, // Using the database icon for SQL


    // Add more backend skills here
  ];

  const tools = [
    { icon: <FaCode color="#007ACC" size={120} />, name: 'VS Code' },
    { icon: <FaToolbox color="#FF6C37" size={120} />, name: 'Postman' },
    { icon: <FaReact color="#61DAFB" size={120} />, name: 'Heroku' },
    { icon: <FaGithub color="#000" size={120} />, name: 'GitHub' },
    { icon: <FaDatabase color="#47A248" size={120} />, name: 'MongoDB' },

    // Add more tools here
  ];

  const learningSkills = [
    { icon: <FaAws color="#FF9900" size={120} />, name: 'AWS' },
    { icon: <FaPython color="#3776AB" size={120} />, name: 'Python' },
    { icon: <FaJava color="#5382A1" size={120} />, name: 'Java' },
    { icon: <FaNodeJs color="#68A063" size={120} />, name: 'Django' }, // Assuming Django represents your backend
    // Add more learning skills here
  ];


  const upcomingSkills = [
    { icon: <FaQuestion color="grey" size={120} />, name: 'DevOps' },
    { icon: <FaQuestion color="grey" size={120} />, name: 'Cyber Security' },
    { icon: <FaQuestion color="grey" size={120} />, name: 'Hacking' },
    // Add more upcoming skills here
  ];

  const renderSkills = (skills) => {
    return (
      <div className="skills-container">
        {skills.map((skill, index) => (
          <Card key={index} className="skill-card">
            <Card.Body>
              <div className="skill-icon">{skill.icon}</div>
              <Card.Title className="skill-name">{skill.name}</Card.Title>
            </Card.Body>
          </Card>
        ))}
      </div>
    );
  };

  return (
    <div className="skill-wrapper">
      <div className="category-card">
        <Card.Header>
          <h2 className="category-title">Frontend Skills</h2>
        </Card.Header>
        <div className="category-content">
          {renderSkills(frontendSkills)}
        </div>
      </div>

      <div className="category-card">
        <Card.Header>
          <h2 className="category-title">Backend Skills</h2>
        </Card.Header>
        <div className="category-content">
          {renderSkills(backendSkills)}
        </div>
      </div>

      <div className="category-card">
        <Card.Header>
          <h2 className="category-title">Tools</h2>
        </Card.Header>
        <div className="category-content">
          {renderSkills(tools)}
        </div>
      </div>
      <div className="category-card">
        <Card.Header>
          <h2 className="category-title">Learning Skills</h2>
        </Card.Header>
        <div className="category-content">
          {renderSkills(learningSkills)}
        </div>
      </div>
      <div className="category-card">
        <Card.Header>
          <h2 className="category-title">Upcoming Skills</h2>
        </Card.Header>
        <div className="category-content">
          {renderSkills(upcomingSkills)}
        </div>
      </div>
    </div>
  );
};

export default Skill;