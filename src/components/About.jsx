import React from 'react';
import { Grid, Col, Image, Carousel, Row, Jumbotron, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './About.css'

class About extends React.Component {
  render () {
    return (
      <div>
        <Grid className="about-container" fluid>
          <Jumbotron>
            <h3 className="jumb-text">Hello, my name is, Jose Martinez</h3>
            <p className="jumb-text">I am a software developer, specializing in Front End Development</p>
            <a target="_blank" href="https://www.linkedin.com/in/jose-martinez-517a29149/"><Button bsStyle="primary">LinkedIn</Button></a>
            <a target="_blank" href="https://github.com/jomartinez27"><Button bsStyle="primary">GitHub</Button></a>
          </Jumbotron>
          <Row>
            <Col xs={12} sm={5}>
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
                <Carousel.Item>
                  <Image src="assets/Jose Khal Beach Cropped.jpg" className=".about-profile-pic"/>
                </Carousel.Item>
              </Carousel>
            </Col>
            <Col className="about-desc">
              <h3 className="about-h3">About me</h3>
              <p>
                My interest in software development was first sparked in high
                school while taking a multimedia class. Being able to flex my
                creative muscle, problem solving and thinking things logically
                are the reasons why I enjoy software development. I have a
                passion for web and mobile apps and the fast paced world of
                technology. A strong team member, a desire to learn and pick
                brains of those around me. In the past I have built a full-stack React/Rails app,
                a JavaScript game, a MERN stack app, and a React SPA as well as my own portfolio page.
                <br />
                <br />
                Skills: Ruby/Rails, JavaScript/Node.js, React.js/Redux, CSS, HTML5.
                <br />
                Outside of programming: Powerlifting, video games, archery, and being a dog parent.
              </p>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default About;
