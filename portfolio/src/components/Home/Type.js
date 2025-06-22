import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          
          // "Open to work",
          "Aspiring Software Developer",
          "Former Full-Stack Developer Intern @RDL",
          "MCA Graduate"
          // "FullStack Development",
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
