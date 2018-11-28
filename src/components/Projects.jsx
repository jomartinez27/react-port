import React from 'react';
import { Grid, Col, Row, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Projects.css"

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.handleImage = this.handleImage.bind(this);
    this.handleLeave = this.handleLeave.bind(this);
  }

  handleImage(e) {
    return e.target.src = "assets/ult-movie-details Cropped.png"
  }

  handleLeave(e) {
    return e.target.src = "assets/ult-home Cropped.png"
  }

  render () {
    return (
      <div>
        <Grid>
          <Row className="proj-1">
            <Col xs={12} sm={4}>
              <Image src="assets/ult-home Cropped.png"
                rounded
                responsive
                onMouseEnter={this.handleImage}
                onMouseLeave={this.handleLeave}
                />
            </Col>
            <Col xs={12} sm={8}>
              <h3>Ultimate Movie Guide</h3>
              <p>
                The Ultimate Movie Guide is a Single Page App, built using
                React/Redux. The web app utilizes MovieDB's API to fetch
                data, then displays movies according to what the user sorts
                by: "Top Rated", "Now Playing", "Most Popular". The user can
                also click on a movie title to get more information on a specific
                movie
              </p>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default Projects;
