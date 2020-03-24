import React, { useEffect } from "react";
import ReactGA from "react-ga";
import "./App.css";
import { Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import WorldWide from "./components/WorldWide";
import Country from "./components/Country";

function App() {
  useEffect(() => {
    ReactGA.initialize("UA-161774679-1");
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <div className="App">
      <Route path="/" component={NavBar} />
      <Route path="/" component={WorldWide} exact />
      <Route path="/country" component={Country} exact />
    </div>
  );
}

export default App;
