import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaHandPaper, FaTint, FaWind, FaRobot, FaCogs, FaTools } from 'react-icons/fa';

// Import slideshow images and company logo
import slide1 from '../../assets/images/slideshow/slide1.jpg';
import slide2 from '../../assets/images/slideshow/slide2.jpg';
import slide3 from '../../assets/images/slideshow/slide3.jpg';
import heroBackground from '../../assets/logos/tec-automation-logo.jpg';

const slideImages = [slide1, slide2, slide3];

const Slideshow = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
`;

const Slide = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  opacity: ${props => (props.active ? 1 : 0)};
  transition: opacity 1.5s ease-in-out;
`;

const HeroSection = styled.section`
  min-height: 80vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    z-index: 1;
  }

  .hero-content {
    position: relative;
    z-index: 2;
    color: white;
  }
`;

const SectionContainer = styled.section`
  padding: 5rem 0;
  background-color: ${props => props.bgColor || 'white'};
`;

const SolutionCard = styled(motion.div)`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  text-align: center;
  height: 100%;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 5px 25px rgba(0, 0, 0, 0.15);
  }
`;

const SolutionIcon = styled.div`
  font-size: 3rem;
  color: var(--primary-color);
  margin-bottom: 1.5rem;
`;

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slideImages.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <HeroSection className="hero-section">
        <Slideshow>
          {slideImages.map((image, index) => (
            <Slide
              key={`slide-${image.split('/').pop().replace('.jpg', '')}`}
              active={currentSlide === index}
              style={{ backgroundImage: `url(${image})` }}
            />
          ))}
        </Slideshow>
        <Container>
          <motion.div
            className="hero-content text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Advanced Automation Solutions for Indian Manufacturing</h1>
            <p>TEC Automation Solutions delivers cutting-edge industrial automation products and services to help your business optimize operations, reduce costs, and increase efficiency.</p>
            <div className="d-flex justify-content-center gap-3 mt-4">
              <Button as={Link} to="/solutions" variant="primary" size="lg">Explore Solutions</Button>
              <Button as={Link} to="/contact" variant="outline-light" size="lg">Contact Us</Button>
            </div>
          </motion.div>
        </Container>
      </HeroSection>

      {/* About Section */}
      <SectionContainer>
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="mb-4">About TEC AUTOMATION</h2>
                <p>TEC Automation Solutions is a Chennai-based industrial automation company offering advanced, reliable, and cost-effective solutions for the Indian manufacturing sector. As an authorized partner of CRG Robotics, China, we provide a wide range of globally trusted automation products backed by strong local support and technical expertise.</p>
                <p>At TEC Automation, we partner with global leaders in fluid coupling technology, including Foshan, CNW, Langan, Runxi, and Galaxy. Our core strength lies in our experienced team, which brings over 10 years of hands-on experience in the Indian automation market.</p>
                <Button as={Link} to="/about" variant="outline-primary" className="mt-3">Learn More</Button>
              </motion.div>
            </Col>
            <Col lg={6}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <img src={heroBackground} alt="TEC AUTOMATION" className="img-fluid rounded shadow" />
              </motion.div>
            </Col>
          </Row>
        </Container>
      </SectionContainer>

      {/* Solutions Section */}
      <SectionContainer bgColor="var(--light-bg)">
        <Container>
          <motion.div
            className="text-center mb-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Our Solutions</h2>
            <p className="lead">Comprehensive automation solutions tailored to your needs</p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Row className="g-4">
              <Col lg={4} md={6}>
                <SolutionCard variants={cardVariants}>
                  <SolutionIcon>
                    <FaHandPaper />
                  </SolutionIcon>
                  <h3>End-of-Arm Tooling (EOAT)</h3>
                  <p>Modular robotic grippers, vacuum systems, tool changers, and part-handling components designed for maximum flexibility and compatibility with all major robot brands.</p>
                </SolutionCard>
              </Col>

              <Col lg={4} md={6}>
                <SolutionCard variants={cardVariants}>
                  <SolutionIcon>
                    <FaTint />
                  </SolutionIcon>
                  <h3>Fluid Quick Couplings</h3>
                  <p>High-performance multi-fluid quick couplers for pneumatic, hydraulic, and thermal management systems ideal for rapid, leak-free connections in demanding applications.</p>
                </SolutionCard>
              </Col>

              <Col lg={4} md={6}>
                <SolutionCard variants={cardVariants}>
                  <SolutionIcon>
                    <FaWind />
                  </SolutionIcon>
                  <h3>Pneumatic Components</h3>
                  <p>Full range of pneumatic cylinders, valves, air preparation units, and fittings for automation with fast response time and long cycle life.</p>
                </SolutionCard>
              </Col>

              <Col lg={4} md={6}>
                <SolutionCard variants={cardVariants}>
                  <SolutionIcon>
                    <FaRobot />
                  </SolutionIcon>
                  <h3>Robotics Integration</h3>
                  <p>Enhance precision and efficiency with advanced robotics integration services, customized to meet specific production requirements across various industries.</p>
                </SolutionCard>
              </Col>

              <Col lg={4} md={6}>
                <SolutionCard variants={cardVariants}>
                  <SolutionIcon>
                    <FaCogs />
                  </SolutionIcon>
                  <h3>Custom Automation</h3>
                  <p>Custom-designed automation systems, integration services, retrofits, and application-specific solutions tailored to client needs for improved productivity.</p>
                </SolutionCard>
              </Col>

              <Col lg={4} md={6}>
                <SolutionCard variants={cardVariants}>
                  <SolutionIcon>
                    <FaTools />
                  </SolutionIcon>
                  <h3>Technical Support</h3>
                  <p>Local support from our Chennai base with quick delivery, installation, and comprehensive service for your automation systems.</p>
                </SolutionCard>
              </Col>
            </Row>
          </motion.div>

          <div className="text-center mt-5">
            <Button as={Link} to="/solutions" variant="primary" size="lg">View All Solutions</Button>
          </div>
        </Container>
      </SectionContainer>

      {/* CTA Section */}
      <SectionContainer bgColor="var(--primary-color)" style={{color: 'white'}}>
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} className="text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2>Ready to Optimize Your Manufacturing Process?</h2>
                <p className="lead mb-4">Contact us today for a consultation and discover how our automation solutions can transform your operations.</p>
                <Button as={Link} to="/contact" variant="light" size="lg">Get in Touch</Button>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </SectionContainer>
    </>
  );
};

export default Home;
