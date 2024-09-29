import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">KADEEJATH SALAHA </span>
            from <span className="purple"> Kasaragod, Kerala, India.</span>
            <br /><br />
            Former MERN-Stack developer intern <span className="purple">@RDL Technologies Pvt Ltd</span> (03/2024 - 09/2024).
            <br /><br />
            Post Graduated in <span className="purple">MCA</span> (Master of Computer
            Application) from <span className="purple">St Aloysius Mangalore</span> (AIMIT 2022-2024). 
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Chess
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Badminton
            </li>
            <li className="about-activity">
              <ImPointRight /> Travel
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "“Shine like the whole universe is yours.”"{" "}
          </p>
          <footer className="blockquote-footer">Rumi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
