import React from "react";
import { Container, Nav, Navbar, NavbarBrand } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="sm" className="fixed-top">
      <Container>
        <NavbarBrand>
          <Link style={{ color: "white", textDecoration: "none" }} to="/">
            <h4 style={{ whiteSpace: "normal" }}> Система лояльности</h4>
          </Link>
        </NavbarBrand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav>
            <Link className="nav-link" to="/">
              Карты
            </Link>
            <Link className="nav-link" to="/receipt">
              Чеки
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
