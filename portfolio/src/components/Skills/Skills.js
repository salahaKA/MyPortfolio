import React, { useState, useEffect } from "react";
import "../Skills/Skills.css";
import { Container, Row, Col } from "react-bootstrap";
import SkillItem from "./SkillItems"; 

const skillsData = [
  { name: "Problem Solving", level: 85 },
  { name: "Communication", level: 85 },
  { name: "React.js/MUI/Bootstrap/HTML5/CSS3", level: 80 },
  { name: "SQL", level: 80 },
  { name: "Python", level: 80 },
  { name: "Node.js/Express.js", level: 60 },
  { name: "OOPs/C++/Java", level: 75 },
  { name: "C#/ASP.NET", level: 50 },
  { name: "Android Studio", level: 60 },
  { name: "JQuery", level: 50 },
  { name: "MongoDB", level: 60 },
  { name: "Git", level: 80 },
];

function Skills() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true); // Trigger animation on component load
  }, []);

  return (
    <div className="skills-container">
      <Container>
        <h4 className="skills-title">-</h4>
        <Row className="skills-grid">
          {skillsData.map((skill, index) => (
            <Col xs={12} sm={6} key={index}>
              {/* Render SkillItem for each skill */}
              <SkillItem skill={skill} isVisible={isVisible} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Skills;
