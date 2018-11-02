import React, { Component } from "react";
import Header from "../../../../base-page/Header";
import "./index.css";

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
        <div className={"person-information"}>
          <ul>
            <li className={"photo"}>
              <p>头像</p>
              <div>
                <img src="http://www.cdhdky.com/images/ttt.jpg" alt="" />
                {">"}
              </div>
            </li>
            <li className={"name"}>
              <p>名字</p>
              <div>
                <span>会跑的鸡腿</span>
                {">"}
              </div>
            </li>
            <li className={"weixin"}>
              <p>微信号</p>
              <div>abc159x</div>
            </li>
            <li className={"data-cord"}>
              <p>我的二维码</p>
              <div>{">"}</div>
            </li>
            <li className={"more"}>
              <p>更多</p>
              <div>{">"}</div>
            </li>
            <li className={"address"}>
              <p>我的地址</p>
              <div>{">"}</div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default PersonInformation;
