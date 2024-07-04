import React from 'react';
import { Navbar, Nav, Container, NavDropdown, Badge } from 'react-bootstrap';
import { FaUser, FaShoppingCart } from 'react-icons/fa';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar style={{ backgroundColor: '#101010' }} expand="lg" className="mb-4 navbar navbar-expand-lg custom-navbar" fixed='top'>
      <Container>
        <Navbar.Brand as={Link} to="/" className='navbar-brand'>
          <img
            alt="Logo"
            src="/images/logo.png" // Replace with the actual logo path
            height="40"
          />{' '}
          Neon Creative Concept 11
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='navbar-collapse'>
          <Nav className="ml-auto navbar-nav">
            <Nav.Link as={Link} to="/aboutus" className="custom-nav-link nav-item">About Us</Nav.Link>

            <NavDropdown title="Neon Signs" id="neon-signs-dropdown" className="custom-nav-dropdown nav-item">
              <NavDropdown.Item as={Link} to="/neonfloro">Neon Floro</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/multicolorneon">Multicolor Neon</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/singlecolorneon">Singlecolor Neon</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/neon-controller">Controller</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="LED Board" id="LED-board-dropdown" className="custom-nav-dropdown nav-item">
              <NavDropdown.Item as={Link} to="/acrylic-letters">Acrylic Letters</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/led-sign-board">Led Sign Board</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/backlight-board">Back Light Board</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/reversible-board">Reversible Board</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/flex-board">Flex Board</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/backlit-led-board">Backlit LED Board</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} to="/neongo" className="custom-nav-link nav-item">NeonGo</Nav.Link>

            <NavDropdown title="Customize Sign" id="customize-sign-dropdown" className="custom-nav-dropdown nav-item">
              <NavDropdown.Item as={Link} to="/custom-neon-floro">Neon FloRO</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/custom-multicolor">Multicolor Neon</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/custom-singlecolor">Singlecolor Neon</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} to="/gallery" className="custom-nav-link nav-item">Gallery</Nav.Link>
            <Nav.Link as={Link} to="/contactus" className="custom-nav-link nav-item">Contact Us</Nav.Link>
          </Nav>

          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/signup" className="custom-nav-link nav-item">
              <FaUser style={{ color: '#FF1744' }} />
            </Nav.Link>

            <Nav.Link as={Link} to="/" className="custom-nav-link nav-item">
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
}

export default Header;
