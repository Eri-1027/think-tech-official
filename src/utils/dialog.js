import Vue from 'vue'
import store from '../store'

const dialogHandler = async ({ message, type, duration }) => {
  const action = await store.dispatch('dialog/setDialog', {
    msg: message,
    type: type,
    time: duration,
    show: true
  })
  if (action.complete) {
    return true
  } else {
    return false
  }
}

Vue.prototype.$_dialogHandler = dialogHandler
