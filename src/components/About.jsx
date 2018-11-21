import React from 'react';
import { Grid, Col, Image, Carousel } from 'react-bootstrap';
import './About.css'

class About extends React.Component {
  render () {
    return (
      <div>
        <Image src="assets/About Banner.jpg" className="header-img" />
        <Grid className="about-container">
          <Col xs={12} sm={8} smOffset={2}>
            <Carousel>
              <Carousel.Item>
                <Image src="assets/Jose Amy a_A Cropped.jpg" className=".about-profile-pic"/>
              </Carousel.Item>
              <Carousel.Item>
                <Image src="assets/Jose Khal Rest Cropped.jpg" className=".about-profile-pic"/>
              </Carousel.Item>
              <Carousel.Item>
                <Image src="assets/Jose Snow Cropped.jpg" className=".about-profile-pic"/>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Grid>
      </div>
    )
  }
}

export default About;
