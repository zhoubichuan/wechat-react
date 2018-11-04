import React, { Component } from "react";
import "./MessageList.css";

import MessageListBody from "./MessageListPart/MessageListBody";

class Get extends Component {
  constructor() {
    super();
    this.state = {
      popFloorShow: false,
      scrollStop: false,
      messageData: [
        {
          pho: "http://www.cdhdky.com/images/ttt.jpg",
          name: "唐僧",
          message: "打雷了，下雨了，该收衣服了。",
          redBag: { self: false }
        },
        {
          pho: "http://www.cdhdky.com/images/ttt.jpg",
          name: "孙悟空",
          message: "嘿嘿我来了",
          redBag: {
            receiveRedBag: "",
            self: false,
            tips: "恭喜发财1",
            total: "30",
            sendTime: "1508614531210",
            redBag: [
              { name: "小明", money: "1", rest: "30" },
              { name: "小k", money: "2", rest: "30" },
              { name: "小红", money: "4", rest: "30" },
              { name: "小红", money: "4", rest: "30" },
              { name: "小红", money: "4", rest: "30" }
            ]
          }
        },
        {
          pho: "http://www.cdhdky.com/images/ttt.jpg",
          name: "猪八戒",
          message: "嘿嘿我来了",
          redBag: { self: false }
        },
        {
          pho: "http://www.cdhdky.com/images/ttt.jpg",
          name: "沙和尚",
          message: "大师兄师傅父被妖怪抓走了",
          redBag: {
            receiveRedBag: "1",
            self: false,
            tips: "恭喜发财",
            total: "30",
            sendTime: "1538614531210",
            redBag: [
              { name: "小明", money: "1", rest: "30" },
              { name: "小k", money: "2", rest: "30" },
              { name: "小红", money: "4", rest: "30" },
              { name: "小红", money: "4", rest: "30" },
              { name: "小红", money: "4", rest: "30" }
            ]
          }
        },
        {
          pho: "http://www.cdhdky.com/images/ttt.jpg",
          name: "唐僧",
          message: "打雷了，下雨了，该收衣服了。",
          redBag: { self: false }
        },
        {
          pho: "http://www.cdhdky.com/images/ttt.jpg",
          name: "孙悟空",
          message: "嘿嘿我来了",
          redBag: {
            receiveRedBag: "1",
            self: false,
            tips: "恭喜发财，大吉大利",
            total: "30",
            sendTime: "1538614531210",
            redBag: [
              { name: "小明", money: "1", rest: "30" },
              { name: "小k", money: "2", rest: "30" },
              { name: "小红", money: "4", rest: "30" },
              { name: "小红", money: "4", rest: "30" },
              { name: "小红", money: "4", rest: "30" }
            ]
          }
        },
        {
          pho: "http://www.cdhdky.com/images/ttt.jpg",
          name: "猪八戒",
          message: "嘿嘿我来了",
          redBag: { self: false }
        },
        {
          pho: "http://www.cdhdky.com/images/ttt.jpg",
          name: "沙和尚",
          message: "大师兄师傅父被妖怪抓走了",
          redBag: {
            receiveRedBag: "2",
            self: false,
            tips: "大吉大利",
            total: "30",
            sendTime: "1538614531210",
            redBag: [
              { name: "小明", money: "1", rest: "30" },
              { name: "小k", money: "2", rest: "30" },
              { name: "小红", money: "4", rest: "30" },
              { name: "小红", money: "4", rest: "30" },
              { name: "小红", money: "4", rest: "30" }
            ]
          }
        }
      ]
    };
  }
  getPopFloorShow(val) {
    this.setState(val);
  }
  getSubmitData(val) {
    let message = {
      pho: "http://www.cdhdky.com/images/ttt.jpg",
      name: "我自己",
      message: "大师兄师傅父被妖怪抓走了",
      redBag: {
        receiveRedBag: "2",
        self: true,
        tips: "大吉大利",
        total: "30",
        sendTime: "1538614531210",
        redBag: [
          { name: "小明", money: "1", rest: "30" },
          { name: "小k", money: "2", rest: "30" },
          { name: "小红", money: "4", rest: "30" },
          { name: "小红", money: "4", rest: "30" },
          { name: "小红", money: "4", rest: "30" }
        ]
      }
    };
    let old = this.state.messageData;
    old.push(message);
    this.setState({
      messageData: old
    });
  }
  getScrollStop(val) {
    this.setState(val);
  }
  render() {
    return (
      <div className={this.state.scrollStop ? "get stop-scroll" : "get"}>
        
        <MessageListBody
          messageData={this.state.messageData}
          sendScrollStop={val => this.getScrollStop(val)}
        />
      </div>
    );
  }
}
export default Get;
