import React, { Component } from "react";
import Header from "../../../../../../public_components/Header";

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
          <li onClick={this.handleClick}>个人信息</li>
          <li />
          <li />
        </Header>
        <div>
          <table>
            <tr>
              <td>性别</td>
              <td>男</td>
            </tr>
            <tr>
              <td>地区</td>
              <td>广东 深圳</td>
            </tr>
            <tr>
              <td>个性签名</td>
              <td>未填写</td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}
export default Photo;
