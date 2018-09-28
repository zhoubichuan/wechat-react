const SET_ARGU = "SET_ARGU";
function setBags(money, redBagNum) {
  var bags = [];
  var avg = +money / +redBagNum;
  for (let i = 0; i < +redBagNum; i++) {
    bags.push({ i: avg });
  }
  return bags;
}
function reducer(state, action) {
  switch (action.type) {
    case SET_ARGU:
      var bags = setBags(action.money, action.redBagNum);
      return {
        ...state,
        redBagNum: action.redBagNum,
        money: action.money,
        bags: bags
      };
    default:
      return state;
  }
}
export default reducer;
