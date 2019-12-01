// 建议reducer使用这种结构
import {
  SQUARE
} from '@/store/action/actionTypes'

// 1.定义默认数据
const initialState = {
  headerConfig: {
    left: '',
    middle: '微信',
    right: ''
  },
  message: [{
      ico: 'http://www.cdhdky.com/images/ttt.jpg',
      title: '讨论区 前端进阶',
      tips: '王锦辉',
      time: '下午5:44',
      route: 'Qun'
    },
    {
      ico: 'http://www.cdhdky.com/images/ttt.jpg',
      title: '订阅好消息',
      tips: '1条',
      time: '下午5:44',
      route: 'dingyue'
    },
    {
      ico: 'http://www.cdhdky.com/images/ttt.jpg',
      title: '华为官网Team',
      tips: '王锦辉',
      time: '下午5:44',
      route: 'Qun'
    },
    {
      ico: 'http://www.cdhdky.com/images/ttt.jpg',
      title: '服务通知',
      tips: '王锦辉',
      time: '下午5:44',
      route: 'server'
    },
    {
      ico: 'http://www.cdhdky.com/images/ttt.jpg',
      title: '事业二部~销售&CBG ',
      tips: '王锦辉',
      time: '下午5:44',
      route: 'Qun'
    },
    {
      ico: 'http://www.cdhdky.com/images/ttt.jpg',
      title: '文件传输助手',
      tips: '王锦辉',
      time: '下午5:44',
      route: 'healp'
    },
    {
      ico: 'http://www.cdhdky.com/images/ttt.jpg',
      title: '招商银行深圳分行',
      tips: '王锦辉',
      time: '下午5:44',
      route: 'yinhang'
    },
    {
      ico: 'http://www.cdhdky.com/images/ttt.jpg',
      title: '微信运动',
      tips: '王锦辉',
      time: '下午5:44',
      route: 'yundong'
    },
    {
      ico: 'http://www.cdhdky.com/images/ttt.jpg',
      title: '群',
      tips: '王锦辉',
      time: '下午5:44',
      route: 'Qun'
    },
    {
      ico: 'http://www.cdhdky.com/images/ttt.jpg',
      title: '讨论区',
      tips: '王锦辉',
      time: '下午5:44',
      route: ''
    }
  ]
}

// 2.Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SQUARE:
      return {
        ...state, a: action.value * action.value
      }
      default:
        return state
  }
}
// 3.导出
export default reducer