

import { useState, useEffect } from "react";
import { Navbar, Nav, Container, Modal, Button } from "react-bootstrap";
import Terminal from "./Terminal"; // Import Terminal component
import logo from '../assets/img/logo32.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import navIcon4 from '../assets/img/nav-icon4.svg';
import navIcon6 from '../assets/img/git.png';



export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [showTerminal, setShowTerminal] = useState(false); // State for Terminal Modal

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("connect");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
              
              {/* Terminal Option in Navbar */}
              <Nav.Link 
                onClick={() => setShowTerminal(true)} 
                style={{ cursor: "pointer", color: "#0f0", fontWeight: "bold" }}
              >
                🖥️ Terminal
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/sujal-dusane/"><img src={navIcon1} alt="Social" /></a>
                <a href="https://github.com/sujaldusane"><img src={navIcon6} alt="Social" /></a>
                <a href="https://www.instagram.com/wassupsujal/"><img src={navIcon3} alt="Social" /></a>
                <a onClick={scrollToContact} ><img src={navIcon4} alt="Social" /></a>
              </div>
              <button className="vvd" onClick={scrollToContact}>
                <span>Let’s Connect</span>
              </button>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Terminal Modal */}
      <Modal show={showTerminal} onHide={() => setShowTerminal(false)} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>💻 Interactive Terminal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Terminal />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default NavBar;
