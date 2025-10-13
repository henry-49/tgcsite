import React, { Component, Fragment } from 'react'
import {Container,Nav, Navbar} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import '../../asset/css/custom.css';
import '../../asset/css/bootstrap.min.css';
import Logo from '../../asset/images/tsc_logo.png';
import LogoWithIcon from '../../asset/images/tsc_white_logo.png';

class TopNavigation extends Component {

    constructor(props){
        super();
        this.state = {
          navBarTitle: "navTitle",
          navBarLogo: [LogoWithIcon], // object
          navVariant: "dark",
          navBarBackColor: "navBackground",
          navBackItem: "navItem",
          navActiveColor: "#ffd900",
          pageTopTitle: props.title,
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
        <title>{this.state.pageTopTitle}</title>

        <Navbar
          className={this.state.navBarBackColor}
          collapseOnSelect
          fixed="top"
          expand="lg"
          variant={this.state.navVariant}
        >
          <Container>
            <Navbar.Brand className={this.state.navBarTitle}>
              <NavLink to="/">
                <img src={this.state.navBarLogo} alt="Logo" />
              </NavLink>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto"></Nav>
              <Nav>
                <Nav.Link>
                  <NavLink
                    exact="true"
                    style={({ isActive }) => ({
                      color: isActive ? this.state.navActiveColor : "#ffffff",
                    })}
                    className={this.state.navBackItem}
                    to="/"
                  >
                    HOME
                  </NavLink>
                </Nav.Link>
                <Nav.Link>
                  <NavLink
                    exact="true"
                    style={({ isActive }) => ({
                      color: isActive ? this.state.navActiveColor : "#ffffff",
                    })}
                    className={this.state.navBackItem}
                    to="/about"
                  >
                    ABOUT
                  </NavLink>
                </Nav.Link>
                <Nav.Link>
                  <NavLink
                    exact="true"
                    style={({ isActive }) => ({
                      color: isActive ? this.state.navActiveColor : "#ffffff",
                    })}
                    className={this.state.navBackItem}
                    to="/services"
                  >
                    SERVICES
                  </NavLink>
                </Nav.Link>
                <Nav.Link>
                  <NavLink
                    exact="true"
                    style={({ isActive }) => ({
                      color: isActive ? this.state.navActiveColor : "#ffffff",
                    })}
                    className={this.state.navBackItem}
                    to="/training"
                  >
                    TRAINING
                  </NavLink>
                </Nav.Link>
                <Nav.Link>
                  <NavLink
                    exact="true"
                    style={({ isActive }) => ({
                      color: isActive ? this.state.navActiveColor : "#ffffff",
                    })}
                    className={this.state.navBackItem}
                    to="/portfolio"
                  >
                    PORTFOLIO
                  </NavLink>
                </Nav.Link>
                <Nav.Link>
                  <NavLink
                    exact="true"
                    style={({ isActive }) => ({
                      color: isActive ? this.state.navActiveColor : "#ffffff",
                    })}
                    className={this.state.navBackItem}
                    to="/contact"
                  >
                    CONTACT US
                  </NavLink>
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