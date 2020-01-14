import React from 'react'
import { NavLink } from 'react-router-dom'
import './Footer.less'

const nav = [
  { img: '微信', link: 'Message', text: '信息' },
  { img: '通讯录', link: 'Address', text: '通讯录' },
  { img: '发现', link: 'Find', text: '发现' },
  { img: '我', link: 'Me', text: '我' }
]

let Footer = () => (
  <div className="app-footer">
    <ul>
      {nav.map((item, key) => (
        <li key={key}>
          <img src={require(`@/assets/image/${item.img}.svg`)} alt='' />
          <NavLink to={`/${item.link}`}>{item.text}</NavLink>
        </li>
      ))}
    </ul>
  </div>
)
export default Footer
