/** @format */

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

/* Import Bootstrap */
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import i18n from './i18n'
Vue.use(BootstrapVue)

import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
Vue.use(VueSidebarMenu)

Vue.config.productionTip = false

/* i18n Translate */
// use beforeEach route guard to set the language
router.beforeEach((to, from, next) => {
    // use the language from the routing param or default language
    let language = to.params.lang
    if (!language) {
        language = 'de'
    }

    // set the current language for i18n.
    i18n.locale = language
    next()
})

new Vue({
    router,
    store,
    i18n,
    render: (h) => h(App),
}).$mount('#app')
