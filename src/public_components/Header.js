import React, { Component } from 'react'
import store from '@/store'
import './Header.less'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
  }
  componentDidMount() {
    this.changeHeaderConfig()
  }
  componentWillUnmount() {}
  changeHeaderConfig() {
    let { common } = store.getState()
    this.setState({ common })
  }
  render() {
    let { left = '', middle = '', right = '' } = this.state.common.headerConfig
    return (
      <div className={'header'} component={'header-component'}>
        <ul>
          <li>{left}</li>
          <li className={'title'}>{middle}</li>
          <li>{right}</li>
        </ul>
      </div>
    )
  }
}
export default Header
