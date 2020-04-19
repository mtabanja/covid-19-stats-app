import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import Dropdown from "react-dropdown";
import CountUp from "react-countup";
import superagent from "superagent";
import "./DropDown.css";
export default class Home extends Component {
  countryList = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "CAR",
    "Cayman Islands",
    "Chad",
    "Channel Islands",
    "Chile",
    "China",
    "Colombia",
    "Congo",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Curaçao",
    "Cyprus",
    "Czechia",
    "Denmark",
    "Diamond Princess",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "DRC",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Faeroe Islands",
    "Fiji",
    "Finland",
    "France",
    "French Guiana",
    "French Polynesia",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Gibraltar",
    "Greece",
    "Greenland",
    "Grenada",
    "Guadeloupe",
    "Guam",
    "Guatemala",
    "Guinea",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hong Kong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Isle of Man",
    "Israel",
    "Italy",
    "Ivory Coast",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kuwait",
    "Kyrgyzstan",
    "Latvia",
    "Lebanon",
    "Liberia",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macao",
    "Madagascar",
    "Malaysia",
    "Maldives",
    "Malta",
    "Martinique",
    "Mauritania",
    "Mauritius",
    "Mayotte",
    "Mexico",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Montserrat",
    "Morocco",
    "Mozambique",
    "Namibia",
    "Nepal",
    "Netherlands",
    "New Caledonia",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Macedonia",
    "Norway",
    "Oman",
    "Pakistan",
    "Palestine",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Puerto Rico",
    "Qatar",
    "Romania",
    "Russia",
    "Rwanda",
    "Réunion",
    "S. Korea",
    "Saint Lucia",
    "Saint Martin",
    "San Marino",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Singapore",
    "Sint Maarten",
    "Slovakia",
    "Slovenia",
    "Somalia",
    "South Africa",
    "Spain",
    "Sri Lanka",
    "St. Barth",
    "St. Vincent Grenadines",
    "Sudan",
    "Suriname",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tanzania",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "U.S. Virgin Islands",
    "UAE",
    "Uganda",
    "UK",
    "Ukraine",
    "Uruguay",
    "USA",
    "Uzbekistan",
    "Vatican City",
    "Venezuela",
    "Vietnam",
    "Zambia",
    "Zimbabwe",
  ];
  state = { data: "", country: "" };

  componentDidMount = () => {
    superagent
      .get(`https://corona.lmao.ninja/v2/countries/netherlands`)
      .then((res) => {
        this.setState({ data: res.body });
      });
  };

  _onSelect = async (option) => {
    await this.setState({ country: option.label });
    await superagent
      .get(`https://corona.lmao.ninja/v2/countries/${this.state.country}`)
      .then((res) => {
        this.setState({ data: res.body });
      });
  };

  render() {
    const Box = styled.div`
      background-color: rgb(73, 68, 68);
      color: white;
      margin-top: 6%;
      padding: 1%;
      min-height: 144px;
      width: 100%;
      -webkit-box-shadow: 0px 2px 6px 0px rgba(105, 105, 105, 1);
      -moz-box-shadow: 0px 2px 6px 0px rgba(105, 105, 105, 1);
      box-shadow: 0px 2px 6px 0px rgba(105, 105, 105, 1);
    `;

    return (
      <div style={{ marginBottom: "5%" }}>
        <Container>
          <Dropdown
            options={this.countryList}
            onChange={this._onSelect}
            value={this.state.country}
            placeholder="Netherlands"
          />
        </Container>
        <Container>
          <Container>
            <Row>
              <Box>
                <p>TOTAL CONFIRMED CASES</p>
                <CountUp
                  style={{ fontSize: "2.5rem", color: "red" }}
                  start={0}
                  end={this.state.data.cases}
                  duration={3}
                ></CountUp>
              </Box>
            </Row>
            <Row>
              <Box>
                <p>TOTAL CONFIRMED DEATHS</p>
                <CountUp
                  style={{ fontSize: "2.5rem", color: "white" }}
                  start={0}
                  end={this.state.data.deaths}
                  duration={3}
                ></CountUp>
              </Box>
            </Row>
          </Container>
          <Row>
            <Col>
              <Box>
                <p>TODAY CASES</p>
                <CountUp
                  style={{ fontSize: "2rem", color: "red" }}
                  start={0}
                  end={this.state.data.todayCases}
                  duration={3}
                ></CountUp>
              </Box>
            </Col>
            <Col>
              <Box>
                <p>TODAY DEATHS</p>
                <CountUp
                  style={{ fontSize: "2rem", color: "white" }}
                  start={0}
                  end={this.state.data.todayDeaths}
                  duration={3}
                ></CountUp>
              </Box>
            </Col>
          </Row>
          <Row>
            <Col>
              <Box>
                <p>ACTIVE CASES</p>
                <CountUp
                  style={{ fontSize: "2rem", color: "orange" }}
                  start={0}
                  end={this.state.data.active}
                  duration={3}
                ></CountUp>
              </Box>
            </Col>
            <Col>
              <Box>
                <p>RECOVERED</p>

                <CountUp
                  style={{ fontSize: "2rem", color: "green" }}
                  start={0}
                  end={this.state.data.recovered}
                  duration={3}
                ></CountUp>
              </Box>
            </Col>
          </Row>
          <Row>
            <Col>
              <Box>
                <p>CASES PER ONE MILLION</p>
                <CountUp
                  style={{ fontSize: "2rem", color: "yellow" }}
                  start={0}
                  end={this.state.data.casesPerOneMillion}
                  duration={3}
                ></CountUp>
              </Box>
            </Col>
            <Col>
              <Box>
                <p>SERIOUS</p>
                <CountUp
                  style={{ fontSize: "2rem", color: "#a81e1e" }}
                  start={0}
                  end={this.state.data.critical}
                  duration={3}
                ></CountUp>
              </Box>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
