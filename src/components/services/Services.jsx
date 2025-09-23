import React, { Component, Fragment } from 'react'
import {Container, Row, Col, Button} from "react-bootstrap";
import '../../asset/css/custom.css';
import "../../asset/css/bootstrap.min.css";
import designIcon from '../../asset/images/design.png';
import ecommerceIcon from '../../asset/images/ecommerce.png';
import webIcon from '../../asset/images/web.png';


class Services extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid className="serviceSection text-center">
            <h1 className="serviceMainTitle">Our Services</h1>
            <div className="buttom"></div>
          <Row>
            <Col lg={4} md={6} sm={12}>
              <div className="serviceCard text-center">
                <img className="ecommerceIcon" src={ecommerceIcon} alt="" />
                <h2 className="serviceTitle">E-commerce</h2>
                <p className="serviceDescription">
                  We create robust e-commerce solutions to help you sell online.
                </p>
              </div>
            </Col>

            <Col lg={4} md={6} sm={12}>
              <div className="serviceCard text-center">
                <img className="designIcon" src={designIcon} alt="" />
                <h2 className="serviceTitle">Design Services</h2>
                <p className="serviceDescription">
                  We offer creative design solutions to elevate your brand.
                </p>
              </div>
            </Col>

            <Col lg={4} md={6} sm={12}>
              <div className="serviceCard text-center">
                <img className="webIcon" src={webIcon} alt="" />
                <h2 className="serviceTitle">Web Development</h2>
                <p className="serviceDescription">
                  We build responsive and high-performing websites.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Services