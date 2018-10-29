import React, { Component } from "react";
import Header from "../../base-page/Header";
import Footer from "../../base-page/Footer";
import "./Address.css";

class Find extends Component {
  constructor() {
    super();
    this.state = {
      application: [
        { ico: "http://www.cdhdky.com/images/ttt.jpg", title: "新的朋友" },
        { ico: "http://www.cdhdky.com/images/ttt.jpg", title: "群聊" },
        { ico: "http://www.cdhdky.com/images/ttt.jpg", title: "标签" },
        { ico: "http://www.cdhdky.com/images/ttt.jpg", title: "公众号" }
      ],
      linkPeople: [
        { ico: "http://www.cdhdky.com/images/ttt.jpg", title: "朋友1" },
        { ico: "http://www.cdhdky.com/images/ttt.jpg", title: "朋友2" },
        { ico: "http://www.cdhdky.com/images/ttt.jpg", title: "朋友3" },
        { ico: "http://www.cdhdky.com/images/ttt.jpg", title: "朋友4" },
        { ico: "http://www.cdhdky.com/images/ttt.jpg", title: "朋友1" },
        { ico: "http://www.cdhdky.com/images/ttt.jpg", title: "朋友2" },
        { ico: "http://www.cdhdky.com/images/ttt.jpg", title: "朋友3" },
        { ico: "http://www.cdhdky.com/images/ttt.jpg", title: "朋友4" },
        { ico: "http://www.cdhdky.com/images/ttt.jpg", title: "朋友1" },
        { ico: "http://www.cdhdky.com/images/ttt.jpg", title: "朋友2" },
        { ico: "http://www.cdhdky.com/images/ttt.jpg", title: "朋友3" },
        { ico: "http://www.cdhdky.com/images/ttt.jpg", title: "朋友4" },
        { ico: "http://www.cdhdky.com/images/ttt.jpg", title: "朋友1" },
        { ico: "http://www.cdhdky.com/images/ttt.jpg", title: "朋友2" },
        { ico: "http://www.cdhdky.com/images/ttt.jpg", title: "朋友3" },
        { ico: "http://www.cdhdky.com/images/ttt.jpg", title: "朋友4" },
        { ico: "http://www.cdhdky.com/images/ttt.jpg", title: "朋友1" },
        { ico: "http://www.cdhdky.com/images/ttt.jpg", title: "朋友2" },
        { ico: "http://www.cdhdky.com/images/ttt.jpg", title: "朋友3" },
        { ico: "http://www.cdhdky.com/images/ttt.jpg", title: "朋友4" }
      ]
    };
  }
  render() {
    return (
      <div>
        <Header>
          <li />
          <li>通讯录</li>
          <li>其他</li>
        </Header>
        <div className={"address"} component={"address-component"}>
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
          <div className={"link-people"}>
            <ul>
              {this.state.linkPeople.map((item, index) => (
                <li key={index}>
                  <img src={item.ico} alt="" />
                  <p>{item.title}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default Find;
