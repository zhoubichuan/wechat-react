import React, { Component } from 'react'
import Header from '@/public_components/Header'
import { Link } from 'react-router-dom'
import './index.less'

class PersonInformation extends Component {
  constructor() {
    super()
    this.state = {
      showMould: false,
      personData: [
        {
          title: '头像',
          img: 'http://www.cdhdky.com/images/ttt.jpg',
          link: 'MeInformationPhoto'
        },
        {
          title: '名字',
          img: 'http://www.cdhdky.com/images/ttt.jpg',
          link: 'MeInformationPhoto'
        },
        {
          title: '微信号',
          img: 'http://www.cdhdky.com/images/ttt.jpg',
          link: 'MeInformationPhoto'
        },
        {
          title: '我的二维码',
          img: 'http://www.cdhdky.com/images/ttt.jpg',
          link: 'MeInformationCode'
        },
        {
          title: '更多',
          img: 'http://www.cdhdky.com/images/ttt.jpg',
          link: 'MeInformationMore'
        },
        {
          title: '我的地址',
          img: 'http://www.cdhdky.com/images/ttt.jpg',
          link: 'MeInformationAddress'
        }
      ]
    }
  }
  handleClick = () => {
    window.history.go(0)
  }
  handleClick2 = e => {
    this.setState({
      showMould: true
    })
  }
  render() {
    return (
      <div component={'me-personinformation-component'}>
        <div>
          <div className={'person-information'}>
            <ul onClick={this.handleClick2}>
              {this.state.personData.map((item, index) => (
                <li key={index} className={'photo'}>
                  <Link to={item.link}>
                    <p>{item.title}</p>
                    <div className="right">
                      <img src={item.ico} alt="" />
                      <i className="ico" />
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default PersonInformation
