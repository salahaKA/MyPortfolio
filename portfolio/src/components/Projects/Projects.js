import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import portfolio from "../../Assets/Projects/portfolio.png";
import Eigo from "../../Assets/Projects/eigo.png";

import wlcmGit from "../../Assets/Projects/wlcmGithub.png";
import DCS from "../../Assets/Projects/DCS.png";
import penGes from "../../Assets/Projects/penGes3.png";
import BE from "../../Assets/Projects/BE.png";
import WeCare from "../../Assets/Projects/weCare.png";
import Epitom23 from "../../Assets/Projects/Epitom.png";
import MP from "../../Assets/Projects/mp.png"
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Basic Project <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are the basic projects I've worked on during my academic days and
          internship:
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Personal Portfolio Website (2024)"
              description="Designed and developed a responsive portfolio website using React, CSS and bootstrap to showcase projects and professional skills."
              ghLink="https://github.com/salahaKA/MyPortfolio.git"
              demoLink="https://salahaka.github.io/MyPortfolio/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DCS}
              isBlog={false}
              title="Digital Check Sheet (2024)"
              description="Developed a dynamic Digital Check Sheet System using MERN stack during an internship work at RDL Technologies."
              ghLink="https://github.com/salahaKA/checklist.git"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BE}
              isBlog={false}
              title="Bharath Enterprises (2024)"
              description="Built an E-commerce hardware store web application with Django for managing online sales and payments."
              ghLink="https://github.com/salahaKA/BharathEnterprises-Django.git"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={penGes}
              isBlog={false}
              title="penGes (2023)"
              description="Created an Android notes application using Java and Firebase for efficient note-taking and organization."
              ghLink="https://github.com/salahaKA/penGes_android_app.git"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Epitom23}
              isBlog={false}
              title="Diabetes Prediction Using Different Machine Learning Algorithm"
              description="AIMIT National level Tech fest Epitome23 research based project done with SIG team"
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={WeCare}
              isBlog={false}
              title="We Care"
              description="Palliative care Magement sysytem using HTML, CSS, JS, bootstrap, MySQl and Python flask technology"
              ghLink="https://github.com/salahaKA/wecare"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wlcmGit}
              isBlog={false}
              title="Salahaka github welcom page"
              description="My Github about page portfolio"
              ghLink="https://github.com/salahaKA"
              demoLink="https://salahaka.github.io/salahaKA/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Cricket score dashboard"
              description=""
              ghLink="https://github.com/salahaKA"
              demoLink="https://salahaka.github.io/salahaKA/"
            />
          </Col> */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Eigo}
              isBlog={false}
              title="Eigo"
              description="Demo shopping website frontend design"
              ghLink="https://github.com/salahaKA/Eigo_shoppingCart"
              demoLink="https://salahaka.github.io/Eigo_shoppingCart/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MP}
              isBlog={false}
              title="Play Music"
              description="Web design"
              ghLink="https://github.com/salahaKA/musicplayer.git"
              demoLink="https://salahaka.github.io/musicplayer/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
