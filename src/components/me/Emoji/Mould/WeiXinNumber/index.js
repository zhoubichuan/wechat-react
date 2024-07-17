import React, { Component } from "react";
import Header from "@/public_components/Header";

class Photo extends Component {
  constructor(props) {
    super(props);
  }
  handleClick = () => {
    window.history.go(0);
  };
  render () {
    return (
      <div>
        <Header>
          <li onClick={this.handleClick}>个人信息</li>
          <li>我的二维码</li>
          <li>...</li>
        </Header>
        <div>
          <img src="http://www.cdhdky.com/images/ttt.jpg" />
        </div>
      </div>
    );
  }
}
export default Photo;
