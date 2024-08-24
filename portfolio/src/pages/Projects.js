import React, { useState } from "react";
import "../styles/Projects.css";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Chip,
} from "@mui/material";

import DCS from "../assets/project1.jpeg";

function Projects() {
  const [visibleProjects, setVisibleProjects] = useState(3);

  const projectData = [
    {
      title: "Digital CheckSheet",
      description:
        "Internship project @RDL Technologies, It is a Web Application for Organization(RDl Tech) to make paper based checksheet dynamically",
      // modules: "Super-admin, Admin, User",
      technologies: ["React.js", "CSS", "MUI", "Node.js", "MySQL", "Git"],
      codeLink: "https://github.com/salahaKA/checklist",
      image: DCS,
    },
    {
      title: "Personal Portfolio",
      description:
        "Internship project @CognifyzTechnologies, My Personal Portfolio web application",
      technologies: ["React.js", "CSS", "MUI", "Git"],
      codeLink:
        "https://github.com/salahaKA/Cognifyz-Tech/tree/main/Level2_Intermediate/portfolio",
      image: DCS,
    },
    {
      title: "Bharath Enterprises",
      description:
        "MCA 3rd semester BCP project, It is an E-commerce Full stack web Application for our client, the owner of Bharath Enterprises @Mangalore",
      technologies: ["HTML/CSS/JS", "Bootstrap", "Python-Django", "SQLite"],
      codeLink: "https://github.com/salahaKA/BharathEnterprises-Django",
      image: DCS,
    },
    {
      title: "PenGes",
      description:
        "2nd semester AIMIT mini project, Simple Android Mobile Notes Application",
      technologies: ["Java", "XML", "Firebase"],
      codeLink: "https://github.com/salahaKA/penGes_android_app",
      image: DCS,
    },
    {
      title: "We Care",
      description:
        "BSC final year Internship project done @Tequevia Technologies, It’s a full stack Palliative Care web application.",
      technologies: ["HTML/CSS/JS", "Bootstrap", "Python-Flask", "MySQL"],
      codeLink: "#",
      image: DCS,
    },
  ];

  const loadMoreProjects = () => {
    setVisibleProjects(prevCount => prevCount + 3); // Load 3 more projects
  };

  return (
    <Box className="projects-container">
      <Typography variant="h4" component="h1" gutterBottom>
        My Projects
      </Typography>

      <Grid container spacing={3}>
        {projectData.slice(0, visibleProjects).map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardMedia
                component="img"
                height="80"
                image={project.image || "https://via.placeholder.com/300"}
                alt={project.title}
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
                <div>
                  {project.technologies.map((tech, index) => (
                    <Chip key={index} label={tech} />
                  ))}
                </div>
                <Button size="small" href={project.codeLink} target="_blank">
                  Source Code
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Load More Button */}
      {visibleProjects < projectData.length && (
        <Button onClick={loadMoreProjects} sx={{ marginTop: "20px" }}>
          Load More
        </Button>
      )}
    </Box>
  );
}
export default Projects;