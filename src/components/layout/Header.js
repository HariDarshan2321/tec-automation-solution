import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link, NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';

// Import logo
import logo from '../../assets/logos/tec-automation-logo.jpg';

const StyledNavbar = styled(Navbar)`
  transition: all 0.3s ease;

  &.scrolled {
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    padding: 0.25rem 1rem;
  }
`;

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  // Get current location for route change detection
  useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <StyledNavbar
      bg="white"
      expand="lg"
      fixed="top"
      className={scrolled ? 'scrolled' : ''}
      expanded={expanded}
      onToggle={handleToggle}
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            alt="TEC AUTOMATION Logo"
            height="50"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/" end>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about">
              About Us
            </Nav.Link>
            <Nav.Link as={NavLink} to="/solutions">
              Solutions
            </Nav.Link>
            <Nav.Link as={NavLink} to="/products">
              Products
            </Nav.Link>
            <Nav.Link as={NavLink} to="/catalog">
              Catalog
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </StyledNavbar>
  );
};

export default Header;
