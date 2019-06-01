import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: ()=> import('./views/home.vue')
    },
    {
      path: '/todo',
      name: 'todo',
      component: ()=> import('./views/todo.vue')
    },
    {
      path: '/success',
      name: 'success',
      component: ()=> import('./views/success.vue')
    }
  ]
})
