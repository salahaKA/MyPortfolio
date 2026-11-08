import React, { useState, useRef, memo } from "react";
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiAntdesign,
  SiMui,
  SiBootstrap,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiGit,
  SiPostman,
  SiOdoo,
} from "react-icons/si";
import {
  FaMobileAlt,
  FaCubes,
  FaPlug,
  FaBug,
  FaChartBar,
  FaUserShield,
  FaVial,
  FaSyncAlt,
  FaRobot,
  FaSitemap,
  FaUsers,
  FaBuilding,
  FaTools,
  FaShoppingCart,
  FaTruck,
} from "react-icons/fa";
import { DiDjango } from "react-icons/di";

/* ---------- Data: edit only this to update skills ---------- */
const GROUPS = [
  {
    id: "frontend",
    label: "Frontend",
    skills: [
      { name: "React.js", Icon: SiReact },
      { name: "JavaScript (ES6+)", Icon: SiJavascript },
      { name: "HTML5", Icon: SiHtml5 },
      { name: "CSS3", Icon: SiCss3 },
      { name: "Responsive Design", Icon: FaMobileAlt },
      { name: "Zustand", Icon: FaCubes },
      { name: "Backend API Integration", Icon: FaPlug },
      { name: "Error Handling", Icon: FaBug },
      { name: "TypeScript (Basic)", Icon: SiTypescript },
    ],
  },
  {
    id: "ui",
    label: "UI Libraries",
    skills: [
      { name: "Ant Design", Icon: SiAntdesign },
      { name: "Material UI", Icon: SiMui },
      { name: "Bootstrap", Icon: SiBootstrap },
      { name: "Tailwind CSS", Icon: SiTailwindcss },
      { name: "AntV Charts", Icon: FaChartBar },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    skills: [
      { name: "Node.js", Icon: SiNodedotjs },
      { name: "Express.js", Icon: SiExpress },
      { name: "REST APIs", Icon: FaPlug },
      { name: "RBAC", Icon: FaUserShield },
      { name: "MySQL", Icon: SiMysql },
      { name: "Python(Basic)", Icon: DiDjango },
    ],
  },
  {
    id: "practices",
    label: "Practices",
    skills: [
      { name: "Git", Icon: SiGit },
      { name: "Postman (API Testing)", Icon: SiPostman },
      { name: "Unit Testing", Icon: FaVial },
      { name: "Agile / SDLC", Icon: FaSyncAlt },
      { name: "AI-Assisted Dev", Icon: FaRobot },
    ],
  },
  {
    id: "domain",
    label: "Domain",
    skills: [
      { name: "ERP", Icon: FaSitemap },
      { name: "HRMS", Icon: FaUsers },
      { name: "Property Management", Icon: FaBuilding },
      { name: "Maintenance", Icon: FaTools },
      { name: "Procurement", Icon: FaShoppingCart },
      { name: "Fleet Management", Icon: FaTruck },
      { name: "Odoo ERP", Icon: SiOdoo },
    ],
  },
];

/* ---------- Styles (kept in this file; no extra CSS import) ---------- */
const ACCENT = "var(--imp-text-color, #c770f0)"; // change to match your theme
const BORDER = "rgba(255,255,255,0.12)";

const s = {
  wrap: {
    maxWidth: 860,
    margin: "0 auto",
    paddingBottom: 50,
    position: "relative", // sits above background/particle layers
    zIndex: 2,
    pointerEvents: "auto",
  },
  tabs: {
    display: "flex",
    gap: 8,
    justifyContent: "center",
    padding: 4,
    marginBottom: 24,
    overflowX: "auto",
  },
  tab: (active) => ({
    flex: "0 0 auto",
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    padding: "8px 16px",
    font: "inherit",
    fontSize: "0.95rem",
    cursor: "pointer",
    borderRadius: 999,
    border: `1px solid ${active ? ACCENT : BORDER}`,
    background: active ? ACCENT : "transparent",
    color: active ? "#fff" : "rgba(255,255,255,0.65)",
  }),
  count: {
    fontSize: "0.75rem",
    minWidth: "1.4em",
    padding: "0 6px",
    borderRadius: 999,
    background: "rgba(255,255,255,0.15)",
  },
  panel: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignContent: "flex-start",
    gap: 10,
    margin: 0,
    padding: 0,
    listStyle: "none",
    minHeight: 140, // prevents layout jump when switching tabs
  },
  chip: {
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
    padding: "10px 16px",
    fontSize: "0.95rem",
    color: "#e8e6f0",
    background: "rgba(255,255,255,0.05)",
    border: `1px solid ${BORDER}`,
    borderRadius: 12,
  },
  icon: { fontSize: "1.35rem", color: ACCENT, flexShrink: 0 },
};

/* Things inline styles can't do: hover, focus ring, animation, media queries */
const EXTRA_CSS = `
.ts-tabs{scrollbar-width:none}
.ts-tabs::-webkit-scrollbar{display:none}
.ts-tab{transition:background-color .15s,border-color .15s,color .15s}
.ts-tab:hover{border-color:${ACCENT}!important;color:#fff!important}
.ts-tab:focus-visible{outline:2px solid ${ACCENT};outline-offset:2px}
.ts-panel{animation:ts-in .2s ease-out}
@keyframes ts-in{from{opacity:0;transform:translateY(4px)}to{opacity:1;transform:none}}
@media (max-width:576px){
  .ts-tabs{justify-content:flex-start!important}
  .ts-chip{padding:8px 12px!important;font-size:.875rem!important}
}
@media (prefers-reduced-motion:reduce){
  .ts-panel{animation:none}.ts-tab{transition:none}
}`;

/* ---------- Components ---------- */
const Chip = memo(function Chip({ name, Icon }) {
  return (
    <li className="ts-chip" style={s.chip}>
      <Icon aria-hidden="true" style={s.icon} />
      <span>{name}</span>
    </li>
  );
});

function Toolstack() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef([]);
  const group = GROUPS[active];

  // Arrow keys / Home / End move between tabs
  const onKeyDown = (e) => {
    const last = GROUPS.length - 1;
    const moves = {
      ArrowRight: active === last ? 0 : active + 1,
      ArrowLeft: active === 0 ? last : active - 1,
      Home: 0,
      End: last,
    };
    if (!(e.key in moves)) return;
    e.preventDefault();
    setActive(moves[e.key]);
    tabRefs.current[moves[e.key]]?.focus();
  };

  return (
    <div style={s.wrap}>
      <style>{EXTRA_CSS}</style>

      <div
        className="ts-tabs"
        style={s.tabs}
        role="tablist"
        aria-label="Skill categories"
        onKeyDown={onKeyDown}
      >
        {GROUPS.map((g, i) => (
          <button
            key={g.id}
            ref={(el) => (tabRefs.current[i] = el)}
            type="button"
            className="ts-tab"
            style={s.tab(i === active)}
            role="tab"
            id={`ts-tab-${g.id}`}
            aria-selected={i === active}
            aria-controls={`ts-panel-${g.id}`}
            tabIndex={i === active ? 0 : -1}
            onClick={() => setActive(i)}
          >
            {g.label}
            <span style={s.count}>{g.skills.length}</span>
          </button>
        ))}
      </div>

      <ul
        key={group.id}
        className="ts-panel"
        style={s.panel}
        role="tabpanel"
        id={`ts-panel-${group.id}`}
        aria-labelledby={`ts-tab-${group.id}`}
      >
        {group.skills.map(({ name, Icon }) => (
          <Chip key={name} name={name} Icon={Icon} />
        ))}
      </ul>
    </div>
  );
}

export default Toolstack;
