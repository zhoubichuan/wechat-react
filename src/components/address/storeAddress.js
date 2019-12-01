// 建议reducer使用这种结构
import {
  SQUARE
} from '@/store/action/actionTypes'

// 1.定义默认数据
const initialState = {
  a: 1
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