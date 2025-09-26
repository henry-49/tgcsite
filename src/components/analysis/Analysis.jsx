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
    let colorPurple = "#8884d8";

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
                I am a freelance full-stack developer with over 5 years of
                hands-on experience. Throughout my career, I have strengthened
                and expanded my expertise across both frontend and backend
                technologies. My core skills include PHP, Python, JavaScript,
                Laravel, Symfony,React.js, Vue.js, Docker, MySQL, AWS, and Linux.
                <br /> <br />
                I work with a high level of independence and organization, and I
                am quick to adapt to new responsibilities and technologies. My
                ability to rapidly grasp complex concepts enables me to deliver
                efficient, reliable solutions. I am also highly motivated to
                continuously learn and refine my skills, ensuring that I stay up
                to date with the latest industry practices.
                <br /> <br />
                My way of working is characterised by a high degree of
                independence and structure. I have a quick grasp of things,
                which makes it easy for me to familiarise myself quickly with
                new areas of responsibility. I am always keen to learn new
                skills and develop existing ones.
              </p>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Analysis