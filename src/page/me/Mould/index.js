import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import PersonInformation from "./PersonInformation";
import MoneyBag from "./MoneyBag";
import Collection from "./Collection";
import Album from "./Album";
import CardBag from "./CardBag";
import Emoji from "./Emoji";
import Setting from "./Setting";

class Mould extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div component={"me-mould-component"}>
        <Switch>
          <Route path="/Me/PersonInformation" component={PersonInformation} />
          <Route path="/Me/MoneyBag" component={MoneyBag} />
          <Route path="/Me/Collection" component={Collection} />
          <Route path="/Me/Album" component={Album} />
          <Route path="/Me/CardBag" component={CardBag} />
          <Route path="/Me/Emoji" component={Emoji} />
          <Route path="/Me/Setting" component={Setting} />
        </Switch>
      </div>
    );
  }
}
export default Mould;
