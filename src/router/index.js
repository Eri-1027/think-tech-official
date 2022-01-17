import Vue from 'vue'
import VueRouter from 'vue-router'
// import TheHome from '../views/TheHome.vue'
const TheHome = () => import('../views/TheHome.vue')
// const TheComingsoonPage = () => import('../views/TheComingsoonPage.vue')
const TheSuccessPage = () => import('../views/TheSuccessPage')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: TheHome,
    children: [
      {
        path: '',
        name: 'TheIntro',
        component: () => import('../views/TheIntro.vue')
      },
      {
        path: 'about',
        name: 'TheAbout',
        component: () => import('../views/TheAbout.vue')
      },
      {
        path: 'product_pms',
        name: 'TheProductPms',
        component: () => import('../views/ThePms')
      },
      {
        path: 'product_autocounter',
        name: 'TheProductAutocounter',
        component: () => import('../views/TheAuto')
      },
      {
        path: 'freetrial',
        name: 'TheFreetrial',
        component: () => import('../views/TheFreetrial')
      },
      {
        path: 'privacy_term',
        name: 'ThePrivacyTerm',
        component: () => import('../views/ThePrivacyTerm')
      },
      {
        path: 'privacy_policy',
        name: 'ThePrivacyPolicy',
        component: () => import('../views/ThePrivacyPolicy')
      },
      {
        path: 'warranty',
        name: 'TheWarranty',
        component: () => import('../views/TheWarranty')
      },
      {
        path: 'price_pms',
        name: 'ThePricePms',
        component: () => import('../views/ThePricePms')
      },
      {
        path: 'price_autocounter',
        name: 'ThePriceAutocounter',
        component: () => import('../views/ThePriceAuto')
      },
      {
        path: 'success',
        name: 'TheSuccessPage',
        component: TheSuccessPage
      }
    ]
  }

]

const router = new VueRouter({
  routes,
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})

export default router
