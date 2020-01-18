import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Mould from './Mould'
import './Find.less'
import Main from '@/public_components/Main'
import store from '@/store/index'

const application = [
  {
    ico: '朋友圈',
    title: '朋友圈',
    route: 'Friend'
  },
  {
    ico: '扫一扫',
    title: '扫一扫',
    route: 'Scan'
  },
  {
    ico: '摇一摇',
    title: '摇一摇',
    route: 'Shake'
  },
  {
    ico: '看一看',
    title: '看一看',
    route: 'See'
  },
  {
    ico: '搜一搜',
    title: '搜一搜',
    route: 'Search'
  },
  {
    ico: '附近的人',
    title: '附近的人',
    route: 'Nearby'
  },
  {
    ico: '购物',
    title: '购物',
    route: 'Buy'
  },
  {
    ico: '游戏',
    title: '游戏',
    route: 'Game'
  },
  {
    ico: '小程序',
    title: '小程序',
    route: 'SmallApp}'
  }
]
class Find extends Component {
  constructor() {
    super()
    this.state = {
      mouldShow: false,
      application
    }
    this.initConfig = {
      header: {
        left: '',
        middle: '发现',
        right: ''
      }
    }
  }
  handleClick = e => {
    this.setState({
      mouldShow: true
    })
  }
  render () {
    return (
      <Main mainConfig={this.initConfig}>
        {!this.state.mouldShow && (
          <div>
            <div className={'find'} component={'find-component'}>
              <div className={'top'}>
                <ul>
                  {this.state.application.map((item, index) => (
                    <li key={index} onClick={this.handleClick}>
                      <Link to={'/Find/' + item.route}>
                        <img src={require(`@/assets/image/${item.ico}.svg`)} alt="" />
                        <p>{item.title}</p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
        {this.state.mouldShow && <Mould />}
      </Main>
    )
  }
}
export default Find
