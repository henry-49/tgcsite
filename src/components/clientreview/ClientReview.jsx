import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick";

class ClientReview extends Component {
  render() {

     var settings = {
       autoPlaySpeed: 3000,
       autoPlay: true,
       dots: true,
       infinite: true,
       speed: 3000,
       arrows: false,
       vertical: true,
       verticalSwiping: true,
       slidesToShow: 1,
       slidesToScroll: 1,
       initialSlide: 1,
       responsive: [
         {
           breakpoint: 1024,
           settings: {
             slidesToShow: 1,
             slidesToScroll: 1,
             infinite: true,
             dots: true,
           },
         },
         {
           breakpoint: 600,
           settings: {
             slidesToShow: 1,
             slidesToScroll: 1,
             initialSlide: 1,
           },
         },
         {
           breakpoint: 480,
           settings: {
             slidesToShow: 1,
             slidesToScroll: 1,
           },
         },
       ],
     };


    return (
      <Fragment>
        <Container className="siderBack text-center" fluid>
          <h1 className="reviewMainTitle p-3">TESTIMONIAL</h1>
          <div className="reviewButtom"></div>

          <Slider {...settings}>
            <div>
              <Row className="text-center justify-content-center">
                <Col lg={6} md={6} sm={12}>
                  <img
                    className="circleImg"
                    src="https://image.freepik.com/free-photo/handsome-young-man-with-new-stylish-haircut_176420-19637.jpg"
                    alt="Image"
                  />
                  <h2 className="reviewName">Henry Smith</h2>
                  <p className="reviewDescription">
                    At Tech Solutions Consult, we bring over 5 years of proven
                    expertise in full-stack development. Our team has
                    continuously expanded its skills and knowledge to deliver
                    personalized, high-quality solutions across both the
                    frontend and backend of software systems. We build
                    responsive and high-performing websites.
                  </p>
                </Col>
              </Row>
            </div>
            <div>
              <Row className="text-center justify-content-center">
                <Col lg={6} md={6} sm={12}>
                  <img
                    className="circleImg"
                    src="https://image.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg"
                    alt="Image"
                  />
                  <h2 className="reviewName">Markus Brandy</h2>
                  <p className="reviewDescription">
                    At Tech Solutions Consult, we bring over 5 years of proven
                    expertise in full-stack development. Our team has
                    continuously expanded its skills and knowledge to deliver
                    personalized, high-quality solutions across both the
                    frontend and backend of software systems. We build
                    responsive and high-performing websites.
                  </p>
                </Col>
              </Row>
            </div>
            <div>
              <Row className="text-center justify-content-center">
                <Col lg={6} md={6} sm={12}>
                  <img
                    className="circleImg"
                    src="https://image.freepik.com/free-photo/portrait-white-man-isolated_53876-40305.jpg"
                    alt="Image"
                  />
                  <h2 className="reviewName">Willams Brandy</h2>
                  <p className="reviewDescription">
                    At Tech Solutions Consult, we bring over 5 years of proven
                    expertise in full-stack development. Our team has
                    continuously expanded its skills and knowledge to deliver
                    personalized, high-quality solutions across both the
                    frontend and backend of software systems. We build
                    responsive and high-performing websites.
                  </p>
                </Col>
              </Row>
            </div>
          </Slider>
        </Container>
      </Fragment>
    );
  }
}

export default ClientReview