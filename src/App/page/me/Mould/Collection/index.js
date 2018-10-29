import React, { Component } from "react";
import Header from "../../../../base-page/Header";

class Collection extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div component={"me-collection-component"}>
        <Header>
          <li>我</li>
          <li>收藏</li>
          <li>+</li>
        </Header>收藏
      </div>
    );
  }
}
export default Collection;
