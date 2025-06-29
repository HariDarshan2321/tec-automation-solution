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

// Import industrial automation images
import industrialAuto1 from '../../assets/images/industrial-automation/robot-arm-eoat-1.jpg';
import industrialAuto2 from '../../assets/images/industrial-automation/robotic-tooling-system.jpg';
import industrialAuto3 from '../../assets/images/industrial-automation/complex-eoat-system.jpg';

// Import videos
import roboticVideo from '../../assets/videos/robotic-eoat-automotive-bumper.mp4';
import dryDisconnectVideo from '../../assets/videos/dry-disconnect-coupling.mp4';

// Import coupling images
import hydraulicCoupling from '../../assets/images/products/couplings/hydraulic-flat-face-coupling.webp';
import pneumaticCoupling from '../../assets/images/products/couplings/pneumatic-quick-connectors.webp';
import dryDisconnectCouplingImg from '../../assets/images/products/couplings/dry-disconnect-coupling.webp';
import highFlowCoupling from '../../assets/images/products/couplings/high-flow-coupling.jpg';
import breakawayValve from '../../assets/images/products/couplings/breakaway-valve.jpg';
import moldCoupling from '../../assets/images/products/couplings/mold-coupling.jpg';

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
                <p>TEC Automation Solutions is your one-stop destination for all automation needs, delivering innovative solutions that meet global standards. Headquartered in Chennai, we specialize in providing comprehensive, reliable, and cost-effective automation solutions tailored to the evolving needs of the Indian manufacturing sector.</p>
                <p>Our core verticals include:</p>
                <ul className="mb-3">
                  <li>Industrial Automation Solutions</li>
                  <li>EOAT (End-of-Arm Tooling) Components & Systems</li>
                  <li>Fluid Line Quick Coupling</li>
                  <li>Industrial Power Tools</li>
                </ul>
                <p>We are proud to partner with globally recognized manufacturers and suppliers. Backed by a team with over a decade of hands-on experience in the Indian automation market, we ensure seamless integration, strong local support, and technical excellence.</p>
                <p>To strengthen our global presence, TEC Automation Solutions has also established a branch office in Berlin, Germany, enabling us to expand our market reach and serve customers at an international level.</p>
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
                  <h3>Quick Coupling Systems</h3>
                  <p>Comprehensive range of hydraulic, pneumatic, and dry disconnect couplings for industrial applications. From high-pressure hydraulic systems to safe chemical transfer, our coupling solutions ensure reliable, leak-free connections with minimal downtime.</p>
                </SolutionCard>
              </Col>

              <Col lg={4} md={6}>
                <SolutionCard variants={cardVariants}>
                  <SolutionIcon>
                    <FaWind />
                  </SolutionIcon>
                  <h3>Industrial Power Tools</h3>
                  <p>Industrial Power Tools are tools used in manufacturing, construction, assembly, and maintenance industries for high-performance tasks like drilling, grinding, cutting, fastening, etc. They are typically designed for heavy-duty, long-duration usage, often powered by pneumatic (air) or electric sources.</p>
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

      {/* Industrial Automation Solutions Section */}
      <SectionContainer>
        <Container>
          <motion.div
            className="text-center mb-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Industrial Automation Solutions</h2>
            <p className="lead">Advanced robotic systems and EOAT solutions</p>
          </motion.div>

          <Row className="g-4">
            <Col md={4}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="text-center"
              >
                <div className="rounded overflow-hidden shadow-sm mb-3">
                  <img
                    src={industrialAuto1}
                    alt="Robot Arm with EOAT"
                    className="img-fluid w-100"
                    style={{height: '300px', objectFit: 'cover'}}
                  />
                </div>
                <h5>Robot Arm with EOAT</h5>
                <p className="text-muted">Advanced robotic arm equipped with End-of-Arm Tooling for precision handling</p>
              </motion.div>
            </Col>
            <Col md={4}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="text-center"
              >
                <div className="rounded overflow-hidden shadow-sm mb-3">
                  <img
                    src={industrialAuto2}
                    alt="Robotic Tooling System"
                    className="img-fluid w-100"
                    style={{height: '300px', objectFit: 'cover'}}
                  />
                </div>
                <h5>Robotic Tooling System</h5>
                <p className="text-muted">Sophisticated tooling system with multiple connection points and fixtures</p>
              </motion.div>
            </Col>
            <Col md={4}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="text-center"
              >
                <div className="rounded overflow-hidden shadow-sm mb-3">
                  <img
                    src={industrialAuto3}
                    alt="Complex EOAT System"
                    className="img-fluid w-100"
                    style={{height: '300px', objectFit: 'cover'}}
                  />
                </div>
                <h5>Complex EOAT System</h5>
                <p className="text-muted">Multi-functional EOAT system for complex manufacturing operations</p>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </SectionContainer>

      {/* Quick Coupling Solutions Section */}
      <SectionContainer bgColor="var(--light-bg)">
        <Container>
          <motion.div
            className="text-center mb-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Quick Coupling Solutions</h2>
            <p className="lead">Advanced fluid connection systems for industrial applications</p>
          </motion.div>

          <div className="mb-5"></div>

          <Row className="align-items-center mb-5">
            <Col lg={7} className="mb-4 mb-lg-0">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3>Dry Disconnect Coupling Technology</h3>
                <p>Our dry disconnect couplings provide safe, efficient fluid transfer with minimal spillage and contamination. Ideal for chemical processing, fuel handling, and hazardous material transfer applications.</p>

                <Row className="g-3 mb-4">
                  <Col sm={6}>
                    <div className="d-flex align-items-center">
                      <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{width: '40px', height: '40px', fontSize: '1.2rem'}}>
                        ✓
                      </div>
                      <span>Zero-spill disconnection</span>
                    </div>
                  </Col>
                  <Col sm={6}>
                    <div className="d-flex align-items-center">
                      <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{width: '40px', height: '40px', fontSize: '1.2rem'}}>
                        ✓
                      </div>
                      <span>High-pressure capability</span>
                    </div>
                  </Col>
                  <Col sm={6}>
                    <div className="d-flex align-items-center">
                      <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{width: '40px', height: '40px', fontSize: '1.2rem'}}>
                        ✓
                      </div>
                      <span>Corrosion resistant</span>
                    </div>
                  </Col>
                  <Col sm={6}>
                    <div className="d-flex align-items-center">
                      <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{width: '40px', height: '40px', fontSize: '1.2rem'}}>
                        ✓
                      </div>
                      <span>Easy maintenance</span>
                    </div>
                  </Col>
                </Row>

                <Button as={Link} to="/products" variant="outline-primary">
                  Explore Coupling Products
                </Button>
              </motion.div>
            </Col>
            <Col lg={5}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="rounded overflow-hidden shadow" style={{maxWidth: '800px', margin: '0 auto'}}>
                  <video
                    className="w-100"
                    controls
                    preload="metadata"
                    style={{height: 'auto', maxHeight: '300px'}}
                  >
                    <source src={dryDisconnectVideo} type="video/mp4" />
                    <track
                      kind="captions"
                      label="English captions"
                      srcLang="en"
                      default
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </motion.div>
            </Col>
          </Row>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Row className="g-4">
              <Col md={4}>
                <motion.div
                  variants={cardVariants}
                  className="text-center p-4 bg-white rounded shadow-sm h-100"
                >
                  <div className="mb-3">
                    <img
                      src={hydraulicCoupling}
                      alt="Hydraulic Coupling"
                      className="img-fluid rounded"
                      style={{height: '150px', width: '100%', objectFit: 'cover'}}
                    />
                  </div>
                  <h5>Hydraulic Couplings</h5>
                  <p className="text-muted">High-pressure hydraulic quick couplings for industrial machinery, construction equipment, and mobile applications. ISO 7241-A/B compliant.</p>
                </motion.div>
              </Col>
              <Col md={4}>
                <motion.div
                  variants={cardVariants}
                  className="text-center p-4 bg-white rounded shadow-sm h-100"
                >
                  <div className="mb-3">
                    <img
                      src={pneumaticCoupling}
                      alt="Pneumatic Coupling"
                      className="img-fluid rounded"
                      style={{height: '150px', width: '100%', objectFit: 'cover'}}
                    />
                  </div>
                  <h5>Pneumatic Couplings</h5>
                  <p className="text-muted">Compressed air quick couplings for pneumatic tools, automation systems, and air distribution networks. ISO 6150B standard.</p>
                </motion.div>
              </Col>
              <Col md={4}>
                <motion.div
                  variants={cardVariants}
                  className="text-center p-4 bg-white rounded shadow-sm h-100"
                >
                  <div className="mb-3">
                    <img
                      src={breakawayValve}
                      alt="Specialized Coupling"
                      className="img-fluid rounded"
                      style={{height: '150px', width: '100%', objectFit: 'cover'}}
                    />
                  </div>
                  <h5>Specialized Couplings</h5>
                  <p className="text-muted">Test connectors for EV applications, breakaway safety valves, and mold cooling systems for specialized industrial requirements.</p>
                </motion.div>
              </Col>
            </Row>
          </motion.div>

          {/* Additional Coupling Products Showcase */}
          <motion.div
            className="text-center mt-5 mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>Featured Coupling Products</h3>
            <p className="text-muted">Explore our comprehensive range of industrial coupling solutions</p>
          </motion.div>

          <Row className="g-4 mb-5">
            <Col lg={3} md={6}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="text-center"
              >
                <div className="bg-white p-3 rounded shadow-sm h-100">
                  <div className="rounded overflow-hidden mb-3">
                    <img
                      src={dryDisconnectCouplingImg}
                      alt="Dry Disconnect Coupling"
                      className="img-fluid w-100"
                      style={{height: '180px', objectFit: 'cover'}}
                    />
                  </div>
                  <h6>Dry Disconnect Couplings</h6>
                  <p className="text-muted small">Stainless steel construction for chemical and fuel applications</p>
                </div>
              </motion.div>
            </Col>
            <Col lg={3} md={6}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="text-center"
              >
                <div className="bg-white p-3 rounded shadow-sm h-100">
                  <div className="rounded overflow-hidden mb-3">
                    <img
                      src={highFlowCoupling}
                      alt="High Flow Coupling"
                      className="img-fluid w-100"
                      style={{height: '180px', objectFit: 'cover'}}
                    />
                  </div>
                  <h6>High Flow Couplings</h6>
                  <p className="text-muted small">Non-drip flat face design for maximum flow rates</p>
                </div>
              </motion.div>
            </Col>
            <Col lg={3} md={6}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="text-center"
              >
                <div className="bg-white p-3 rounded shadow-sm h-100">
                  <div className="rounded overflow-hidden mb-3">
                    <img
                      src={moldCoupling}
                      alt="Mold Coupling"
                      className="img-fluid w-100"
                      style={{height: '180px', objectFit: 'cover'}}
                    />
                  </div>
                  <h6>Mold Cooling Couplings</h6>
                  <p className="text-muted small">Precision cooling system connections for injection molding</p>
                </div>
              </motion.div>
            </Col>
            <Col lg={3} md={6}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="text-center"
              >
                <div className="bg-white p-3 rounded shadow-sm h-100">
                  <div className="rounded overflow-hidden mb-3">
                    <img
                      src={breakawayValve}
                      alt="Breakaway Valve"
                      className="img-fluid w-100"
                      style={{height: '180px', objectFit: 'cover'}}
                    />
                  </div>
                  <h6>Safety Breakaway Valves</h6>
                  <p className="text-muted small">Emergency disconnect systems for fuel dispensing</p>
                </div>
              </motion.div>
            </Col>
          </Row>

          <div className="text-center">
            <Button as={Link} to="/products" variant="primary" size="lg">
              View Complete Coupling Catalog
            </Button>
          </div>
        </Container>
      </SectionContainer>

      {/* Video Section */}
      <SectionContainer>
        <Container>
          <motion.div
            className="text-center mb-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>See Our Solutions in Action</h2>
            <p className="lead">Watch how our industrial automation solutions improve manufacturing efficiency</p>
          </motion.div>

          <Row className="justify-content-center">
            <Col lg={8}>
              <div className="rounded overflow-hidden shadow">
                <video
                  className="w-100"
                  controls
                  preload="metadata"
                  style={{height: 'auto'}}
                >
                  <source src={roboticVideo} type="video/mp4" />
                  <track
                    kind="captions"
                    label="English captions"
                    srcLang="en"
                    default
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </Col>
          </Row>

          <div className="text-center mt-4">
            <Button as={Link} to="/contact" variant="primary" size="lg">
              Get in Touch
            </Button>
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
