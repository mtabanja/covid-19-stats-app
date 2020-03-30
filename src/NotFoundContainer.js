import React, { Component } from "react";
import NotFound from "./NotFound";

export default class NotFoundContainer extends Component {
  render() {
    const checkUrl = window.location.pathname;
    let notFound = "";
    if (
      checkUrl === "/" ||
      checkUrl === "/timeline" ||
      checkUrl === "/country" ||
      checkUrl === "/map"
    ) {
      notFound = "";
    } else notFound = <NotFound />;
    return <div>{notFound}</div>;
  }
}
