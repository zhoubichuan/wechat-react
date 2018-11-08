import React, { Component } from "react";
import Header from "../../../../base-page/Header";

class Nearby extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div component={"me-Nearby-component"}>
        <Header>
          <li onClick={console.log(this.porps)}>我</li>
          <li />
          <li>...</li>
        </Header>
        <div>相册</div>
      </div>
    );
  }
}
export default Nearby;
