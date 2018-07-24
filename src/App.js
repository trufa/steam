import React, { Component } from 'react';
import './App.css';
import Inicio from "./pages/inicio/inicio";
import Review from "./components/review/Review";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path="/" component={Inicio} />
        </Router>

        <Router>
          <Route exact path="/review" component={Review} />
        </Router>

      </div>
    );
  }
}

export default App;
