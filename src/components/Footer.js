import { Container, Row, Col } from "react-bootstrap";

import logo from "../assets/img/logo32.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/git.png";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <section className="hire-me">
  <h2>Looking for a skilled developer?</h2>
  <p>Let's discuss how I can contribute to your team or project.</p>
  <a href="mailto:dusane.s@northeastern.edu" className="hire-me-button">📩 Hire Me</a>
</section>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/sujal-dusane/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/sujaldusane"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/wassupsujal/"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2025. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
