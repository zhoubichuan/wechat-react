import React, { Component } from "react";
import PopFloorHeader from "./PopFloorHeader";
import PopFloorFooter from "./PopFloorFooter";
import PopFloorBody from "./PopFloorBody";

class SendPage extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className={"app"}>
        <PopFloorHeader />
        <PopFloorBody />
        <PopFloorFooter />
      </div>
    );
  }
}
export default SendPage;
