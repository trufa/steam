import React, { Component } from 'react';
import './App.css';
import Inicio from "./pages/inicio/inicio";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path="/" component={Inicio} />
        </Router>
        
      </div>
    );
  }
}

export default App;
