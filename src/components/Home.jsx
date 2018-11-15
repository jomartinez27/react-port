import React from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css'

class Home extends React.Component {
  render () {
    return (
      <Grid>
        <Jumbotron>
          <h2>Welcome to my portfolio</h2>
          <p>I am a software developer, specializing in Front End Development</p>
        </Jumbotron>
        <Link to="/about">
          <Button bsStyle="primary">About</Button>
        </Link>
      </Grid>
    )
  }
}

export default Home;
