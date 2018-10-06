import React, { Component } from "react";
import "./app.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MessageList from "./MessageList/MessageList.js";
import { Provider } from "react-redux";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={MessageList} />
            <Route path="/MessageList" component={MessageList} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}
export default App;
