import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './Message.less'
import Header from '@/public_components/Header'
import Search from '@/public_components/Search'
import Mould from './Mould'
import Footer from '@/public_components/Footer'
import store from '@/store/index'

class Message extends Component {
  constructor() {
    super()
    this.setState()
    var { storeMessage } = store.getState()
    this.state = {
      mouldShow: false,
      ...storeMessage
    }
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
            <Header data={this.state.headerConfig}></Header>
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
            <Footer />
          </div>
        )}
        {this.state.mouldShow && <Mould />}
      </div>
    )
  }
}
export default Message
