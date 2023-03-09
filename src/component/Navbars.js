import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd, faHome, faList, faSearch } from '@fortawesome/free-solid-svg-icons'

// This in Navbar component menu on main page 



class Navbars extends Component {
  render() {
    return (
      <div>
        <Navbar bg="primary" expand="lg">
          <Container>
            <Navbar.Brand href="#home" className='logo'>Movie-Links</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home"><Link to="/" className='underline'><FontAwesomeIcon icon={faHome} /> Home </Link></Nav.Link>
                <Nav.Link href="#link"><Link to="/list" className='underline'><FontAwesomeIcon icon={faList} /> List</Link></Nav.Link>
                <Nav.Link href="#link"><Link to="/create" className='underline'><FontAwesomeIcon icon={faAdd} /> Add-Movie</Link></Nav.Link>
                <Nav.Link href="#link"><Link to="/search" className='underline'> <FontAwesomeIcon icon={faSearch} /> Search</Link></Nav.Link>
                {/* <Nav.Link href="#link"><Link to="/update" className='underline'>Update</Link></Nav.Link> */}

              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

      </div>
    );
  }
}

export default Navbars;