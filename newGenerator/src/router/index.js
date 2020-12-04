import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import i18n from './../i18n'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: `/${i18n.locale}`
  },
  {
    path: '/:lang',
    component: {
      render (c) { return c('router-view') }
    },
    children: [
      {
        path: '',
        name: 'Generator',
        component: Home
      },
      {
        path: 'contact',
        name: 'Kontakt',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/Contact.vue')
      },
      {
        path: 'ci',
        name: 'CI / CD',

        component: () => import(/* webpackChunkName: "ci" */ '../views/CICD.vue')
      },
      {
        path: 'news',
        name: 'News',

        component: () => import(/* webpackChunkName: "news" */ '../views/News.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
