import { Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
export const ProjectCard = ({ title, description, imgUrl, link }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <Tilt tiltMaxAngleX={30} tiltMaxAngleY={30} scale={1.1} transitionSpeed={2500}>
      <a href={link} target="_blank" rel="noopener noreferrer" className="project-card-link">
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4 className="project-title">{title}</h4>
          <span className="project-description">{description}</span>
        </div>
      </div>
      </a>
      </Tilt>
    </Col>
  )
}