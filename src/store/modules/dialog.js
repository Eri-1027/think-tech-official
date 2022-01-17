const state = () => ({
  dialog: {
    success: false,
    failed: false
  },
  dialogMsg: ''
})

const mutations = {
  SET_DIALOG (state, { msg, type, show, payload }) {
    state.dialog[type] = show
    state.dialogMsg = msg
  }
}
const actions = {
  setDialog ({ commit, state }, { msg, type, time, show }) {
    return new Promise((resolve, reject) => {
      if (!time) {
        time = 2200
      }
      commit('SET_DIALOG', { msg, type, show })
      window.setTimeout(() => {
        commit('SET_DIALOG', {
          msg: '',
          type,
          show: false
        })
        if (state.dialog[type] === false) {
          resolve({ complete: true })
        } else {
          reject(new Error('action-failed'))
        }
      }, time)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
