import React, { Component } from "react";
import Header from "../../base-page/Header";
import "./Me.css";

class Me extends Component {
  constructor() {
    super();
    this.state = {
      application: [
        { ico: "http://www.cdhdky.com/images/ttt.jpg", title: "钱包" },
        { ico: "http://www.cdhdky.com/images/ttt.jpg", title: "收藏" },
        { ico: "http://www.cdhdky.com/images/ttt.jpg", title: "相册" },
        { ico: "http://www.cdhdky.com/images/ttt.jpg", title: "卡包" },
        { ico: "http://www.cdhdky.com/images/ttt.jpg", title: "表情" },
        { ico: "http://www.cdhdky.com/images/ttt.jpg", title: "设置" }
      ]
    };
  }
  render() {
    return (
      <div>
        <Header>
          <li />
          <li className={"title"}>我</li>
          <li />
        </Header>
        <div className={"me"} component={"me-component"}>
          <div className={"information"}>
            <div className={"left"}>
              <img src="" alt="" />
              <div>
                <p>会跑的鸡腿</p>
                <p>微信号：zbc159x</p>
              </div>
            </div>
            <div className={"right"}>{">"}</div>
          </div>
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
    );
  }
}
export default Me;
