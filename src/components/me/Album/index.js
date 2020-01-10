import React, { Component } from "react";
import Main from '@/public_components/Main'
import "./index.less";

class Album extends Component {
  constructor() {
    super();
    this.initConfig = {
      header: {
        left: { ico: 'back' },
        middle: '',
        right: { ico: 'more' }
      },
      footer: false
    }
  }
  render () {
    return (
      <Main mainConfig={this.initConfig} component={"me-album-component"}>
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
      </Main>
    );
  }
}
export default Album;
