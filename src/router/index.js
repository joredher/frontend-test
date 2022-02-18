import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import HeroesMarvel from '@/components/page/HeroesMarvel'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/heroes-marvel',
      name: 'HeroesMarvel',
      component: HeroesMarvel
    }
  ]
})
