import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import CompanyContactDetails from './components/CompanyContactDetails.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/companyContactDetails',
      name: 'companyContactDetails',
      component: CompanyContactDetails,
      props: true
    },
  ]
})
