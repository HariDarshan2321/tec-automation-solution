import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Tabs, Tab } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaArrowRight, FaDownload } from 'react-icons/fa';

// Import product images
// Hydraulic couplings
import hydraulicCoupling1 from '../../assets/images/products/couplings/en-CG4-non-spill-flat-face-quick-coupling.jpg';
import hydraulicCoupling2 from '../../assets/images/products/couplings/en-LA151-quick-connector-for-Electric-Vehicle-leak-testing.jpg';

// Robotic grippers
import roboticGripper1 from '../../assets/images/products/grippers/EOAT-Sprue-Gripper-GR05-Series_CRG.jpg';
import roboticGripper2 from '../../assets/images/products/grippers/Soft Gripper.jpg';
import roboticGripper3 from '../../assets/images/products/grippers/GOF20-20-Finger-Gripper_CRG.jpg';
import roboticGripper4 from '../../assets/images/products/grippers/Expansion-Gripper_CRG.jpg';

// EOAT components
import eoatComponent1 from '../../assets/images/products/eoat/Frame-connectors-with-SS-profile_CRG.jpg';
import eoatComponent2 from '../../assets/images/products/eoat/Vertical-Fastening-of-Profiles-7.Y00228_CRG.jpg';
import eoatComponent3 from '../../assets/images/products/eoat/Cross-Connector-7.Y00690_CRG.jpg';
import eoatComponent4 from '../../assets/images/products/eoat/Adjustable-Angle-Connector-7.Y00343_CRG.jpg';

// Pneumatic tools
import pneumaticTool1 from '../../assets/images/products/pneumatic/Pneumatic tools- gun.jpg';
import pneumaticTool2 from '../../assets/images/products/pneumatic/Pneumatic Tools.jpg';

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

const ProductCard = styled(Card)`
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

const StyledTabs = styled(Tabs)`
  margin-bottom: 2rem;
  border-bottom: 2px solid var(--border-color);

  .nav-link {
    color: var(--text-color);
    border: none;
    padding: 1rem 1.5rem;
    font-weight: 500;

    &.active {
      color: var(--primary-color);
      border-bottom: 3px solid var(--primary-color);
      background-color: transparent;
    }

    &:hover:not(.active) {
      border-bottom: 3px solid #e1e1e1;
    }
  }
`;

const SpecTable = styled.div`
  margin-top: 1rem;

  .spec-row {
    display: flex;
    border-bottom: 1px solid var(--border-color);

    &:last-child {
      border-bottom: none;
    }

    .spec-name {
      width: 40%;
      padding: 0.75rem;
      background-color: var(--gray-bg);
      font-weight: 500;
    }

    .spec-value {
      width: 60%;
      padding: 0.75rem;
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

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('hydraulic');

  const productCategories = [
    { id: 'hydraulic', name: 'Hydraulic Couplings' },
    { id: 'pneumatic', name: 'Pneumatic Components' },
    { id: 'grippers', name: 'Robotic Grippers' },
    { id: 'eoat', name: 'EOAT Solutions' }
  ];

  const productsData = {
    hydraulic: [
      {
        id: 'h1',
        name: 'HC-350 High Pressure Coupling',
        description: 'High-pressure rated hydraulic quick coupling with spill-free operation for mobile equipment.',
        specs: [
          { name: 'Max Pressure', value: '350 bar' },
          { name: 'Flow Rate', value: '120 L/min' },
          { name: 'Temperature Range', value: '-30°C to +100°C' },
          { name: 'Connection Size', value: '1/4" to 1" NPT/BSP' },
          { name: 'Material', value: 'Steel with zinc-nickel coating' }
        ]
      },
      {
        id: 'h2',
        name: 'HF-200 Multi-Fluid Coupling',
        description: 'Versatile quick coupling system for multiple hydraulic lines with single-action connection.',
        specs: [
          { name: 'Max Pressure', value: '200 bar' },
          { name: 'Flow Rate', value: '80 L/min' },
          { name: 'Temperature Range', value: '-20°C to +80°C' },
          { name: 'Connection Size', value: 'Multiple ports: 3/8" to 1/2"' },
          { name: 'Material', value: 'Aluminum body with steel components' }
        ]
      },
      {
        id: 'h3',
        name: 'HT-150 Thermal Coupling',
        description: 'Specialized coupling for thermal management systems with enhanced temperature resistance.',
        specs: [
          { name: 'Max Pressure', value: '150 bar' },
          { name: 'Flow Rate', value: '60 L/min' },
          { name: 'Temperature Range', value: '-40°C to +150°C' },
          { name: 'Connection Size', value: '3/8" to 3/4" NPT/BSP' },
          { name: 'Material', value: 'Stainless steel with special seals' }
        ]
      }
    ],
    pneumatic: [
      {
        id: 'p1',
        name: 'ISO Pneumatic Cylinder',
        description: 'Standard-compliant pneumatic cylinders with various mounting options for industrial automation.',
        specs: [
          { name: 'Bore Size', value: '32mm to 100mm' },
          { name: 'Stroke Length', value: '25mm to 500mm' },
          { name: 'Operating Pressure', value: '1 to 10 bar' },
          { name: 'Temperature Range', value: '-20°C to +80°C' },
          { name: 'Material', value: 'Anodized aluminum body with steel piston rod' }
        ]
      },
      {
        id: 'p2',
        name: 'Air Preparation Unit',
        description: 'Complete FRL (filter, regulator, lubricator) unit for compressed air preparation in pneumatic systems.',
        specs: [
          { name: 'Port Size', value: '1/4" to 1"' },
          { name: 'Flow Rate', value: 'Up to 4000 L/min' },
          { name: 'Pressure Range', value: '0.5 to 10 bar' },
          { name: 'Filtration', value: '5μm, 40μm options' },
          { name: 'Mounting', value: 'Wall or bracket mount' }
        ]
      },
      {
        id: 'p3',
        name: 'Directional Control Valve',
        description: 'Fast-response pneumatic valves for precise control of air flow in automation systems.',
        specs: [
          { name: 'Valve Type', value: '2/2, 3/2, 5/2, 5/3 configurations' },
          { name: 'Actuation', value: 'Solenoid, mechanical, pneumatic' },
          { name: 'Response Time', value: '<20ms' },
          { name: 'Flow Rate', value: 'Up to 1200 L/min' },
          { name: 'Voltage Options', value: '24V DC, 110V AC, 220V AC' }
        ]
      }
    ],
    grippers: [
      {
        id: 'g1',
        name: 'Parallel Gripper',
        description: 'Two-jaw parallel gripper with high gripping force for universal part handling applications.',
        specs: [
          { name: 'Jaw Stroke', value: '2mm to 30mm per jaw' },
          { name: 'Gripping Force', value: '200N to 1500N at 6 bar' },
          { name: 'Weight', value: '0.2kg to 2.5kg' },
          { name: 'Repeat Accuracy', value: '±0.01mm' },
          { name: 'Actuation', value: 'Pneumatic, electric options' }
        ]
      },
      {
        id: 'g2',
        name: 'Angular Gripper',
        description: 'Robust angular gripper with wide opening angle for diverse gripping applications.',
        specs: [
          { name: 'Opening Angle', value: '0° to 90°' },
          { name: 'Gripping Torque', value: '15Nm to 250Nm at 6 bar' },
          { name: 'Weight', value: '0.3kg to 3.0kg' },
          { name: 'Repeat Accuracy', value: '±0.05°' },
          { name: 'Actuation', value: 'Pneumatic with optional sensors' }
        ]
      },
      {
        id: 'g3',
        name: 'Vacuum Gripper',
        description: 'Configurable vacuum gripper system for handling porous and non-porous materials.',
        specs: [
          { name: 'Suction Cup Diameter', value: '10mm to 100mm' },
          { name: 'Holding Force', value: 'Up to 850N per cup' },
          { name: 'Vacuum Generation', value: 'Integrated or external' },
          { name: 'Air Consumption', value: '0.5 to 3.0 L/min per cup' },
          { name: 'Cup Material', value: 'NBR, silicone, polyurethane options' }
        ]
      }
    ],
    eoat: [
      {
        id: 'e1',
        name: 'Tool Changer System',
        description: 'Automated tool changing system for flexible manufacturing with multiple end effectors.',
        specs: [
          { name: 'Payload', value: 'Up to 50kg' },
          { name: 'Locking Mechanism', value: 'Pneumatic with mechanical lock' },
          { name: 'Utilities', value: 'Pneumatic, electric, data transfer' },
          { name: 'Repeatability', value: '±0.025mm' },
          { name: 'Safety Features', value: 'Locking status detection, fail-safe design' }
        ]
      },
      {
        id: 'e2',
        name: 'Collision Protection Unit',
        description: 'Safety device that protects robots and tooling in case of unexpected collisions.',
        specs: [
          { name: 'Breakaway Force', value: 'Adjustable 50N to 500N' },
          { name: 'Deflection Angle', value: 'Up to 10°' },
          { name: 'Reset', value: 'Automatic or manual' },
          { name: 'Weight', value: '0.4kg to 1.2kg' },
          { name: 'Position Repeatability', value: '±0.02mm after reset' }
        ]
      },
      {
        id: 'e3',
        name: 'Custom EOAT Assembly',
        description: 'Tailored end-of-arm tooling solutions designed for specific applications and robots.',
        specs: [
          { name: 'Compatibility', value: 'All major robot brands' },
          { name: 'Design', value: 'Application-specific custom design' },
          { name: 'Materials', value: 'Aluminum, steel, engineering plastics' },
          { name: 'Integration', value: 'Mechanical, electrical, pneumatic' },
          { name: 'Documentation', value: 'CAD models, maintenance guides' }
        ]
      }
    ]
  };

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
            <h1>Our Products</h1>
            <p className="lead">High-quality components for your automation needs</p>
          </motion.div>
        </Container>
      </PageHeader>

      {/* Products Catalog Section */}
      <SectionContainer>
        <Container>
          <Row className="mb-5">
            <Col lg={10} className="mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="mb-4">Featured Products</h2>
                <p>Browse our selection of high-quality automation products designed for reliability, performance, and value. Our comprehensive range includes solutions for various industrial applications across multiple sectors.</p>
                <Button
                  as={Link}
                  to="/catalog"
                  variant="outline-primary"
                  className="mt-3"
                >
                  <FaDownload className="me-2" /> Download Full Catalog
                </Button>
              </motion.div>
            </Col>
          </Row>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <StyledTabs
              id="product-categories"
              activeKey={activeCategory}
              onSelect={(k) => setActiveCategory(k)}
              className="mb-4 justify-content-center"
            >
              {productCategories.map((category) => (
                <Tab
                  key={category.id}
                  eventKey={category.id}
                  title={category.name}
                />
              ))}
            </StyledTabs>
          </motion.div>

          <Row className="g-4">
            {productsData[activeCategory].map((product, index) => (
              <Col lg={4} md={6} key={product.id}>
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={cardVariants}
                  transition={{ delay: index * 0.1 }}
                >
                  <ProductCard>
                    <Card.Img
                      variant="top"
                      src={
                        activeCategory === 'hydraulic'
                          ? (index % 2 === 0 ? hydraulicCoupling1 : hydraulicCoupling2)
                          : activeCategory === 'pneumatic'
                            ? (index % 2 === 0 ? pneumaticTool1 : pneumaticTool2)
                            : activeCategory === 'grippers'
                              ? (index === 0 ? roboticGripper1 :
                                 index === 1 ? roboticGripper2 :
                                 index === 2 ? roboticGripper3 : roboticGripper4)
                              : (index === 0 ? eoatComponent1 :
                                 index === 1 ? eoatComponent2 :
                                 index === 2 ? eoatComponent3 : eoatComponent4)
                      }
                      alt={product.name}
                    />
                    <Card.Body>
                      <Card.Title as="h3">{product.name}</Card.Title>
                      <Card.Text>{product.description}</Card.Text>

                      <SpecTable>
                        {product.specs.map((spec, idx) => (
                          <div className="spec-row" key={`${product.id}-spec-${idx}`}>
                            <div className="spec-name">{spec.name}</div>
                            <div className="spec-value">{spec.value}</div>
                          </div>
                        ))}
                      </SpecTable>

                      <div className="text-center mt-4">
                        <Button as={Link} to="/contact" variant="outline-primary">
                          Inquire Now <FaArrowRight className="ms-2" />
                        </Button>
                      </div>
                    </Card.Body>
                  </ProductCard>
                </motion.div>
              </Col>
            ))}
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
                <h2>Need Customized Products?</h2>
                <p className="lead mb-4">Our team can develop tailored solutions to meet your specific requirements and application needs.</p>
                <div className="d-flex justify-content-center gap-3">
                  <Button as={Link} to="/contact" variant="light" size="lg">Contact Our Team</Button>
                  <Button as={Link} to="/solutions" variant="outline-light" size="lg">View Solutions</Button>
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </SectionContainer>
    </>
  );
};

export default Products;
