import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiGit,
  SiAndroidstudio,
  SiMongodb,
  SiPycharm,
  SiJupyter,
  SiXampp,
  SiFirebase,
  SiMicrosoft,
} from "react-icons/si";
import { DiMysql } from "react-icons/di";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql /> {/* MySQL Workbench */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGit /> {/* GitHub */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAndroidstudio />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoft />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPycharm />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJupyter />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiXampp />
      </Col>

      {/* <Col xs={4} md={2} className="tech-icons">
        <SiFirebase/> 
      </Col> */}
    </Row>
  );
}

export default Toolstack;
