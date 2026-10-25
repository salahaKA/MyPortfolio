import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          // "Open to work",
          // "Aspiring Software Developer",
          // "MCA Graduate",
          "Junior Software Developer",
          // "Full-Stack Developer",
          "React Developer",
          "FullStack Development",
          // "Web Development",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
