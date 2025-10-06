import React, { Component, Fragment } from 'react'
import {Container, Row, Col} from "react-bootstrap";
import designIcon from '../../asset/images/design.png';
import ecommerceIcon from '../../asset/images/ecommerce.png';
import webIcon from '../../asset/images/web.png';


class Services extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid className="serviceSection text-center">
          <h1 className="serviceMainTitle">OUR SERVICES</h1>
          <div className="buttom"></div>
          <Row>
            <Col lg={4} md={6} sm={12}>
              <div className="serviceCard text-center">
                <img className="ecommerceIcon" src={ecommerceIcon} alt="" />
                <h2 className="serviceName">E-commerce</h2>
                <p className="serviceDescription">
                  We create robust e-commerce solutions to help you sell online.
                </p>
              </div>
            </Col>

            <Col lg={4} md={6} sm={12}>
              <div className="serviceCard text-center">
                <img className="designIcon" src={designIcon} alt="" />
                <h2 className="serviceName">Design Services</h2>
                <p className="serviceDescription">
                  We offer creative design solutions to elevate your brand.
                </p>
              </div>
            </Col>

            <Col lg={4} md={6} sm={12}>
              <div className="serviceCard text-center">
                <img className="webIcon" src={webIcon} alt="" />
                <h2 className="serviceName">Web Development</h2>
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