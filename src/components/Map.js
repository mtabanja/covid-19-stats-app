import React, { memo, useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import superagent from "superagent";
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography
} from "react-simple-maps";
import ReactTooltip from "react-tooltip";
import styled from "styled-components";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const MapChart = () => {
  const [content, setContent] = useState("");
  const [data, setData] = useState("");
  const [isTrue, setIsTrue] = useState(false);

  useEffect(() => {
    setContent({
      country: `${data.country}`,
      cases: `Cases:${!data.cases ? "No info" : data.cases}`,
      death: `Deaths:${!data.deaths ? "No info" : data.deaths}`
    });
    // console.log("data", data);
  }, [data]);

  const onMouseEnter = country => {
    setContent("");
    superagent
      .get(`https://corona.lmao.ninja/countries/${country}`)
      .then(res => {
        setData(res.body);
      })
      .catch(error => {
        console.error("onRejected function called: " + error.message);
      });

    setIsTrue(true);
  };
  let tooltip = (
    <ReactTooltip className="tool-top">
      <p style={{ fontSize: "1.5rem" }}>{content.country}</p>
      <p style={{ fontSize: "1rem" }}>{content.cases}</p>
      <p style={{ fontSize: "1rem" }}>{content.death}</p>
    </ReactTooltip>
  );

  return (
    <Container>
      <>
        <ComposableMap data-tip="" projectionConfig={{ scale: 200 }}>
          <ZoomableGroup>
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map(geo => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onMouseEnter={() => {
                      const { ISO_A2, NAME } = geo.properties;
                      onMouseEnter(ISO_A2);
                    }}
                    onMouseLeave={() => {
                      setContent("");
                    }}
                    style={{
                      default: {
                        fill: "rgb(104, 0, 0)",
                        outline: "none",
                        stroke: "rgba(0, 0, 0, 0.363)"
                      },
                      hover: {
                        fill: "#F53",
                        outline: "none",
                        stroke: "white",
                        cursor: "pointer",
                        transition: "all 500ms"
                      },
                      pressed: {
                        fill: "black",
                        stroke: "#9E1030",
                        strokeWidth: 0.75,
                        outline: "none",
                        transition: "all 250ms"
                      }
                    }}
                  />
                ))
              }
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
      </>
      {isTrue && tooltip}
    </Container>
  );
};

export default memo(MapChart);
