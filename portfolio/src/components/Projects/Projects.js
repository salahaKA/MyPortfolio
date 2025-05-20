import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import portfolio from "../../Assets/Projects/portfolio.png";
// import Eigo from "../../Assets/Projects/eigo.png";
import eigo_shoppie from "../../Assets/Projects/Eigo1.png";
import DCS from "../../Assets/Projects/DCS.png";
import penGes from "../../Assets/Projects/penGes1.png";
import Arsha from "../../Assets/Projects/Arsha.png";
import BE from "../../Assets/Projects/BE.png";
import WeCare from "../../Assets/Projects/weCare.png";
import Epitom23 from "../../Assets/Projects/Epitom.png";
import MP from "../../Assets/Projects/mp.png";
import todo from "../../Assets/Projects/todoo.png";
import pdfDCS from "../../Assets/Projects/RDL_DCS_Salaha.pdf";
import pdfBE from "../../Assets/Projects/PPT Bharath EnterprisesEnd.pdf";
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
              title={
                <>
                  RDL DCS
                  <br />
                  <span style={{ fontSize: "0.9rem", fontWeight: "normal" }}>
                    (MCA Internship project - 2024)
                  </span>
                </>
              }
              description="Designed and Developed a dynamic Digital Check Sheet System using MERN stack during an internship work at RDL Technologies."
              // ghLink="https://github.com/salahaKA/checklist.git"
              demoLink="https://youtu.be/H3lzv1NUGa0"
              pdfLink={pdfDCS}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BE}
              isBlog={false}
              title={
                <>
                  Bharath Enterprises
                  <br />
                  <span style={{ fontSize: "0.9rem", fontWeight: "normal" }}>
                    (AIMIT BCP Project - 2024)
                  </span>
                </>
              }
              description="Designed and Developed an E-commerce hardware store full-stack web application to manage online sales and
 payments using Python Django technology."
              // ghLink="https://github.com/salahaKA/BharathEnterprises-Django.git"
              demoLink="https://github.com/salahaKA/BharathEnterprises-Django.git"
              pdfLink={pdfBE}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={WeCare}
              isBlog={false}
              // title="We Care (BSC final - 2022)"
              title={
                <>
                  We Care
                  <br />
                  <span style={{ fontSize: "0.9rem", fontWeight: "normal" }}>
                    (BSC final - 2022)
                  </span>
                </>
              }
              description="A Palliative Care Management System designed to streamline patient care and
 tracking, built using HTML/CSS/JS, bootstrap, Python Flask and MySQL."
              // ghLink="https://github.com/salahaKA/wecare"
              demoLink=""
              pdfLink={pdfWecare}
              websiteLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={penGes}
              isBlog={false}
              title={
                <>
                  penGes
                  <br />
                  <span style={{ fontSize: "0.9rem", fontWeight: "normal" }}>
                    (AIMIT mini - 2023)
                  </span>
                </>
              }
              description="Designed and Built Android Note-taking mobile application using Android studio with Java, XML, Sqlite and Firebase."
              ghLink="https://github.com/salahaKA/penGes_android_app.git"
              demoLink=""
              websiteLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Epitom23}
              isBlog={false}
              // title="Diabetes Prediction Using Different Machine Learning Algorithm (2023)"
              title={
                <>
                  DIABETES ANALYSIS USING MACHINE LEARNING ALGORITHMS
                  <br />
                  <span style={{ fontSize: "0.9rem", fontWeight: "normal" }}>
                    (2023)
                  </span>
                </>
              }
              description="Contributed to the AIMIT SACAIM'23 research-based project in collaboration with the SIG team."
              // ghLink="https://github.com/salahaKA/Diabetes-Analysis-Using-Machine-Learning-Algorithms.git"
              demoLink="https://chapters.redshine.in/index.php/redshine/article/view/1838"
              pdfLink={SACAIM}
              websiteLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title={
                <>
                  To-do List (Figma to React conversion)
                  <br />
                  <span style={{ fontSize: "0.9rem", fontWeight: "normal" }}>
                    (2024)
                  </span>
                </>
              }
              description="To Do List Application designed and developed by using React, CSS, Tailwind CSS and HTML"
              // ghLink="https://github.com/salahaKA/todolist_app.git"
              demoLink="https://salahaka.github.io/todolist_app/"
              websiteLink="https://salahaka.github.io/todolist_app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Arsha}
              isBlog={false}
              title="Web Design - Figma to Code"
              description="Responsive web design done with HTML, CSS, JS and Bootstrap"
              ghLink=""
              demoLink="https://arsha-demo-test.netlify.app/"
              websiteLink="https://arsha-demo-test.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MP}
              isBlog={false}
              title="Play Music"
              description="UI/UX"
              // ghLink="https://github.com/salahaKA/musicplayer.git"
              demoLink="https://salahaka.github.io/musicplayer/"
              websiteLink="https://salahaka.github.io/musicplayer/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eigo_shoppie}
              isBlog={false}
              title={
                <>
                  Eigo Shopping Cart
                  <br />
                  <span style={{ fontSize: "0.9rem", fontWeight: "normal" }}>
                    (Present)
                  </span>
                </>
              }
              description="React E-COMMERCE Shopping cart"
              // ghLink="https://github.com/salahaKA/eigo_shoppingweb.git"
              demoLink=""
              // websiteLink="https://salahaka.github.io/eigo_shoppingweb/"
            />
          </Col>
          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Eigo}
              isBlog={false}
              title="UI/UX"
              description="Demo shopping website home page"
              ghLink="https://github.com/salahaKA/Eigo_shoppingCart"
              demoLink="https://salahaka.github.io/Eigo_shoppingCart/"
              websiteLink=""
            />
          </Col> */}
          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Personal Portfolio Website"
              description="Personal portfolio using React, CSS and bootstrap."
              // ghLink="https://github.com/salahaKA/MyPortfolio.git"
              // demoLink="https://salahaka.github.io/MyPortfolio/"
              websiteLink="https://salahaka.github.io/MyPortfolio/"
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
