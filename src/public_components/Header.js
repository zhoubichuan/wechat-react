import React, { Component } from 'react'
import store from '@/store'
import './Header.less'

class Header extends Component {
  render() {
    let { left = ' ', middle = ' ', right = ' ' } = this.props.headConfig
    return (
      <div className={'header'} component={'header-component'}>
        <ul>
          <li>{left}</li>
          <li className={'title'}>{middle}</li>
          <li>{right.ico?<img src={require(`../assets/image/${right.ico}.svg`)}/>:right}</li>
        </ul>
      </div>
    )
  }
}
export default Header
