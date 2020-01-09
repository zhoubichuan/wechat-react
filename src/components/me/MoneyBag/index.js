import React, { Component } from 'react'
import Main from '@/public_components/Main'
import './index.less'

class MoneyBag extends Component {
  constructor() {
    super()
    this.state = {
      application: [
        {
          title: '腾讯服务',
          data: [
            {
              ico: '信用卡还款',
              title: '信用卡还款',
              route: ''
            },
            {
              ico: '微粒贷借钱',
              title: '微粒贷借款',
              route: ''
            },
            {
              ico: '手机充值',
              title: '手机充值',
              route: ''
            },
            {
              ico: '理财通',
              title: '理财通',
              route: ''
            },
            {
              ico: '生活缴费',
              title: '生活缴费',
              route: ''
            },
            {
              ico: 'Q币充值',
              title: 'Q币充值',
              route: ''
            },
            {
              ico: '城市服务',
              title: '城市服务',
              route: ''
            },
            {
              ico: '腾讯公益',
              title: '腾讯公益',
              route: ''
            }
          ]
        },
        {
          title: '限时推广',
          data: [
            {
              ico: '微粒贷借钱',
              title: '腾讯王卡',
              route: ''
            },
            {
              ico: '拼多多',
              title: '拼多多',
              route: ''
            }
          ]
        },
        {
          title: '第三方服务',
          data: [
            {
              ico: '火车票机票',
              title: '火车票机票',
              route: ''
            },
            {
              ico: '滴滴出行',
              title: '滴滴出行',
              route: ''
            },
            {
              ico: '京东购物',
              title: '京东购物',
              route: ''
            },
            {
              ico: '美团外卖',
              title: '美团外卖',
              route: ''
            },
            {
              ico: '电影演出赛事',
              title: '电影演出赛事',
              route: ''
            },
            {
              ico: '吃喝玩乐',
              title: '吃喝玩乐',
              route: ''
            },
            {
              ico: '酒店',
              title: '酒店',
              route: ''
            },
            // {
            //   ico: '膜拜单车',
            //   title: '膜拜单车',
            //   route: ''
            // },
            {
              ico: '蘑菇街女装',
              title: '蘑菇街女装',
              route: ''
            },
            {
              ico: '唯品会特卖',
              title: '唯品会特卖',
              route: ''
            },
            {
              ico: '转转二手',
              title: '转转二手',
              route: ''
            }
          ]
        }
      ]
    }
    this.initConfig = {
      header: {
        left: { ico: 'back' },
        middle: '支付',
        right: { ico: 'more2' }
      },
      footer: false
    }
  }
  handleClick = () => {
    window.history.go(0)
  }
  render() {
    return (
      <Main mainConfig={this.initConfig} component={'me-moneybag-component'}>
        <div className="pay">
          <ul className="money-application">
            <li>
              <img src={require(`@/assets/image/scan-code.svg`)} />
              <span>收付款</span>
            </li>
            <li>
              <img src={require(`@/assets/image/money-bag.svg`)} />
              <span>零钱</span>
              <span>￥10.60</span>
            </li>
          </ul>
          <div className={'money-bag'}>
            <div className={'application'}>
              {this.state.application.map((item, index) => (
                <React.Fragment key={index}>
                  <h3>{item.title}</h3>
                  <ul>
                    {item.data.map((item2, index2) => (
                      <li key={index2}>
                        <img src={require(`@/assets/image/${item2.ico}.svg`)} alt={''} />
                        <p>{item2.title}</p>
                      </li>
                    ))}
                  </ul>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </Main>
    )
  }
}
export default MoneyBag
