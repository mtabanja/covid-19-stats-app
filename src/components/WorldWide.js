import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import styled from "styled-components";
import CountUp from "react-countup";
import superagent from "superagent";

export default class WorldWide extends Component {
  state = { data: "" };
  componentDidMount = () => {
    superagent
      .get("https://corona.lmao.ninja/v2/all")
      .then((res) => this.setState({ data: res.body }));
  };
  render() {
    const Box = styled.div`
      background-color: rgb(73, 68, 68);
      color: white;
      margin-top: 5%;
      padding: 1%;
      min-height: 150px;
      width: 100%;
      -webkit-box-shadow: 0px 2px 6px 0px rgba(105, 105, 105, 1);
      -moz-box-shadow: 0px 2px 6px 0px rgba(105, 105, 105, 1);
      box-shadow: 0px 2px 6px 0px rgba(105, 105, 105, 1);
    `;

    return (
      <div>
        <Container>
          <Container>
            <Row>
              <Box>
                <p>TOTAL CONFIRMED CASES</p>
                <CountUp
                  style={{ fontSize: "3.5rem", color: "red" }}
                  start={0}
                  end={this.state.data.cases}
                  duration={3}
                ></CountUp>
              </Box>
            </Row>
          </Container>
          <Container>
            <Row>
              <Box>
                <p>TOTAL CONFIRMED DEATHS</p>

                <CountUp
                  style={{ fontSize: "3.5rem", color: "white" }}
                  start={0}
                  end={this.state.data.deaths}
                  duration={3}
                ></CountUp>
              </Box>
            </Row>
          </Container>
          <Container>
            <Row>
              <Box>
                <p>RECOVERED</p>
                <CountUp
                  style={{ fontSize: "3.5rem", color: "green" }}
                  start={0}
                  end={this.state.data.recovered}
                  duration={3}
                ></CountUp>
              </Box>
            </Row>
          </Container>
        </Container>
      </div>
    );
  }
}
