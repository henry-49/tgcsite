import React, { Component, Fragment } from 'react'
import {Container, Row, Col} from "react-bootstrap";
import '../../asset/css/custom.css';


class TopBanner extends Component {
  render() {
    return (
      <Fragment>
        <Container className="topFixedBanner" fluid>
          <Row>
            <Col>1 of 1</Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default TopBanner