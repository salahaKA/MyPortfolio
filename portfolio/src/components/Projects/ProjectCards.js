import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { AiOutlineFileText } from "react-icons/ai";
import "./Project.css";
function ProjectCards(props) {
  return (
    <Card className="project-card-view">
    {/* Wrapping the image with a link for the website */}
    {props.websiteLink ? (
      <a
        href={props.websiteLink}
        target="_blank"
        rel="noopener noreferrer"
        className="project-image-link"
      >
        <Card.Img variant="top" src={props.imgPath} alt="card-img" />
        {/* Adding an optional overlay text */}
        <div className="image-overlay">
          <span>View Website</span>
        </div>
      </a>
    ) : (
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
    )}
    <Card.Body>
      <Card.Title>{props.title}</Card.Title>
      <Card.Text style={{ textAlign: "justify", fontSize: "0.9rem" }}>
        {props.description}
      </Card.Text>
      <div className="project-buttons">
        {!props.isBlog && props.demoLink && (
          <Button
            variant="outline-dark"
            href={props.demoLink}
            target="_blank"
            className="icon-button"
          >
            <CgWebsite />
          </Button>
        )}
        {props.pdfLink && (
          <Button
            variant="outline-dark"
            href={props.pdfLink}
            target="_blank"
            className="icon-button"
          >
            <AiOutlineFileText />
          </Button>
        )}
        <Button
          variant="outline-dark"
          href={props.ghLink}
          target="_blank"
          className="icon-button"
        >
          <BsGithub />
        </Button>
      </div>
    </Card.Body>
  </Card>
  );
}

export default ProjectCards;
