import React, { Component } from "react";
import Header from "../../../../base-page/Header";

class MoneyBag extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div component={"me-moneybag-component"}>
        <Header>
          <li>我</li>
          <li>钱包</li>
          <li />
        </Header>钱包
      </div>
    );
  }
}
export default MoneyBag;
