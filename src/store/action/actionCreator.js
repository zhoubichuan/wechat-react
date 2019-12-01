export default function actionCreator(type, value = null) {
  return {
    type,
    value
  }
}