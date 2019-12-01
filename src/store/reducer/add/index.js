// 建议reducer使用这种结构
import {
  ADD
} from '../../action/actionTypes'

// 1.定义默认数据
const initialState = {
  a: 1
}

// 2.Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state, a: state.a + action.value
      }
      default:
        return state
  }
}
// 3.导出
export default reducer