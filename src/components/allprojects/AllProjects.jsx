import React, { Component, Fragment } from 'react'
import { Row, Card, Col, Container, Button} from 'react-bootstrap'

class AllProjects extends Component {
  render() {
    return (
        <Fragment>
                <Container className="text-center">
                  <h1 className="serviceMainTitle">RECENT PROJECT</h1>
                  <div className="buttom"></div>
                  <Row>
                    <Col lg={4} md={6} sm={12}>
                      <Card className="projectCard">
                        <Card.Img
                          variant="top"
                          src="https://image.freepik.com/free-vector/online-course-tutorials_52683-37860.jpg"
                        />
                        <Card.Body>
                          <Card.Title className="serviceName">
                            Project Name One
                          </Card.Title>
                          <Card.Text className="serviceDescription">
                            Some quick example text to build on the card title and make
                            up the bulk of the card's content.
                          </Card.Text>
                          <Button variant="primary">Visit Website</Button>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                      <Card className="projectCard">
                        <Card.Img
                          variant="top"
                          src="https://image.freepik.com/free-vector/online-tutorials-concept_52683-37481.jpg"
                        />
                        <Card.Body>
                          <Card.Title className="serviceName">
                            Project Name Two
                          </Card.Title>
                          <Card.Text className="serviceDescription">
                            Some quick example text to build on the card title and make
                            up the bulk of the card's content.
                          </Card.Text>
                          <Button variant="primary">Visit Website</Button>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                      <Card className="projectCard">
                        <Card.Img
                          variant="top"
                          src="https://image.freepik.com/free-vector/online-courses-concept_23-2148533386.jpg"
                        />
                        <Card.Body>
                          <Card.Title className="serviceName">
                            Project Name Three
                          </Card.Title>
                          <Card.Text className="serviceDescription">
                            Some quick example text to build on the card title and make
                            up the bulk of the card's content.
                          </Card.Text>
                          <Button variant="primary">Visit Website</Button>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                      <Card className="projectCard">
                        <Card.Img
                          variant="top"
                          src="https://image.freepik.com/free-vector/online-courses-concept_23-2148533386.jpg"
                        />
                        <Card.Body>
                          <Card.Title className="serviceName">
                            Project Name Four
                          </Card.Title>
                          <Card.Text className="serviceDescription">
                            Some quick example text to build on the card title and make
                            up the bulk of the card's content.
                          </Card.Text>
                          <Button variant="primary">Visit Website</Button>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                      <Card className="projectCard">
                        <Card.Img
                          variant="top"
                          src="https://image.freepik.com/free-vector/online-courses-concept_23-2148533386.jpg"
                        />
                        <Card.Body>
                          <Card.Title className="serviceName">
                            Project Name Five
                          </Card.Title>
                          <Card.Text className="serviceDescription">
                            Some quick example text to build on the card title and make
                            up the bulk of the card's content.
                          </Card.Text>
                          <Button variant="primary">Visit Website</Button>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                      <Card className="projectCard">
                        <Card.Img
                          variant="top"
                          src="https://image.freepik.com/free-vector/online-courses-concept_23-2148533386.jpg"
                        />
                        <Card.Body>
                          <Card.Title className="serviceName">
                            Project Name Six
                          </Card.Title>
                          <Card.Text className="serviceDescription">
                            Some quick example text to build on the card title and make
                            up the bulk of the card's content.
                          </Card.Text>
                          <Button variant="primary">Visit Website</Button>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Container>
        </Fragment>
    )
  }
}

export default AllProjects