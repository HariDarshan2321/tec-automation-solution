import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

// Import logo
import logo from '../../assets/logos/tec-automation-logo.jpg';

const FooterContainer = styled.footer`
  background-color: var(--dark-bg);
  color: white;
  padding: 3rem 0 1rem;
`;

const FooterLogo = styled.div`
  margin-bottom: 1.5rem;

  img {
    height: 50px;
    /* Removed filter to show original logo */
    background-color: white;
    padding: 5px;
    border-radius: 4px;
    margin-bottom: 1rem;
  }

  p {
    opacity: 0.8;
  }
`;

const FooterSection = styled.div`
  margin-bottom: 2rem;

  h3 {
    color: var(--accent-color);
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
  }
`;

const FooterLinks = styled.ul`
  list-style: none;
  padding-left: 0;

  li {
    margin-bottom: 0.5rem;
  }

  a {
    color: white;
    opacity: 0.8;
    text-decoration: none;
    transition: var(--transition);

    &:hover {
      opacity: 1;
      color: var(--accent-color);
    }
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialIcon = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  color: white;
  transition: var(--transition);

  &:hover {
    background-color: var(--accent-color);
    color: white;
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 1.5rem;
  margin-top: 2rem;
  text-align: center;

  p {
    opacity: 0.7;
  }
`;

const Footer = () => {
  return (
    <FooterContainer className="footer">
      <Container>
        <Row>
          <Col lg={4} md={6} className="mb-4">
            <FooterLogo className="footer-logo">
              <img src={logo} alt="TEC AUTOMATION Logo" />
              <p>Advanced Automation Solutions for Indian Manufacturing</p>
            </FooterLogo>
          </Col>

          <Col lg={4} md={6} className="mb-4">
            <FooterSection className="footer-links">
              <h3>Quick Links</h3>
              <FooterLinks>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/solutions">Solutions</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/catalog">Catalog</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </FooterLinks>
            </FooterSection>
          </Col>

          <Col lg={4} md={12}>
            <FooterSection className="footer-social">
              <h3>Connect With Us</h3>
              <SocialIcons>
                <SocialIcon href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <FaFacebookF />
                </SocialIcon>
                <SocialIcon href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <FaTwitter />
                </SocialIcon>
                <SocialIcon href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <FaLinkedinIn />
                </SocialIcon>
                <SocialIcon href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </SocialIcon>
              </SocialIcons>

              <div className="mt-4">
                <p><strong>Address:</strong> Lotus Tower, No.85, Mount Road, Guindy, Chennai-32, India</p>
                <p><strong>Email:</strong> tn.sales@outlook.com</p>
                <p><strong>Phone:</strong>+91 8056643564 </p>
              </div>
            </FooterSection>
          </Col>
        </Row>

        <FooterBottom>
          <p>&copy; {new Date().getFullYear()} TEC AUTOMATION. All rights reserved.</p>
        </FooterBottom>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
