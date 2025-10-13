import React, { Component, Fragment } from 'react'
import { Row, Card, Col, Container, Button, Form} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLocation } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

class ContactUs extends Component {
  render() {
    return (
      <Fragment>
        <Container className="mt-5">
          <Row>
             <Col className="mt-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4996.474085415481!2d6.813510213346316!3d51.233129171634324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b8c97d649400a3%3A0x6e9f301fb6172069!2sEngerstr.%202%2C%2040235%20D%C3%BCsseldorf!5e0!3m2!1sde!2sde!4v1759968979685!5m2!1sde!2sde"
                width="100%"
                height="450"
                style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </Col>
            
            <Col lg={6} md={6} sm={12}>
              <h1 className="serviceName">Quick Connect</h1>

              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter Your Name" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    aria-label="With textarea"
                  />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Col>

            <Col lg={6} md={6} sm={12}>
              <h1 className="serviceName">Discuss Now</h1>

              <p className="serviceDescription">
                <FontAwesomeIcon icon={faLocation} /> Engerstreet 2, 40235
                Düsseldorf <br></br>
                <FontAwesomeIcon icon={faEnvelope} /> Email: info@tsc-nrw.com{" "}
                <br></br>
                <FontAwesomeIcon icon={faPhone} /> Phone: 0855189172739<br></br>
              </p>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default ContactUs