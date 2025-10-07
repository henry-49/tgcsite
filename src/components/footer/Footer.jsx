import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component, Fragment } from 'react'
import {Container, Row, Col} from "react-bootstrap";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLocation } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';


class Footer extends Component {
  render() {
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
              <h2 className="footerName text-center">Address</h2>
              <p className="footerAddress">
                <FontAwesomeIcon icon={faLocation} /> Engerstreet 2, 40235
                Düsseldorf <br></br>
                <FontAwesomeIcon icon={faEnvelope} /> Email: info@tsc-nrw.com{" "}
                <br></br>
                <FontAwesomeIcon icon={faPhone} /> Phone: 0855189172739<br></br>
              </p>
            </Col>

            <Col lg={3} md={6} sm={12} className="p-5 text-justify">
              <h2 className="footerName text-center">Information</h2>
              <a href="#" className="footerLink">
                Company Profile
              </a>{" "}
              <br></br>
              <a href="#" className="footerLink">
                About Us
              </a>{" "}
              <br></br>
            </Col>

            <Col lg={3} md={6} sm={12} className="p-5 text-justify">
              <h2 className="footerName text-center">Policy</h2>
              <a href="#" className="footerLink">
                Data Protection
              </a>{" "}
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
            © Copyright 2025 by Tech Solutions Consult, All Rights Reserved
          </a>
        </Container>
      </Fragment>
    );
  }
}

export default Footer