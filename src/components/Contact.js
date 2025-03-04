

import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormDetails({ ...formDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formDetails.firstName || !formDetails.email || !formDetails.message) {
      setStatus({ success: false, message: "Please fill in all required fields." });
      return;
    }

    setButtonText("Sending...");
    
    const mailtoLink = `mailto:dusane.s@northeastern.edu?subject=Contact%20Form%20Submission&body=
      Name: ${formDetails.firstName} ${formDetails.lastName}%0D%0A
      Email: ${formDetails.email}%0D%0A
      Phone: ${formDetails.phone}%0D%0A
      Message: ${formDetails.message}`;

    window.location.href = mailtoLink;

    setButtonText("Send");
    setFormDetails(formInitialDetails); // Reset form after submission
    setStatus({ success: true, message: "Message sent successfully!" });
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col xs={12} sm={6} className="px-1">
                      <input type="text" name="firstName" value={formDetails.firstName} placeholder="First Name" onChange={handleInputChange} required />
                    </Col>
                    <Col xs={12} sm={6} className="px-1">
                      <input type="text" name="lastName" value={formDetails.lastName} placeholder="Last Name" onChange={handleInputChange} />
                    </Col>
                    <Col xs={12} sm={6} className="px-1">
                      <input type="email" name="email" value={formDetails.email} placeholder="Email Address" onChange={handleInputChange} required />
                    </Col>
                    <Col xs={12} sm={6} className="px-1">
                      <input type="tel" name="phone" value={formDetails.phone} placeholder="Phone No." onChange={handleInputChange} />
                    </Col>
                    <Col xs={12} className="px-1">
                      <textarea rows="6" name="message" value={formDetails.message} placeholder="Message" onChange={handleInputChange} required></textarea>
                      <button type="submit"><span>{buttonText}</span></button>
                    </Col>
                    {status.message && (
                      <Col>
                        <p className={status.success ? "success" : "danger"}>{status.message}</p>
                      </Col>
                    )}
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
