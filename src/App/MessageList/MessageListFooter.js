import React, { Component } from "react";

class MessageListFooter extends Component {
  constructor() {
    super();
    this.state = {
      applications: [
        {
          title: "照片",
          com: "1"
        },
        {
          title: "拍摄",
          com: "2"
        },
        {
          title: "语音通话",
          com: "3"
        },
        {
          title: "位置",
          com: "4"
        },
        {
          title: "红包",
          com: "5"
        },
        {
          title: "语音输入",
          com: "6"
        },
        {
          title: "收藏",
          com: "7"
        },
        {
          title: "个人名片",
          com: "8"
        }
      ]
    };
  }
  render() {
    return (
      <div class="footer">
        <div class="send">
          <i class="voiceInformation">1</i>
          <input type="text" />
          <i class="emjoy">1</i>
          <i class="moreBtn">1</i>
        </div>
        <div class="function">
          <ul>
            {this.state.applications.map((val, index) => (
              <li key={index}>
                <i className={"ico" + val.com} />
                <span>{val.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
export default MessageListFooter;
