import React from "react";
import { Avatar, Box, Grid, Typography } from "@mui/material";
import "../styles/About.css";
import profileImage from "../assets/profile2.jpg";

function About() {
  return (
    
      <Box className="about-content" sx={{ padding: 4, borderRadius: 2 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" className="about-title">
              About Me
            </Typography>
            <Typography
              variant="body1"
              className="about-description"
              sx={{ fontSize: "1.2rem", lineHeight: 1.6, fontWeight: 500, marginTop: 2 }}
            >
              Hello! My name is Kadeejath Salaha. I am a Full Stack Developer Intern with a passion for creating interactive and user-friendly web applications. I have experience working with various technologies including React, Bootstrap/MUI, Node.js, Express, and MySQL.
            </Typography>
            <Typography
              variant="body1"
              className="about-description"
              sx={{ fontSize: "1.2rem", lineHeight: 1.6, fontWeight: 500, marginTop: 2 }}
            >
              I have a Post Graduate degree in Master of Computer Application (MCA) and I am always eager to learn more about technology and improve my skills.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} className="about-avatar-grid">
            <Avatar
              alt="KADEEJATH SALAHA"
              src={profileImage}
              className="about-avatar"
              sx={{ width: "100%", height: "auto", borderRadius: 2 }}
            />
          </Grid>
        </Grid>
      </Box>
    
  );
}

export default About;
