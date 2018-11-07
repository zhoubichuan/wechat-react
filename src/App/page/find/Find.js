import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../../base-page/Header";
import Footer from "../../base-page/Footer";
import Mould from "./Mould";
import "./Find.less";

class Find extends Component {
  constructor() {
    super();
    this.state = {
      mouldShow: false,
      application: [
        {
          ico: "http://www.cdhdky.com/images/ttt.jpg",
          title: "朋友圈",
          route: "Friend"
        },
        {
          ico: "http://www.cdhdky.com/images/ttt.jpg",
          title: "扫一扫",
          route: "Scan"
        },
        {
          ico: "http://www.cdhdky.com/images/ttt.jpg",
          title: "摇一摇",
          route: "Shake"
        },
        {
          ico: "http://www.cdhdky.com/images/ttt.jpg",
          title: "看一看",
          route: "See"
        },
        {
          ico: "http://www.cdhdky.com/images/ttt.jpg",
          title: "搜一搜",
          route: "Search"
        },
        {
          ico: "http://www.cdhdky.com/images/ttt.jpg",
          title: "附近的人",
          route: "Nearby"
        },
        {
          ico: "http://www.cdhdky.com/images/ttt.jpg",
          title: "购物",
          route: "Buy"
        },
        {
          ico: "http://www.cdhdky.com/images/ttt.jpg",
          title: "游戏",
          route: "Game"
        },
        {
          ico: "http://www.cdhdky.com/images/ttt.jpg",
          title: "小程序",
          route: "SmallApp}"
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
              <li>发现</li>
              <li />
            </Header>
            <div className={"find"} component={"find-component"}>
              <div className={"top"}>
                <ul>
                  {this.state.application.map((item, index) => (
                    <li key={index} onClick={this.handleClick}>
                      <Link to={"/Find/" + item.route}>
                        <img src={item.ico} alt="" />
                        <p>{item.title}</p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <Footer />
          </div>
        )}
        {this.state.mouldShow && <Mould />}
      </div>
    );
  }
}
export default Find;
