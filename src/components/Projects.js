import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/Plant.jpg";
import projImg5 from "../assets/img/safarnama.jpg";
import projImg6 from "../assets/img/learntravia.jpg";
import projImg7 from "../assets/img/unit.jpg";
import projImg8 from "../assets/img/uhaul.jpg";
import projImg9 from "../assets/img/zee5.jpg";
import projImg10 from "../assets/img/temu.jpg";
import projImg11 from "../assets/img/giftzone.jpg";
import projImg12 from "../assets/img/missing.jpg";
import projImg13 from "../assets/img/skillport.jpg";
import projImg14 from "../assets/img/coding.jpg";






import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { Link } from "react-scroll";

export const Projects = () => {

  const projects = [
    {
      title: "SkillPort",
      description: "Developed a full-stack web application for skill-sharing where instructors can upload courses, and learners can enroll. Built using React, Node.js, Express.js, and MongoDB, with secure authentication and payment integration.",
      imgUrl: projImg13,
      link: "https://github.com/patilchirag2392/web_finalproject_group3"
    },
    {
      title: "Missing person website",
      description: "Created a web-based missing person identification system using Flask, MySQL, and Python. Integrated image processing and database management techniques to assist in missing person searches.",
      imgUrl: projImg12,
      link: "https://github.com/wassupsujall/MissingPersonWebsite"
    },
    {
      title: "GiftZone",
      description: "Designed and developed an e-commerce website for gifting solutions. Implemented secure payment gateways and user authentication, using React, Express.js, and MongoDB for a seamless shopping experience.",
      imgUrl: projImg11,
      link: "https://github.com/sujaldusane"
    },
    {
      title: "Coding Bootcamp website",
      description: "Led the development and team coordination for a coding bootcamp website, resulting in a 45% increase in traffic. Built dynamic, scalable front-end systems using React and JavaScript, optimizing performance and security.",
      imgUrl: projImg14,
      link: "https://github.com/sujaldusane"

    },
    

  ];

  const projectss = [
    {
      title: "Plant disease prediction system",
      description: "Built a deep learning-based web application using VGG16 and InceptionV3 models to detect plant diseases. Developed the front-end with HTML, CSS, and JavaScript, and integrated AI models for real-time disease identification.",
      imgUrl: projImg4,
      link: "https://github.com/sujaldusane"
    },
    {
      title: "SafarNama",
      description: "Developed an Android-based travel assistant using Java and Google Maps API, enabling real-time location tracking and personalized attraction recommendations. Designed an interactive UI in Android Studio, integrating backend functionalities to provide essential travel information.",
      imgUrl: projImg5,
      link: "https://github.com/wassupsujall/SafarNama",
    },
    {
      title: "LearnTravia",
      description: "Built an interactive web-based learning platform for GRE, IELTS, and TOEFL preparation using JavaScript, HTML, and Python. Collaborated with a team to deliver features on time, integrating real-time feedback and adaptive learning recommendations.",
      imgUrl: projImg6,
      link: "https://github.com/wassupsujall/LearnTravia"
    },
    {
      title: "Unit converter app",
      description: "Designed and developed an Android application in Java for real-time unit conversions, including length, weight, temperature, and currency. Built using Android Studio, integrated a custom algorithm for precision, and implemented an intuitive UI for seamless user experience.",
      imgUrl: projImg7,
      link: "https://github.com/wassupsujall/UnitConverterApp"
    },
    
  ];

  const projectsss = [
    {
      title: "Redesigning U-haul",
      description: "Redesigned the U-Haul website to improve navigation, booking efficiency, and user engagement. Conducted usability testing, enhanced mobile responsiveness, and optimized UI flow for a seamless reservation process.",
      imgUrl: projImg8,
      link: "https://drive.google.com/file/d/1Fk_1EnuTvkW488qAitBdroqYYe7Sa5YF/view?usp=sharing"
    },
    {
      title: "Redesigning Zee5",
      description: "Revamped the ZEE5 streaming platform UI with a modernized, intuitive design to enhance content discoverability and user engagement. Focused on reducing user friction, improving recommendation sections, and optimizing dark mode UX.",
      imgUrl: projImg9,
      link: "https://drive.google.com/file/d/1UwY7hfFUE2xQ8e9Jgu1wbJNd_UdKnR61/view?usp=sharing"
    },
    {
      title: "Redesigning Temu",
      description: "Redesigned the Product Details and Cart pages of the Temu e-commerce app, enhancing visual hierarchy, call-to-action clarity, and checkout flow. Applied UX research insights to improve customer retention and conversion rates.",
      imgUrl: projImg10,
      link: "https://medium.com/@wassupsujal14/redesigning-the-temu-shopping-experience-a-more-easy-and-pleasurable-checkout-process-d3cdeba853b0"
    },
    

  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>A curated selection of my projects, showcasing my skills in web development, UI/UX design, and software engineering. From concept to execution, these projects highlight my problem-solving approach and technical expertise</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Web development projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">AI/ML & Android development</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">UI/UX projects</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          projectss.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          projectsss.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}