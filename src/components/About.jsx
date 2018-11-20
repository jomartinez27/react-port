import React from 'react';
import { Grid, Col, Image } from 'react-bootstrap';
import './About.css'

class About extends React.Component {
  render () {
    return (
      <div>
        <Image src="assets/About Banner.jpg" className="header-img" />
        <Grid>
          <Col xs={12} sm={8} smOffset={2}>
            <Image src="assets/Jose Khal Rest Cropped.jpg" className="about-profile-pic"/>
            <h3>Jose & Khal resting</h3>
            <p>This is my dog, Khal Drogo, named after Jason Mamoa's character on GOT. Being a doggy dad can be challenging, but resting is nice.</p>
          </Col>
        </Grid>
      </div>
    )
  }
}

export default About;
