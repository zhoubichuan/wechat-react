import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
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
  // constructor() {
  //   super();
  // }
  render () {
    return (
      <div component={"me-mould-component"}>
        <Switch>
          <Route path="/Find/Friend" component={Friend} />
          <Route path="/Find/Scan" component={Scan} />
          <Route path="/Find/Shake" component={Shake} />
          <Route path="/Find/See" component={See} />
          <Route path="/Find/Search" component={Search} />
          <Route path="/Find/Nearby" component={Nearby} />
          <Route path="/Find/Buy" component={Buy} />
          <Route path="/Find/Game" component={Game} />
          <Route path="/Find/SmallApp" component={SmallApp} />
        </Switch>
      </div>
    );
  }
}
export default Mould;
