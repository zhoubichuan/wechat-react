import React, { Component } from "react";

class MessageListFooter extends Component {
  constructor() {
    super();
    this.state = {
      applicationShow: false,
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
  handleClick = () => {
    this.setState({ applicationShow: true });
  };
  handleClickApp = e => {
    if (e.target.className == "ico5") {
      this.props.sendPopFloorShow({ popFloorShow: true });
      this.setState({ applicationShow: false });
    }
  };
  render() {
    return (
      <div className="message-footer">
        <div className="send">
          <i className="voiceInformation" />
          <input type="text" />
          <i className="emjoy" />
          <i className="moreBtn" onClick={this.handleClick} />
        </div>
        {this.state.applicationShow && (
          <div className="function">
            <ul>
              {this.state.applications.map((val, index) => (
                <li key={index} onClick={this.handleClickApp}>
                  <i className={"ico" + val.com} />
                  <span>{val.title}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}
export default MessageListFooter;
