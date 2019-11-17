import React from 'react'
import {Navbar,Nav,NavDropdown,Form,FormControl,Button} from 'react-bootstrap'


function Navs() {
    return (
        <div>
              <Navbar bg="light" expand="lg" sticky="top">
  <Navbar.Brand href="#home">FeedBuzz</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">About</Nav.Link>
      <NavDropdown title="Payments" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">By Cash</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">By Cheque</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">By DD</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav.Link href="#link">SignUp with <i class="fa fa-google" aria-hidden="true"></i></Nav.Link>
    
  </Navbar.Collapse>
</Navbar>
        </div>
    )
}

export default Navs
