import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../ComponentsStyle/NavBar.css";

export default function NavBar() {
  const [isToggled, setIsToggled] = useState(false);
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search?name=${encodeURIComponent(name)}`);
  };

  return (
    <>
      <Navbar expand="lg" className="custom-navbar">
        <Container fluid>
          <span className="navbar-logo"></span>
          <Navbar.Brand href="#" className="navbar-brand">
            Manager
          </Navbar.Brand>

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
            <Nav
              className="me-auto ms-auto my-auto my-lg-0 custom-nav"
              navbarScroll
            >
              <Nav.Link as={Link} to="/addemployee" className="nav-link">
                Add Employee
              </Nav.Link>
            </Nav>
            <Form className="d-flex search-form" onSubmit={handleSearch}>
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2 search-input"
                aria-label="Search"
                onChange={(e) => setName(e.target.value)}
              />
              <Button
                variant="outline-success"
                className="search-button"
                type="submit"
              >
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
