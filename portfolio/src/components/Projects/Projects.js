import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import portfolio from "../../Assets/Projects/portfolio.png";
import Eigo from "../../Assets/Projects/eigo.png";
import eigo_shoppie from "../../Assets/Projects/Eigo1.png";
import DCS from "../../Assets/Projects/DCS.png";
import penGes from "../../Assets/Projects/penGes1.png";
import BE from "../../Assets/Projects/BE.png";
import WeCare from "../../Assets/Projects/weCare.png";
import Epitom23 from "../../Assets/Projects/Epitom.png";
import MP from "../../Assets/Projects/mp.png";
import todo from "../../Assets/Projects/todoo.png";

import pdfDCS from "../../Assets/Projects/RDL_DCS_Salaha.pdf";
import SACAIM from "../../Assets/Projects/sacaim'24.pdf";
import pdfWecare from "../../Assets/Projects/palliativedoc(salaha).pdf";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Basic Project <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are the basic projects I've worked on during my academic days and
          internship:
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DCS}
              isBlog={false}
              title="RDL DSC (MCA final Internship project - 2024)"
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
              title="Bharath Enterprises (AIMIT BCP - 2024)"
              description="An E-commerce hardware store web application to manage online sales and
 payments built with the AIMIT SIG team using Python Django technology."
              ghLink="https://github.com/salahaKA/BharathEnterprises-Django.git"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Epitom23}
              isBlog={false}
              title="Diabetes Prediction Using Different Machine Learning Algorithm (2023)"
              description="AIMIT 'SACAIM'23 INTERNATIONAL CONFERENCE ON ADVANCE 
IT, ENGINEERING AND MANAGEMENT'  research based project done with SIG team"
              ghLink="https://github.com/salahaKA/Diabetes-Analysis-Using-Machine-Learning-Algorithms.git"
              demoLink="https://chapters.redshine.in/index.php/redshine/article/view/1838"
              pdfLink={SACAIM}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eigo_shoppie}
              isBlog={false}
              title="Eigo Shopping Cart (2024)"
              description="Shopping cart website using React technology"
              ghLink="https://github.com/salahaKA/eigo_shoppingweb.git"
              demoLink="https://salahaka.github.io/eigo_shoppingweb/"
            />
          </Col>

          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={penGes}
              isBlog={false}
              title="penGes (AIMIT mini - 2023)"
              description="Android fullstack notes application using Java, XML and Firebase for efficient note-taking and organization."
              ghLink="https://github.com/salahaKA/penGes_android_app.git"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={WeCare}
              isBlog={false}
              title="We Care (BSC final - 2022)"
              description="A Palliative Care Management System designed to streamline patient care and
 tracking, built using HTML/CSS/JS, bootstrap, Python Flask and MySQL."
              ghLink="https://github.com/salahaKA/wecare"
              demoLink=""
              pdfLink={pdfWecare}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Personal Portfolio Website (2024)"
              description="A responsive portfolio website using React, CSS and bootstrap to showcase my projects and professional skills."
              // ghLink="https://github.com/salahaKA/MyPortfolio.git"
              // demoLink="https://salahaka.github.io/MyPortfolio/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="To-do List (2024)"
              description="Simple To Do List Application developed by using React, CSS, Tailwind CSS and HTML"
              ghLink="https://github.com/salahaKA/todolist_app.git"
              demoLink="https://salahaka.github.io/todolist_app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MP}
              isBlog={false}
              title="Play Music"
              description="Web Design 2022"
              ghLink="https://github.com/salahaKA/musicplayer.git"
              demoLink="https://salahaka.github.io/musicplayer/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Eigo}
              isBlog={false}
              title="UI/UX"
              description="Demo shopping website home page"
              ghLink="https://github.com/salahaKA/Eigo_shoppingCart"
              demoLink="https://salahaka.github.io/Eigo_shoppingCart/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
