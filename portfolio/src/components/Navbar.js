import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logome.jpg";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";
import { FaTools } from "react-icons/fa";
import "./Navbar.css";


function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false); // State for theme toggler

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.className = isDarkMode ? "light-theme" : "dark-theme"; // Update body class
  };

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={`${navColour ? "sticky" : "navbar"} ${
        isDarkMode ? "dark-nav" : "light-nav"
      }`}
    >
      <Container>
        {/* <Navbar.Brand href="/MyPortfolio" className="d-flex">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand> */}

        <Navbar.Brand
          as={Link}
          to="/"
          className="d-flex"
          onClick={() => updateExpanded(false)}
        >
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                Projects
              </Nav.Link>
            </Nav.Item>

            {/* <Nav>
              <Nav.Item>
                <Nav.Link href="#" target="_blank" rel="noreferrer">
                  <FaTools style={{ marginBottom: "2px" }} /> Skills
                </Nav.Link>
              </Nav.Item>
            </Nav> */}

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/skills"
                onClick={() => updateExpanded(false)}
              >
                <FaTools style={{ marginBottom: "2px" }} /> Skills
              </Nav.Link>
            </Nav.Item>

            {/* <Nav.Item>
              <Nav.Link href="#" target="_blank" rel="noreferrer">
                <ImBlog style={{ marginBottom: "2px" }} /> Blogs
              </Nav.Link>
            </Nav.Item> */}

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
              </Nav.Link>
            </Nav.Item>

            {/* <Nav.Item>
              <Nav.Link href="#" target="_blank" rel="noreferrer">
                <FaServicestack style={{ marginBottom: "2px" }} /> Services
              </Nav.Link>
            </Nav.Item> */}

            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/salahaKA/MyPortfolio"
                target="_blank"
                className="fork-btn-inner"
              >
                <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                <AiFillStar style={{ fontSize: "1.1em" }} />
              </Button>
            </Nav.Item>
            {/* Theme Toggler */}
            <Nav.Item>
              <Button
                onClick={toggleTheme}
                className="theme-toggler"
                variant={isDarkMode ? "light" : "dark"}
              >
                {isDarkMode ? "🌙 Dark Mode" : "☀️ Light Mode"}
              </Button>
            </Nav.Item>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
