import React, { Component } from "react";
// import * as actions from "../../../../../../store/action";
// import { connect } from "net";
import "./index.less";
import SendRedBag from "./SendRedBag";

class MessageListFooter extends Component {
  constructor() {
    super();
    this.state = {
      SendRedBagShow: false,
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
  getSendRedBagShow = val => {
    this.setState({ SendRedBagShow: val.SendRedBagShow });
  };
  handleClickApp = e => {
    if (e.target.className == "ico5") {
      // this.props.sendSendRedBagShow({ SendRedBagShow: true });
      this.setState({ applicationShow: false, SendRedBagShow: true });
    }
  };
  render() {
    return (
      <div>
        <div className="message-application">
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
        {this.state.SendRedBagShow && (
          <SendRedBag
            sendSendRedBagShow={val => this.getSendRedBagShow(val)}
            // sendSubmitData={val => this.getSubmitData(val)}
          />
        )}
      </div>
    );
  }
}
// export default connect(
//   state => ({ ...state.showMessageRecordApplication }),
//   actions
// )(MessageListFooter);
export default MessageListFooter;
