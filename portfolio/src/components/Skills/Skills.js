// import React, { useState, useEffect } from "react";
// import "../Skills/Skills.css";
// import { Container, Row, Col } from "react-bootstrap";
// import SkillItem from "./SkillItems";

// const skillsData = [
//   { name: "Problem Solving", level: 85 },
//   { name: "Communication", level: 85 },
//   { name: "React.js/MUI/Bootstrap/HTML5/CSS3", level: 85 },
//   { name: "SQL", level: 80 },
//   { name: "Python(Django)", level: 80 },
//   { name: "Git", level: 80 },
//   { name: "OOPs", level: 80 },

//   // { name: "Node.js/Express.js", level: 80 },
//   { name: "C#/ASP.NET", level: 50 },
//   { name: "Android Studio", level: 60 },

//   { name: "MongoDB", level: 60 },

  
// ];

// function Skills() {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   return (
//     <div className="skills-container">
//       <Container>
//         <h4 className="skills-title">-</h4>
//         <Row className="skills-grid">
//           {skillsData.map((skill, index) => (
//             <Col xs={12} sm={6} key={index}>
//               <SkillItem skill={skill} isVisible={isVisible} />
//             </Col>
//           ))}
//         </Row>
//       </Container>
//     </div>
//   );
// }

// export default Skills;
