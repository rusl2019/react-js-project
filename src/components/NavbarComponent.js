import React from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";

function NavbarComponent() {
  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#">
          <img alt="" src="/images/Logo.png" width="50%" height="auto" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#series">Series</Nav.Link>
            <Nav.Link href="#film">Film</Nav.Link>
            <Nav.Link href="#my_list">Daftar Saya</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <NavDropdown
              title={
                <img
                  src="/images/Profile.png"
                  alt="Profil"
                  width="30"
                  height="30"
                  className="rounded-circle"
                />
              }
              id="basic-nav-dropdown"
              className="me-2"
            >
              <NavDropdown.Item href="#action/3.1">
                Profil Saya
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Ubah Premium
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Keluar</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
