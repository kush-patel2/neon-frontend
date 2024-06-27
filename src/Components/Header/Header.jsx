import React from 'react';
import { Navbar, Nav, Container, NavDropdown, Badge } from 'react-bootstrap';
import { FaUser, FaShoppingCart } from 'react-icons/fa';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar style={{ backgroundColor: '#101010' }} expand="lg" className="mb-4 navbar navbar-expand-lg custom-navbar " fixed='top'>
      <Container>
        <Navbar.Brand href="/" className='navbar-brand'>
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
            <Nav.Link href="/aboutus" className="custom-nav-link">About Us</Nav.Link>
            <NavDropdown title="Neon Signs" id="neon-signs-dropdown" className="custom-nav-dropdown">
              <Link to="/neonfloro" className='dropdown-item'>Neon Floro</Link>
              <Link to="/multicolorneon" className='dropdown-item'>Multicolor Neon</Link>
              {/* <NavDropdown.Item href="/multicolorneon">Multicolor Neon</NavDropdown.Item> */}
              <NavDropdown.Item href="/singlecolorneon">Singlecolor Neon</NavDropdown.Item>
              <NavDropdown.Item href="/neon-controller">Controller</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="LED Board" id="LED-board-dropdown" className="custom-nav-dropdown">
              <NavDropdown.Item href="/acrylic-letters" >Acrylic Letters</NavDropdown.Item>
              <NavDropdown.Item href="/led-sign-board">Led Sign Board</NavDropdown.Item>
              <NavDropdown.Item href="/backlight-board">Back Light Board</NavDropdown.Item>
              <NavDropdown.Item href="/reversible-board">Reversible Board</NavDropdown.Item>
              <NavDropdown.Item href="/flex-board">Flex Board</NavDropdown.Item>
              <NavDropdown.Item href="/backlit-led-board">Backlit LED Board</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/neongo" className="custom-nav-link">NeonGo</Nav.Link>
            <NavDropdown title="Customize Sign" id="customize-sign-dropdown" className="custom-nav-dropdown">
              <NavDropdown.Item href="/custom-neon-floro" >Neon FloRO</NavDropdown.Item>
              <NavDropdown.Item href="#custom2">Multicolor Neon</NavDropdown.Item>
              <NavDropdown.Item href="#custom3">Singlecolor Neon</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/gallery" className="custom-nav-link">Gallery</Nav.Link>
            <Nav.Link href="/contactus" className="custom-nav-link">Contact Us</Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link href="/signup" className="custom-nav-link">
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
