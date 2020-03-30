import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";

export default class NotFound extends Component {
  render() {
    return (
      <Container style={{ color: "white", marginTop: "10%" }}>
        <Container>
          <h1 style={{ fontSize: "5rem" }}>404</h1>
        </Container>
        <Container>
          <h1>This Page Is Not Found</h1>
        </Container>
        <Container>
          <p>Try To Select The Right Section From The Navigation Bar</p>
        </Container>
      </Container>
    );
  }
}
