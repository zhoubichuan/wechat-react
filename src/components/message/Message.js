import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './Message.less'
import Search from '@/public_components/Search'
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
    let headerConfig = {
      left: '',
      middle: '微信',
      right: ''
    }
    store.dispatch({ type: 'common', text: headerConfig })
  }
  componentWillUnmount() {}
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
      <div>
        {!this.state.mouldShow && (
          <div className={'message'}>
            <Search />
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
      </div>
    )
  }
}
export default Message
