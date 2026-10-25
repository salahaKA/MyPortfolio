import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaChess, FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const socialLinks = [
  {
    href: "https://github.com/salahaKA",
    icon: <AiFillGithub />,
    label: "GitHub",
  },
  {
    href: "mailto:kadeejathsalaha@gmail.com",
    icon: <SiGmail />,
    label: "Email",
  },
  {
    href: "https://www.linkedin.com/in/salahaka/",
    icon: <FaLinkedinIn />,
    label: "LinkedIn",
  },
  {
    href: "https://www.chess.com/member/salahaka",
    icon: <FaChess />,
    label: "Chess.com",
  },
];

function Footer() {
  const year = new Date().getFullYear();

  return (
    <Container
      fluid
      className="footer"
      style={{ position: "fixed", bottom: "0", padding: "10px 0" }}
    >
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Kadeejath Salaha</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} SalahaKA</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            {socialLinks.map((link) => (
              <li className="social-icons" key={link.label}>
                <a
                  href={link.href}
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default React.memo(Footer);
