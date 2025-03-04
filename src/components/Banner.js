// import { useState, useEffect } from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import headerImg from "../assets/img/header-img.svg";
// import { ArrowRightCircle } from 'react-bootstrap-icons';
// import 'animate.css';
// import TrackVisibility from 'react-on-screen';
// import { TypeAnimation } from 'react-type-animation';

// import { FaDownload } from "react-icons/fa";



// export const Banner = () => {
//   const [loopNum, setLoopNum] = useState(0);
//   const [isDeleting, setIsDeleting] = useState(false);
//   const [text, setText] = useState('');
//   const [delta, setDelta] = useState(300 - Math.random() * 100);
//   const [index, setIndex] = useState(1);
//   const toRotate = [ "Web Developer", "Web Designer", "UI/UX Designer" ];
//   const period = 2000;

//   useEffect(() => {
//     let ticker = setInterval(() => {
//       tick();
//     }, delta);

//     return () => { clearInterval(ticker) };
//   }, [text])

//   const tick = () => {
//     let i = loopNum % toRotate.length;
//     let fullText = toRotate[i];
//     let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

//     setText(updatedText);

//     if (isDeleting) {
//       setDelta(prevDelta => prevDelta / 2);
//     }

//     if (!isDeleting && updatedText === fullText) {
//       setIsDeleting(true);
//       setIndex(prevIndex => prevIndex - 1);
//       setDelta(period);
//     } else if (isDeleting && updatedText === '') {
//       setIsDeleting(false);
//       setLoopNum(loopNum + 1);
//       setIndex(1);
//       setDelta(500);
//     } else {
//       setIndex(prevIndex => prevIndex + 1);
//     }
//   }

//   const scrollToContact = () => {
//     const contactSection = document.getElementById("connect");
//     if (contactSection) {
//       contactSection.scrollIntoView({ behavior: "smooth" });
//     }
//   };


  

//   return (
//     <section className="banner" id="home">
//       <Container>
//         <Row className="aligh-items-center">
//           <Col xs={12} md={6} xl={7}>
//             <TrackVisibility>
//               {({ isVisible }) =>
//               <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
//                 <span className="tagline">Hello World! Welcome to my World</span>
//                 <h1>{`Hi! I'm Sujal Dusane`} 
//   <br />
//   <TypeAnimation
//     sequence={[
//       "Web Developer", 1000,
//       "Full-Stack Developer", 1000,
//       "UI/UX Designer", 1000,
//     ]}
//     wrapper="span"
//     speed={50}
//     repeat={Infinity}
//   />
// </h1>

                
//                   <p>Welcome to my quirky code laboratory—where I transform caffeine into pixel-perfect magic! I'm a developer with a penchant for building responsive, user-friendly websites and applications that don't just work; they entertain. I mix a dash of creativity with a sprinkle of humor, crafting digital experiences smoother than a buttered slide. Ready to turn your wild ideas into a tech-tastic masterpiece that even your pet goldfish would admire? Let's create something so impressive and fun that even the bugs will be amazed before they disappear!






// </p>
// <a href="/resume.pdf" download="Sujal_Dusane_Resume.pdf" className="resume-button">
//   📄 Download Resume
// </a>


//                   <button onClick={scrollToContact}>Let’s Connect <ArrowRightCircle size={25} /></button>
//               </div>}
//             </TrackVisibility>
//           </Col>
//           <Col xs={12} md={6} xl={5}>
//             <TrackVisibility>
//               {({ isVisible }) =>
//                 <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
//                   <img src={headerImg} alt="Header Img"/>
//                 </div>}
//             </TrackVisibility>
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   )
// }

// export default Banner;

import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { TypeAnimation } from "react-type-animation";
import { FaDownload } from "react-icons/fa";

import Tilt from "react-parallax-tilt";

export const Banner = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("connect");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const playSound = () => {
    const sound = new Audio("/sound.mp3"); // Add your sound file inside /public
    sound.play();
  };

  return (
    <section className="banner" id="home">
      
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  
                  <span className="tagline">Hello World! Welcome to my World</span>
                  <h1>
                    {`Hi! I'm Sujal Dusane`}
                    <br />
                    <TypeAnimation
                      sequence={[
                        "Web Developer", 1000,
                        "Full-Stack Developer", 1000,
                        "UI/UX Designer", 1000,
                      ]}
                      wrapper="span"
                      speed={50}
                      repeat={Infinity}
                    />
                  </h1>
                  <p>
                    Welcome to my quirky code laboratory—where I transform caffeine into pixel-perfect magic! 
                    I'm a developer with a penchant for building responsive, user-friendly websites and applications 
                    that don't just work; they entertain. Let's create something so impressive and fun that 
                    even the bugs will be amazed before they disappear!
                  </p>

                  {/* Resume Download Button */}
                  <a href= "/resume.pdf" download="Sujal_Dusane_Resume.pdf" className="resume-button" onClick={playSound}>
                    📄 Download Resume <FaDownload />
                  </a>

                  {/* Connect Button */}
                  <button onClick={scrollToContact} className="connect-button">
                    Let’s Connect <ArrowRightCircle size={25} />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <Tilt tiltMaxAngleX={50} tiltMaxAngleY={50}>
  <img src={headerImg} alt="Header Img" />
</Tilt>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
