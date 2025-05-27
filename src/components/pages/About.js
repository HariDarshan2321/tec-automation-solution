import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaIndustry, FaUsers, FaGlobe, FaTools } from 'react-icons/fa';

// Import company logo
import companyLogo from '../../assets/logos/tec-automation-logo.jpg';

const PageHeader = styled.section`
  background-color: var(--primary-color);
  color: white;
  padding: 6rem 0 4rem;
  text-align: center;
`;

const SectionContainer = styled.section`
  padding: 5rem 0;
  background-color: ${props => props.bgColor || 'white'};
`;

const ValueCard = styled(motion.div)`
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

const ValueIcon = styled.div`
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

const About = () => {
  return (
    <>
      {/* Page Header */}
      <PageHeader>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1>About TEC AUTOMATION</h1>
            <p className="lead">Your trusted partner in industrial automation excellence</p>
          </motion.div>
        </Container>
      </PageHeader>

      {/* About Us Section */}
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
                <h2 className="mb-4">Our Story</h2>
                <p>TEC Automation Solutions is a Chennai-based industrial automation company offering advanced, reliable, and cost-effective solutions for the Indian manufacturing sector. As an authorized partner of CRG Robotics, China, we provide a wide range of globally trusted automation products backed by strong local support and technical expertise.</p>
                <p>At TEC Automation, we partner with global leaders in fluid coupling technology, including Foshan, CNW, Langan, Runxi, and Galaxy. Our core strength lies in our experienced team, which brings over 10 years of hands-on experience in the Indian automation market with deep domain knowledge across multiple industry segments.</p>
                <p>We are committed to helping industries across India adopt smarter, more efficient production methods through innovative technologies and customized automation solutions.</p>
              </motion.div>
            </Col>
            <Col lg={6}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <img src={companyLogo} alt="TEC AUTOMATION" className="img-fluid rounded shadow" />
              </motion.div>
            </Col>
          </Row>
        </Container>
      </SectionContainer>

      {/* Our Values Section */}
      <SectionContainer bgColor="var(--light-bg)">
        <Container>
          <motion.div
            className="text-center mb-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Our Values</h2>
            <p className="lead">The principles that guide our business and operations</p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Row className="g-4">
              <Col md={6} lg={3}>
                <ValueCard variants={cardVariants}>
                  <ValueIcon>
                    <FaIndustry />
                  </ValueIcon>
                  <h3>Excellence</h3>
                  <p>We are committed to delivering exceptional quality in all our products and services, consistently exceeding customer expectations.</p>
                </ValueCard>
              </Col>

              <Col md={6} lg={3}>
                <ValueCard variants={cardVariants}>
                  <ValueIcon>
                    <FaUsers />
                  </ValueIcon>
                  <h3>Customer Focus</h3>
                  <p>We prioritize understanding our customers' unique needs and providing tailored solutions to address their specific challenges.</p>
                </ValueCard>
              </Col>

              <Col md={6} lg={3}>
                <ValueCard variants={cardVariants}>
                  <ValueIcon>
                    <FaGlobe />
                  </ValueIcon>
                  <h3>Innovation</h3>
                  <p>We continuously explore new technologies and methods to improve our offerings and help customers stay competitive in a rapidly evolving landscape.</p>
                </ValueCard>
              </Col>

              <Col md={6} lg={3}>
                <ValueCard variants={cardVariants}>
                  <ValueIcon>
                    <FaTools />
                  </ValueIcon>
                  <h3>Reliability</h3>
                  <p>We stand behind our products and services with robust support and ensure consistency in every aspect of our business relationships.</p>
                </ValueCard>
              </Col>
            </Row>
          </motion.div>
        </Container>
      </SectionContainer>

      {/* Why Choose Us Section */}
      <SectionContainer>
        <Container>
          <Row className="align-items-center">
            <Col lg={5} className="mb-4 mb-lg-0">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="mb-4">Why Choose TEC Automation?</h2>
                <ul className="list-unstyled">
                  <li className="mb-3">
                    <div className="d-flex">
                      <div className="me-3 text-primary">✓</div>
                      <div><strong>Local Expertise:</strong> Chennai-based team with deep understanding of the Indian manufacturing sector.</div>
                    </div>
                  </li>
                  <li className="mb-3">
                    <div className="d-flex">
                      <div className="me-3 text-primary">✓</div>
                      <div><strong>Global Partnerships:</strong> Authorized partnerships with leading international automation brands.</div>
                    </div>
                  </li>
                  <li className="mb-3">
                    <div className="d-flex">
                      <div className="me-3 text-primary">✓</div>
                      <div><strong>Comprehensive Solutions:</strong> End-to-end automation products and services under one roof.</div>
                    </div>
                  </li>
                  <li className="mb-3">
                    <div className="d-flex">
                      <div className="me-3 text-primary">✓</div>
                      <div><strong>Industry Experience:</strong> Over 10 years of hands-on experience across multiple sectors.</div>
                    </div>
                  </li>
                  <li className="mb-3">
                    <div className="d-flex">
                      <div className="me-3 text-primary">✓</div>
                      <div><strong>Responsive Support:</strong> Quick delivery, installation, and comprehensive after-sales service.</div>
                    </div>
                  </li>
                  <li className="mb-3">
                    <div className="d-flex">
                      <div className="me-3 text-primary">✓</div>
                      <div><strong>Custom Solutions:</strong> Tailored automation systems designed for your specific requirements.</div>
                    </div>
                  </li>
                </ul>
              </motion.div>
            </Col>
            <Col lg={7}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="ratio ratio-16x9">
                  <img src={companyLogo} alt="TEC AUTOMATION Facility" className="img-fluid rounded shadow object-fit-cover" />
                </div>
              </motion.div>
            </Col>
          </Row>
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
                <h2>Ready to Partner with Us?</h2>
                <p className="lead mb-4">Contact our team today to discuss how we can help optimize your automation needs.</p>
                <div className="d-flex justify-content-center gap-3">
                  <Button as={Link} to="/contact" variant="light" size="lg">Contact Us</Button>
                  <Button as={Link} to="/solutions" variant="outline-light" size="lg">Explore Solutions</Button>
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </SectionContainer>
    </>
  );
};

export default About;
