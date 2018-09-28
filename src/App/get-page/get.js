import React, { Component } from "react";
import "./get.css";
// import { Link } from "react-router-dom";
import NavPart from "./NavPart";
// import PopFloor from "./PopFloor";
import GetPage from "./GetPage";

class Get extends Component {
  constructor() {
    super();
    this.state = {
      maskShow: false
    };
  }
  ChildrenFunc(data) {
    this.setState({ maskShow: this.state.maskShow });
  }
  render() {
    var maskShow = this.state.maskShow;
    return (
      <div className={"get"}>
        <NavPart />
        <GetPage
          maskShow={maskShow}
          onUpdata={maskShow => this.ChildrenFunc(maskShow)}
        />
      </div>
    );
  }
}
export default Get;
