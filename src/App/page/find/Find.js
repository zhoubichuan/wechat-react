import React, { Component } from "react";
import Header from "../../base-page/Header";
import "./Find.css";

class Find extends Component {
  constructor() {
    super();
    this.state = {
      application: [
        { ico: "http://www.cdhdky.com/images/ttt.jpg", title: "朋友圈" },
        { ico: "http://www.cdhdky.com/images/ttt.jpg", title: "扫一扫" },
        { ico: "http://www.cdhdky.com/images/ttt.jpg", title: "摇一摇" },
        { ico: "http://www.cdhdky.com/images/ttt.jpg", title: "看一看" },
        { ico: "http://www.cdhdky.com/images/ttt.jpg", title: "搜一搜" },
        { ico: "http://www.cdhdky.com/images/ttt.jpg", title: "附近的人" },
        { ico: "http://www.cdhdky.com/images/ttt.jpg", title: "购物" },
        { ico: "http://www.cdhdky.com/images/ttt.jpg", title: "游戏" },
        { ico: "http://www.cdhdky.com/images/ttt.jpg", title: "小程序" }
      ]
    };
  }
  render() {
    return (
      <div>
        <Header>
          <li />
          <li>发现</li>
          <li />
        </Header>
        <div className={"find"} component={"find-component"}>
          <div className={"top"}>
            <ul>
              {this.state.application.map((item, index) => (
                <li key={index}>
                  <img src={item.ico} alt="" />
                  <p>{item.title}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default Find;
