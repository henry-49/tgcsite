import React, { Component, Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Container, Row,Button, Modal } from "react-bootstrap";
import { faVideoSlash } from '@fortawesome/free-solid-svg-icons';

class Video extends Component {
        constructor(){
        super();
        this.state = {
            show: false
        }
    }

    handleClose = () => this.setState({show: false});
    handleShow = () => this.setState({show: true});

  render() {

    return (
      <Fragment>
        <Container className="text-center">
          <h1 className="serviceMainTitle">OUR VIDEOS</h1>
          <div className="buttom"></div>
          <Row>
            <Col lg={6} md={6} sm={12} className="videoText">
              <p
                className="serviceDescription"
                style={{ textAlign: "justify" }}
              >
                At Tech Solutions Consult, we bring over 5 years of proven
                expertise in full-stack development. Our team has continuously
                expanded its skills and knowledge to deliver personalized,
                high-quality solutions across both the frontend and backend of
                software systems. <br></br><br></br>
                Our core competencies include PHP, Python, and JavaScript, with
                strong proficiency in frameworks such as Laravel and Symfony, as
                well as libraries like React.js and Vue.js. We also specialize
                in infrastructure technologies such as Docker, relational
                databases like MySQL, cloud platforms including AWS, and
                operating systems such as Linux. By combining deep technical
                insight with disciplined processes and efficient workflows, we
                ensure the delivery of scalable, reliable, and future-ready
                applications.
              </p>
            </Col>

            <Col lg={6} md={6} sm={12} className="videoCard">
              <FontAwesomeIcon 
                icon={faVideoSlash} 
                className="iconProject" 
                onClick={this.handleShow} />
            </Col>
          </Row>
        </Container>

        <Modal size="lg" show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Fragment>
    );
  }
}

export default Video