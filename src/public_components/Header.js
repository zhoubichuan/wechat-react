import React, { Component } from 'react'
import store from '@/store'
import './Header.less'

class Header extends Component {
  handleClick = () => {
    window.history.go(-1)
  }
  render () {
    let { left = ' ', middle = ' ', right = ' ' } = this.props.headConfig
    return (
      <div className={'header'} component={'header-component'}>
        <ul>
          <li onClick={this.handleClick}>
            {left.ico ? (
              <img src={require(`@/assets/image/${left.ico}.svg`)} alt="" />
            ) : (
                left
              )}
          </li>
          <li className={'title'}>{middle}</li>
          <li>
            {right.ico ? (
              <img src={require(`../assets/image/${right.ico}.svg`)} alt="" />
            ) : (
                right
              )}
          </li>
        </ul>
      </div>
    )
  }
}
export default Header
