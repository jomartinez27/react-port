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
            <Image src="assets/ult-home Cropped.png" circle className="projects-pic" />
            <h3>Ultimate Movie Guide</h3>
            <p>Ultimate Movie Guide is a web app that uses MovieDB API to display movies by top rated, popular, or now playing</p>
          </Col>
          <Col xs={12} sm={4} className="projects-wrapper">
            <Image src="assets/logoCover.png" circle className="projects-pic" />
            <h3>Let's Eat</h3>
            <p>Let's Eat is a web app that uses Yelp's API to randomly generate a restaurant based on location and Google Maps API to display where the restaurant is located</p>
          </Col>
          <Col xs={12} sm={4} className="projects-wrapper">
            <Image src="assets/FireWorks Cropped.png" circle className="projects-pic" />
            <h3>FireWorks</h3>
            <p>Fireworks is a JavaScript game that simulates a firework explosion. The user then clicks on the rainbow colored particle to score points and keep the game going</p>
          </Col>
          <Col xs={12} sm={4} className="projects-wrapper">
            <Image src="assets/pixel-px-home Cropped.png" circle className="projects-pic" />
            <h3>PixelPx</h3>
            <p>PixelPx is a web app that is inspired by 500px where users upload and share images with other users with the focus on pixelated art</p>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default Home;
