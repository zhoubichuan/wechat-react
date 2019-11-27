import React, { Component } from "react";
import Header from "../../../../public_components/Header";
import "./index.less";

class Album extends Component {
  constructor() {
    super();
  }
  handleClick = () => {
    window.history.go(0);
  };
  render() {
    return (
      <div component={"me-album-component"}>
        <Header>
          <li onClick={this.handleClick}>我</li>
          <li />
          <li>...</li>
        </Header>
        <div className="me-album">
          <div className="backimg">
            <img src="http://www.cdhdky.com/images/ttt.jpg" />
            <div className="photo">
              <p>会跑的鸡腿</p>
              <img src="http://www.cdhdky.com/images/ttt.jpg" />
            </div>
          </div>
          <ul>
            <li>
              <div className="left">
                <div className="time">
                  <span>29</span>
                  <span>10月</span>
                </div>
                <p>asdfasdfasdfasd</p>
              </div>
              <div className="rigth">
                <img src="" />
                <p>1234123</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default Album;
