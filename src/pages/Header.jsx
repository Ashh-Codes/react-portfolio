import React from 'react';
import { Navbar, Nav, Button, NavLink } from 'react-bootstrap';
import './styles.css'
import { Link, Links } from 'react-router-dom'



const Header = () => {
  return (

    <Navbar  bg="dark" variant="dark" expand="md" className="p-4 ">
      <Navbar.Brand href="#home" className="mb-3 mb-md-0 me-5"><h1 className='border  p-3 rounded glowing-border me-5'>Ashitha Raj</h1></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto d-flex flex-column flex-md-row justify-content-center ms-5">
          <Nav.Link href='#about'  className="text-decoration-none text-light ms-5 mb-2 mb-md-0 me-2"><button className='btn btn-secondary '>About Me</button>
          </Nav.Link>
          <Nav.Link href="/Ashitha-portfolio.pdf" download className="text-decoration-none text-light me-2 mb-2 mb-md-0"><button className='btn btn-secondary '>Resume</button>
          </Nav.Link>
          <Nav.Link href='#projects'  className="text-decoration-none text-light"><button className='btn btn-secondary ' >Projects</button>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    );

}

export default Header;
