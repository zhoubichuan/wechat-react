import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Me.less'
import img1 from './ico/1.png'
import img2 from './ico/2.png'
import img3 from './ico/3.png'
import img4 from './ico/4.png'
import img5 from './ico/5.png'
import img6 from './ico/6.png'

const application = [
  { ico: img1, title: '钱包', route: 'MeMoneyBag' },
  { ico: img2, title: '收藏', route: 'MeCollection' },
  { ico: img3, title: '相册', route: 'MeEmoji' },
  { ico: img4, title: '卡包', route: 'MeCardBag' },
  { ico: img5, title: '表情', route: 'MeEmoji' },
  { ico: img6, title: '设置', route: 'MeSetting' }
]
class Me extends Component {
  constructor(props) {
    super(props)

    this.state = {
      mouldShow: false,
      application,
      headerConfig: {
        left: '',
        middle: '我',
        right: ''
      }
    }
  }
  handleClick = e => {
    this.setState({
      mouldShow: true
    })
  }

  render() {
    return (
      <div>
        {!this.state.mouldShow && (
          <div>
            <div className={'me'} component={'me-component'}>
              <div className={'information'} onClick={this.handleClick}>
                <Link to={'/Me/PersonInformation'}>
                  <div className={'left'}>
                    <img src="http://www.cdhdky.com/images/ttt.jpg" alt="" />
                    <div>
                      <h3>会跑的鸡腿</h3>
                      <p>微信号：zbc159x</p>
                    </div>
                  </div>
                  <div className={'right'}>
                    <i className="code" />
                    <i className="ico" />
                  </div>
                </Link>
              </div>
              <ul>
                {this.state.application.map((item, index) => (
                  <li key={index} onClick={this.handleClick}>
                    <Link to={item.route}>
                      <img src={item.ico} alt="" />
                      <p>{item.title}</p>
                      <i class="ico" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    )
  }
}
export default Me
