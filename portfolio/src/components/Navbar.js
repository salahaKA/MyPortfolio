import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CgGitFork, CgFileDocument } from "react-icons/cg";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import logo from "../Assets/logome.jpg";
import "./Navbar.css";

const navItems = [
  { to: "/", label: "Home", icon: <AiOutlineHome /> },
  { to: "/about", label: "About", icon: <AiOutlineUser /> },
  {
    to: "/project",
    label: "Projects",
    icon: <AiOutlineFundProjectionScreen />,
  },
  { to: "/resume", label: "Resume", icon: <CgFileDocument /> },
  {
    href: "https://github.com/salahaKA/MyPortfolio",
    label: "GitHub",
    icon: <CgGitFork />,
    extra: <AiFillStar style={{ fontSize: "1.1em" }} />,
    external: true,
  },
];

function NavBar() {
  const [expand, setExpand] = useState(false);
  const [navColour, setNavColour] = useState(false);

  useEffect(() => {
    const handleScroll = () => setNavColour(window.scrollY >= 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={`${navColour ? "sticky" : "navbar"}`}
    >
      <Container>
        <Navbar.Brand
          as={Link}
          to="/"
          className="d-flex"
          onClick={() => setExpand(false)}
        >
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => setExpand(expand ? false : "expanded")}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            {navItems.map((item) => (
              <Nav.Item
                key={item.label}
                className={item.external ? "fork-btn" : ""}
              >
                {item.external ? (
                  <Button
                    href={item.href}
                    target="_blank"
                    className="fork-btn-inner"
                  >
                    {item.icon} {item.extra}
                  </Button>
                ) : (
                  <Nav.Link
                    as={Link}
                    to={item.to}
                    onClick={() => setExpand(false)}
                  >
                    {item.icon} {item.label}
                  </Nav.Link>
                )}
              </Nav.Item>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
