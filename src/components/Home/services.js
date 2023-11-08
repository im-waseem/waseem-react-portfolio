import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = () => {
  const [activeCard, setActiveCard] = useState(null);

  const services = [
    {
      title: 'About Me',
      description: 'Learn more about my background and experience.',
      link: '/about',
    },
    {
      title: 'Contact',
      description: 'Get in touch with me for inquiries or collaboration.',
      link: '/contact',
    },
    {
      title: 'Projects',
      description: 'Check out my latest projects and demos of waseem akram.',
      link: '/projects',
    },
    
  ];

  const handleCardClick = (index) => {
    setActiveCard(index);
  };

  return (
    <div className="service-background">
      <Container className="my-5 service-container">
        <Row>
          {services.map((service, index) => (
            <Col key={index} md={4}>
              <div
                className={`slide-card ${activeCard === index ? 'active' : ''}`}
                onClick={() => handleCardClick(index)}
              >
                <Card>
                  <Card.Body>
                    <Card.Title>{service.title}</Card.Title>
                    <Card.Text>{service.description}</Card.Text>
                    <Link to={service.link} className="card-link">
                      Learn More
                    </Link>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Service;
