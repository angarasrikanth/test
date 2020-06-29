import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import User from "./components/User";
import Form from './components/Form'



class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/user" component={User} />
          <Route path="/form" component={Form} />

        </div>
      </Router>
    );
  }
}

export default App;
