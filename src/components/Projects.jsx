import React from 'react';
import { Grid, Col, Row, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Projects extends React.Component {
  render () {
    return (
      <div>
        <Grid>
          <Row>
            <Col>
              <Image src="assets/ult-home.png" width={400}/>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default Projects;
