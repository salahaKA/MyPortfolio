import React, { useState, useEffect } from "react";
import "../Skills/Skills.css";
import { Container, Row, Col } from "react-bootstrap";
import SkillItem from "./SkillItems"; // Import the SkillItem component

const skillsData = [
  { name: "Problem Solving", level: 85 },
  { name: "Communication", level: 85 },
  { name: "React.js/MUI", level: 80 },
  { name: "HTML/CSS/Bootstrap", level: 90 },
  { name: "Git", level: 80 },
  { name: "MySQL", level: 80 },
  { name: "JSON", level: 60 },
  { name: "Node.js/Express.js", level: 55 },
  { name: "Python", level: 80 },
  { name: "OOPs", level: 85 },
  {name: "postgreSQL", level: 70},
  { name: "C++", level: 75 },
  { name: "Java", level: 55 },
  { name: "Android Studio", level: 60 },
  {name:"JQuery", level: 50},
  
  { name: "Firebase", level: 30 },
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
