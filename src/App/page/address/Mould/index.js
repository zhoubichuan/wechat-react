import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Friend from "./Friend";
import Scan from "./Scan";
import Shake from "./Shake";
import See from "./See";
import Search from "./Search";
import Nearby from "./Nearby";
import Buy from "./Buy";
import Game from "./Game";
import SmallApp from "./SmallApp";

class Mould extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div component={"me-mould-component"}>
        <Switch>
          <Route path="/Address/Friend" component={Friend} />
          <Route path="/Address/Scan" component={Scan} />
          <Route path="/Address/Shake" component={Shake} />
          <Route path="/Address/See" component={See} />
          <Route path="/Address/Search" component={Search} />
          <Route path="/Address/Nearby" component={Nearby} />
          <Route path="/Address/Buy" component={Buy} />
          <Route path="/Address/Game" component={Game} />
          <Route path="/Address/SmallApp" component={SmallApp} />
        </Switch>
      </div>
    );
  }
}
export default Mould;
