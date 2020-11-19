import Vue from 'vue'
import VueRouter from 'vue-router'
// import App from '../App.vue'
import About from '../components/About.vue'
import VSlide from '../components/VSlide.vue'
Vue.use(VueRouter)

const routes = [
//   {
//     path: '/',
//     name: 'App',
//     component: App
//   },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/',
    name: 'VSlide',
    component: VSlide
  },
//   {
//     path: '/about',
//     name: 'About',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../components/About.vue')
//   }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
