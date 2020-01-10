import React, {
  Component
} from "react";
import Main from '@/public_components/Main'
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
    this.initConfig = {
      header: {
        left: { ico: 'back' },
        middle: '收藏',
        right: { ico: 'more' }
      },
      search: true,
      footer: false
    }
  }
  render () {
    return (
      <Main mainConfig={this.initConfig}>
        <div className={"me-car-bag"}>
          <div className={"top"} >
            <ul > {
              this.state.application.map((item, index) => (
                <li key={index} > {item.title} </li>
              ))
            }
            </ul>
          </div>
        </div>
      </Main>
    );
  }
}
export default Collection;