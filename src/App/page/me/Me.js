import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../../base-page/Header";
import Footer from "../../base-page/Footer";
import Mould from "./Mould";
import "./Me.css";

class Me extends Component {
  constructor() {
    super();
    this.state = {
      mouldShow: false,
      application: [
        {
          ico: "http://www.cdhdky.com/images/ttt.jpg",
          title: "钱包",
          route: "MoneyBag"
        },
        {
          ico: "http://www.cdhdky.com/images/ttt.jpg",
          title: "收藏",
          route: "Collection"
        },
        {
          ico: "http://www.cdhdky.com/images/ttt.jpg",
          title: "相册",
          route: "Album"
        },
        {
          ico: "http://www.cdhdky.com/images/ttt.jpg",
          title: "卡包",
          route: "CardBag"
        },
        {
          ico: "http://www.cdhdky.com/images/ttt.jpg",
          title: "表情",
          route: "Emoji"
        },
        {
          ico: "http://www.cdhdky.com/images/ttt.jpg",
          title: "设置",
          route: "Setting"
        }
      ]
    };
  }
  handleClick = e => {
    this.setState({
      mouldShow: true
    });
  };
  render() {
    return (
      <div>
        {!this.state.mouldShow && (
          <div>
            <Header>
              <li />
              <li className={"title"}>我</li>
              <li />
            </Header>
            <div className={"me"} component={"me-component"}>
              <div className={"information"} onClick={this.handleClick}>
                <Link to={"/Me/PersonInformation"}>
                  <div className={"left"}>
                    <img src="" alt="" />
                    <div>
                      <p>会跑的鸡腿</p>
                      <p>微信号：zbc159x</p>
                    </div>
                  </div>
                  <div className={"right"}>{">"}</div>
                </Link>
              </div>
              <ul>
                {this.state.application.map((item, index) => (
                  <li key={index} onClick={this.handleClick}>
                    <Link to={"/Me/" + item.route}>
                      <img src={item.ico} alt="" />
                      <p>{item.title}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <Footer />
          </div>
        )}
        {this.state.mouldShow && <Mould />}
      </div>
    );
  }
}
export default Me;
