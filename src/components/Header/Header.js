import React from 'react';
import {Nav, Navbar } from 'react-bootstrap';
import EmojiNatureIcon from '@material-ui/icons/EmojiNature';
// import { Link } from 'react-router-dom';
// import { Form, FormControl, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home"><h1><EmojiNatureIcon style={{ fontSize: 40 }}/>  BloomIt</h1></Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link>home</Nav.Link>
          <Nav.Link>orders</Nav.Link>
          <Nav.Link>admin</Nav.Link>
          <Nav.Link>login</Nav.Link>
        </Nav>
      </Navbar>
    );
};

export default Header;