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
          <Route path="/Message/Friend" component={Friend} />
          <Route path="/Message/Scan" component={Scan} />
          <Route path="/Message/Shake" component={Shake} />
          <Route path="/Message/See" component={See} />
          <Route path="/Message/Search" component={Search} />
          <Route path="/Message/Nearby" component={Nearby} />
          <Route path="/Message/Buy" component={Buy} />
          <Route path="/Message/Game" component={Game} />
          <Route path="/Message/SmallApp" component={SmallApp} />
        </Switch>
      </div>
    );
  }
}
export default Mould;
