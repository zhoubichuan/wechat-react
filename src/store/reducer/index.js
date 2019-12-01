import add from './add'
import square from './square'
import {
  combineReducers
} from 'redux'

const reducers = combineReducers({
  add,
  square
})
export default reducers


// let initState = {
//   showMessageRecordApplication: false,
//   isShowHeader: true,
//   isShowCommonPage: true,
//   isShowFooter: true,
//   isShowSearch: false,
//   isShowSearchDialog: false,
//   header: {},
//   redBagTyep: "commonRedBag",
//   redBagAmount: "",
//   redBagNumber: "",
//   sendMessage: "",
//   pageShow: false,
//   applianceShow: false,
//   pageStopScroll: false,
//   optionsList: {}
// }

// function setBags(money, redBagNum) {
//   var bags = []
//   var avg = +money / +redBagNum
//   for (let i = 0; i < +redBagNum; i++) {
//     bags.push({
//       i: avg
//     })
//   }
//   return bags
// }

// function reducer(state = initState, action) {
//   switch (action.type) {
//     case Types.SHOW_MESSAGE_RECORD_APPLICATION:
//       return {
//         ...state,
//         showMessageRecordApplication: action.isShow
//       }
//       case Types.SET_ARGU:
//         var bags = setBags(action.money, action.redBagNum)
//         return {
//           ...state,
//           redBagNum: action.redBagNum,
//             money: action.money,
//             bags: bags
//         }
//         default:
//           return state
//   }
// }