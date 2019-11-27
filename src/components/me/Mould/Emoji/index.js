import React, { Component } from "react";
import Header from "../../../../public_components/Header";
import "./index.less";

class Emoji extends Component {
  constructor() {
    super();
  }
  handleClick = () => {
    window.history.go(0);
  };
  render() {
    return (
      <div component={"me-emoji-component"}>
        <Header>
          <li onClick={this.handleClick}>我</li>
          <li className="middle">
            <span>更多表情</span>
            <span>朋友表情</span>
          </li>
          <li />
        </Header>表情
      </div>
    );
  }
}
export default Emoji;
