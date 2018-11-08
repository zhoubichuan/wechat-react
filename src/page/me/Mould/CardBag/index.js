import React, { Component } from "react";
import Header from "../../../../base-page/Header";

class CardBag extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div component={"me-cardbag-component"}>
        <Header>
          <li>我</li>
          <li>卡包</li>
          <li>消息</li>
        </Header>卡包
      </div>
    );
  }
}
export default CardBag;
