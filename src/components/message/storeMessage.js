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
    ico: '群聊',
    title: '讨论区 前端进阶',
    tips: 'XXX',
    time: '下午5:44',
    route: 'Qun'
  },
  {
    ico: '订阅号消息',
    title: '订阅好消息',
    tips: '1条',
    time: '下午5:44',
    route: 'dingyue'
  },
  {
    ico: '群聊',
    title: 'XXX',
    tips: 'XXX',
    time: '下午5:44',
    route: 'Qun'
  },
  {
    ico: '群聊',
    title: '服务通知',
    tips: 'XXX',
    time: '下午5:44',
    route: 'server'
  },
  {
    ico: '群聊',
    title: '事业二部~销售&CBG ',
    tips: 'XXX',
    time: '下午5:44',
    route: 'Qun'
  },
  {
    ico: '群聊',
    title: '文件传输助手',
    tips: 'XXX',
    time: '下午5:44',
    route: 'healp'
  },
  {
    ico: '群聊',
    title: '招商银行深圳分行',
    tips: 'XXX',
    time: '下午5:44',
    route: 'yinhang'
  },
  {
    ico: '群聊',
    title: '微信运动',
    tips: 'XXX',
    time: '下午5:44',
    route: 'yundong'
  },
  {
    ico: '群聊',
    title: '群',
    tips: 'XXX',
    time: '下午5:44',
    route: 'Qun'
  },
  {
    ico: '群聊',
    title: '讨论区',
    tips: 'XXX',
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