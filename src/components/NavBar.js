import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <Navbar
          collapseOnSelect
          expand="lg"
          bg=""
          variant="dark"
          className="nav"
        >
          <Navbar.Brand className="" href="/">
            COVID-19 STATS
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto  right ">
              <Nav.Link style={{ color: "white", fontSize: "1.2rem" }} href="/">
                Worldwide
              </Nav.Link>
              <Nav.Link
                style={{ color: "white", fontSize: "1.2rem" }}
                href="/country"
              >
                Per Country
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
