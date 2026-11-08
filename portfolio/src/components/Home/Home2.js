import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import homeLogo from "../../Assets/homeLogo-transparent.png";
import useReducedMotion from "./useReducedMotion";

/* ---------- Content: edit only this ---------- */
// The only place social links live, so they can't get out of sync.
const SOCIALS = [
  {
    label: "LinkedIn",
    Icon: FaLinkedinIn,
    href: "https://www.linkedin.com/in/salahaka/",
  },
  { label: "GitHub", Icon: AiFillGithub, href: "https://github.com/salahaKA" },
  { label: "Email", Icon: SiGmail, href: "mailto:kadeejathsalaha@gmail.com" },
];

function Home2() {
  const reducedMotion = useReducedMotion();

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h2 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple">INTRODUCE</span> MYSELF
            </h2>
            <p className="home-about-body">
              I build{" "}
              <i>
                <b className="purple">interactive web applications</b>
              </i>
              , dashboards and{" "}
              <i>
                <b className="purple">ERP modules</b>
              </i>{" "}
              with <b className="purple">React.js</b>, Node.js and MySQL,
              integrating <b className="purple">REST APIs</b> and focusing on{" "}
              <b className="purple">performance optimization</b>, turning
              business requirements into reliable, easy-to-use software.
              <br />
              <br />I adapt across the stack to deliver{" "}
              <i>
                <b className="purple">end-to-end solutions</b>
              </i>
              . I enjoy solving problems, writing clean code and learning new
              technologies. Feel free to connect on LinkedIn or browse my GitHub
              to see my work.
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt tiltEnable={!reducedMotion}>
              {/* Decorative illustration, so the alt text is empty on purpose */}
              <img
                src={homeLogo}
                className="img-fluid"
                style={{ maxHeight: 270 }}
                alt=""
                loading="lazy"
                decoding="async"
              />
            </Tilt>
          </Col>
        </Row>

        <Row style={{ marginTop: 32 }}>
          <Col md={12} className="home-about-social">
            <h2 style={{ fontSize: "1.6em", paddingBottom: 12 }}>FIND ME ON</h2>
            <ul className="home-about-social-links">
              {SOCIALS.map(({ label, Icon, href }) => (
                <li className="social-icons" key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    className="icon-colour home-social-icons"
                    // mailto links shouldn't open a blank tab
                    {...(href.startsWith("http")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    <Icon aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
