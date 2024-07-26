import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../Assets/images/logo.svg";
import linkedin from "../Assets/images/nav-icon1.svg";
import facebook from "../Assets/images/nav-icon2.svg";
import insta from "../Assets/images/nav-icon3.svg";

export default function NavBar() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [isToggled, setIsToggled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  function onUpdateActiveLink(value) {
    setActiveLink(value);
  }
  const handleToggle = () => {
    setIsToggled(!isToggled);
  };


  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""} >
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        {/* Custum Toggle Button */}
        <div
            onClick={handleToggle}
            className={`toggle ${isToggled ? "open" : ""}`}
          >
            <div className="bars" id="bar1"></div>
            <div className="bars" id="bar2"></div>
            <div className="bars" id="bar3"></div>
          </div>

          <Navbar.Collapse
            id="navbarScroll"
            className={isToggled ? "show" : ""}
          >
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              Projects
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icons">
              <a href="#">
                <img src={linkedin} alt="Icon1" />
              </a>
              <a href="#">
                <img src={facebook} alt="Icon2" />
              </a>
              <a href="#">
                <img src={insta} alt="Icon3" />
              </a>
            </div>
            <button
              className="contact-me"
              onClick={() => {
                console.log("Contact Me Form");
              }}
            >
              <span>Lets Connect</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
