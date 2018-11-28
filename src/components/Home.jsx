import React from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css'

class Home extends React.Component {
  componentDidMount() {
    const canvas = this.refs.canvas
    const ctx = canvas.getContext('2d');
    
  }

  render () {
    return (
      <Grid>
        <Row>
          <Col>
            <canvas ref="canvas" width={640} height={425}></canvas>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default Home;
