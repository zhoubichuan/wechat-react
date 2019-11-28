import * as Types from '../action-type'
let actons = {
  applicatonIsShow(isShow) {
    return {
      type: Types.SHOW_MESSAGE_RECORD_APPLICATION,
      isShow
    }
  }
}
