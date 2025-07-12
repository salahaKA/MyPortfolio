import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import myImg from "../../Assets/salaha.jpg";
// import myImg2 from "../../Assets/Images/meCybro1.jpg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Contact from "../Contact/Contact";

function Home2() {
  const [showContactForm, setShowContactForm] = useState(false);
  // const [currentImage, setCurrentImage] = useState(myImg);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentImage((prev) => (prev === myImg ? myImg2 : myImg));
  //   }, 5000);
  //   return () => clearInterval(interval);
  // }, []);

  const handleContactButtonClick = () => {
    setShowContactForm(!showContactForm);
  };

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hello! I'm Kadeejath Salaha, a passionate Software Developer With
              hands-on experience through academic and internship projects.
              {/* I'm
              committed to building impactful web applications. */}
              <br />
              {/* <br />I am fluent in classics like
              <i>
                <b className="purple"> OOPs, C++, Javascript and MySQL. </b>
              </i>
              <br /> */}
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies </b> and also in areas
                related to <b className="purple">Mobile Applications</b>
              </i>
              {/* <br />
              <br />
              Whenever possible, I also apply my passion for developing
              Full-Stack Application <b className="purple"> Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and MUI/bootstrap</b>
              </i> */}
              <br />
              <br />
              Feel free to connect with me on LinkedIn or check out my GitHub to
              see more of my work.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid avatar-img" alt="avatar" />
              {/* <img src={currentImage} className="img-fluid avatar-img" alt="avatar" /> */}
            </Tilt>
          </Col>
        </Row>
        <br></br>
        <hr></hr>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            {/* <p>
              Feel free to <span className="purple">connect </span>with me
            </p> */}
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
              {/* <li className="social-icons">
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li> */}
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
        {/* <Row>
          <Col md={12} className="text-center">
            <Button
              onClick={handleContactButtonClick}
              className="contact-button"
            >
              {" "}
              {showContactForm ? "Hide Contact Form" : "Contact Me"}{" "}
            </Button>
          </Col>
        </Row> */}

        {/* Conditionally render the contact form */}
        {/* {showContactForm && (
          <Row>
            <Col md={12} className="text-center">
              <Contact />
            </Col>
          </Row>
        )} */}
        <Container className="contact-section my-5">
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
        </Container>
      </Container>
    </Container>
  );
}
export default Home2;
