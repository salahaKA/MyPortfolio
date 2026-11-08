import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Modal from "react-bootstrap/Modal";
import { FaChevronRight, FaPaintBrush, FaChessKnight } from "react-icons/fa";

const ACCENT = "#9b59b6";

/* ---------- Data ---------- */
/*
  The bullet points are drafts based on the skills on your CV.
  Edit them so they match what you actually did.
*/
const experience = [
  {
    type: "Full-time",
    date: "Aug 2025 - Oct 2026",
    role: "Junior Software Developer - React",
    company: "EQUAL ERP - Tranetech Software Solutions",
    location: "UL Cyberpark, Kozhikode, Kerala",
    points: [
      "Built React modules for ERP workflows covering HRMS, fleet management, property management, maintenance and procurement.",
      "Integrated REST APIs with centralised error handling and managed application state with Zustand.",
      "Developed data-rich screens and charts using Ant Design and AntV.",
      "Worked with role-based access control (RBAC) so each user sees only what their role allows.",
      "Tested APIs with Postman and delivered features in Agile sprints using Git.",
    ],
    tech: [
      "React",
      "Zustand",
      "Ant Design",
      "AntV",
      "Backend Integration",
      "ERP",
    ],
  },
  {
    type: "Internship",
    date: "Feb 2025 - Apr 2025",
    role: "Odoo ERP Trainee",
    company: "Cybrosys Technologies",
    location: "Kozhikode, Kerala",
    points: [
      "Trained on Odoo 18 ERP covering business workflows, ERP concepts and functional processes.",
      "Delivered live demonstrations of the Sales, Purchase and Inventory modules, showing end-to-end workflows.",
      "Strengthened Python scripting, PostgreSQL and Linux skills through coding tasks and code reviews. ",
    ],
    tech: ["Odoo18", "ERP", "Software Work FLow", "Live Demo"],
  },
  {
    type: "Internship",
    date: "Mar 2024 - Sep 2024",
    role: "Full-Stack Developer Intern",
    company: "RDL Technologies Pvt Ltd",
    location: "Sahyadri, Adyar, Karnataka",
    points: [
      "Built full-stack features end to end, from React screens to Node.js APIs and MySQL queries.",
      "Learned team workflows including Git branching and code reviews.",
    ],
    tech: ["React", "MUI", "Node.js", "Express", "MySQL", "Git"],
  },
];

const tabItems = {
  education: [
    {
      date: "2022 - 2024",
      title: "Master of Computer Application",
      text: "St Aloysius (AIMIT), Mangalore",
    },
    {
      date: "2019 - 2022",
      title: "BSc Computer Science",
      text: "Kannur University",
    },
    { date: "2017 - 2019", title: "HSE Science", text: "SAT HSS Manjeshwar" },
  ],
  interests: [
    {
      Icon: FaPaintBrush,
      title: "Crafting",
      text: "Enjoy creating handmade items and experimenting with different crafts.",
    },
    {
      Icon: FaChessKnight,
      title: "Games",
      text: "Enjoy engaging in sports such as badminton and chess.",
    },
  ],
  // extracurricular: [
  //   {
  //     Icon: FaChess,
  //     title: "Chess",
  //     text: "District-level chess player during Govt HS and HSS.",
  //   },
  // ],
};

const tabConfig = [
  { key: "experience", label: "Work Experience" },
  { key: "education", label: "Education" },
  { key: "interests", label: "Interests & Hobbies" },
  // { key: "extracurricular", label: "Extracurricular Activities" },
];

/* ---------- Styles ---------- */
const meta = { color: "#8e8e93", fontSize: "0.85rem" };

const s = {
  list: { listStyle: "none", margin: 0, padding: 0 },
  badge: (full) => ({
    fontSize: "0.7rem",
    padding: "1px 8px",
    borderRadius: 999,
    whiteSpace: "nowrap",
    color: full ? "#fff" : "#d9b8e8",
    background: full ? ACCENT : "rgba(155,89,182,0.15)",
    border: `1px solid ${ACCENT}`,
  }),
  tag: {
    fontSize: "0.75rem",
    padding: "2px 10px",
    color: "#d9b8e8",
    background: "rgba(155,89,182,0.15)",
    border: "1px solid rgba(155,89,182,0.4)",
    borderRadius: 999,
  },
};

/* Hover, focus, timeline line and modal theme can't be done inline */
const CSS = `
.xp-list{position:relative}
.xp-list::before{content:"";position:absolute;left:5px;top:10px;bottom:10px;width:2px;background:#3a3a3e}
.xp-item{position:relative;padding-left:26px;margin-bottom:6px}
.xp-item::before{content:"";position:absolute;left:0;top:20px;width:12px;height:12px;border-radius:50%;background:#1c1c1e;border:2px solid ${ACCENT}}
.xp-btn{display:flex;align-items:center;gap:12px;width:100%;padding:10px 12px;text-align:left;font:inherit;color:inherit;background:transparent;border:1px solid transparent;border-radius:10px;cursor:pointer;transition:background-color .15s,border-color .15s}
.xp-btn:hover{background:rgba(255,255,255,.05);border-color:#3a3a3e}
.xp-btn:focus-visible{outline:2px solid ${ACCENT};outline-offset:2px}
.xp-btn:hover .xp-arrow{transform:translateX(3px);color:${ACCENT}}
.xp-arrow{flex-shrink:0;color:#6e6e73;transition:transform .15s,color .15s}
.about-modal .modal-content{background:#1c1c1e;color:#fff;border:1px solid #3a3a3e;border-radius:12px}
.about-modal .modal-header{border-bottom:1px solid #3a3a3e}
.about-modal .btn-close{filter:invert(1)}
.xp-row{padding:10px 12px}
.tile-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(230px,1fr));gap:12px}
.tile{display:flex;align-items:flex-start;gap:14px;padding:14px;background:rgba(255,255,255,.04);border:1px solid #3a3a3e;border-radius:12px}
.tile-icon{flex-shrink:0;display:grid;place-items:center;width:40px;height:40px;border-radius:10px;background:rgba(155,89,182,.15);color:${ACCENT};font-size:1.1rem}
@media (max-width:576px){.xp-btn{flex-wrap:wrap}}
@media (prefers-reduced-motion:reduce){.xp-btn,.xp-arrow{transition:none}}
`;

/* ---------- Experience: compact timeline + details modal ---------- */
function ExperienceTimeline() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <ul className="xp-list" style={s.list}>
        {experience.map((job, i) => (
          <li className="xp-item" key={job.role}>
            <button
              type="button"
              className="xp-btn"
              onClick={() => setSelected(i)}
              aria-haspopup="dialog"
              aria-label={`${job.role}, ${job.company}. View details`}
            >
              <span style={{ flex: 1, minWidth: 0 }}>
                <span style={{ display: "block", fontWeight: 600 }}>
                  {job.role}
                </span>
                <span style={meta}>
                  {job.company.split(" - ")[0]} · {job.date}
                </span>
              </span>
              <span style={s.badge(job.type === "Full-time")}>{job.type}</span>
              <FaChevronRight className="xp-arrow" aria-hidden="true" />
            </button>
          </li>
        ))}
      </ul>

      <Modal
        show={selected !== null}
        onHide={() => setSelected(null)}
        centered
        dialogClassName="about-modal"
        aria-labelledby="xp-modal-title"
      >
        {selected !== null && (
          <>
            <Modal.Header closeButton>
              <div>
                <Modal.Title
                  as="h5"
                  id="xp-modal-title"
                  style={{ color: ACCENT }}
                >
                  {experience[selected].role}
                </Modal.Title>
                <div style={{ marginTop: 4 }}>
                  {experience[selected].company}
                </div>
                <div style={meta}>
                  {experience[selected].location} · {experience[selected].date}
                </div>
              </div>
            </Modal.Header>
            <Modal.Body>
              <ul
                style={{
                  paddingLeft: 18,
                  color: "#d0d0d4",
                  lineHeight: 1.55,
                  fontSize: "0.92rem",
                }}
              >
                {experience[selected].points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 6,
                  marginTop: 12,
                }}
              >
                {experience[selected].tech.map((t) => (
                  <span key={t} style={s.tag}>
                    {t}
                  </span>
                ))}
              </div>
            </Modal.Body>
          </>
        )}
      </Modal>
    </>
  );
}

/* ---------- Education: same timeline look, no popup needed ---------- */
function EducationTimeline({ items }) {
  return (
    <ul className="xp-list" style={s.list}>
      {items.map(({ date, title, text }) => (
        <li className="xp-item" key={title}>
          <div className="xp-row">
            <span style={{ display: "block", fontWeight: 600 }}>{title}</span>
            <span style={meta}>
              {text} · {date}
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
}

/* ---------- Interests and Extracurricular: icon tiles ---------- */
function TileGrid({ items }) {
  return (
    <ul className="tile-grid" style={s.list}>
      {items.map(({ Icon, title, text }) => (
        <li className="tile" key={title}>
          <span className="tile-icon" aria-hidden="true">
            <Icon />
          </span>
          <span>
            <span style={{ display: "block", fontWeight: 600 }}>{title}</span>
            <span style={{ ...meta, lineHeight: 1.5 }}>{text}</span>
          </span>
        </li>
      ))}
    </ul>
  );
}

function AboutCard() {
  return (
    <Card
      className="quote-card-view"
      style={{
        backgroundColor: "#1c1c1e",
        border: "none",
        color: "white",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
      }}
    >
      <style>{CSS}</style>
      <Card.Body>
        <Tabs
          defaultActiveKey="experience"
          id="about-tabs"
          className="mb-3 custom-tabs"
          style={{ borderBottom: `1px solid ${ACCENT}` }}
        >
          {tabConfig.map(({ key, label }) => (
            <Tab
              key={key}
              eventKey={key}
              title={<span style={{ color: "gray" }}>{label}</span>}
            >
              {key === "experience" ? (
                <ExperienceTimeline />
              ) : key === "education" ? (
                <EducationTimeline items={tabItems.education} />
              ) : (
                <TileGrid items={tabItems[key]} />
              )}
            </Tab>
          ))}
        </Tabs>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
