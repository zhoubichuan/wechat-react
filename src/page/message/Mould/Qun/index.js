import React, { Component } from "react";
import Header from "../../../../base-page/Header";
import Message from "../Base/Message";

class Album extends Component {
  constructor() {
    super();
  }
  handleClick = () => {
    window.history.go(0);
  };
  render() {
    return (
      <div component={"me-album-component"}>
        <Header>
          <li onClick={this.handleClick}>微信（6）</li>
          <li>讨论区 前端进阶（397）</li>
          <li>...</li>
        </Header>
        <Message />
      </div>
    );
  }
}
export default Album;
