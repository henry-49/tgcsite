import React, { Component, Fragment } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row, Card, Col, Container} from 'react-bootstrap';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faLaptop} from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import CountUp from "react-countup";

class Summary extends Component {
  render() {
    return (
      <Fragment>
        <Container className="summaryBanner p-0" fluid>
          <div className="summaryBannerOverlay">
            <Container className="text-center">
              <Row>
                <Col lg={8} md={6} sm={12}>
                  <Row style={{ marginTop: "20%" }}>
                    <Col>
                      <FontAwesomeIcon icon={faGlobe} className="iconProject" />
                      <h1 className="countNumber">
                        <CountUp start={0} end={35} delay={0} enableScrollSpy>
                          {({ countUpRef }) => <span ref={countUpRef} />}
                        </CountUp>
                        +
                      </h1>
                      <h4 className="countTitle">Projects Completed</h4>
                      <hr className="hrTitle" />
                    </Col>

                    <Col>
                      <FontAwesomeIcon
                        icon={faLaptop}
                        className="iconProject"
                      />
                      <h1 className="countNumber">
                        <CountUp start={0} end={22} delay={0} enableScrollSpy>
                          {({ countUpRef }) => <span ref={countUpRef} />}
                        </CountUp>
                        +
                      </h1>
                      <h4 className="countTitle">Happy Clients</h4>
                      <hr className="hrTitle" />
                    </Col>

                    <Col>
                      <FontAwesomeIcon icon={faStar} className="iconProject" />
                      <h1 className="countNumber">
                        <CountUp start={0} end={15} delay={0} enableScrollSpy>
                          {({ countUpRef }) => <span ref={countUpRef} />}
                        </CountUp>
                        +
                      </h1>
                      <h4 className="countTitle">Client Reviews</h4>
                      <hr className="hrTitle" />
                    </Col>
                  </Row>
                </Col>

                <Col lg={4} md={6} sm={12}>
                  <Card className="workCard">
                    <Card.Body>
                      <Card.Title className="cardTitle">
                        What We Have Achieved
                      </Card.Title>
                      <Card.Text>
                        <p className="cardSubTitle text-justify">
                          <FontAwesomeIcon
                            icon={faCheckSquare}
                            className="iconBullet"
                          />{" "}
                          Requirement Gathering{" "}
                        </p>
                        <p className="cardSubTitle text-justify">
                          <FontAwesomeIcon
                            icon={faCheckSquare}
                            className="iconBullet"
                          />{" "}
                          System Analysis{" "}
                        </p>
                        <p className="cardSubTitle text-justify">
                          <FontAwesomeIcon
                            icon={faCheckSquare}
                            className="iconBullet"
                          />{" "}
                          Coding Testing{" "}
                        </p>
                        <p className="cardSubTitle text-justify">
                          <FontAwesomeIcon
                            icon={faCheckSquare}
                            className="iconBullet"
                          />{" "}
                          Implementation{" "}
                        </p>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
        </Container>
      </Fragment>
    );
  }
}

export default Summary