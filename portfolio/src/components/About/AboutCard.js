import React from "react";
import Card from "react-bootstrap/Card";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

function AboutCard() {
  return (
    <Card
      className="quote-card-view"
      style={{
        backgroundColor: "#1c1c1e", // Dark background
        border: "none",
        color: "white",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)", // Subtle shadow
      }}
    >
      <Card.Body>
        {/* <h3 style={{ color: "#9b59b6", marginBottom: "20px" }}>About Me</h3> */}
        <Tabs
          defaultActiveKey="experience"
          id="about-tabs"
          className="mb-3 custom-tabs"
          style={{
            borderBottom: "1px solid #9b59b6",
          }}
        >
          {/* Experience Tab */}
          <Tab
            eventKey="experience"
            title={<span style={{ color: "gray" }}>Internship Experience</span>}
          >
            <div className="tab-content">
              <div className="tab-item">
                <span style={{ color: "gray", fontSize: "14px" }}>
                  25/03/2024 - 05/09/2024
                </span>
                <h5 style={{ color: "#9b59b6", marginBottom: "5px" }}>
                  Full-Stack Developer Intern
                </h5>
                <p style={{ marginBottom: "5px" }}>
                  RDL Technologies Pvt Ltd - Sahyadri, Adyar, Karnataka
                </p>
              </div>
              <hr style={{ borderColor: "#444" }} />
              <div className="tab-item">
                <span style={{ color: "gray", fontSize: "14px" }}>
                  01/01/2022 - 30/04/2022
                </span>
                <h5 style={{ color: "#9b59b6", marginBottom: "5px" }}>
                  Python Flask Internship program
                </h5>
                <p style={{ marginBottom: "5px" }}>
                  Tequevia Technologies, NIT Calicut, Kanhangad
                </p>
              </div>
            </div>
          </Tab>

          {/* Education Tab */}
          <Tab
            eventKey="education"
            title={<span style={{ color: "gray" }}>Education</span>}
          >
            <div className="tab-content">
              <div className="tab-item">
                <span style={{ color: "gray", fontSize: "14px" }}>
                  2022-2024
                </span>
                <h5 style={{ color: "#9b59b6", marginBottom: "5px" }}>
                  Master of Computer Application
                </h5>
                <p>St Aloysius Mangalore </p>
              </div>
              <hr style={{ borderColor: "#444" }} />
              <div className="tab-item">
                <span style={{ color: "gray", fontSize: "14px" }}>
                  2019-2022
                </span>
                <h5 style={{ color: "#9b59b6", marginBottom: "5px" }}>
                  BSC Computer Science
                </h5>
                <p>Kannur University </p>
              </div>

              <hr style={{ borderColor: "#444" }} />
              <div className="tab-item">
                <span style={{ color: "gray", fontSize: "14px" }}>
                  2017-2019
                </span>
                <h5 style={{ color: "#9b59b6", marginBottom: "5px" }}>
                  HSE Science
                </h5>
                <p>SAT HSS Manjeshwar </p>
              </div>
            </div>
          </Tab>

          {/* Interests & Hobbies Tab */}
          <Tab
            eventKey="interests"
            title={<span style={{ color: "gray" }}>Interests & Hobbies</span>}
          >
            <div className="tab-content">
              <ul style={{ paddingLeft: "0", listStyle: "none" }}>
                <li style={{ marginBottom: "15px" }}>
                  <h6
                    style={{
                      color: "#9b59b6",
                      fontWeight: "bold",
                      marginBottom: "5px",
                    }}
                  >
                    Coding
                  </h6>
                  <p style={{ color: "white", margin: "0" }}>
                    Passionate about developing web applications and learning
                    new programming languages.
                  </p>
                </li>

                {/* <hr style={{ borderColor: "#444" }} /> */}

                <li style={{ marginBottom: "15px" }}>
                  <h6
                    style={{
                      color: "#9b59b6",
                      fontWeight: "bold",
                      marginBottom: "5px",
                    }}
                  >
                    Crafting
                  </h6>
                  <p style={{ color: "white", margin: "0" }}>
                    Enjoy creating handmade items and experimenting with
                    different crafts.
                  </p>
                </li>
                {/* <hr style={{ borderColor: "#444" }} /> */}
                <li style={{ marginBottom: "15px" }}>
                  <h6
                    style={{
                      color: "#9b59b6",
                      fontWeight: "bold",
                      marginBottom: "5px",
                    }}
                  >
                    Games
                  </h6>
                  <p style={{ color: "white", margin: "0" }}>
                    Love playing mobile games and engaging in sports like
                    badminton, chess for fun and relaxation.
                  </p>
                </li>

                <li style={{ marginBottom: "15px" }}>
                  <h6
                    style={{
                      color: "#9b59b6",
                      fontWeight: "bold",
                      marginBottom: "5px",
                    }}
                  >
                    Travelling
                  </h6>
                  <p style={{ color: "white", margin: "0" }}>
                    Love exploring new places and immersing myself in different
                    cultures.
                  </p>
                </li>
              </ul>
            </div>
          </Tab>
        </Tabs>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
