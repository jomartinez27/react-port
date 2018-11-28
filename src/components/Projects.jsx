import React from 'react';
import { Grid, Col, Row, Image, Jumbotron } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Projects.css"

class Projects extends React.Component {
  render () {
    return (
      <div>
        <Grid>
          <Jumbotron className="proj-jumbotron">
            <Image src="assets/About Banner Cropped.jpg" responsive rounded/>
          </Jumbotron>
          <Row className="show-grid text-center">
            <Col xs={12} sm={4} className="projects-wrapper">
              <Image src="assets/ult-home Cropped.png" circle className="projects-pic" />
              <a target="_blank" href="https://ult-movie-guide.herokuapp.com/#/"><h3>Ultimate Movie Guide</h3></a>
              <p>Ultimate Movie Guide is a web app that uses MovieDB API to display movies by top rated, popular, or now playing</p>
            </Col>
            <Col xs={12} sm={4} className="projects-wrapper">
              <Image src="assets/logoCover.png" circle className="projects-pic" />
              <a target="_blank" href="https://let-us-eat.herokuapp.com/#/"><h3>Let's Eat</h3></a>
              <p>Let's Eat is a web app that uses Yelp's API to randomly generate a restaurant based on location and Google Maps API to display where the restaurant is located</p>
            </Col>
            <Col xs={12} sm={4} className="projects-wrapper">
              <Image src="assets/FireWorks Cropped.png" circle className="projects-pic" />
              <a target="_blank" href="https://jomartinez27.github.io/FireWorks/"><h3>FireWorks</h3></a>
              <p>Fireworks is a JavaScript game that simulates a firework explosion. The user then clicks on the rainbow colored particle to score points and keep the game going</p>
            </Col>
            <Col xs={12} sm={4} className="projects-wrapper">
              <Image src="assets/pixel-px-home Cropped.png" circle className="projects-pic" />
              <a target="_blank" href="https://picturepixel.herokuapp.com/#/"><h3>PixelPx</h3></a>
              <p>PixelPx is a web app that is inspired by 500px where users upload and share images with other users with the focus on pixelated art</p>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default Projects;
