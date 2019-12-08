import React, { Component } from 'react'
import Search from '../../public_components/Search'
import './Address.less'
import store from '@/store/index'

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
      linkPeople
    }
    let headerConfig = {
      left: '',
      middle: '通讯录',
      right: '其他'
    }
    store.dispatch({ type: 'SETHEADCONFIG', text: headerConfig })
    let data = store.getState()
    debugger
  }
  render() {
    return (
      <div>
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
      </div>
    )
  }
}
export default Find
