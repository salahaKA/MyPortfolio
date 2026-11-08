import React, { useState } from "react";
// import { Link } from "react-router-dom"; // needed again if you restore the View Projects button
import { Container, Row, Col } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import homeLogo from "../../Assets/homeLogo-transparent.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

const ACCENT = "#9b59b6";

/* ---------- Content: edit only this ---------- */
const PROFILE = {
  name: "KADEEJATH SALAHA",
  role: "Software developer contributing to interactive web applications, dashboards and ERP systems using React, Node.js and MySQL",
  location: "Kasaragod, Kerala, India",
  // Put your CV in the /public folder with this exact name.
  cvHref: `${process.env.PUBLIC_URL}/Salaha_KA_Resume.pdf`,
  cvFileName: "Salaha_KA_Resume.pdf",
};

// Links with an empty href are hidden automatically.
const SOCIALS = [
  { label: "GitHub", Icon: FaGithub, href: "https://github.com/salahaKA" },
  { label: "LinkedIn", Icon: FaLinkedin, href: "" }, // add your LinkedIn URL
  { label: "Email", Icon: FaEnvelope, href: "" }, // e.g. "mailto:you@example.com"
];

/* ---------- Styles ---------- */
const CSS = `
.hm-role{margin:14px 0 4px;font-size:1.15rem;color:#d0d0d4;max-width:46ch}
.hm-location{margin:0;font-size:.95rem;color:#8e8e93}
.hm-type{margin-top:20px;text-align:left}
.hm-actions{display:flex;flex-wrap:wrap;align-items:center;gap:12px;margin-top:24px}
.hm-note{flex-basis:100%;margin:0;font-size:.85rem;color:#ff8a80}
.hm-btn{font:inherit;cursor:pointer;display:inline-flex;align-items:center;gap:8px;padding:10px 22px;font-size:.95rem;font-weight:500;color:#fff;text-decoration:none;border:1px solid ${ACCENT};border-radius:999px;transition:background-color .15s,border-color .15s}
.hm-btn:hover{color:#fff;text-decoration:none}
.hm-btn-primary{background:${ACCENT}}
.hm-btn-primary:hover{background:#8445a1;border-color:#8445a1}
.hm-btn-ghost{background:transparent}
.hm-btn-ghost:hover{background:rgba(155,89,182,.2)}
.hm-socials{display:flex;gap:10px;margin:0 0 0 6px;padding:0;list-style:none}
.hm-social{display:grid;place-items:center;width:40px;height:40px;font-size:1.15rem;color:#fff;border:1px solid #4a4a4e;border-radius:50%;transition:background-color .15s,border-color .15s}
.hm-social:hover{color:#fff;background:${ACCENT};border-color:${ACCENT}}
.hm-btn:focus-visible,.hm-social:focus-visible{outline:2px solid #fff;outline-offset:2px}
@media (prefers-reduced-motion:reduce){.hm-btn,.hm-social{transition:none}}
`;

function Home() {
  const socials = SOCIALS.filter(({ href }) => href);
  const [cvError, setCvError] = useState("");

  // Downloads the PDF on click. It checks the response first, because a missing
  // file often returns the site's index.html instead of a 404.
  const handleDownloadCv = async () => {
    setCvError("");
    try {
      const res = await fetch(PROFILE.cvHref);
      const type = res.headers.get("content-type") || "";
      if (!res.ok || type.includes("text/html")) {
        throw new Error(
          `CV not found at ${PROFILE.cvHref}. Put the PDF in the public folder.`,
        );
      }
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = PROFILE.cvFileName;
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error(err);
      setCvError("Couldn't download the CV right now. Please try again later.");
    }
  };

  return (
    <section>
      <style>{CSS}</style>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <p className="heading" style={{ paddingBottom: 8 }}>
                Hi There!{" "}
                <span className="wave" role="img" aria-label="waving">
                  🙋‍♀️
                </span>
              </p>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> {PROFILE.name}</strong>
              </h1>

              <p className="hm-role">{PROFILE.role}</p>
              <p className="hm-location">{PROFILE.location}</p>

              <div className="hm-type">
                <Type />
              </div>

              {/* <div className="hm-actions">
                <button
                  type="button"
                  onClick={handleDownloadCv}
                  className="hm-btn hm-btn-primary"
                >
                  <FaDownload aria-hidden="true" /> Download CV
                </button>
                {cvError && (
                  <p role="alert" className="hm-note">
                    {cvError}
                  </p>
                )}

                {socials.length > 0 && (
                  <ul className="hm-socials">
                    {socials.map(({ label, Icon, href }) => (
                      <li key={label}>
                        <a
                          className="hm-social"
                          href={href}
                          aria-label={label}
                          {...(href.startsWith("http")
                            ? { target: "_blank", rel: "noopener noreferrer" }
                            : {})}
                        >
                          <Icon aria-hidden="true" />
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div> */}
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="Portrait of Kadeejath Salaha"
                className="home-logo"
                style={{ maxHeight: 300 }}
                decoding="async"
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
