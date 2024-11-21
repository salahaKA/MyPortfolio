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
            title={<span style={{ color: "gray" }}>Experience</span>}
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
                <h5 style={{ color: "#9b59b6", marginBottom: "5px" }}>
                  Master of Computer Application
                </h5>
                <p>St Aloysius Mangalore (2022-2024)</p>
              </div>
              <hr style={{ borderColor: "#444" }} />
              <div className="tab-item">
                <h5 style={{ color: "#9b59b6", marginBottom: "5px" }}>
                  BSC Computer Science
                </h5>
                <p>Kannur University (2019-2022)</p>
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
                {/* <li style={{ marginBottom: "15px" }}>
        <h6 style={{ color: "#9b59b6", fontWeight: "bold", marginBottom: "5px" }}>
          Writing
        </h6>
        <p style={{ color: "white", margin: "0" }}>
          Enjoy writing technical articles and blog posts about emerging technologies.
        </p>
      </li> */}
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
                {/* <li style={{ marginBottom: "15px" }}>
        <h6 style={{ color: "#9b59b6", fontWeight: "bold", marginBottom: "5px" }}>
          Community Involvement
        </h6>
        <p style={{ color: "white", margin: "0" }}>
          Active in volunteering and participating in community events and initiatives.
        </p>
      </li> */}
              </ul>
            </div>
          </Tab>
        </Tabs>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

// import React from "react";
// import Card from "react-bootstrap/Card";
// import { ImPointRight } from "react-icons/im";

// function AboutCard() {
//   return (
//     <Card className="quote-card-view">
//       <Card.Body>
//         <blockquote className="blockquote mb-0">
//           <p style={{ textAlign: "justify" }}>
//             Hi Everyone, I am <span className="purple">SALAHA </span>
//             from Kasaragod, Kerala, India.
//             <br />
//             <br />
//             Former Full-Stack developer intern{" "}
//             <a
//               href="https://www.rdltech.in"
//               style={{ textDecoration: "none" }}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="purple"
//             >
//               @RDL Technologies Pvt Ltd
//             </a>{" "}
//             (03/2024 - 09/2024).
//             <br />
//             <br />
//             Post Graduated in <span className="purple">MCA</span> from{" "}
//             <span className="purple">St Aloysius Mangalore</span> (AIMIT
//             2022-2024).
//             <br />
//             <br />
//             Apart from coding, some other activities that I love to do!
//           </p>
//           <ul>
//             <li className="about-activity">
//               <ImPointRight /> Crafting
//             </li>
//             {/* <li className="about-activity">
//               <ImPointRight /> Designing
//             </li> */}
//             {/* <li className="about-activity">
//               <ImPointRight /> Playing Badminton
//             </li> */}
//             <li className="about-activity">
//               <ImPointRight /> Travel
//             </li>
//           </ul>

//           {/* <p style={{ color: "rgb(155 126 172)" }}>
//             "“Shine like the whole universe is yours.”"{" "}
//           </p>
//           <footer className="blockquote-footer">Rumi</footer> */}
//         </blockquote>
//       </Card.Body>
//     </Card>
//   );
// }

// export default AboutCard;
