import React, { Component } from "react";
import { Switch } from "react-router-dom";
import Photo from "./Photo";
import Name from "./Name";
import WeiXinNumber from "./WeiXinNumber";
import More from "./More";
import MyAddress from "./MyAddress";
import "./index.less";

class Mould extends Component {
  constructor() {}
  render() {
    return (
      <div className="Mould">
        <Switch>
          <Route path="/Me/PersonInformation/Photo" component={Photo} />
          <Route path="/Me/PersonInformation/Name" component={Name} />
          <Route
            path="/Me/PersonInformation/WeiXinNumber"
            component={WeiXinNumber}
          />
          <Route path="/Me/PersonInformation/More" component={More} />
          <Route path="/Me/PersonInformation/MyAddress" component={MyAddress} />
        </Switch>
      </div>
    );
  }
}
export default Mould;
