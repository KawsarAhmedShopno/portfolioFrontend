import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";

class Analysis extends Component {
  render() {
    var blue = "#051b35";

    return (
      <Fragment>
        <Container className="text-left">
          <h1 className="serviceMainTitle">Technology Used</h1>
          <div className="bottom"></div>
          <Row>
            <Col lg={6} md={12} sm={12}>
              <Col
                style={{ width: "100%", height: "300px" }}
                lg={6}
                md={12}
                sm={12}
              >
                <ResponsiveContainer>
                  <BarChart width={100} height={300} data="">
                    <XAxis dataKey="techonology" />
                    <Tooltip />
                    <Bar dataKey="percent" fill={blue}></Bar>
                  </BarChart>
                </ResponsiveContainer>
              </Col>
            </Col>

            <Col lg={6} md={12} sm={12}>
              <p className="text-justify serviceDescription">
                Front-end web development, also known as client-side development
                is the practice of producing HTML, CSS and JavaScript for a
                website or Web Application so that a user can see and interact
                with them directly.we use ReactJs
              </p>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Analysis;
