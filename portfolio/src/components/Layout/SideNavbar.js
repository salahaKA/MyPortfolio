import React from "react";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import {Person, Work, Build, Mail} from "@mui/icons-material"
import "../../styles/SideNavbar.css";
import { Link } from 'react-router-dom'

function SideNavbar() {
  return (
    <div variant="permanent" className="side-navbar">
      <List>
        {/* {["ABOUT ME", "PROJECTS", "SKILLS", "CONTACTS"].map((text) => (
          <ListItem button key={text} className="listItem">
            <ListItemText primary={text}></ListItemText>
          </ListItem>
        ))} */}

        <ListItem button component={Link} to="/about" className="listItem">
          <ListItemIcon>
            <Person className="icon"/>
          </ListItemIcon>
          <ListItemText primary="ABOUT ME"></ListItemText>
        </ListItem>

        <ListItem button component={Link} to="/projects" className="listItem">
        <ListItemIcon>
            <Work className="icon"/>
          </ListItemIcon>
          <ListItemText primary="PROJECTS"></ListItemText>
        </ListItem>

        <ListItem button component={Link} to="/skills" className="listItem">
        <ListItemIcon>
            <Build className="icon"/>
          </ListItemIcon>
          <ListItemText primary="SKILLS"></ListItemText>
        </ListItem>

        <ListItem button component={Link} to="/contacts" className="listItem">
        <ListItemIcon>
            <Mail className="icon"/>
          </ListItemIcon>
          <ListItemText primary="CONTACTS"></ListItemText>
        </ListItem>
      </List>
    </div>
  );
}

export default SideNavbar;
