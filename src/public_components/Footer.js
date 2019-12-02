import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './Footer.less'

const nav = [
  { link: 'Message', text: '信息' },
  { link: 'Address', text: '通讯录' },
  { link: 'Find', text: '发现' },
  { link: 'Me', text: '我' }
]
class Footer extends Component {
  render() {
    return (
      <div className="app-footer">
        <ul>
          {nav.map((item, key) => (
            <li key={key}>
              <NavLink to={`/${item.link}`}>{item.text}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
export default Footer
