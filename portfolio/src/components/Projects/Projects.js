import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/p.jpg";
import emotion from "../../Assets/Projects/p.jpg";
import portfolio from "../../Assets/Projects/portfolio.png";
import Eigo from "../../Assets/Projects/eigo.png";
import suicide from "../../Assets/Projects/p.jpg";
import wlcmGit from "../../Assets/Projects/wlcmGithub.png";
import DCS from "../../Assets/Projects/DCS.png";

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
              title="Salahaka"
              description="My personal portfolio wesite using React,botstrap,css and git"
              ghLink="https://github.com/salahaKA/MyPortfolio.git"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DCS}
              isBlog={false}
              title="Digital CheckSheet"
              description="RDLTechnologies Internshipproject done with React, MUI, css, Node, Express, MySQL and git"
              ghLink="https://github.com/salahaKA/checklist.git"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DCS}
              isBlog={false}
              title="Bharath Enterprices"
              description="E-commerce hardware store web application with Python django.  
Technology Used: Frontend- HTML/CSS/JS and Bootstrap Backend- Python Django Database: Sqlite3 APIs: Payment gatways and Google Maps API Version Control: Git Code Editor: VS Code     
"
              ghLink="https://github.com/salahaKA/checklist.git"
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
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Eigo}
              isBlog={false}
              title="Eigo"
              description="Frontend home page only for online shopping webste"
              ghLink="https://github.com/salahaKA/Eigo_shoppingCart"
              demoLink="https://salahaka.github.io/Eigo_shoppingCart/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="We Care"
              description="Palliative care Magement sysytem using HTML, CSS, JS, bootstrap, MySQl and Python flask technology"
              ghLink="https://github.com/salahaKA/wecare"
              demoLink="https://salahaka.github.io/salahaKA/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description=""
              ghLink="https://github.com/salahaKA"
              demoLink="https://salahaka.github.io/salahaKA/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Dibetsprediction using ML"
              ghLink=""
              demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
