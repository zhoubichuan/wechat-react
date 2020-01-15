import React, { Component } from 'react'
import Main from '@/public_components/Main'
import './Address.less'
import store from '@/store/index'

const application = [
  { ico: '新的朋友', title: '新的朋友' },
  { ico: '群聊', title: '群聊' },
  { ico: '标签', title: '标签' },
  { ico: '公众号', title: '公众号' }
]
const linkPeople = [
  { ico: '群聊', title: '朋友1' },
  { ico: '群聊', title: '朋友2' },
  { ico: '群聊', title: '朋友3' },
  { ico: '群聊', title: '朋友4' },
  { ico: '群聊', title: '朋友1' },
  { ico: '群聊', title: '朋友2' },
  { ico: '群聊', title: '朋友3' },
  { ico: '群聊', title: '朋友4' },
  { ico: '群聊', title: '朋友1' },
  { ico: '群聊', title: '朋友2' },
  { ico: '群聊', title: '朋友3' },
  { ico: '群聊', title: '朋友4' },
  { ico: '群聊', title: '朋友1' },
  { ico: '群聊', title: '朋友2' },
  { ico: '群聊', title: '朋友3' },
  { ico: '群聊', title: '朋友4' },
  { ico: '群聊', title: '朋友1' },
  { ico: '群聊', title: '朋友2' },
  { ico: '群聊', title: '朋友3' },
  { ico: '群聊', title: '朋友4' }
]
class Find extends Component {
  constructor() {
    super()
    this.state = {
      application,
      linkPeople
    }
    this.initConfig = {
      header: {
        left: '',
        middle: '通讯录',
        right: { ico: 'add-friend' }
      },
      search: true
    }
  }
  render () {
    return (
      <Main mainConfig={this.initConfig}>
        <div className={'address'} component={'address-component'}>
          <div className={'top'}>
            <ul>
              {this.state.application.map((item, index) => (
                <li key={index}>
                  <img src={require(`@/assets/image/${item.ico}.svg`)} alt="" />
                  <p>{item.title}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className={'link-people'}>
            <ul>
              {this.state.linkPeople.map((item, index) => (
                <li key={index}>
                  <img src={require(`@/assets/image/${item.ico}.svg`)} alt="" />
                  <p>{item.title}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Main>
    )
  }
}
export default Find
