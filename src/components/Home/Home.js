import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './HomePage.css';
import Pic from '../assets/Home.svg';
import { FaRocket, FaSmile, FaCode, FaLaptopCode } from 'react-icons/fa';
import Service from './services';


const HomePage = () => {
  const [isNameVisible, setNameVisible] = useState(false);
  const [isAkramVisible, setAkramVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setNameVisible(true);
      setTimeout(() => {
        setAkramVisible(true);
      }, 400);
    }, 1000);
  }, []);

  return (
    <>
    <div className="homepage-background">
      <Container className="my-5 homepage-container water-bubble">
        <Row>
          <Col md={6}>
            <h1 className="homepage-heading">
              {isNameVisible && (
                <span className="animate-name-waseem">
                  <span role="img" aria-label="Rocket">
                    <FaRocket />
                  </span>
                  Waseem
                </span>
              )}{' '}
              {isAkramVisible && (
                <span className="animate-name-akram">
                  Akram{' '}
                  <span role="img" aria-label="Smile">
                    <FaSmile />
                  </span>
                </span>
              )}{' '}
            </h1>
            <p className="homepage-text">
              {isNameVisible && isAkramVisible && (
                <>
                  I am a Full Stack Web Developer with a passion for creating
                  interactive and user-friendly web applications. I specialize in
                  frontend <span role="img" aria-label="Code">
                    <FaCode />
                  </span> and backend technologies, and I love turning ideas into
                  beautiful, functional websites.
                </>
              )}
            </p>

            <p className="homepage-text">
              {isNameVisible && isAkramVisible && (
                <>
                  My goal is to deliver high-quality, performant, and scalable web
                  solutions. I'm always eager to learn and stay up-to-date with the
                  latest web development trends <span role="img" aria-label="Laptop Code">
                    <FaLaptopCode />
                  </span>.
                </>
              )}
            </p>
            <p className="homepage-text">
              {isNameVisible && isAkramVisible && (
                <>
                  Feel free to explore my portfolio and check out some of the
                  projects I've worked on.{' '}
                  <Button
                    variant="primary"
                    className="hire-me-button"
                    style={{ margin: '2px' }}
                    onClick={() => {
                      const downloadLink = document.createElement('a');
                      downloadLink.href = '/path/to/your/resume.pdf'; // Replace with the actual path to your resume file
                      downloadLink.download = 'Waseem_Akram_Resume.pdf'; // Rename the downloaded file as needed
                      downloadLink.click();
                    }}
                  >
                    Hire Me
                  </Button>
                </>
              )}
            </p>
          </Col>
          <Col md={6}>
            <img src={Pic} alt="Illustration" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </div>
      <>
       <Service />
      </>
    </>
  );
};

export default HomePage;
