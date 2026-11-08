import React, { useState, useRef, useEffect, useCallback } from "react";
import { Container } from "react-bootstrap";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaGlobe,
  FaFilePdf,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import Particle from "../Particle";
import DCS from "../../Assets/Projects/DCS2.png";
import penGes from "../../Assets/Projects/penGes1.png";
import Arsha from "../../Assets/Projects/Arsha.png";
import BE from "../../Assets/Projects/BE.png";
import WeCare from "../../Assets/Projects/weCare.png";
import Epitom23 from "../../Assets/Projects/Epitom.png";
import pdfDCS from "../../Assets/Projects/RDL_DCS_Salaha.pdf";
import pdfBE from "../../Assets/Projects/PPT Bharath EnterprisesEnd.pdf";
import SACAIM from "../../Assets/Projects/sacaim'24.pdf";
import pdfWecare from "../../Assets/Projects/palliativedoc(salaha).pdf";
import feedSmart from "../../Assets/Projects/smartFeedWeb.webp";

const ACCENT = "#9b59b6";
const GAP = 20; // px gap between cards (keep in sync with the CSS below)

/* ---------- Data: edit only this to update projects ---------- */
// Empty or missing links are hidden automatically.
// Put your strongest projects first.
const projects = [
  {
    img: DCS,
    title: "RDL DCS",
    subtitle: "MCA Internship project, 2024",
    description:
      "Designed and developed a dynamic Digital Check Sheet System using the MERN stack during an internship at RDL Technologies.",
    tech: ["React", "Responsive", "MySQL", "Express", "Node.js"],
    links: {
      github: "https://github.com/salahaKA/checklist.git",
      demo: "https://youtu.be/H3lzv1NUGa0",
      pdf: pdfDCS,
    },
  },
  {
    img: feedSmart,
    title: "AI-Powered Feedback System",
    subtitle: "Learning project, 2025",
    description:
      "Full-stack web application using React (MUI) and Python (Django).",
    tech: ["React", "MUI", "Python", "Django"],
    links: {
      github: "https://github.com/salahaKA/Feedback-Smart-System",
    },
  },
  {
    img: BE,
    title: "Bharath Enterprises",
    subtitle: "AIMIT BCP project, 2024",
    description:
      "Designed and developed an e-commerce hardware store to manage online sales and payments using Python Django.",
    tech: ["Python", "Django"],
    links: {
      github: "https://github.com/salahaKA/BharathEnterprises-Django.git",
      pdf: pdfBE,
    },
  },
  {
    img: WeCare,
    title: "We Care",
    subtitle: "BSc final project, 2022",
    description:
      "A Palliative Care Management System designed to streamline patient care and tracking.",
    tech: ["HTML/CSS/JS", "Bootstrap", "Flask", "MySQL"],
    links: { pdf: pdfWecare },
  },
  {
    img: Epitom23,
    title: "Diabetes Analysis Using Machine Learning",
    subtitle: "AIMIT SACAIM'23 research, 2023",
    description:
      "Contributed to the AIMIT SACAIM'23 research-based project in collaboration with the SIG team.",
    tech: ["Machine Learning", "Research"],
    links: {
      demo: "https://chapters.redshine.in/index.php/redshine/article/view/1838",
      pdf: SACAIM,
    },
  },
  {
    img: Arsha,
    title: "Web Design - Figma to Code",
    subtitle: "Responsive design",
    description: "Responsive web design built from a Figma design.",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    links: { demo: "https://arsha-demo-test.netlify.app/" },
  },
  {
    img: penGes,
    title: "penGes",
    subtitle: "AIMIT mini project, 2023",
    description:
      "Designed and built an Android note-taking app using Android Studio.",
    tech: ["Java", "XML", "SQLite", "Firebase"],
    links: { github: "https://github.com/salahaKA/penGes_android_app.git" },
  },
];

/* ---------- Links ---------- */
const LINK_META = {
  github: { label: "GitHub", Icon: FaGithub },
  demo: { label: "Demo", Icon: FaExternalLinkAlt },
  website: { label: "Live site", Icon: FaGlobe },
  pdf: { label: "PDF", Icon: FaFilePdf },
};

// Drops empty links and duplicates (the same URL used for two buttons)
function getLinks(links = {}) {
  const seen = new Set();
  return Object.entries(links)
    .filter(([, href]) => {
      if (!href || seen.has(href)) return false;
      seen.add(href);
      return true;
    })
    .map(([type, href]) => ({ ...LINK_META[type], href }));
}

/* ---------- Styles ---------- */
const CSS = `
.pj-track{display:flex;gap:${GAP}px;margin:0;padding:2px 2px 6px;list-style:none;overflow-x:auto;scroll-snap-type:x mandatory;overscroll-behavior-x:contain;scrollbar-width:none;-webkit-overflow-scrolling:touch}
.pj-track::-webkit-scrollbar{display:none}
.pj-track:focus-visible{outline:2px solid ${ACCENT};outline-offset:4px;border-radius:12px}

/* 1 card (with a peek of the next) on phones, 2 on tablets, 3 on desktop */
.pj-card{flex:0 0 85%;scroll-snap-align:start}
@media (min-width:576px){.pj-card{flex-basis:calc((100% - ${GAP}px) / 2)}}
@media (min-width:992px){.pj-card{flex-basis:calc((100% - ${GAP * 2}px) / 3)}}

.pj-card{display:flex;flex-direction:column;overflow:hidden;background:#1c1c1e;border:1px solid #3a3a3e;border-radius:12px;transition:border-color .15s}
.pj-card:hover{border-color:${ACCENT}}
.pj-img{display:block;width:100%;aspect-ratio:16/10;object-fit:cover;background:#2a2a2e}
.pj-body{display:flex;flex-direction:column;flex:1;padding:16px;text-align:left}
.pj-title{margin:0;font-size:1.05rem;font-weight:600;color:#fff;line-height:1.3}
.pj-sub{margin:2px 0 8px;font-size:.8rem;color:#8e8e93}
.pj-desc{margin:0 0 12px;font-size:.88rem;line-height:1.5;color:#d0d0d4;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}
.pj-tags{display:flex;flex-wrap:wrap;gap:6px;margin:0 0 14px;padding:0;list-style:none}
.pj-tag{font-size:.72rem;padding:2px 9px;color:#d9b8e8;background:rgba(155,89,182,.15);border:1px solid rgba(155,89,182,.4);border-radius:999px}
.pj-links{display:flex;flex-wrap:wrap;gap:8px;margin-top:auto}
.pj-link{display:inline-flex;align-items:center;gap:6px;padding:5px 12px;font-size:.8rem;color:#fff;text-decoration:none;border:1px solid #4a4a4e;border-radius:8px;transition:background-color .15s,border-color .15s}
.pj-link:hover{color:#fff;background:${ACCENT};border-color:${ACCENT}}

/* Controls: arrows + dots */
.pj-controls{display:flex;align-items:center;justify-content:center;gap:16px;margin-top:20px}
.pj-arrow{display:grid;place-items:center;width:38px;height:38px;color:#fff;background:transparent;border:1px solid ${ACCENT};border-radius:50%;cursor:pointer;transition:background-color .15s,opacity .15s}
.pj-arrow:hover:not(:disabled){background:${ACCENT}}
.pj-arrow:disabled{opacity:.3;cursor:default}
.pj-dots{display:flex;gap:8px}
.pj-dot{width:9px;height:9px;padding:0;border:0;border-radius:999px;background:#4a4a4e;cursor:pointer;transition:width .2s,background-color .2s}
.pj-dot[aria-current="true"]{width:24px;background:${ACCENT}}

.pj-link:focus-visible,.pj-arrow:focus-visible,.pj-dot:focus-visible{outline:2px solid ${ACCENT};outline-offset:2px}

@media (prefers-reduced-motion:reduce){.pj-card,.pj-link,.pj-arrow,.pj-dot{transition:none}}
`;

/* ---------- Components ---------- */
function ProjectItem({ img, title, subtitle, description, tech, links }) {
  const items = getLinks(links);
  return (
    <li className="pj-card">
      <img
        className="pj-img"
        src={img}
        alt={`${title} preview`}
        loading="lazy"
        decoding="async"
      />
      <div className="pj-body">
        <h3 className="pj-title">{title}</h3>
        <p className="pj-sub">{subtitle}</p>
        <p className="pj-desc">{description}</p>
        <ul className="pj-tags" aria-label="Technologies used">
          {tech.map((t) => (
            <li className="pj-tag" key={t}>
              {t}
            </li>
          ))}
        </ul>
        {items.length > 0 && (
          <div className="pj-links">
            {items.map(({ label, Icon, href }) => (
              <a
                key={label}
                className="pj-link"
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${title}: ${label}`}
              >
                <Icon aria-hidden="true" /> {label}
              </a>
            ))}
          </div>
        )}
      </div>
    </li>
  );
}

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function Projects() {
  const trackRef = useRef(null);
  const [state, setState] = useState({ page: 0, pages: 1, step: 0 });
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  // Reads the scroll position and works out which "page" of cards is showing.
  const update = useCallback(() => {
    const track = trackRef.current;
    const first = track?.firstElementChild;
    if (!track || !first) return;

    const cardStep = first.offsetWidth + GAP;
    const perView = Math.max(
      1,
      Math.round((track.clientWidth + GAP) / cardStep),
    );
    const pages = Math.ceil(projects.length / perView);
    const step = perView * cardStep;
    const atEnd = track.scrollLeft >= track.scrollWidth - track.clientWidth - 2;

    setCanPrev(track.scrollLeft > 2);
    setCanNext(!atEnd);
    setState({
      page: atEnd
        ? pages - 1
        : Math.min(pages - 1, Math.round(track.scrollLeft / step)),
      pages,
      step,
    });
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return undefined;

    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    update();
    track.addEventListener("scroll", onScroll, { passive: true });
    const observer = new ResizeObserver(onScroll);
    observer.observe(track);

    return () => {
      cancelAnimationFrame(frame);
      track.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, [update]);

  const scrollTo = (left) =>
    trackRef.current?.scrollTo({
      left,
      behavior: prefersReducedMotion() ? "auto" : "smooth",
    });

  const goPrev = () =>
    scrollTo(Math.max(0, trackRef.current.scrollLeft - state.step));
  const goNext = () => scrollTo(trackRef.current.scrollLeft + state.step);

  return (
    <Container fluid className="project-section">
      <style>{CSS}</style>
      <Particle />
      <Container style={{ position: "relative", zIndex: 2 }}>
        <h1 className="project-heading">
          Basic Project <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are the basic projects I've worked on during my academic days and
          internship:
        </p>

        <ul
          ref={trackRef}
          className="pj-track"
          tabIndex={0}
          aria-label="Projects, scroll horizontally"
        >
          {projects.map((project) => (
            <ProjectItem key={project.title} {...project} />
          ))}
        </ul>

        <div className="pj-controls">
          <button
            type="button"
            className="pj-arrow"
            onClick={goPrev}
            disabled={!canPrev}
            aria-label="Previous projects"
          >
            <FaChevronLeft aria-hidden="true" />
          </button>

          <div className="pj-dots">
            {Array.from({ length: state.pages }, (_, i) => (
              <button
                key={i}
                type="button"
                className="pj-dot"
                aria-label={`Go to page ${i + 1} of ${state.pages}`}
                aria-current={i === state.page}
                onClick={() => scrollTo(i * state.step)}
              />
            ))}
          </div>

          <button
            type="button"
            className="pj-arrow"
            onClick={goNext}
            disabled={!canNext}
            aria-label="Next projects"
          >
            <FaChevronRight aria-hidden="true" />
          </button>
        </div>
      </Container>
    </Container>
  );
}

export default Projects;
