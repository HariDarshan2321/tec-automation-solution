import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import {
  FaHandPaper,
  FaTint,
  FaRobot,
  FaCogs,
  FaTools,
  FaArrowRight,
  FaIndustry
} from 'react-icons/fa';

// Import solution images and videos
import eoatToolingImg from '../../assets/images/products/grippers/EOAT-Sprue-Gripper-GR05-Series_CRG.jpg';
import fluidCouplingImg from '../../assets/images/products/couplings/en-CG4-non-spill-flat-face-quick-coupling.jpg';
import powerToolsImg from '../../assets/images/products/power-tools/Pneumatic Tools.jpg';
import roboticsIntegrationImg from '../../assets/images/products/grippers/Soft Gripper.jpg';
import customAutomationImg from '../../assets/images/products/eoat/Frame-connectors-with-SS-profile_CRG.jpg';
import technicalSupportImg from '../../assets/images/products/eoat/Vertical-Fastening-of-Profiles-7.Y00228_CRG.jpg';
// Removed local video import - using YouTube video instead

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

const SolutionCard = styled(Card)`
  height: 100%;
  border: none;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
  transition: var(--transition);
  overflow: hidden;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 5px 25px rgba(0, 0, 0, 0.15);
  }

  .card-img-top {
    height: 200px;
    object-fit: cover;
  }
`;

const SolutionIcon = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: var(--primary-color);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.75rem;
  position: absolute;
  top: -35px;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
`;

const CardContent = styled.div`
  padding: 2.5rem 1.5rem 1.5rem;
  position: relative;
`;

const StyledButton = styled(Button)`
  margin-top: 1rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding-left: 0;
  margin-top: 1.5rem;

  li {
    padding-left: 1.5rem;
    position: relative;
    margin-bottom: 0.75rem;

    &:before {
      content: "✓";
      color: var(--primary-color);
      position: absolute;
      left: 0;
      top: 0;
    }
  }
`;

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};



const CaseStudyCard = styled(Card)`
  border: none;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  height: 100%;
`;

const Solutions = () => {
  const solutionsData = [
    {
      id: 1,
      title: 'End-of-Arm Tooling (EOAT)',
      description: 'Modular robotic grippers, vacuum systems, tool changers, and part-handling components designed for maximum flexibility and compatibility.',
      icon: <FaHandPaper />,
      features: [
        'Compatible with all major robot brands including ABB, KUKA, FANUC, Yaskawa, and UR',
        'Lightweight yet durable aluminum construction',
        'Customizable configurations',
        'Quick-change mechanisms for reduced downtime',
        'Low maintenance requirements'
      ]
    },
    {
      id: 2,
      title: 'Fluid Quick Couplings',
      description: 'High-performance multi-fluid quick couplers for pneumatic, hydraulic, and thermal management systems for demanding applications.',
      icon: <FaTint />,
      features: [
        'Leak-free connections with minimal pressure drop',
        'Designed for rapid connection and disconnection',
        'Multiple seal options for various media',
        'High pressure ratings up to 350 bar',
        'Temperature resistant from -30°C to 150°C'
      ]
    },
    {
      id: 3,
      title: 'Industrial Power Tools',
      description: 'Industrial Power Tools are tools used in manufacturing, construction, assembly, and maintenance industries for high-performance tasks like drilling, grinding, cutting, fastening, etc. They are typically designed for heavy-duty, long-duration usage, often powered by pneumatic (air) or electric sources.',
      icon: <FaTools />,
      features: [
        'Heavy-duty power and electric power tools',
        'High-performance drilling, grinding, and cutting equipment',
        'Professional fastening and assembly tools',
        'Long-duration usage for industrial applications',
        'Maintenance tools for manufacturing environments'
      ]
    },
    {
      id: 4,
      title: 'Robotics Integration',
      description: 'Enhance precision and efficiency with advanced robotics integration services customized for specific production requirements.',
      icon: <FaRobot />,
      features: [
        'Full system design and implementation',
        'Robot programming and simulation',
        'Vision system integration',
        'Safety compliance and risk assessment',
        'Operator training and documentation'
      ]
    },
    {
      id: 5,
      title: 'Custom Automation',
      description: 'Custom-designed automation systems, integration services, retrofits, and application-specific solutions for improved productivity.',
      icon: <FaCogs />,
      features: [
        'Turnkey automation solutions',
        'Machine retrofits and upgrades',
        'Custom machine building',
        'Process optimization and automation',
        'Industry 4.0 integration capabilities'
      ]
    },
    {
      id: 6,
      title: 'Technical Support',
      description: 'Local support from our Chennai base with quick delivery, installation, and comprehensive service for your automation systems.',
      icon: <FaTools />,
      features: [
        'Rapid response technical service',
        'Preventive maintenance programs',
        'Remote diagnostics and support',
        'Spare parts inventory management',
        'Technical documentation and training'
      ]
    }
  ];

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
            <h1>Our Solutions</h1>
            <p className="lead">Comprehensive automation solutions tailored to your needs</p>
          </motion.div>
        </Container>
      </PageHeader>

      {/* Solutions Overview */}
      <SectionContainer>
        <Container>
          <Row className="mb-5">
            <Col lg={10} className="mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="mb-4">End-to-End Automation Solutions</h2>
                <p className="lead">TEC Automation provides complete industrial automation solutions that help manufacturers optimize operations, reduce costs, and increase efficiency. Our comprehensive range of products and services are designed to meet the diverse needs of the Indian manufacturing sector.</p>
              </motion.div>
            </Col>
          </Row>

          <Row className="g-4">
            {solutionsData.map((solution, index) => (
              <Col lg={4} md={6} key={solution.id}>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={cardVariants}
                  transition={{ delay: index * 0.1 }}
                >
                  <SolutionCard>
                    <Card.Img
                      variant="top"
                      src={
                        solution.id === 1 ? eoatToolingImg :
                        solution.id === 2 ? fluidCouplingImg :
                        solution.id === 3 ? powerToolsImg :
                        solution.id === 4 ? roboticsIntegrationImg :
                        solution.id === 5 ? customAutomationImg :
                        technicalSupportImg
                      }
                      alt={solution.title}
                    />
                    <CardContent>
                      <SolutionIcon>{solution.icon}</SolutionIcon>
                      <Card.Title as="h3" className="text-center mb-3">{solution.title}</Card.Title>
                      <Card.Text>{solution.description}</Card.Text>
                      <FeatureList>
                        {solution.features.map((feature, idx) => (
                          <li key={`${solution.id}-feature-${idx}`}>{feature}</li>
                        ))}
                      </FeatureList>
                      <div className="text-center">
                        <StyledButton as={Link} to="/contact" variant="outline-primary">
                          Inquire Now <FaArrowRight />
                        </StyledButton>
                      </div>
                    </CardContent>
                  </SolutionCard>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </SectionContainer>

      {/* Our Approach Section */}
      <SectionContainer bgColor="var(--light-bg)">
        <Container>
          <Row className="mb-5">
            <Col lg={10} className="mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="mb-4">Our Solution Approach</h2>
                <p className="lead">We follow a structured methodology to ensure that our solutions perfectly match your requirements and deliver maximum value.</p>
              </motion.div>
            </Col>
          </Row>

          <Row className="g-4">
            <Col md={3}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="text-center"
              >
                <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mx-auto mb-4" style={{ width: '80px', height: '80px', fontSize: '2rem' }}>
                  1
                </div>
                <h4>Consultation</h4>
                <p>We begin with a thorough consultation to understand your specific needs, challenges, and objectives.</p>
              </motion.div>
            </Col>

            <Col md={3}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-center"
              >
                <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mx-auto mb-4" style={{ width: '80px', height: '80px', fontSize: '2rem' }}>
                  2
                </div>
                <h4>Assessment</h4>
                <p>Our technical team evaluates your current systems and processes to identify improvement opportunities.</p>
              </motion.div>
            </Col>

            <Col md={3}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-center"
              >
                <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mx-auto mb-4" style={{ width: '80px', height: '80px', fontSize: '2rem' }}>
                  3
                </div>
                <h4>Solution Design</h4>
                <p>We design a tailored solution that integrates the right components and systems for your specific application.</p>
              </motion.div>
            </Col>

            <Col md={3}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-center"
              >
                <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mx-auto mb-4" style={{ width: '80px', height: '80px', fontSize: '2rem' }}>
                  4
                </div>
                <h4>Implementation</h4>
                <p>Our experienced team handles the installation, integration, testing, and commissioning of your solution.</p>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </SectionContainer>

      {/* Case Studies Section */}
      <SectionContainer>
        <Container>
          <Row className="mb-5">
            <Col lg={10} className="mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="mb-4">Success Stories</h2>
                <p className="lead">Explore how our automation solutions have helped clients optimize their manufacturing processes and achieve significant improvements in efficiency, quality, and cost-effectiveness.</p>
              </motion.div>
            </Col>
          </Row>

          <Row className="g-4 align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="ratio ratio-16x9 rounded overflow-hidden shadow">
                  <iframe
                    src="https://www.youtube.com/embed/pJqxChN325c"
                    title="TEC Automation Case Study"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen>
                  </iframe>
                </div>
              </motion.div>
            </Col>

            <Col lg={6}>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <CaseStudyCard>
                  <Card.Body>
                    <Card.Title as="h3">
                      <FaIndustry className="me-2" style={{color: 'var(--primary-color)'}} />
                      Robotic Automation for Manufacturing
                    </Card.Title>
                    <Card.Text className="mt-3">
                      This case study showcases how we implemented a complete robotic automation solution for a leading manufacturing company, resulting in a 35% increase in production efficiency and a 28% reduction in operational costs.
                    </Card.Text>
                    <h5 className="mt-4">Key Results:</h5>
                    <FeatureList>
                      <li>Increased production throughput by 35%</li>
                      <li>Reduced operational costs by 28%</li>
                      <li>Improved product quality and consistency</li>
                      <li>ROI achieved within 14 months</li>
                      <li>Enhanced workplace safety by automating hazardous tasks</li>
                    </FeatureList>
                    <div className="text-center mt-4">
                      <StyledButton as={Link} to="/contact" variant="outline-primary">
                        Discuss Your Project <FaArrowRight />
                      </StyledButton>
                    </div>
                  </Card.Body>
                </CaseStudyCard>
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
                <h2>Ready to Transform Your Operations?</h2>
                <p className="lead mb-4">Contact our team today to discuss your automation needs and discover how our solutions can elevate your manufacturing capabilities.</p>
                <div className="d-flex justify-content-center gap-3">
                  <Button as={Link} to="/contact" variant="light" size="lg">Get in Touch</Button>
                  <Button as={Link} to="/products" variant="outline-light" size="lg">View Products</Button>
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </SectionContainer>
    </>
  );
};

export default Solutions;
