import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";

export default class NavBar extends Component {
  state = {
    color1: "",
    color2: "",
    color3: "",
    color4: ""
  };

  componentDidMount = () => {
    const color1 = localStorage.getItem("color1");
    const color2 = localStorage.getItem("color2");
    const color3 = localStorage.getItem("color3");
    const color4 = localStorage.getItem("color4");
    this.setState({ color1, color2, color3, color4 });

    if (window.location.pathname === "/") {
      this.setState({
        color1: "red",
        color2: "white",
        color3: "white",
        color4: "white"
      });
    } else if (window.location.pathname === "/country") {
      this.setState({
        color1: "white",
        color2: "red",
        color3: "white",
        color4: "white"
      });
    } else if (window.location.pathname === "/timeline") {
      this.setState({
        color1: "white",
        color2: "white",
        color3: "red",
        color4: "white"
      });
    } else if (window.location.pathname === "/map") {
      this.setState({
        color1: "white",
        color2: "white",
        color3: "white",
        color4: "red"
      });
    }
  };
  handleSelect = async eventKey => {
    if (eventKey === "1") {
      await this.setState({
        color1: "red",
        color2: "white",
        color3: "white",
        color4: "white"
      });
      await localStorage.setItem("color4", this.state.color4);
      await localStorage.setItem("color3", this.state.color3);
      await localStorage.setItem("color2", this.state.color2);
      await localStorage.setItem("color1", this.state.color1);
    } else if (eventKey === "2") {
      await this.setState({
        color1: "white",
        color2: "red",
        color3: "white",
        color4: "white"
      });
      await localStorage.setItem("color4", this.state.color4);
      await localStorage.setItem("color3", this.state.color3);
      await localStorage.setItem("color2", this.state.color2);
      await localStorage.setItem("color1", this.state.color1);
    } else if (eventKey === "3") {
      await this.setState({
        color1: "white",
        color2: "white",
        color3: "red",
        color4: "white"
      });
      await localStorage.setItem("color4", this.state.color4);
      await localStorage.setItem("color3", this.state.color3);
      await localStorage.setItem("color2", this.state.color2);
      await localStorage.setItem("color1", this.state.color1);
    } else if (eventKey === "4") {
      await this.setState({
        color1: "white",
        color2: "white",
        color3: "white",
        color4: "red"
      });
      await localStorage.setItem("color4", this.state.color4);
      await localStorage.setItem("color3", this.state.color3);
      await localStorage.setItem("color2", this.state.color2);
      await localStorage.setItem("color1", this.state.color1);
    }
  };

  render() {
    const { color1, color2, color3, color4 } = this.state;

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
            <Nav className="ml-auto  right " onSelect={this.handleSelect}>
              <Nav.Link
                eventKey="1"
                style={{ color: !color1 ? "red" : color1, fontSize: "1.2rem" }}
                href="/"
              >
                Worldwide
              </Nav.Link>
              <Nav.Link
                eventKey="2"
                style={{
                  color: !color2 ? "white" : color2,
                  fontSize: "1.2rem"
                }}
                href="/country"
              >
                Per Country
              </Nav.Link>
              <Nav.Link
                eventKey="3"
                style={{
                  color: !color3 ? "white" : color3,
                  fontSize: "1.2rem"
                }}
                href="/timeline"
              >
                Timeline
              </Nav.Link>
              <Nav.Link
                eventKey="4"
                style={{
                  color: !color4 ? "white" : color4,
                  fontSize: "1.2rem"
                }}
                href="/map"
              >
                Map
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
