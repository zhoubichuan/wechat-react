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
          <li onClick={this.handleClick}>返回</li>
          <li>我的地址</li>
          <li />
        </Header>
        <div>
          <table>
            <tr>
              <td>周必川</td>
              <td>tasdfasdfasdfasdfasdasdfd</td>
              <td>td</td>
            </tr>
            <tr>
              <td>周必川</td>
              <td>td</td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}
export default Photo;
