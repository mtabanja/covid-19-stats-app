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

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const MapChart = () => {
  const [content, setContent] = useState("");
  const [data, setData] = useState("");

  useEffect(() => {
    onMouseEnter();
  }, [data]);

  const onMouseEnter = async NAME => {
    try {
      await superagent
        .get(`https://corona.lmao.ninja/countries/${NAME}`)
        .then(res => {
          setData(res.body);
        });
    } catch (error) {}
    await setContent({
      country: `${data.country}`,
      cases: `Cases:${!data.cases ? "No info" : data.cases}`,
      death: `Deaths:${!data.deaths ? "No info" : data.deaths}`
    });
  };

  console.log("dataOut", data.country, data.cases);

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
                    onMouseEnter={async () => {
                      const { NAME } = geo.properties;
                      onMouseEnter(NAME);
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
                        stroke: "white"
                      }
                    }}
                  />
                ))
              }
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
      </>
      <ReactTooltip>
        <p style={{ fontSize: "1rem" }}>{content.country}</p>
        <p>{content.cases}</p>
        <p>{content.death}</p>
      </ReactTooltip>
    </Container>
  );
};

export default memo(MapChart);
