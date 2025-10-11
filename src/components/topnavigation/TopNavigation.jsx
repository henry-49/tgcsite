import React, { Component, Fragment } from 'react'
import {Container,Nav, Navbar} from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import '../../asset/css/custom.css';
import '../../asset/css/bootstrap.min.css';
import Logo from '../../asset/images/tsc_logo.png';
import LogoWithIcon from '../../asset/images/tsc_white_logo.png';

class TopNavigation extends Component {

    constructor(){
        super();
        this.state = {
          navBarTitle: "navTitle",
          navBarLogo: [LogoWithIcon], // object
          navVariant: "dark",
          navBarBackColor: "navBackground",
          navBackItem: "navItem",
        };
    }

    onScroll = ()=> {
        if(window.scrollY > 100){
            this.setState({
              navBarTitle: "navTitleScroll",
              navBarLogo: [LogoWithIcon],
              navBarBackColor: "navBackgroundScroll",
              navBackItem: "navItemScroll",
              navVariant: "light"
            });
        }else if(window.scrollY < 100){
            this.setState({
              navBarTitle: "navTitle",
              navBarLogo: [Logo],
              navBarBackColor: "navBackground",
              navBackItem: "navItem",
              navVariant: "dark"
            });
        }
    }

    componentDidMount(){
        window.addEventListener('scroll', this.onScroll)
    }

  render() {
    return (
      <Fragment>
        <Navbar
          className={this.state.navBarBackColor}
          collapseOnSelect
          fixed="top"
          expand="lg"
          variant={this.state.navVariant}
        >
          <Container>
            <Navbar.Brand className={this.state.navBarTitle}>
              <Link to="/">
                <img src={this.state.navBarLogo} alt="Logo" />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto"></Nav>
              <Nav>
                <Nav.Link>
                  <Link className={this.state.navBackItem} to="/">
                    HOME
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link className={this.state.navBackItem} to="/about">
                    ABOUT
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link className={this.state.navBackItem} to="/services">
                    SERVICES
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link className={this.state.navBackItem} to="/training">
                    TRAINING
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link className={this.state.navBackItem} to="/portfolio">
                    PORTFOLIO
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link className={this.state.navBackItem} to="/contact">
                    CONTACT US
                  </Link>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Fragment>
    );
  }
}

export default TopNavigation