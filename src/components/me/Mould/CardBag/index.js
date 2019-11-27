import React, { Component } from "react";
import Header from "../../../../public_components/Header";

class CardBag extends Component {
  constructor() {
    super();
  }
  handleClick = () => {
    window.history.go(0);
  };
  render() {
    return (
      <div component={"me-cardbag-component"}>
        <Header>
          <li onClick={this.handleClick}>我</li>
          <li>卡包</li>
          <li>消息</li>
        </Header>卡包
      </div>
    );
  }
}
export default CardBag;
