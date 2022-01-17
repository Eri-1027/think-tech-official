import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import './plugins/index'
import './utils/dialog'

import axios from 'axios'
import VueAxios from 'vue-axios'

import TDialog from './components/TDialog.vue'
import TDialogConfirm from './components/TDialogConfirm.vue'
import TSignAnimation from './components/TSignAnimation'

Vue.use(VueAxios, axios)
Vue.component('TDialog', TDialog)
Vue.component('TDialogConfirm', TDialogConfirm)
Vue.component('TSignAnimation', TSignAnimation)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
