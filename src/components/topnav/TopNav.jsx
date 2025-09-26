import React, { Component, Fragment } from 'react'
import {Container,Nav, Navbar, NavDropdown, Row, Col, Button} from "react-bootstrap";
import '../../asset/css/custom.css';
import "../../asset/css/bootstrap.min.css";
import Logo from '../../asset/images/tsc_logo.png';
import LogoWithIcon from '../../asset/images/tsc_white_logo.png';

class TopNav extends Component {

    constructor(){
        super();
        this.state = {
          navBarTitle: "navTitle",
          navBarLogo: [LogoWithIcon], // object
          navBarBackColor: "navBackground",
        };
    }

    onScroll = ()=> {
        if(window.scrollY > 100){
            this.setState({
              navBarTitle: "navTitleScroll",
              navBarLogo: [LogoWithIcon],
              navBarBackColor: "navBackground",
            });
        }else if(window.scrollY < 100){
            this.setState({
              navBarTitle: "navTitle",
              navBarLogo: [Logo],
              navBarBackColor: "navBackgroundScroll",
            });
        }
    }

    componentDidMount(){
        window.addEventListener('scroll', this.onScroll)
    }

  render() {
    return (
      <Fragment>
        <Navbar className={this.state.navBarBackColor} collapseOnSelect fixed="top" expand="lg" variant="dark">
          <Container>
            <Navbar.Brand className={this.state.navBarTitle} href="#home"><img src={this.state.navBarLogo} alt="Logo" /></Navbar.Brand>
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