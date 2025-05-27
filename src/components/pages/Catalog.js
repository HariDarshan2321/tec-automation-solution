import React, { useState } from 'react';
import { Container, Row, Col, Button, Card, Tabs, Tab } from 'react-bootstrap';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaDownload, FaEnvelope, FaTools, FaTint, FaWind, FaHandPaper } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// Import product images
import hydraulicCoupling1 from '../../assets/images/products/couplings/en-CG4-non-spill-flat-face-quick-coupling.jpg';
import roboticGripper1 from '../../assets/images/products/grippers/EOAT-Sprue-Gripper-GR05-Series_CRG.jpg';
import eoatComponent1 from '../../assets/images/products/eoat/Frame-connectors-with-SS-profile_CRG.jpg';
import pneumaticTool1 from '../../assets/images/products/pneumatic/Pneumatic tools- gun.jpg';

// Import catalog PDFs
import eoatCatalogPdf from '../../assets/pdf/eoat/EOAT_Frame_Components.pdf';
import grippersCatalogPdf from '../../assets/pdf/grippers/Pneumatic_Finger_Grippers.pdf';
import pneumaticCatalogPdf from '../../assets/pdf/pneumatic/Pneumatic_Tools.pdf';
import couplingsCatalogPdf from '../../assets/pdf/couplings/Quick_Couplings.pdf';

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

const CatalogCard = styled(Card)`
  border: none;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
  transition: var(--transition);
  height: 100%;

  &:hover {
    box-shadow: 0 5px 25px rgba(0, 0, 0, 0.15);
  }
`;

// eslint-disable-next-line no-unused-vars
const PDFPreview = styled.div`
  background-color: var(--gray-bg);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  margin-bottom: 2rem;

  .pdf-icon {
    font-size: 5rem;
    color: var(--primary-color);
    margin-bottom: 1rem;
  }

  h3 {
    margin-bottom: 0.5rem;
  }

  p {
    opacity: 0.8;
    margin-bottom: 1.5rem;
  }
`;

const DownloadButton = styled(Button)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 2rem;
  font-weight: 500;
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

const ProductImage = styled.img`
  height: 220px;
  object-fit: cover;
  width: 100%;
  border-radius: 8px;
  margin-bottom: 1.5rem;
`;

const Catalog = () => {
  const [activeCategory, setActiveCategory] = useState('eoat');

  // Catalog data for each category
  const catalogData = {
    eoat: {
      title: 'EOAT Frame Components',
      image: eoatComponent1,
      pdf: eoatCatalogPdf,
      fileSize: '4.8 MB',
      description: 'Our End-of-Arm Tooling components catalog includes a comprehensive range of frame connectors, profiles, and mounting solutions designed for maximum flexibility and durability.',
      features: [
        'Aluminum and steel frame connectors for various load requirements',
        'Lightweight yet rigid extruded profiles in multiple sizes',
        'Quick-connect systems for rapid tool changes',
        'Custom mounting options for all major robot brands',
        'Complete technical specifications and CAD drawings'
      ]
    },
    grippers: {
      title: 'Pneumatic Finger Grippers',
      image: roboticGripper1,
      pdf: grippersCatalogPdf,
      fileSize: '2.5 MB',
      description: 'The pneumatic finger gripper catalog showcases our versatile range of gripping solutions for part handling, assembly, and material transfer applications.',
      features: [
        'Parallel and angular gripper configurations',
        'Gripping forces from 50N to 1500N',
        'Compact designs for space-constrained applications',
        'Long-life sealing technology for extended maintenance intervals',
        'Special jaw options for delicate part handling'
      ]
    },
    pneumatic: {
      title: 'Pneumatic Tools & Components',
      image: pneumaticTool1,
      pdf: pneumaticCatalogPdf,
      fileSize: '7.0 MB',
      description: 'Our pneumatic tools catalog features high-quality pneumatic tools, cylinders, valves, and air preparation equipment for industrial automation applications.',
      features: [
        'Precision pneumatic tools for assembly operations',
        'ISO standard cylinders with various mounting options',
        'Fast-response directional control valves',
        'Complete FRL (filter, regulator, lubricator) units',
        'Energy-efficient components for reduced air consumption'
      ]
    },
    couplings: {
      title: 'Quick Couplings & Connectors',
      image: hydraulicCoupling1,
      pdf: couplingsCatalogPdf,
      fileSize: '4.2 MB',
      description: 'The quick couplings catalog presents our selection of hydraulic, pneumatic, and multi-fluid couplers designed for reliable, leak-free operation in demanding environments.',
      features: [
        'High-pressure hydraulic couplings up to 350 bar',
        'Non-spill designs for clean disconnection',
        'Multi-coupling plates for simultaneous connections',
        'Special materials for high-temperature applications',
        'Industry-standard interface compatibility'
      ]
    }
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
            <h1>Product Catalog</h1>
            <p className="lead">Download our comprehensive product catalog</p>
          </motion.div>
        </Container>
      </PageHeader>

      {/* Catalog Section */}
      <SectionContainer>
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="mb-4">TEC Automation Products Catalog</h2>
                <p>Our comprehensive product catalog provides detailed specifications, technical information, and application guides for the Indian manufacturing sector. It's designed to help you find the right automation solutions for your specific needs.</p>

                <FeatureList>
                  <li>Complete technical specifications for all products</li>
                  <li>Detailed diagrams and dimensional drawings</li>
                  <li>Application examples and case studies</li>
                  <li>Selection guides for finding the right components</li>
                  <li>Compatibility information and integration tips</li>
                </FeatureList>

                <p className="mt-4">Our catalog is regularly updated with new products and improved solutions. If you need additional information or have specific requirements, our team is ready to assist you.</p>

                <div className="mt-4">
                  <Button
                    as={Link}
                    to="/contact"
                    variant="outline-primary"
                    className="ms-3"
                    size="lg"
                  >
                    <FaEnvelope /> Request Information
                  </Button>
                </div>
              </motion.div>
            </Col>

            <Col lg={6}>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <StyledTabs
                  id="catalog-categories"
                  activeKey={activeCategory}
                  onSelect={(k) => setActiveCategory(k)}
                  className="mb-4"
                >
                  <Tab eventKey="eoat" title={<><FaTools className="me-2" />EOAT Components</>} />
                  <Tab eventKey="grippers" title={<><FaHandPaper className="me-2" />Grippers</>} />
                  <Tab eventKey="pneumatic" title={<><FaWind className="me-2" />Pneumatic</>} />
                  <Tab eventKey="couplings" title={<><FaTint className="me-2" />Couplings</>} />
                </StyledTabs>

                <CatalogCard>
                  <Card.Body>
                    <ProductImage
                      src={catalogData[activeCategory].image}
                      alt={catalogData[activeCategory].title}
                    />

                    <h3>{catalogData[activeCategory].title}</h3>
                    <p>{catalogData[activeCategory].description}</p>

                    <FeatureList>
                      {catalogData[activeCategory].features.map((feature) => (
                        <li key={`${activeCategory}-${feature.substring(0, 20).replace(/\s+/g, '-')}`}>{feature}</li>
                      ))}
                    </FeatureList>

                    <div className="mt-4 text-center">
                      <DownloadButton
                        href={catalogData[activeCategory].pdf}
                        download={`TEC_${activeCategory.toUpperCase()}_Catalog.pdf`}
                        variant="primary"
                        size="lg"
                      >
                        <FaDownload /> Download Catalog ({catalogData[activeCategory].fileSize})
                      </DownloadButton>
                    </div>
                  </Card.Body>
                </CatalogCard>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </SectionContainer>

      {/* Product Categories Section */}
      <SectionContainer bgColor="var(--light-bg)">
        <Container>
          <motion.div
            className="text-center mb-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Featured Product Categories</h2>
            <p className="lead">Explore our comprehensive range of automation products</p>
          </motion.div>

          <Row className="g-4">
            {[
              {
                id: 'hydraulic-category',
                title: 'Hydraulic Quick Couplings',
                description: 'High-pressure hydraulic couplings with spill-free operation designed for reliability in demanding environments.'
              },
              {
                id: 'pneumatic-category',
                title: 'Pneumatic Systems',
                description: 'Complete range of pneumatic cylinders, valves, and air preparation units for various automation applications.'
              },
              {
                id: 'grippers-category',
                title: 'Robotic Grippers',
                description: 'Versatile gripping solutions including parallel, angular, and vacuum grippers for diverse part handling needs.'
              },
              {
                id: 'eoat-category',
                title: 'EOAT Components',
                description: 'End-of-arm tooling components including tool changers, collision protection units, and custom assemblies.'
              }
            ].map((category, idx) => (
              <Col md={6} lg={3} key={category.id}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <CatalogCard className="text-center">
                    <Card.Body>
                      <h4>{category.title}</h4>
                      <p>{category.description}</p>
                      <Button as={Link} to="/products" variant="outline-primary">
                        View Products
                      </Button>
                    </Card.Body>
                  </CatalogCard>
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
                <h2>Need Technical Assistance?</h2>
                <p className="lead mb-4">Our engineering team is available to help you select the right products for your specific application requirements.</p>
                <Button as={Link} to="/contact" variant="light" size="lg">Contact Our Team</Button>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </SectionContainer>
    </>
  );
};

export default Catalog;
