import React from 'react';
import './Social.css';

const Social = () => {
  return (
    <div className="social-container">
      <h2>Follow Me</h2>
      <ul className="social-list">
        <li className="social-item">
          <a href="https://twitter.com/WaseemA76708271" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter twitter-icon"></i> Twitter
            <div className="popup">
              <p>I am Waseem</p>
            </div>
          </a>
        </li>
        <li className="social-item">
          <a href="https://github.com/im-waseem" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github github-icon"></i> GitHub  <div className="popup">
              <p>My github user id im-waseem </p>
            </div>
          </a>
        </li>
        <li className="social-item">
          <a href="https://www.linkedin.com/in/iamwaseem060396/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin linkedin-icon"></i> LinkedIn  <div className="popup">
              <p> My LinkedIn id iamwaseem060396</p>
            </div>
          </a>
        </li>
        <li className="social-item">
          <a href="https://api.whatsapp.com/send?phone=+917022831935" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-whatsapp whatsapp-icon"></i> WhatsApp <div className="popup">
              <p>Connect with WhatsApp Waaseem Akram 7022831935</p>
            </div>
          </a>
        </li>
        <li className="social-item">
          <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-discord discord-icon"></i> Discord  <div className="popup">
              <p>I am Waseem</p>
            </div>
          </a>
        </li>
        <li className="social-item">
          <a href="mailto:youremail@gmail.com" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-envelope gmail-icon"></i> Gmail  <div className="popup">
              <p>I am Waseem</p>
            </div>
          </a>
        </li>
        <li className="social-item">
          <a href="https://codepen.io" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-codepen codepen-icon"></i> CodePen  <div className="popup">
              <p>I am Waseem</p>
            </div>
          </a>
        </li>
        <li className="social-item">
          <a href="https://stackoverflow.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-stack-overflow stackoverflow-icon"></i> Stack Overflow  <div className="popup">
              <p>I am Waseem</p>
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Social;

