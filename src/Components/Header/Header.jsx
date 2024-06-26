import React from 'react';
import { Navbar, Nav, Container, NavDropdown, Badge } from 'react-bootstrap';
import { FaUser, FaShoppingCart } from 'react-icons/fa';
import './Header.css'

const Header = () => {
  return (
    <Navbar style={{ backgroundColor: '#101010' }} expand="lg" className="mb-4 navbar navbar-expand-lg custom-navbar " fixed='top'>
      <Container>
        <Navbar.Brand href="#home" className='navbar-brand'>
          <img
            alt="Logo"
            src="/images/logo.png" // Replace with the actual logo path
            height="40"
          />{' '}
          Neon Creative Concept 11
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='navbar-collapse'>
          <Nav className="ml-auto">
            <Nav.Link href="#about" className="custom-nav-link">About Us</Nav.Link>
            <NavDropdown title="Neon Signs" id="neon-signs-dropdown" className="custom-nav-dropdown">
              <NavDropdown.Item href="#neon1" >Neon Floro</NavDropdown.Item>
              <NavDropdown.Item href="#neon2">Multicolor Neon</NavDropdown.Item>
              <NavDropdown.Item href="#neon3">Singlecolor Neon</NavDropdown.Item>
              <NavDropdown.Item href="#neon4">Controller</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="LED Board" id="LED-board-dropdown" className="custom-nav-dropdown">
              <NavDropdown.Item href="#neon1" >Acrylic Letters</NavDropdown.Item>
              <NavDropdown.Item href="#neon2">Led Sign Board</NavDropdown.Item>
              <NavDropdown.Item href="#neon3">Back Light Board</NavDropdown.Item>
              <NavDropdown.Item href="#neon4">Reversible Board</NavDropdown.Item>
              <NavDropdown.Item href="#neon3">Flex Board</NavDropdown.Item>
              <NavDropdown.Item href="#neon4">Backlit LED Board</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#neongo" className="custom-nav-link">NeonGo</Nav.Link>
            <NavDropdown title="Customize Sign" id="customize-sign-dropdown" className="custom-nav-dropdown">
              <NavDropdown.Item href="#custom1" >Neon FloRO</NavDropdown.Item>
              <NavDropdown.Item href="#custom2">Multicolor Neon</NavDropdown.Item>
              <NavDropdown.Item href="#custom3">Singlecolor Neon</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#gallery" className="custom-nav-link">Gallery</Nav.Link>
            <Nav.Link href="#contact-us" className="custom-nav-link">Contact Us</Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link href="#profile" className="custom-nav-link">
              <FaUser  style={{ color: '#FF1744' }}/>
            </Nav.Link>
            <Nav.Link href="#cart" className="custom-nav-link">
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