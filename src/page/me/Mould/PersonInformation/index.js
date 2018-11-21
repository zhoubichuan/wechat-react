import React, { Component } from "react";
import Header from "../../../../base-page/Header";
import { Link } from "react-router-dom";
import "./index.less";
import Mould from "./Mould";

class PersonInformation extends Component {
  constructor() {
    super();
    this.state = {
      showMould: false,
      personData: [{ title: "头像", img: "", content: "", ico: "" }]
    };
  }
  handleClick = () => {
    window.history.go(0);
  };
  handleClick2 = e => {
    this.setState({
      showMould: true
    });
  };
  render() {
    return (
      <div component={"me-personinformation-component"}>
        {!this.state.showMould && (
          <div>
            <Header>
              <li onClick={this.handleClick}>我</li>
              <li>个人信息</li>
              <li />
            </Header>
            <div className={"person-information"}>
              <ul onClick={this.handleClick2}>
                <li className={"photo"}>
                  <Link to={"/Me/PersonInformation/Photo"}>
                    <p>头像</p>
                    <div className="right">
                      <img src="http://www.cdhdky.com/images/ttt.jpg" alt="" />
                      <i className="ico" />
                    </div>
                  </Link>
                </li>
                <li className={"name"}>
                  <Link to={"/Me/PersonInformation/Name"}>
                    <p>名字</p>
                    <div className="right">
                      <span>会跑的鸡腿</span>
                      <i className="ico" />
                    </div>
                  </Link>
                </li>
                <li className={"weixin"}>
                  <Link to={"#"}>
                    <p>微信号</p>
                    <div>abc159x</div>
                  </Link>
                </li>
                <li className={"data-cord"}>
                  <Link to={"/Me/PersonInformation/MyCode"}>
                    <p>我的二维码</p>
                    <div className="right">
                      <i className="code" />
                      <i className="ico" />
                    </div>
                  </Link>
                </li>
                <li className={"more"}>
                  <Link to={"/Me/PersonInformation/More"}>
                    <p>更多</p>
                    <i className="ico" />
                  </Link>
                </li>
                <li className={"address"}>
                  <Link to={"/Me/PersonInformation/MyAddress"}>
                    <p>我的地址</p>
                    <i className="ico" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}
        {this.state.showMould && <Mould />}
      </div>
    );
  }
}
export default PersonInformation;
