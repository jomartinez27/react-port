import React from 'react';
import { Grid, Col, Image } from 'react-bootstrap';
import './About.css'

class About extends React.Component {
  render () {
    return (
      <div>
        <Image src="assets/profilel-photo.png" className="header-img" />
        <Grid>
          <Col xs={12} sm={8} smOffset={2}>
            <Image src="assets/Jose Khal Rest.jpg" className="about profile-pic"/>
            <h3>Jose Martinez</h3>
            <p>Being a doggy dad can be challenging, but resting is nice.</p>
          </Col>
        </Grid>
      </div>
    )
  }
}

export default About;
