import React, { Component } from 'react'
import SendRedBagHeader from './SendRedBagPart/SendRedBagHeader'
import SendRedBagFooter from './SendRedBagPart/SendRedBagFooter'
import SendRedBagBody from './SendRedBagPart/SendRedBagBody'
import './index.less'

class SendPage extends Component {
  constructor() {
    super()
  }
  getSendRedBagShowChild(val) {
    this.props.sendSendRedBagShow(val)
  }
  getSubmit(val) {
    this.props.sendSubmitData(val)
  }
  render() {
    return (
      <div className={'send-red-bag'}>
        <SendRedBagHeader
          sendSendRedBagShowChild={val => this.getSendRedBagShowChild(val)}
        />
        <SendRedBagBody
          sendSendRedBagShowChild={val => this.getSendRedBagShowChild(val)}
          sendSubmit={val => this.getSubmit(val)}
        />
        <SendRedBagFooter />
      </div>
    )
  }
}
export default SendPage
