import React, { useState } from "react";
import { Navbar, Nav, Container, NavDropdown, Badge } from "react-bootstrap";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  const handleNavClick = () => {
    setExpanded(false);
  };
  return (
    <Navbar
      style={{ backgroundColor: "#101010" }}
      expand="lg"
      className="mb-4 navbar navbar-expand-lg custom-navbar"
      fixed="top"
      expanded={expanded}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="navbar-brand" onClick={handleNavClick}>
          <img
            alt="Logo"
            src="/images/logo.png" // Replace with the actual logo path
            height="40"
          />{" "}
          Neon Creative Concept 11
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : 'expanded')}/>
        <Navbar.Collapse id="basic-navbar-nav" className="navbar-collapse">
          <Nav className="ml-auto navbar-nav">
            <Nav.Link
              as={Link}
              to="/aboutus"
              className="custom-nav-link nav-item"
              onClick={handleNavClick}
            >
              About Us
            </Nav.Link>

            <NavDropdown
              title="Neon Signs"
              id="neon-signs-dropdown"
              className="custom-nav-dropdown nav-item"
            >
              <NavDropdown.Item as={Link} to="/neonfloro" onClick={handleNavClick}>
                Neon Floro
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/multicolorneon" onClick={handleNavClick}>
                Multicolor Neon
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/singlecolorneon" onClick={handleNavClick}>
                Singlecolor Neon
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/neon-controller" onClick={handleNavClick}>
                Controller
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title="LED Board"
              id="LED-board-dropdown"
              className="custom-nav-dropdown nav-item"
            >
              <NavDropdown.Item as={Link} to="/acrylic-letters" onClick={handleNavClick}>
                Acrylic Letters
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/led-sign-board" onClick={handleNavClick}>
                Led Sign Board
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/backlight-board" onClick={handleNavClick}>
                Back Light Board
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/reversible-board" onClick={handleNavClick}>
                Reversible Board
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/flex-board" onClick={handleNavClick}>
                Flex Board
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/backlit-led-board" onClick={handleNavClick}>
                Backlit LED Board
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link
              as={Link}
              to="/neongo"
              className="custom-nav-link nav-item"
              onClick={handleNavClick}
            >
              NeonGo
            </Nav.Link>

            <NavDropdown
              title="Customize Sign"
              id="customize-sign-dropdown"
              className="custom-nav-dropdown nav-item"
            >
              <NavDropdown.Item as={Link} to="/custom-neon-floro" onClick={handleNavClick}>
                Neon FloRO
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/custom-multicolor" onClick={handleNavClick}>
                Multicolor Neon
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/custom-singlecolor" onClick={handleNavClick}>
                Singlecolor Neon
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link
              as={Link}
              to="/gallery"
              className="custom-nav-link nav-item"
              onClick={handleNavClick}
            >
              Gallery
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/contactus"
              className="custom-nav-link nav-item"
              onClick={handleNavClick}
            >
              Contact Us
            </Nav.Link>
          </Nav>

          <Nav className="ml-auto">
            <Nav.Link
              as={Link}
              to="/signup"
              className="custom-nav-link nav-item"
              onClick={handleNavClick}
            >
              <FaUser style={{ color: "#FF1744" }} />
            </Nav.Link>

            <Nav.Link as={Link} to="/" className="custom-nav-link nav-item" onClick={handleNavClick}>
              <FaShoppingCart />
              <Badge pill bg="danger" className="custom-badge">
                0
              </Badge>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
