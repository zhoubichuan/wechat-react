let rect = ''
rect = localStorage.rect ? localStorage.rect : rect
export default {
  message: {
    messageList: rect + 'api/message/messageList',
    sport: rect + 'api/message/sport',
    talk: rect + 'api/message/talk',
  },
  address: {
    newFriend: rect + 'api/address/newFriend',
    talk: rect + 'api/address/talk',
    tips: rect + 'api/address/tips',
    code: rect + 'api/address/code',
    friend: rect + 'api/address/friendList',
    friendDetail: rect + 'api/address/friend/friendDetail'
  },
  find: {
    findConfig: rect + 'api/find/findList',
  },
  me: {
    selfInformation: rect + 'api/me/selfinformation',
    setName: rect + 'api/me/information/setName',
    QRcode: rect + 'api/me/information/QRcode',
    moreInformation: rect + 'api/me/information/more',
    address: rect + 'api/me/information/address',
    cardBagList: rect + 'api/me/carBag/cardBagList',
    moreExcitingExpression: rect + 'api/me/emoji/moreExcitingExpression',
    recommendedExpression: rect + 'api/me/emoji/recommendedExpression',
    weChatMomentAlbum: rect + 'api/me/album/weChatMomentAlbum',
    tencentPayService: rect + 'api/me/pay/tencentPayService',
    thirdPartyPayService: rect + 'api/me/pay/thirdPartyPayService',
  }
}