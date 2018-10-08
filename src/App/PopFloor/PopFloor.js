import React, { Component } from "react";
import PopFloorHeader from "./PopFloorPart/PopFloorHeader";
import PopFloorFooter from "./PopFloorPart/PopFloorFooter";
import PopFloorBody from "./PopFloorPart/PopFloorBody";

class SendPage extends Component {
  constructor() {
    super();
    this.state = {};
  }
  getPopFloorShowChild(val) {
    this.props.sendPopFloorShow(val);
  }
  getSubmit(val) {
    this.props.sendSubmitData(val);
  }
  render() {
    return (
      <div className={"app"}>
        <PopFloorHeader
          sendPopFloorShowChild={val => this.getPopFloorShowChild(val)}
        />
        <PopFloorBody
          sendPopFloorShowChild={val => this.getPopFloorShowChild(val)}
          sendSubmit={val => this.getSubmit(val)}
        />
        <PopFloorFooter />
      </div>
    );
  }
}
export default SendPage;
