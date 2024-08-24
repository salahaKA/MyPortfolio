import React, { useEffect, useState } from "react";
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
  IconButton,
  TextField,
  Modal,
} from "@mui/material";
import DCS from "../assets/project1.jpeg";
import axios from "axios";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [visibleProjects, setVisibleProjects] = useState(3);
  const [showForm, setShowForm] = useState(false);
  const [newProject, setNewProject] = useState({
    title: "",
    description: "",
    technologies: "",
    codeLink: "",
    image: DCS,
  });

  useEffect(() => {
    axios
      .get("http://localhost:5001/api/projects")
      .then((response) => setProjects(response.data))
      .catch((error) =>
        console.error("There was an error fetching the projects!", error)
      );
  }, []);

  const loadMoreProjects = () => {
    setVisibleProjects((prevCount) => prevCount + 3);
  };

  const handleAddProject = () => {
    const formattedProject = {
      ...newProject,
      technologies: newProject.technologies.split(',').map(tech => tech.trim()), // Convert string to array
      image: newProject.image || DCS,
    };
  
    axios
      .post("http://localhost:5001/api/projects", formattedProject)
      .then((response) => setProjects([...projects, response.data]))
      .catch((error) =>
        console.error("There was an error adding the project!", error)
      );
    
    setShowForm(false);
    setNewProject({
      title: "",
      description: "",
      technologies: "",
      codeLink: "",
      image: "",
    });
  };
  

  const handleEditProject = (id) => {
    console.log("Editing project with id:", id);
    const updatedProject = { title: "Update Project Title" };
    axios
      .put(`http://localhost:5001/api/projects/${id}`, updatedProject)
      .then((response) => {
        setProjects(
          projects.map((project) =>
            project.id === id ? response.data : project
          )
        );
      })
      .catch((error) =>
        console.error("There was an error updating this project!", error)
      );
  };

  const handleDeleteProject = (id) => {
    axios
      .delete(`http://localhost:5001/api/projects/${id}`)
      .then(() => {
        setProjects(projects.filter((project) => project.id !== id));
      })
      .catch((error) =>
        console.error("There was an error while deleting the project!", error)
      );
  };

  const handleClearForm = () => {
    setNewProject({
      title: "",
      description: "",
      technologies: "",
      codeLink: "",
      image: DCS, // Reset to default image
    });
  };

  const handleInputChange=(e)=>{
    const {name,value}= e.target;
    setNewProject({...newProject,[name]:value});
  }

  return (
    <Box className="projects-container">
      <Typography variant="h4" component="h1" gutterBottom>
        My Projects
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={()=> setShowForm(true)}
        sx={{ marginBottom: "20px" }}
      >
        Add Project
      </Button>

      <Modal open={showForm} onClose={() => setShowForm(false)}>
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          display: 'flex',
          flexDirection: 'column',
          gap: 2
        }}>
          <Typography variant="h6" component="h2">Add New Project</Typography>
          <TextField
            label="Title"
            name="title"
            value={newProject.title}
            onChange={handleInputChange}
          />
          <TextField
            label="Description"
            name="description"
            value={newProject.description}
            onChange={handleInputChange}
          />
          <TextField
            label="Technologies (comma-separated)"
            name="technologies"
            value={newProject.technologies}
            onChange={handleInputChange}
          />
          <TextField
            label="Code Link"
            name="codeLink"
            value={newProject.codeLink}
            onChange={handleInputChange}
          />
          <TextField
            label="Image URL"
            name="image"
            value={newProject.image}
            onChange={handleInputChange}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddProject}
          >
            Save Project
          </Button>
          <Button
              variant="outlined"
              color="secondary"
              onClick={handleClearForm}
            >
              Clear
            </Button>
        </Box>
      </Modal>

      <Grid container spacing={3}>
  {projects.slice(0, visibleProjects).map((project, index) => (
    <Grid item xs={12} sm={6} md={4} key={project.id || index}>
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
            {/* Ensure that project.technologies is an array */}
            {Array.isArray(project.technologies) ? (
              project.technologies.map((tech, index) => (
                <Chip key={index} label={tech} />
              ))
            ) : (
              <Typography>No technologies available</Typography>
            )}
          </div>
          <Button size="small" href={project.codeLink} target="_blank">
            Source Code
          </Button>
          <IconButton
            onClick={() => handleEditProject(project.id)}
            aria-label="edit"
            sx={{ marginLeft: "10px" }}
          >
            <EditIcon />
          </IconButton>
          <IconButton
            onClick={() => handleDeleteProject(project.id)}
            aria-label="delete"
            sx={{ marginLeft: "10px" }}
          >
            <DeleteIcon />
          </IconButton>
        </CardContent>
      </Card>
    </Grid>
  ))}
</Grid>


      {/* Load More Button */}
      {visibleProjects < projects.length && (
        <Button onClick={loadMoreProjects} sx={{ marginTop: "20px" }}>
          Load More
        </Button>
      )}
    </Box>
  );
}

export default Projects;
