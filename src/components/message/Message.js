import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './Message.less'
import Main from '@/public_components/Main'
import Mould from './Mould'
import store from '@/store/index'

class Message extends Component {
  constructor() {
    super()
    var { storeMessage } = store.getState()
    this.state = {
      mouldShow: false,
      ...storeMessage
    }
    this.initConfig = {
      header: {
        left: '',
        middle: '微信(93)',
        right: '+'
      },
      search: true
    }
  }
  handleClick = () => {
    this.setState({
      mouldShow: false
    })
  }
  handleClick = () => {
    this.setState({
      mouldShow: true
    })
  }
  render() {
    return (
      <Main mainConfig={this.initConfig}>
        {!this.state.mouldShow && (
          <div className={'message'}>
            <div className={'content'}>
              <ul>
                {this.state.message.map((item, index) => (
                  <li key={index} onClick={this.handleClick}>
                    <Link to={'/Message/' + item.route}>
                      <div className={'left'}>
                        <img src={item.ico} alt="" />
                        <div>
                          <p> {item.title} </p> <p> {item.tips} </p>
                        </div>
                      </div>
                      <div className={'right'}> {item.time} </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
        {this.state.mouldShow && <Mould />}
      </Main>
    )
  }
}
export default Message
