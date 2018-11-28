import React from 'react';
import { Grid, Col, Row, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Projects.css"

class Projects extends React.Component {
  render () {
    return (
      <div>
        <Grid fluid={true}>
          <Row>
            <Col>
              <Image src="assets/ult-home Cropped.png" width={400}/>
            </Col>
            <Col>
              <h3>Ultimate Movie Guide</h3>
              <p>
                The Ultimate Movie Guide is a Single Page App,
                that is built using React/Redux. This web app utilizes
                MovieDB's API to fetch data then displays the movies based
                on what the user sorts by: "Now Playing", "Top Rated", or
                "Most Popular". The user can also click on a movie
                to get more details about a specific movie.
              </p>
            </Col>
            <Col>
              <Image src="assets/ult-movie-details Cropped.png" width={400}/>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default Projects;
