import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/homeLogo-transparent.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  🙋‍♀️
                </span>
              </h1>
              <h1 className="heading-name">
                I'M
                <strong className="main-name"> KADEEJATH SALAHA</strong>
              </h1>
              <h5 className="heading-name" style={{ fontSize: "1.5rem" }}>
                Post Graduated In MCA (2024)🎓
              </h5>
              <br />
              <h4 className="heading-namee" style={{ fontSize: "1rem" }}>
                Graduated In BSC Computer Science (2022)
              </h4>
              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>
            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="home-logo"
                style={{ maxHeight: "300px", whiteSpace: "pre" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
