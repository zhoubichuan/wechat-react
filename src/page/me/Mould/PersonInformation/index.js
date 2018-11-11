import React, { Component } from "react";
import Header from "../../../../base-page/Header";
import "./index.less";

class PersonInformation extends Component {
  constructor() {
    super();
  }
  handleClick = () => {
    window.history.go(0);
  };
  render() {
    return (
      <div component={"me-personinformation-component"}>
        <Header>
          <li onClick={this.handleClick}>我</li>
          <li>个人信息</li>
          <li />
        </Header>
        <div className={"person-information"}>
          <ul>
            <li className={"photo"}>
              <p>头像</p>
              <div className="right">
                <img src="http://www.cdhdky.com/images/ttt.jpg" alt="" />
                <i className="ico" />
              </div>
            </li>
            <li className={"name"}>
              <p>名字</p>
              <div className="right">
                <span>会跑的鸡腿</span>
                <i className="ico" />
              </div>
            </li>
            <li className={"weixin"}>
              <p>微信号</p>
              <div>abc159x</div>
            </li>
            <li className={"data-cord"}>
              <p>我的二维码</p>
              <div className="right">
                <i className="code" />
                <i className="ico" />
              </div>
            </li>
            <li className={"more"}>
              <p>更多</p>
              <i className="ico" />
            </li>
            <li className={"address"}>
              <p>我的地址</p>
              <i className="ico" />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default PersonInformation;
