import React, {
  Component
} from "react";
import Header from "@/public_components/Header";
import Search from "@/public_components/Search";
import "./index.less";

class Collection extends Component {
  constructor() {
    super();
    this.state = {
      application: [{
          title: "图片与视屏",
          route: ""
        },
        {
          title: "链接",
          route: ""
        },
        {
          title: "文件",
          route: ""
        },
        {
          title: "音乐",
          route: ""
        },
        {
          title: "聊天记录",
          route: ""
        },
        {
          title: "语音",
          route: ""
        },
        {
          title: "笔记",
          route: ""
        },
        {
          title: "位置",
          route: ""
        }
      ]
    };
  }
  handleClick = () => {
    window.history.go(0);
  };
  render() {
    return ( <
      div component = {
        "me-collection-component"
      } >
      <
      Header >
      <
      li onClick = {
        this.handleClick
      } > 我 < /li> <
      li > 收藏 < /li> <
      li > + < /li> <
      /Header> <
      div className = {
        "me-collection"
      } >
      <
      Search / >
      <
      div className = {
        "top"
      } >
      <
      ul > {
        this.state.application.map((item, index) => ( <
          li key = {
            index
          } > {
            item.title
          } < /li>
        ))
      } <
      /ul> <
      /div> <
      /div> <
      /div>
    );
  }
}
export default Collection;