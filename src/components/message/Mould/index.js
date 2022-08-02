import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Qun from "./Qun";
import Scan from "./Scan";
import Shake from "./Shake";
import See from "./See";
import Search from "./Search";
import Nearby from "./Nearby";
import Buy from "./Buy";
import Game from "./Game";
import SmallApp from "./SmallApp";
import Application from "./Base/Application";

class Mould extends Component {
  // constructor() {
  //   super();
  // }
  render () {
    return (
      <div component={"message-mould-component"}>
        <Switch>
          <Route path="/Message/Qun" component={Qun} />
          <Route path="/Message/Scan" component={Scan} />
          <Route path="/Message/Shake" component={Shake} />
          <Route path="/Message/See" component={See} />
          <Route path="/Message/Search" component={Search} />
          <Route path="/Message/Nearby" component={Nearby} />
          <Route path="/Message/Buy" component={Buy} />
          <Route path="/Message/Game" component={Game} />
          <Route path="/Message/SmallApp" component={SmallApp} />
        </Switch>
        <Application sendPopFloorShow={val => this.getPopFloorShow(val)} />
      </div>
    );
  }
}
export default Mould;
