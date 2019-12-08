// 建议reducer使用这种结构
import {
  SETHEADCONFIG
} from '@/store/action/actionTypes'

// 1.定义默认数据
const initialState = {
  headerConfig: {
    left: '',
    middle: '微信',
    right: ''
  }
}

// 2.Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SETHEADCONFIG:
      debugger
      return {
        ...state, headerConfig: action.value
      }
      default:
        return state
  }
}
// 3.导出
export default reducer