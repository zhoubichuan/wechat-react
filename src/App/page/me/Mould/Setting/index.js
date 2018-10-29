import React, { Component } from "react";
import Header from "../../../../base-page/Header";

class Setting extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div component={"me-setting-component"}>
        <Header>
          <li>我</li>
          <li>设置</li>
          <li />
        </Header>设置
      </div>
    );
  }
}
export default Setting;
