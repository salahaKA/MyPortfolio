import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Passionate Software Developer",
          "Former Full-Stack Developer Intern @RDL Technologies",
          "MERN Stack Developer",
          "React/Node JS Developer",
          "FullStack Developer"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
