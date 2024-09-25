import React from "react";
import "../Skills/Skills.css";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";

const skillsData = [
  { name: "React.js", level: 65 },
  { name: "Node.js", level: 50 },
  { name: "HTML/CSS/JS", level: 95 },
  { name: "MUI/Bootstrap", level: 78 },
  { name: "MySQL", level: 90 },
  { name: "C++", level: 85 },
  { name: "Java", level: 48 },
  { name: "Python", level: 45 },
  { name: "MongoDB", level: 35 },
  { name: "Android Studio", level: 50 },
  { name: "C#", level: 30 },
  { name: "Git", level: 80 },
  {name:"Python Django", level: 50},
  {name:"RStudio", level:30},
  {name:"Problem Solving", level:80},
  {name:"Firebase", level:30},
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
