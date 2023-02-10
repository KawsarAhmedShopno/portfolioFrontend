import React, { Component, Fragment } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";

class Project extends Component {
  render() {
    return (
      <Fragment>
        <Container className="text-left">
          <h1 className="serviceMainTitle">Recent Projects</h1>
          <div className="bottom"></div>
          <Row>
            <Col lg={4} md={6} sm={12}>
              <Card className="projectCard" style={{ width: "18rem" }}>
                <Card.Img variant="top" src="" />
                <Card.Body>
                  <Card.Title className="serviceName">project_name</Card.Title>
                  <Card.Text className="serviceDescription">
                    project_description
                  </Card.Text>
                  <NavLink as={Link} to="">
                    visit
                  </NavLink>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Project;
