import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import RefsDemo from "./RefsDemo";
import ErrorBoundary from "./ErrorBoundary";

import PortalDemo from "./PortalDemo";
import Hero from "./Hero";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <RefsDemo />
        <PortalDemo />
        <ErrorBoundary>
          <Hero heroName="Batman" />
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName="Superman" />
        </ErrorBoundary>

        <ErrorBoundary>
          <Hero heroName="Terror" />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
