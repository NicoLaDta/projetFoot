import Vue from 'vue'
import VueRouter from 'vue-router'
import VActu from '../components/VActu.vue'
import VBilletterie from '../components/VBilletterie.vue'
import VCalendrier from '../components/VCalendrier.vue'
import VClassement from '../components/VClassement.vue'
import VBoutique from '../components/VBoutique.vue'
import VSlide from '../components/VSlide.vue'
import VBilletterieInfo from '../components/VBilletterieInfo.vue'
import VArticle from '../components/VArticle.vue'
import VLogin from '../components/VLogin.vue'
import SignUp from '../components/SignUp.vue'
import Home from '../components/Home.vue'
import VProduct from '../components/VProduct.vue'
import VMenuMobile from '../components/VMenuMobile.vue'
import VAdmin from '../components/VAdmin.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'VSlide',
    component: VSlide
  },
  {
    path: '/VActu',
    name: 'Actualités',
    component: VActu
  },
  {
    path: '/VBilletterieInfo',
    name: 'VBilletterieInfo',
    component: VBilletterieInfo
  },
  {
    path: '/VBilletterie',
    name: 'Billetterie',
    component: VBilletterie
  },
  {
    path: '/VCalendrier',
    name: 'Calendrier',
    component: VCalendrier
  },
  {
    path: '/VClassement',
    name: 'Classement',
    component: VClassement
  },
  {
    path: '/VBoutique',
    name: 'Boutique',
    component: VBoutique
  },
  {
    path: '/VActu/VArticle',
    name: 'Article',
    component: VArticle
  },
  {
    path: '/login',
    name: 'login',
    component: VLogin
  },
  {
    path: '/VProduct',
    name: 'Product',
    component: VProduct
  },
  {
    path: '/VMenuMobile',
    name: 'MenuMobile',
    component: VMenuMobile
  },
  {
    path: "/sign-up",
    name: "sign-up",
    component: SignUp
  },
  {
    path: "/home",
    name: "home",
    component: Home
  },
  {
    path: "/Admin",
    name: "Admin",
    component: VAdmin
  },

]
const router = new VueRouter({
  mode: 'history',
  routes
})
export default router