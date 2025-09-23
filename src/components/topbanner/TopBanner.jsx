import React, { Component, Fragment } from 'react'
import {Container, Row, Col, Button} from "react-bootstrap";
import '../../asset/css/custom.css';
import "../../asset/css/bootstrap.min.css";


class TopBanner extends Component {
  render() {
    return (
      <Fragment>
        <Container className="topFixedBanner p-0" fluid>
          <div className="topBannerOverlay">
            <Container className="topContent">
              <Row>
                <Col className="text-center">
                  <h1 className="topTitle">Tech Guru Consult</h1>
                  <h4 className="topSubTitle">Your one-stop solution for tech consulting</h4>
                  <Button variant="primary">Let's Get Started</Button>
                </Col>
              </Row>
            </Container>
          </div>
        </Container>
      </Fragment>
    );
  }
}

export default TopBanner