import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
// import EmojiNatureIcon from '@material-ui/icons/EmojiNature';
import { Link } from 'react-router-dom';
import LocalFloristIcon from '@material-ui/icons/LocalFlorist';
// import { Link } from 'react-router-dom';
// import { Form, FormControl, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
  return (
    <Container>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home"><h1><LocalFloristIcon style={{ fontSize: 30 }} />  BloomIt</h1></Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link><Link to="/home">Home</Link></Nav.Link>
          <Nav.Link><Link to="/orders">Orders</Link></Nav.Link>
          <Nav.Link><Link to="/admin">Admin</Link></Nav.Link>
          <Nav.Link><Link to="/login">Login</Link></Nav.Link>
        </Nav>
      </Navbar>
    </Container>
  );
};

export default Header;