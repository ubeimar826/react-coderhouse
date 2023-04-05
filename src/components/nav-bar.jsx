import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import {Cart} from './cart'
const brand_icon = {
  src: require("../assets/burger.png"),
  width: 40,
  height: 40,
};
export class NavigationBar extends React.Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#">
            <img
              src={brand_icon.src}
              alt=""
              width={brand_icon.width}
              height={brand_icon.height}
            />            
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>              
              <NavDropdown title="Menu" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Sandwiches
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Tenders
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Wings
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.5">
                  Sides
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.6">
                  Desserts
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#home">About</Nav.Link>
              <Nav.Link href="#home">Contact</Nav.Link>
              <Nav.Link href="#home">LogIn</Nav.Link>
              <Nav.Link href="#"><Cart /></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
