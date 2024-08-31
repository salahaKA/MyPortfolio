import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/salaha.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import {  FaLinkedinIn, FaStackOverflow } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hello! I'm Kadeejath Salaha, a passionate Software Developer with
              a strong foundation in front-end and back-end technologies. With a
              Master’s in Computer Application and hands-on experience through
              internships and projects,
              {/* I'm
              committed to building impactful web applications. */}
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> C++, Javascript and MySQL. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies </b> and also in areas
                related to <b className="purple">Mobile Application</b>
              </i>
              <br />
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
              </i>
              <br />
              <br />
              Feel free to connect with me on<b className="purple">
                {" "}
                LinkedIn
              </b>{" "}
              or check out my <b className="purple"> GitHub</b>
              to see more of my work.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid avatar-img" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
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
                  href="mailto:kadeejasalaha123@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <SiGmail />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://www.instagram.com/__s_a_l_a_h_a__"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li> */}

              <li className="social-icons">
                <a
                  href="https://stackoverflow.com/users/20411880/salahaka"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaStackOverflow />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://www.chess.com/member/salaha_07"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaChess />
                </a>
              </li> */}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
