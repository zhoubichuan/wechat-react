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
        img:'more',
        title: "野萌君第四波",
        number: "11"
      },
        {
          img: 'more',
        title: "小方头机器人萌宠",
        number: "1"
      },
        {
          img: 'more',
        title: "饭粒猫与包子鸭2",
        number: "4"
      },
        {
          img: 'more',
        title: "啊呜呜呜",
        number: "5"
      },
        {
          img: 'more',
        title: "柴犬财财1",
        number: "1"
      },
        {
          img: 'more',
        title: "撩人语录",
        number: "3"
      },
        {
          img: 'more',
        title: "胖哆啦",
        number: "6"
      },
        {
          img: 'more',
        title: "阿白酱一家过年篇",
        number: "7"
      }
      ]
    };
    this.initConfig = {
      header: {
        left: { ico: 'back' },
        middle: '表情',
        right: { ico: 'more' }
      },
      search: true,
      footer: false
    }
  }
  render () {
    return (
      <Main mainConfig={this.initConfig} className={"me-collection"} >
        <div className={"top"} >
          <ul > {
            this.state.application.map((item, index) => (
              <li key={index} >
                <div>
                  <img src="" alt="" />
                  <div>
                    <p>{item.title}</p>
                    <p>{ item.number }个朋友使用</p>
                  </div>
                </div>
                <button>使用</button>
              </li>
            ))
          }
          </ul>
        </div>
      </Main>
    );
  }
}
export default Collection;