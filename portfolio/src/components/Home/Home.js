import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaDownload } from "react-icons/fa";
import myImg from "../../Assets/salaha.jpg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

const ACCENT = "#9b59b6";

// Turn this on once Salaha_KA_Resume.pdf is in the /public folder.
const SHOW_CV_BUTTON = false;

/* ---------- Content: edit only this ---------- */
const PROFILE = {
  name: "KADEEJATH SALAHA",
  // The typed titles (in Type.jsx) already say "developer", so this line
  // describes the work instead of repeating the title.
  summary:
    "Contributing to interactive web applications, dashboards and ERP systems using React, Node.js and MySQL.",
  location: "Kasaragod, Kerala, India",
  cvHref: `${process.env.PUBLIC_URL}/Salaha_KA_Resume.pdf`,
  cvFileName: "Salaha_KA_Resume.pdf",
};

/* ---------- Styles ---------- */
const CSS = `
.home-content{position:relative;z-index:1} /* keeps text above the particle background */
.home-header .heading,.home-header .heading-name{padding-left:0!important} /* lines the greeting and name up with the text below */
.hm-type{min-height:3.5rem;margin-top:8px;text-align:left} /* stops the page jumping while text types */
.hm-photo{display:block;width:100%;max-width:300px;aspect-ratio:1;margin:0 auto;object-fit:cover;object-position:center 20%;border-radius:50%;border:3px solid ${ACCENT};box-shadow:0 0 40px rgba(155,89,182,.35)}
.hm-summary{margin:12px 0 6px;font-size:1.1rem;line-height:1.5;color:#d0d0d4;max-width:46ch}
.hm-location{margin:0;font-size:.95rem;color:#8e8e93}
.hm-actions{margin-top:24px}
.hm-note{margin:10px 0 0;font-size:.85rem;color:#ff8a80}
.hm-btn{display:inline-flex;align-items:center;gap:8px;padding:10px 22px;font:inherit;font-size:.95rem;font-weight:500;color:#fff;background:${ACCENT};border:1px solid ${ACCENT};border-radius:999px;cursor:pointer;transition:background-color .15s,border-color .15s}
.hm-btn:hover{background:#8445a1;border-color:#8445a1}
.hm-btn:focus-visible{outline:2px solid #fff;outline-offset:2px}
@media (prefers-reduced-motion:reduce){.hm-btn{transition:none}}
`;

/* ---------- Download CV (only rendered when SHOW_CV_BUTTON is true) ---------- */
function CvButton() {
  const [error, setError] = useState("");

  // A missing file often returns the site's index.html instead of a 404,
  // so check the response type before downloading.
  const download = async () => {
    setError("");
    try {
      const res = await fetch(PROFILE.cvHref);
      const type = res.headers.get("content-type") || "";
      if (!res.ok || type.includes("text/html")) {
        throw new Error(
          `CV not found at ${PROFILE.cvHref}. Put the PDF in the public folder.`,
        );
      }
      const url = URL.createObjectURL(await res.blob());
      const link = document.createElement("a");
      link.href = url;
      link.download = PROFILE.cvFileName;
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error(err);
      setError("Couldn't download the CV right now. Please try again later.");
    }
  };

  return (
    <div className="hm-actions">
      <button type="button" className="hm-btn" onClick={download}>
        <FaDownload aria-hidden="true" /> Download CV
      </button>
      {error && (
        <p role="alert" className="hm-note">
          {error}
        </p>
      )}
    </div>
  );
}

/* ---------- Home ---------- */
function Home() {
  return (
    <section>
      <style>{CSS}</style>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row className="align-items-center">
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

              <div className="hm-type">
                <Type />
              </div>

              <p className="hm-summary">{PROFILE.summary}</p>
              <p className="hm-location">{PROFILE.location}</p>

              {SHOW_CV_BUTTON && <CvButton />}
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={myImg}
                alt="Kadeejath Salaha"
                className="hm-photo"
                style={{ maxHeight: 250 }}
                decoding="async"
                fetchpriority="high"
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
