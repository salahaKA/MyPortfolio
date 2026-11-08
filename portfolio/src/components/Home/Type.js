import React from "react";
import Typewriter from "typewriter-effect";
import useReducedMotion from "./useReducedMotion";

// Defined once, outside the component, so nothing is recreated on re-render.
const STRINGS = [
  "Junior Software Developer",
  "React Developer",
  "Full-Stack Development",
];

const OPTIONS = {
  strings: STRINGS,
  autoStart: true,
  loop: true,
  deleteSpeed: 50,
};

// Visually hidden, but read by screen readers
const srOnly = {
  position: "absolute",
  width: 1,
  height: 1,
  overflow: "hidden",
  clip: "rect(0 0 0 0)",
  whiteSpace: "nowrap",
};

function Type() {
  const reduced = useReducedMotion();

  // No animation for people who asked for less motion: show all titles as text.
  if (reduced) {
    return <span className="Typewriter__wrapper">{STRINGS.join(" · ")}</span>;
  }

  return (
    <>
      {/* Screen readers get the full list once, not every typed letter */}
      <span style={srOnly}>{STRINGS.join(", ")}</span>
      <span aria-hidden="true">
        <Typewriter options={OPTIONS} />
      </span>
    </>
  );
}

export default React.memo(Type);
