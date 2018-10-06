import React, { Component } from "react";
import "./get.css";
// import { Link } from "react-router-dom";
import MessageListHeader from "./MessageListHeader";
// import PopFloor from "./PopFloor";
import MessageListBody from "./MessageListBody";
import MessageListFooter from "./MessageListFooter";

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
        <MessageListHeader />
        <MessageListBody
          maskShow={maskShow}
          onUpdata={maskShow => this.ChildrenFunc(maskShow)}
        />
        <MessageListFooter />
      </div>
    );
  }
}
export default Get;
