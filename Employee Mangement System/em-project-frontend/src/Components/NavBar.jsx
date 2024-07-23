import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../ComponentsStyle/NavBar.css';

export default function NavBar() {
  return (
    <>
      <Navbar expand="lg" className=" custom-navbar">
        <Container fluid>
          <span className="navbar-logo"></span>
          <Navbar.Brand href="#" className="navbar-brand">Navbar scroll</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" className="navbar-toggler" />
          
          <Navbar.Collapse id="navbarScroll" className="navbar-collapse">
            <Nav
              className="me-auto my-2 my-lg-0 custom-nav"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#action1" className="nav-link">Home</Nav.Link>
              <Nav.Link href="#action2" className="nav-link">Link</Nav.Link>
              <NavDropdown title="Link" id="navbarScrollingDropdown" className="nav-dropdown">
                <NavDropdown.Item href="#action3" className="dropdown-item">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4" className="dropdown-item">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5" className="dropdown-item">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" disabled className="nav-link-disabled">
                Link
              </Nav.Link>
            </Nav>
            <Form className="d-flex search-form">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2 search-input"
                aria-label="Search"
              />
              <Button variant="outline-success" className="search-button">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
