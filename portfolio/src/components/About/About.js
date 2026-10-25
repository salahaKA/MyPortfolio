import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import AboutCard from "./AboutCard";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row className="justify-content-center py-3">
          <Col
            md={7}
            className="d-flex flex-column justify-content-center py-4"
          >
            <h1 className="mb-4" style={{ fontSize: "2.1em" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <AboutCard />
          </Col>
        </Row>

        {/* <h1 className="project-heading">
          <strong className="purple">Tools</strong> I am familiar with
        </h1>
        <Toolstack /> */}
      </Container>
    </Container>
  );
}

export default About;
