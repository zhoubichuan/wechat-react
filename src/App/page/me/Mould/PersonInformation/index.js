import React, { Component } from "react";
import Header from "../../../../base-page/Header";

class PersonInformation extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div component={"me-personinformation-component"}>
        <Header>
          <li>我</li>
          <li>个人信息</li>
          <li />
        </Header>
        <ul>
          <li>
            <p>头像</p>
            <div>
              <img src="" alt="" />
              {">"}
            </div>
          </li>
          <li>
            <p>名字</p>
            <div>
              <img src="" alt="" />
              {">"}
            </div>
          </li>
          <li>
            <p>微信号</p>
            <div>abc159x</div>
          </li>
          <li>
            <p>我的二维码</p>
            <div>{">"}</div>
          </li>
          <li>
            <p>更多</p>
            <div>{">"}</div>
          </li>
          <li>
            <p>我的地址</p>
            <div>{">"}</div>
          </li>
        </ul>
      </div>
    );
  }
}
export default PersonInformation;
