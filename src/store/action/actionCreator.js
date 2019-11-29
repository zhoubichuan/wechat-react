import * as Types from './actionTypes'
let actons = {
  applicatonIsShow(isShow) {
    return {
      type: Types.SHOW_MESSAGE_RECORD_APPLICATION,
      isShow
    }
  }
}