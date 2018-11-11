import React, { Component } from "react";
import Header from "../../../../base-page/Header";

class Nearby extends Component {
  constructor() {
    super();
  }
  handleClick = () => {
    window.history.go(0);
  };
  render() {
    return (
      <div component={"me-Nearby-component"}>
        <Header>
          <li onClick={this.handleClick}>我</li>
          <li />
          <li>...</li>
        </Header>
        <div>相册</div>
      </div>
    );
  }
}
export default Nearby;
