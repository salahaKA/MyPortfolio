import React from "react";
import "../Skills/Skills.css";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";

const skillsData = [
  { name: "React.js", level: 75  },
  { name: "HTML/CSS/JS", level: 90 },
  { name: "Git", level: 80 },
  { name: "MySQL", level: 80 },
  { name: "Bootstrap/MUI", level: 60 },
  { name: "Node.js", level: 60 },
  { name: "Problem Solving", level: 80 },
  { name: "OOPs", level: 80 },
  { name: "C++", level: 75 },
  { name: "C#", level: 55 },
  { name: "Java", level: 55 },
  { name: "Android Studio", level: 60 },
  { name: "Python", level: 50 },
  { name: "MongoDB", level: 45 },
  { name: "Firebase", level: 30 },
];

function Skills() {
  return (
    <div className="skills-container">
      <Container>
        <h4 className="skills-title"></h4>
        <Row className="skills-grid">
          {skillsData.map((skill, index) => (
            <Col xs={12} sm={6} key={index} className="skill-item">
              <h6 className="skill-name">{skill.name}</h6>
              <ProgressBar
                now={skill.level}
                label={`${skill.level}%`}
                className="skill-bar"
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Skills;
