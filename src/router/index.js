import Vue from 'vue'
import VueRouter from 'vue-router'
import UserView from '../views/UserView'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: UserView
    }
  ]
})

export default router
