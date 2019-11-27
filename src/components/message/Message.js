import React, { Component } from "react";
import Header from "../../public_components/Header";
import Search from "../../public_components/Search";
import { Link } from "react-router-dom";
import Mould from "./Mould";
import Footer from "../../public_components/Footer";

import "./Message.less";

class Message extends Component {
  constructor() {
    super();
    this.state = {
      mouldShow: false,
      message: [
        {
          ico: "http://www.cdhdky.com/images/ttt.jpg",
          title: "讨论区 前端进阶",
          tips: "王锦辉",
          time: "下午5:44",
          route: "Qun"
        },
        {
          ico: "http://www.cdhdky.com/images/ttt.jpg",
          title: "订阅好消息",
          tips: "1条",
          time: "下午5:44",
          route: "dingyue"
        },
        {
          ico: "http://www.cdhdky.com/images/ttt.jpg",
          title: "华为官网Team",
          tips: "王锦辉",
          time: "下午5:44",
          route: "Qun"
        },
        {
          ico: "http://www.cdhdky.com/images/ttt.jpg",
          title: "服务通知",
          tips: "王锦辉",
          time: "下午5:44",
          route: "server"
        },
        {
          ico: "http://www.cdhdky.com/images/ttt.jpg",
          title: "事业二部~销售&CBG ",
          tips: "王锦辉",
          time: "下午5:44",
          route: "Qun"
        },
        {
          ico: "http://www.cdhdky.com/images/ttt.jpg",
          title: "文件传输助手",
          tips: "王锦辉",
          time: "下午5:44",
          route: "healp"
        },
        {
          ico: "http://www.cdhdky.com/images/ttt.jpg",
          title: "招商银行深圳分行",
          tips: "王锦辉",
          time: "下午5:44",
          route: "yinhang"
        },
        {
          ico: "http://www.cdhdky.com/images/ttt.jpg",
          title: "微信运动",
          tips: "王锦辉",
          time: "下午5:44",
          route: "yundong"
        },
        {
          ico: "http://www.cdhdky.com/images/ttt.jpg",
          title: "群",
          tips: "王锦辉",
          time: "下午5:44",
          route: "Qun"
        },
        {
          ico: "http://www.cdhdky.com/images/ttt.jpg",
          title: "讨论区",
          tips: "王锦辉",
          time: "下午5:44",
          route: ""
        }
      ]
    };
  }
  handleClick = () => {
    this.setState({
      mouldShow: false
    });
  };
  handleClick = () => {
    this.setState({ mouldShow: true });
  };
  render() {
    return (
      <div>
        {!this.state.mouldShow && (
          <div className={"message"}>
            <Header>
              <li />
              <li>微信</li>
              <li className={"more"} />
            </Header>
            <Search />
            <div className={"content"}>
              <ul>
                {this.state.message.map((item, index) => (
                  <li key={index} onClick={this.handleClick}>
                    <Link to={"/Message/" + item.route}>
                      <div className={"left"}>
                        <img src={item.ico} alt="" />
                        <div>
                          <p>{item.title}</p>
                          <p>{item.tips}</p>
                        </div>
                      </div>
                      <div className={"right"}>{item.time}</div>
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
export default Message;
