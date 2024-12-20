import React from "react";
import { useSpring, animated } from "@react-spring/web";

function SkillItem({ skill, isVisible }) {
  // Animation for individual skill
  const animationProps = useSpring({
    width: isVisible ? `${skill.level}%` : "0%",
    config: { duration: 1000 },
  });

  return (
    <div className="skill-item">
      <h6 className="skill-name">{skill.name}</h6>
      <div className="skill-bar">
        <animated.div
          style={{
            ...animationProps,
            height: "20px",
            background: "linear-gradient(to right, #6a11cb, #2575fc)",
            borderRadius: "10px",
          }}
        />
      </div>
      <span className="skill-level">{skill.level}%</span>
    </div>
  );
}

export default SkillItem;
