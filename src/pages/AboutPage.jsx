import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import TopNavigation from "../components/topnavigation/TopNavigation";
import PageTop from '../components/pagetop/PageTop';
import AboutDescription from '../components/aboutdescription/AboutDescription';
import Footer from '../components/footer/Footer';
import AboutUs from '../components/about/AboutUs';

class AboutPage extends Component {
  render() {
    return (
      <Fragment>
        
        <TopNavigation />
        <PageTop  pagetitle="About Us" />
        <AboutUs />
        <AboutDescription />
        <Footer />

      </Fragment>
    )
  }
}

export default AboutPage