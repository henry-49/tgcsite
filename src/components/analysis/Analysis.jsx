import React, { Component, Fragment } from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import { Bar, BarChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

class Analysis extends Component {

    constructor(){
        super();
        this.state = {
          data: [
            { Technology: "PHP", Projects: 100 },
            { Technology: "MySQL", Projects: 90 },
            { Technology: "Laravel", Projects: 95 },
            { Technology: "Symfony", Projects: 80 },
            { Technology: "React", Projects: 85 },
            { Technology: "OpenCart", Projects: 80 },
            { Technology: "Vue Js", Projects: 70 },
            { Technology: "Django", Projects: 60 },
            { Technology: "Python", Projects: 70 },
            { Technology: "JavaScript", Projects: 100 },
          ],
        };
    }

  render() {
    let colorBlue = "#051b35";

    return (
      <Fragment>
        <Container className="text-center">
          <h1 className="serviceMainTitle">TECHNOLOGY USED</h1>
          <div className="buttom"></div>
          <Row>
            <Col lg={6} md={12} sm={12}>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart width={100} height={300} data={this.state.data}>
                  <XAxis
                    dataKey="Technology"
                    interval={0}
                    angle={-45}
                    textAnchor="end"
                    height={80}
                  />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="Projects" fill={colorBlue} />
                </BarChart>
              </ResponsiveContainer>
            </Col>
            <Col lg={6} md={12} sm={12}>
              <p className="text-justify serviceDescription">
                At Tech Solutions Consult, we bring over 5 years of proven
                expertise in full-stack development. Our team has continuously
                expanded its skills and knowledge to deliver personalized,
                high-quality solutions across both the frontend and backend of
                software systems.
                <br /> <br />
                Our core competencies include PHP, Python, and JavaScript, with
                strong proficiency in frameworks such as Laravel and Symfony, as
                well as libraries like React.js and Vue.js. We also specialize
                in infrastructure technologies such as Docker, relational
                databases like MySQL, cloud platforms including AWS, and
                operating systems such as Linux. By combining deep technical
                insight with disciplined processes and efficient workflows, we
                ensure the delivery of scalable, reliable, and future-ready
                applications.
                <br /> <br />
                We offer expertise in OpenCart for E-Commerce,
                providing businesses with robust, customizable, and
                cost-effective online store solutions. From multi-store
                management and custom theme development to SEO optimization and
                secure integrations, we help clients build and maintain
                high-performing e-commerce platforms tailored to their unique
                needs.
              </p>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Analysis