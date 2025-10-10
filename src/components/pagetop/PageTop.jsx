import React, { Component, Fragment } from "react";
import { Container, Row, Col, Button } from 'react-bootstrap';

class PageTop extends Component {
  render() {
    return (
        <Fragment>
                <Container className="topFixedPage p-0" fluid>
                  <div className="topPageOverlay">
                    <Container className="topContentPage">
                      <Row>
                        <Col className="text-center">
                          <h4 className="topPageTitle">{this.props.pagetitle}</h4>
                        </Col>
                      </Row>
                    </Container>
                  </div>
                </Container>
              </Fragment>
    )
  }
}

export default PageTop