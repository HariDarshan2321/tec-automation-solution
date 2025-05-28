import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaBuilding } from 'react-icons/fa';

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

const ContactCard = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  height: 100%;
`;

const ContactInfo = styled.div`
  margin-bottom: 2.5rem;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 1.5rem;
`;

const InfoIcon = styled.div`
  font-size: 1.5rem;
  color: var(--primary-color);
  margin-right: 1rem;
  flex-shrink: 0;
  width: 2rem;
  text-align: center;
`;

const MapContainer = styled.div`
  height: 300px;
  border-radius: 8px;
  overflow: hidden;
  margin-top: 2rem;

  iframe {
    width: 100%;
    height: 100%;
    border: 0;
  }
`;

const StyledForm = styled(Form)`
  .form-control:focus,
  .form-select:focus {
    border-color: var(--primary-color);
    box-shadow: 0 0 0 0.25rem rgba(230, 59, 46, 0.25);
  }

  .btn-primary {
    background-color: var(--primary-color);
    border-color: var(--primary-color);

    &:hover, &:focus {
      background-color: var(--secondary-color);
      border-color: var(--secondary-color);
    }
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });

  const [showAlert, setShowAlert] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // In a production environment, you would replace this with actual form submission
    // to a backend API or email service that sends the data to tn.sales@tec-automation.com
    // For example using EmailJS, FormSpree, or your own backend API

    // Example using a hypothetical API endpoint:
    // fetch('https://api.yourserver.com/send-email', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     ...formData,
    //     recipientEmail: 'tn.sales@tec-automation.com'
    //   }),
    // })
    // .then(response => response.json())
    // .then(data => {
    //   setIsSubmitting(false);
    //   setShowAlert(true);
    //   // Reset form
    //   setFormData({...});
    // })
    // .catch(error => {
    //   console.error('Error:', error);
    //   setIsSubmitting(false);
    // });

    // For demo purposes, we'll simulate the submission
    setTimeout(() => {
      setIsSubmitting(false);
      setShowAlert(true);
      console.log("Form would be sent to: tn.sales@tec-automation.com");
      console.log("Form data:", formData);

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: ''
      });

      // Hide alert after 5 seconds
      setTimeout(() => {
        setShowAlert(false);
      }, 5000);
    }, 1500);
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
            <h1>Contact Us</h1>
            <p className="lead">Get in touch with our team of experts</p>
          </motion.div>
        </Container>
      </PageHeader>

      {/* Contact Form & Info Section */}
      <SectionContainer>
        <Container>
          {showAlert && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              <Alert
                variant="success"
                onClose={() => setShowAlert(false)}
                dismissible
                className="mb-4"
              >
                Thank you for your message! Our team will get back to you shortly.
              </Alert>
            </motion.div>
          )}

          <Row className="g-4">
            <Col lg={7}>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <ContactCard>
                  <h2 className="mb-4">Send Us a Message</h2>
                  <StyledForm onSubmit={handleSubmit}>
                    <Row>
                      <Col md={6} className="mb-3">
                        <Form.Group controlId="name">
                          <Form.Label>Your Name *</Form.Label>
                          <Form.Control
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Enter your name"
                          />
                        </Form.Group>
                      </Col>

                      <Col md={6} className="mb-3">
                        <Form.Group controlId="email">
                          <Form.Label>Email Address *</Form.Label>
                          <Form.Control
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="Enter your email"
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Row>
                      <Col md={6} className="mb-3">
                        <Form.Group controlId="phone">
                          <Form.Label>Phone Number</Form.Label>
                          <Form.Control
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Enter your phone number"
                          />
                        </Form.Group>
                      </Col>

                      <Col md={6} className="mb-3">
                        <Form.Group controlId="company">
                          <Form.Label>Company Name</Form.Label>
                          <Form.Control
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Enter your company name"
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Form.Group className="mb-3" controlId="subject">
                      <Form.Label>Subject *</Form.Label>
                      <Form.Control
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        placeholder="Enter message subject"
                      />
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="message">
                      <Form.Label>Your Message *</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={5}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Enter your message"
                      />
                    </Form.Group>

                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </StyledForm>
                </ContactCard>
              </motion.div>
            </Col>

            <Col lg={5}>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <ContactCard>
                  <h2 className="mb-4">Contact Information</h2>

                  <ContactInfo>
                    <InfoItem>
                      <InfoIcon>
                        <FaMapMarkerAlt />
                      </InfoIcon>
                      <div>
                        <h5>India Office</h5>
                        <p>TEC Automation Solutions<br />
                        Lotus Tower, No.85, Mount Road, Guindy, Chennai-32 <br />
                        India</p>
                      </div>
                    </InfoItem>

                    <InfoItem>
                      <InfoIcon>
                        <FaMapMarkerAlt />
                      </InfoIcon>
                      <div>
                        <h5>Berlin Office</h5>
                        <p>TEC Automation Solutions<br />
                        Berlin, Germany</p>
                      </div>
                    </InfoItem>

                    <InfoItem>
                      <InfoIcon>
                        <FaPhone />
                      </InfoIcon>
                      <div>
                        <h5>Phone</h5>
                        <p>India: +91 8056643564<br />
                        Berlin: +49 177 265 8593, +49 157 512 52393</p>
                      </div>
                    </InfoItem>

                    <InfoItem>
                      <InfoIcon>
                        <FaEnvelope />
                      </InfoIcon>
                      <div>
                        <h5>Email</h5>
                        <p>tn.sales@tec-automation.com</p>
                      </div>
                    </InfoItem>

                    <InfoItem>
                      <InfoIcon>
                        <FaBuilding />
                      </InfoIcon>
                      <div>
                        <h5>Business Hours</h5>
                        <p>Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 9:00 AM - 1:00 PM<br />
                        Sunday: Closed</p>
                      </div>
                    </InfoItem>
                  </ContactInfo>

                  <MapContainer>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497511.1146326236!2d79.92880004950742!3d13.047985928533194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1653647477812!5m2!1sen!2sin"
                      title="TEC Automation Location"
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </MapContainer>
                </ContactCard>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </SectionContainer>

      {/* Industries We Serve Section */}
      <SectionContainer bgColor="var(--light-bg)">
        <Container>
          <motion.div
            className="text-center mb-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Industries We Serve</h2>
            <p className="lead">We provide automation solutions across diverse industrial sectors</p>
          </motion.div>

          <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            <Col>
              <motion.div
                className="text-center mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h4>Automotive & EV</h4>
              </motion.div>
            </Col>

            <Col>
              <motion.div
                className="text-center mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h4>Aerospace & Defense</h4>
              </motion.div>
            </Col>

            <Col>
              <motion.div
                className="text-center mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h4>Food & Beverage</h4>
              </motion.div>
            </Col>

            <Col>
              <motion.div
                className="text-center mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h4>Electronics</h4>
              </motion.div>
            </Col>

            <Col>
              <motion.div
                className="text-center mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <h4>Plastics & Injection Molding</h4>
              </motion.div>
            </Col>

            <Col>
              <motion.div
                className="text-center mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <h4>Pharmaceutical & Medical Devices</h4>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </SectionContainer>
    </>
  );
};

export default Contact;
