import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../../../../base-page/Header";

class Setting extends Component {
  constructor() {
    super();
    this.state = {
      setting: [
        {
          title: "账号与安全",
          route: "Safe"
        },
        {
          title: "新消息通知",
          route: "Notice"
        },
        {
          title: "隐私",
          route: "Privacy"
        },
        {
          title: "通用",
          route: "Common"
        },
        {
          title: "帮助与反馈",
          route: "Healp"
        },
        {
          title: "关于微信",
          route: "About"
        },
        {
          title: "插件",
          route: "PlugIn"
        },
        {
          title: "切换账号",
          route: "Account"
        },
        {
          title: "退出登录",
          route: "Login"
        }
      ]
    };
  }
  render() {
    return (
      <div component={"me-setting-component"}>
        <Header>
          <li>我</li>
          <li>设置</li>
          <li />
        </Header>
        <div className={"me-setting-content"}>
          <ul>
            {this.state.setting.map((item, index) => (
              <li key={index}>
                <Link to={"/Me/Setting/" + item.route}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
export default Setting;
