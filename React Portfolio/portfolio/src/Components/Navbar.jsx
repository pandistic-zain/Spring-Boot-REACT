import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
export default function NavBar() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img src={""} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#skilss">Skills</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
            </Nav>
            <span className="Navbar-text">
              <div className="socia-icons">
                <a href="#">
                  {" "}
                  <img src={""} alt="Icon1" />
                </a>
                <a href="#">
                  {" "}
                  <img src={""} alt="Icon3" />
                </a>
                <a href="#">
                  {" "}
                  <img src={""} alt="Icon2" />
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
    </>
  );
}
