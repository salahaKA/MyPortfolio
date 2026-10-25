import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/salaha.jpg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
// import Contact from "../Contact/Contact";

function Home2() {
  // const [showContactForm, setShowContactForm] = useState(false);
  // const handleContactButtonClick = () => {
  //   setShowContactForm(!showContactForm);
  // };

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              My interests lie in building modern{" "}
              <i>
                <b className="purple">Software Applications</b>
              </i>{" "}
              with a focus on{" "}
              <i>
                <b className="purple">React.js</b>,{" "}
                <b className="purple">Frontend Development</b>
              </i>
              , and intuitive user experiences.
              <br />
              <br />
              I enjoy solving problems, optimizing code, and transforming
              business requirements into reliable web applications. I'm always
              exploring new technologies and improving my development skills.
              <br />
              <br />
              Feel free to connect with me on LinkedIn or check out my GitHub to
              explore my work and projects.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid avatar-img" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <br></br>
        <hr></hr>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>

            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/salahaka/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="http://github.com/salahaKA"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:kadeejathsalaha@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <SiGmail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>

        {/* Adding the Contact Component here */}
        {/* <Container className="contact-section my-5">
          <Row className="justify-content-center mb-4">
            <Col md={6} className="text-center">
              <Button
                onClick={handleContactButtonClick}
                className="toggle-contact-button"
              >
                {showContactForm ? "Contact Form" : "Contact Me"}
              </Button>
            </Col>
          </Row>

          {showContactForm && (
            <Row className="justify-content-center">
              <Col md={8}>
                <div className="contact-form-wrapper">
                  <Contact />
                </div>
              </Col>
            </Row>
          )}
        </Container> */}
      </Container>
    </Container>
  );
}
export default Home2;
