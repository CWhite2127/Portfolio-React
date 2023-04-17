import React from "react";
import { NavLink } from "react-router-dom";
import '../nav/nav.css'
import sickLicks from './/carter-white-high-resolution-logo-color-on-transparent-background.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navigation() {
    return (
    <header>
        <img className='navImg' src={sickLicks}></img>
        <div ></div>
        <Navbar expand="lg right">
      <Container>
          <Nav>
            <NavLink className="navBtns" to='/'>About</NavLink>
            <NavLink className="navBtns" to="contact">Contact</NavLink>
            <NavLink className="navBtns" to="portfolio">My Work</NavLink>
            <NavLink className="navBtns" to="resume">Resume</NavLink>
          </Nav>
      </Container>
    </Navbar>
    </header>
    )

}

export default Navigation;




