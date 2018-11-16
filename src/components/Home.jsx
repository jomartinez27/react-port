import React from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css'

class Home extends React.Component {
  render () {
    return (
      <Grid>
        <Jumbotron>
          <h3>Welcome to my portfolio</h3>
          <p>I am a software developer, specializing in Front End Development</p>
          <Link to="/about">
            <Button bsStyle="primary">About</Button>
          </Link>
        </Jumbotron>
        <Row className="show-grid text-center">
          <Col xs={12} sm={4} className="projects-wrapper">
            <Image src="assets/profilel-photo.png" circle className="projects-pic" />
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default Home;
