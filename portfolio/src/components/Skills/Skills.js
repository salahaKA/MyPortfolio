import React from "react";
import "../Skills/Skills.css";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";

const skillsData = [
  { name: "React.js/MUI", level: 80  },
  { name: "HTML/CSS/Bootstrap", level: 90 },
  { name: "Git", level: 80 },
  { name: "MySQL", level: 80 },
  { name: "JSON", level: 60 },
  { name: "Node.js/Express.js", level: 55 },
  { name: "Problem Solving", level: 80 },
  { name: "Communication", level: 80 },
  { name: "OOPs", level: 85 },
  { name: "C++", level: 75 },
  { name: "Java", level: 55 },
  { name: "Android Studio", level: 60 },
  { name: "MongoDB", level: 30 },
  { name: "Firebase", level: 30 },
  { name: "Python", level: 50 },
];

function Skills() {
  return (
    <div className="skills-container">
      <Container>
        <h4 className="skills-title">-</h4>
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
