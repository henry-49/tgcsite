import React, { Component, Fragment } from 'react'
import {Container,Nav, Navbar, NavDropdown, Row, Col, Button} from "react-bootstrap";
import '../../asset/css/custom.css';
import "../../asset/css/bootstrap.min.css";

class TopNav extends Component {
  render() {
    return (
      <Fragment>
        <Navbar collapseOnSelect fixed="top" expand="lg" className="bg-dark navbar-dark">
          <Container>
            <Navbar.Brand href="#home">Tech Solutions Consult</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                
              </Nav>
              <Nav>
                <Nav.Link href="#deets">HOME</Nav.Link>
                <Nav.Link href="#deets">ABOUT</Nav.Link>
                <Nav.Link href="#deets">SERVICES</Nav.Link>
                <Nav.Link href="#deets">PORTFOLIO</Nav.Link>
                <Nav.Link href="#deets">CONTACT US</Nav.Link>
                
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Fragment>
    );
  }
}

export default TopNav