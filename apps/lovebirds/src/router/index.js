import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home/Home.vue'
import Search from '../pages/Search/Search.vue'
import SignUp from '../pages/SignUp/SignUp.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/sign-up',
      name: 'signUp',
      component: SignUp
    }
  ]
})

export default router
