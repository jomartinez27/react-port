import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class CustomNav extends React.Component {
  render () {
    return (
      <Navbar default collapseOnSelct>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Home</Link>
          </Navbar.Brand>
        </Navbar.Header>
      </Navbar>
    )
  }
}

export default CustomNav;
