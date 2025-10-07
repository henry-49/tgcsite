import React, { Component, Fragment} from "react"
import { Col, Container, Row } from "react-bootstrap"
import face from "../../asset/images/face.png";
import { ReactTyped } from "react-typed";

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
            <Col lg={6} md={6} sm={12}>
              <div className="aboutUsBody">
                <h2 className="aboutUsGreeting">Hi There, we are</h2>
                <h2 className="aboutUsTitle">Tech Solutions Consult</h2>
                <h3 className="aboutUsDescription">
                  We Build responsive and high-performing <br></br>{" "}
                  <ReactTyped
                    strings={[
                      "Websites 🌐",
                      "Mobile Apps 📱",
                      "Software Solutions 💻",
                      "Cloud Solutions ☁️",
                      "Software Testing 🧪 and Automation 🤖",
                      "Quality Control ✅",
                      "Design with Animations 🎨✨",
                    ]}
                    typeSpeed={80}
                    backSpeed={50}
                    backDelay={1500}
                    loop
                    showCursor
                    cursorChar="|"
                  />
                </h3>
              </div>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default AboutUs;
