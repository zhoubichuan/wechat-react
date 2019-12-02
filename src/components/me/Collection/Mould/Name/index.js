import React, { Component } from "react";
import Header from "@/public_components/Header";

class Photo extends Component {
  constructor() {
    super();
  }
  handleClick = () => {
    window.history.go(0);
  };
  render() {
    return (
      <div>
        <Header>
          <li onClick={this.handleClick}>取消</li>
          <li>设置名字</li>
          <li>完成</li>
        </Header>
        <div>
          <input value="会跑的鸡腿" />
        </div>
      </div>
    );
  }
}
export default Photo;
