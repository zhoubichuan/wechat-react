import React, { Component } from "react";
import "./app.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Send from "./send-page/send.js";
import Get from "./get-page/get.js";
import { Provider } from "react-redux";
import store from './store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Send} />
            <Route path="/get" component={Get} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}
export default App;
