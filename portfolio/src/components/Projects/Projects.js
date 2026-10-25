import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import DCS from "../../Assets/Projects/DCS2.png";
import penGes from "../../Assets/Projects/penGes1.png";
import Arsha from "../../Assets/Projects/Arsha.png";
import BE from "../../Assets/Projects/BE.png";
import WeCare from "../../Assets/Projects/weCare.png";
import Epitom23 from "../../Assets/Projects/Epitom.png";
import pdfDCS from "../../Assets/Projects/RDL_DCS_Salaha.pdf";
import pdfBE from "../../Assets/Projects/PPT Bharath EnterprisesEnd.pdf";
import SACAIM from "../../Assets/Projects/sacaim'24.pdf";
import pdfWecare from "../../Assets/Projects/palliativedoc(salaha).pdf";

// Small helper so title JSX doesn't repeat everywhere
const ProjectTitle = ({ name, subtitle }) => (
  <>
    {name}
    <br />
    <span style={{ fontSize: "0.9rem", fontWeight: "normal" }}>{subtitle}</span>
  </>
);

const projects = [
  {
    imgPath: DCS,
    title: (
      <ProjectTitle name="RDL DCS" subtitle="(MCA Internship project - 2024)" />
    ),
    description:
      "Designed and Developed a dynamic Digital Check Sheet System using MERN stack during an internship work at RDL Technologies.",
    ghLink: "https://github.com/salahaKA/checklist.git",
    demoLink: "https://youtu.be/H3lzv1NUGa0",
    pdfLink: pdfDCS,
  },
  {
    imgPath: BE,
    title: (
      <ProjectTitle
        name="Bharath Enterprises"
        subtitle="(AIMIT BCP Project - 2024)"
      />
    ),
    description:
      "Designed and Developed an E-commerce hardware store full-stack web application to manage online sales and payments using Python Django technology.",
    ghLink: "https://github.com/salahaKA/BharathEnterprises-Django.git",
    demoLink: "https://github.com/salahaKA/BharathEnterprises-Django.git",
    pdfLink: pdfBE,
  },
  {
    imgPath: WeCare,
    title: <ProjectTitle name="We Care" subtitle="(BSC final - 2022)" />,
    description:
      "A Palliative Care Management System designed to streamline patient care and tracking, built using HTML/CSS/JS, bootstrap, Python Flask and MySQL.",
    demoLink: "",
    pdfLink: pdfWecare,
    websiteLink: "",
  },
  {
    imgPath: Epitom23,
    title: (
      <ProjectTitle
        name="DIABETES ANALYSIS USING MACHINE LEARNING ALGORITHMS"
        subtitle="(2023)"
      />
    ),
    description:
      "Contributed to the AIMIT SACAIM'23 research-based project in collaboration with the SIG team.",
    demoLink:
      "https://chapters.redshine.in/index.php/redshine/article/view/1838",
    pdfLink: SACAIM,
    websiteLink: "",
  },
  {
    imgPath: Arsha,
    title: "Web Design - Figma to Code",
    description: "Responsive web design done with HTML, CSS, JS and Bootstrap",
    ghLink: "",
    demoLink: "https://arsha-demo-test.netlify.app/",
    websiteLink: "https://arsha-demo-test.netlify.app/",
  },
  {
    imgPath: penGes,
    title: <ProjectTitle name="penGes" subtitle="(AIMIT mini - 2023)" />,
    description:
      "Designed and Built Android Note-taking mobile application using Android studio with Java, XML, Sqlite and Firebase.",
    ghLink: "https://github.com/salahaKA/penGes_android_app.git",
    demoLink: "",
    websiteLink: "",
  },
];

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
          {projects.map((project, index) => (
            <Col md={4} className="project-card" key={index}>
              <ProjectCard isBlog={false} {...project} />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
