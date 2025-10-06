import React, { Component, Fragment } from "react"
import { Col, Container, Row } from "react-bootstrap"
import face from "../../asset/images/face.png";

class AboutUs extends Component {
  render() {

    return (
      <Fragment>
        <Container className="text-center">
          <h1 className="serviceMainTitle">ABOUT US</h1>
          <div className="buttom"></div>
          <Row>
            <Col lg={6} md={6} sm={12}>
                <div className="aboutUsImage">
                    <img className="aboutImg" src={face} alt="" />
                </div>
            </Col>
            <Col lg={6} md={6} sm={12}></Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default AboutUs;
