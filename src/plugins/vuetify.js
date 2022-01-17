import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import icon from '../components/svgIcons/icon.vue'

Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    values: {
      custom: {
        component: icon
      }
    }
  },
  theme: {
    themes: {
      light: {
        // base
        gray: '#DFE0E1',
        secondary: '#4B4F52',
        strict: '#6C6C6D',
        dark: '#1B1B1B',
        info: '#6DDDE1',
        primary: '#2E5695',
        deep: '#404140'
      }
    }
  }
})
