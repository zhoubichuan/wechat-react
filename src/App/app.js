import React, { Component } from "react";
import "./app.less";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Message from "./page/message/Message.js";
import Address from "./page/address/Address.js";
import Find from "./page/find/Find.js";
import Me from "./page/me/Me.js";
import { Provider } from "react-redux";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Message} />
            <Route path="/message" component={Message} />
            <Route path="/address" component={Address} />
            <Route path="/find" component={Find} />
            <Route path="/Me" component={Me} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}
export default App;
