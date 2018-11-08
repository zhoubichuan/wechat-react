import React, { Component } from "react";
import Header from "../../../../base-page/Header";

class Emoji extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div component={"me-emoji-component"}>
        <Header>
          <li>我</li>
          <li>
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
