import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import "./app.less";
import Message from "../page/message/Message.js";
import Address from "../page/address/Address.js";
import Find from "../page/find/Find.js";
import Me from "../page/me/Me.js";

import store from "../store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Message} />
            <Route path="/Message" component={Message} />
            <Route path="/Address" component={Address} />
            <Route path="/Find" component={Find} />
            <Route path="/Me" component={Me} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}
export default App;
