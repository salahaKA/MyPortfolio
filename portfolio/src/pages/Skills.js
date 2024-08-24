import React from 'react'
import '../styles/Skills.css'
import { Grid, LinearProgress, Typography } from '@mui/material'


const skillsData= [
  {name:'React.js', level: 85},
  {name:'Node.js', level: 80},
  {name:'HTML/CSS/JS', level: 95},
  {name:'MUI/bootstrap', level: 78},
  {name:'MySQL', level: 90},
  {name:'C++', level: 85},
  {name:'Java', level: 65},
  {name:'Python', level: 65},
  {name:'MongoDB', level: 60},
  {name:'Android Studio', level: 70},
  {name:'C#', level: 30},

]

function Skills() {
  return (
    <div className='skills-container'>
      <Typography variant='h4' className='skills-title'>
          My Skills
      </Typography>
      <Grid container spacing={3} className="skills-grid">
        {skillsData.map((skill, index) => (
          <Grid item xs={12} sm={6} key={index} className="skill-item">
            <Typography variant="h6" className="skill-name">
              {skill.name}
            </Typography>
            <LinearProgress
              variant="determinate"
              value={skill.level}
              className="skill-bar"
            />
            <Typography variant="body2" className="skill-level">
              {skill.level}%
            </Typography>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default Skills