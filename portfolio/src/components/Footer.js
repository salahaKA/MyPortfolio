import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Kadeejath Salaha</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} SalahaKA</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/salahaKA"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="mailto:kadeejathsalaha@gmail.com"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiGmail />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/salahaka/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            {/* <li className="social-icons">
              <a
                href="https://www.instagram.com/__s_a_l_a_h_a__"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li> */}
            {/* <li className="social-icons">
              <a
                href="https://www.chess.com/member/salaha_07"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaChess />
              </a>
            </li> */}
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
