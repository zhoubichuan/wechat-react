import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Me.less";
import Header from "../../base-page/Header";
import Footer from "../../base-page/Footer";
import Mould from "./Mould";
import img1 from "./ico/1.png";
import img2 from "./ico/2.png";
import img3 from "./ico/3.png";
import img4 from "./ico/4.png";
import img5 from "./ico/5.png";
import img6 from "./ico/6.png";

class Me extends Component {
  constructor() {
    super();
    this.state = {
      mouldShow: false,
      application: [
        { ico: img1, title: "钱包", route: "MoneyBag" },
        { ico: img2, title: "收藏", route: "Collection" },
        { ico: img3, title: "相册", route: "Album" },
        { ico: img4, title: "卡包", route: "CardBag" },
        { ico: img5, title: "表情", route: "Emoji" },
        { ico: img6, title: "设置", route: "Setting" }
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
                    <img src="http://www.cdhdky.com/images/ttt.jpg" alt="" />
                    <div>
                      <h3>会跑的鸡腿</h3>
                      <p>微信号：zbc159x</p>
                    </div>
                  </div>
                  <div className={"right"}>
                    <i className="code" />
                    <i className="ico" />
                  </div>
                </Link>
              </div>
              <ul>
                {this.state.application.map((item, index) => (
                  <li key={index} onClick={this.handleClick}>
                    <Link to={"/Me/" + item.route}>
                      <img src={item.ico} alt="" />
                      <p>{item.title}</p>
                      <i class="ico" />
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
