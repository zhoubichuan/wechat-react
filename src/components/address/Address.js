import React, { Component } from 'react'
import Header from '../../public_components/Header'
import Search from '../../public_components/Search'
import Footer from '../../public_components/Footer'
import './Address.less'

const application = [
  { ico: 'http://www.cdhdky.com/images/ttt.jpg', title: '新的朋友' },
  { ico: 'http://www.cdhdky.com/images/ttt.jpg', title: '群聊' },
  { ico: 'http://www.cdhdky.com/images/ttt.jpg', title: '标签' },
  { ico: 'http://www.cdhdky.com/images/ttt.jpg', title: '公众号' }
]
const linkPeople = [
  { ico: 'http://www.cdhdky.com/images/ttt.jpg', title: '朋友1' },
  { ico: 'http://www.cdhdky.com/images/ttt.jpg', title: '朋友2' },
  { ico: 'http://www.cdhdky.com/images/ttt.jpg', title: '朋友3' },
  { ico: 'http://www.cdhdky.com/images/ttt.jpg', title: '朋友4' },
  { ico: 'http://www.cdhdky.com/images/ttt.jpg', title: '朋友1' },
  { ico: 'http://www.cdhdky.com/images/ttt.jpg', title: '朋友2' },
  { ico: 'http://www.cdhdky.com/images/ttt.jpg', title: '朋友3' },
  { ico: 'http://www.cdhdky.com/images/ttt.jpg', title: '朋友4' },
  { ico: 'http://www.cdhdky.com/images/ttt.jpg', title: '朋友1' },
  { ico: 'http://www.cdhdky.com/images/ttt.jpg', title: '朋友2' },
  { ico: 'http://www.cdhdky.com/images/ttt.jpg', title: '朋友3' },
  { ico: 'http://www.cdhdky.com/images/ttt.jpg', title: '朋友4' },
  { ico: 'http://www.cdhdky.com/images/ttt.jpg', title: '朋友1' },
  { ico: 'http://www.cdhdky.com/images/ttt.jpg', title: '朋友2' },
  { ico: 'http://www.cdhdky.com/images/ttt.jpg', title: '朋友3' },
  { ico: 'http://www.cdhdky.com/images/ttt.jpg', title: '朋友4' },
  { ico: 'http://www.cdhdky.com/images/ttt.jpg', title: '朋友1' },
  { ico: 'http://www.cdhdky.com/images/ttt.jpg', title: '朋友2' },
  { ico: 'http://www.cdhdky.com/images/ttt.jpg', title: '朋友3' },
  { ico: 'http://www.cdhdky.com/images/ttt.jpg', title: '朋友4' }
]
class Find extends Component {
  constructor() {
    super()
    this.state = {
      application,
      linkPeople,
      headerConfig: {
        left: '',
        middle: '通讯录',
        right: '其他'
      }
    }
  }
  render() {
    return (
      <div>
        <Header data={this.state.headerConfig}></Header>
        <div className={'address'} component={'address-component'}>
          <Search />
          <div className={'top'}>
            <ul>
              {this.state.application.map((item, index) => (
                <li key={index}>
                  <img src={item.ico} alt="" />
                  <p>{item.title}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className={'link-people'}>
            <ul>
              {this.state.linkPeople.map((item, index) => (
                <li key={index}>
                  <img src={item.ico} alt="" />
                  <p>{item.title}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
export default Find
