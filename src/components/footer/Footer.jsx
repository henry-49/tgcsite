import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component, Fragment } from 'react'
import {Container, Row, Col} from "react-bootstrap";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLocation } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";


class Footer extends Component {
  render() {

    const currentYear = new Date().getFullYear();

    return (
      <Fragment>
        <Container fluid className="footerSection">
          <Row>
            <Col lg={3} md={6} sm={12} className="p-5 text-center">
              <h2 className="footerName text-center">Follow Us</h2>

              <div className="social-contianer">
                <a href="#" className="facebook social">
                  <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
                <a href="#" className="youtube social">
                  <FontAwesomeIcon icon={faYoutube} size="2x" />
                </a>
                <a href="#" className="twitter social">
                  <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
              </div>
            </Col>

            <Col lg={3} md={6} sm={12} className="p-5 text-justify">
              <h2 className="footerName">Address</h2>
              <p className="footerAddress">
                <FontAwesomeIcon icon={faLocation} /> Engerstreet 2, 40235
                Düsseldorf <br></br>
                <FontAwesomeIcon icon={faEnvelope} /> Email: info@tsc-nrw.com{" "}
                <br></br>
                <FontAwesomeIcon icon={faPhone} /> Phone: 0855189172739<br></br>
              </p>
            </Col>

            <Col lg={3} md={6} sm={12} className="p-5 text-justify">
              <h2 className="footerName">Information</h2>
              <Link className="footerLink" to="/">
                Company Profile
              </Link>{" "}
              <br></br>
              <Link className="footerLink" to="/about">
                About Us
              </Link>{" "}
              <br></br>
            </Col>

            <Col lg={3} md={6} sm={12} className="p-5 text-justify">
              <h2 className="footerName">Policy</h2>
              <Link className="footerLink" to="/data-protection">
                Data Protection
              </Link>{" "}
              <br></br>
              <a href="#" className="footerLink">
                Impressum
              </a>{" "}
              <br></br>
            </Col>
          </Row>
        </Container>

        <Container className="text-center copyrightSection" fluid>
          <a className="copyrightLink" href="#">
            © Copyright {currentYear} by Tech Solutions Consult, All Rights
            Reserved.
          </a>
        </Container>
      </Fragment>
    );
  }
}

export default Footer