import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import portfolio from "../../Assets/Projects/portfolio.png";
import Eigo from "../../Assets/Projects/eigo.png";
import eigo_shoppie from "../../Assets/Projects/Eigo1.png"
import wlcmGit from "../../Assets/Projects/wlcmGithub.png";
import DCS from "../../Assets/Projects/DCS.png";
import penGes from "../../Assets/Projects/penGes3.png";
import BE from "../../Assets/Projects/BE.png";
import WeCare from "../../Assets/Projects/weCare.png";
import Epitom23 from "../../Assets/Projects/Epitom.png";
import MP from "../../Assets/Projects/mp.png";

import pdfDCS from "../../Assets/Projects/RDL_DCS_Salaha.pdf";
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
              imgPath={eigo_shoppie}
              isBlog={false}
              title="Eigo Shopping Cart (2024)"
              description="Designed responsive shopping cart website using React technology for Eigo"
              ghLink="https://github.com/salahaKA/eigo_shoppingweb.git"
              demoLink="https://salahaka.github.io/eigo_shoppingweb/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Personal Portfolio Website (2024)"
              description="A responsive portfolio website using React, CSS and bootstrap to showcase my projects and professional skills."
              ghLink="https://github.com/salahaKA/MyPortfolio.git"
              demoLink="https://salahaka.github.io/MyPortfolio/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DCS}
              isBlog={false}
              title="RDL DSC (2024 MCA final Internship project)"
              description="Designed and Developed a dynamic Digital Check Sheet System using MERN stack during an internship work at RDL Technologies."
              ghLink="https://github.com/salahaKA/checklist.git"
              demoLink=""
              pdfLink={pdfDCS}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BE}
              isBlog={false}
              title="Bharath Enterprises (2024 AIMIT BCP project)"
              description="Built an E-commerce hardware store web application with Django for managing online sales and payments with SIG team."
              ghLink="https://github.com/salahaKA/BharathEnterprises-Django.git"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={penGes}
              isBlog={false}
              title="penGes (2023 AIMIT mini project)"
              description="Created an Android notes application using Java and Firebase for efficient note-taking and organization."
              ghLink="https://github.com/salahaKA/penGes_android_app.git"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Epitom23}
              isBlog={false}
              title="Diabetes Prediction Using Different Machine Learning Algorithm (2023)"
              description="AIMIT National level Tech fest Epitome23 research based project done with SIG team"
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={WeCare}
              isBlog={false}
              title="We Care (BSC final project - 2022)"
              description="Palliative care Magement sysytem using HTML, CSS, JS, bootstrap, MySQl and Python flask technology"
              ghLink="https://github.com/salahaKA/wecare"
              demoLink=""
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wlcmGit}
              isBlog={false}
              title="Salahaka github welcome page"
              description="My Github about page portfolio"
              ghLink="https://github.com/salahaKA"
              demoLink="https://salahaka.github.io/salahaKA/"
            />
          </Col> */}

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
              description="Web design 2022"
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
