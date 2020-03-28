import React, { Component } from "react";
import superagent from "superagent";
import { Container } from "react-bootstrap";
import { Bar } from "react-chartjs-2";
import Dropdown from "react-dropdown";

const chartIt = async country => {
  let data = "";
  const countrySelection = !country ? "Netherlands" : country;
  await superagent
    .get(`https://corona.lmao.ninja/v2/historical/${countrySelection}`)
    .then(res => (data = res.body.timeline));
  let casesValues = [];
  let deathValues = [];

  let convertDatesOfCases = Object.keys(data.cases);
  let convertDates = Object.keys(data.deaths);

  for (let i = 0; i < convertDatesOfCases.length; i++) {
    casesValues.push(data.cases[convertDatesOfCases[i]]);
  }
  for (let i = 0; i < convertDates.length; i++) {
    deathValues.push(data.deaths[convertDates[i]]);
  }
  // const [lastValue] = deathValues.slice(-1);
  // console.log("last Item", lastItem);

  return [
    {
      labels: convertDatesOfCases,
      datasets: [
        {
          label: "Cases",
          data: casesValues,
          backgroundColor: "orange"
        }
      ]
    },
    {
      labels: convertDatesOfCases,
      datasets: [
        {
          label: "Death",
          data: deathValues,
          backgroundColor: "red",
          fill: true
        }
      ]
    }
  ];
};

export default class Chart extends Component {
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
    "Zimbabwe"
  ];
  state = {
    chartData1: "",
    chartData2: "",

    country: ""
  };

  _onSelect = async option => {
    await this.setState({ country: option.label });
    const { country } = this.state;
    chartIt(country).then(chartData =>
      this.setState({ chartData1: chartData[0], chartData2: chartData[1] })
    );
  };

  componentDidMount = () => {
    chartIt().then(chartData => {
      this.setState({ chartData1: chartData[0], chartData2: chartData[1] });
    });
  };

  render() {
    return (
      <div>
        <Container>
          <Dropdown
            options={this.countryList}
            onChange={this._onSelect}
            value={this.state.country}
            placeholder="Netherlands"
          />
          <Container>
            <Bar
              data={this.state.chartData1}
              options={{
                title: {
                  display: true,
                  text: "Total Cases",
                  fontSize: 30
                },
                legend: {
                  display: false
                },
                layout: {
                  padding: {
                    left: 30,
                    right: 30,
                    bottom: 0,
                    top: 0
                  }
                },
                scales: {
                  yAxes: [
                    {
                      ticks: {
                        suggestedMin: 50,
                        suggestedMax: 100
                      }
                    }
                  ]
                }
              }}
            />
          </Container>
          <Container style={{ marginTop: "5%" }}>
            <Bar
              data={this.state.chartData2}
              options={{
                title: {
                  display: true,
                  text: "Total Death",
                  fontSize: 30
                },
                legend: {
                  display: false
                },
                layout: {
                  padding: {
                    left: 30,
                    right: 30,
                    bottom: 0,
                    top: 0
                  }
                },
                scales: {
                  yAxes: [
                    {
                      ticks: {
                        beginAtZero: true,
                        userCallback: function(label, index, labels) {
                          // when the floored value is the same as the value we have a whole number
                          if (Math.floor(label) === label) {
                            return label;
                          }
                        }
                      }
                    }
                  ]
                },
                tooltips: {
                  mode: "nearest"
                }
              }} // width="600"
              // height="150"
            />
          </Container>
        </Container>
      </div>
    );
  }
}
