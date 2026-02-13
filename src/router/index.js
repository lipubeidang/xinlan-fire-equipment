import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AboutUs from '../views/AboutUs.vue'
import Products from '../views/Products.vue'
import Qualifications from '../views/Qualifications.vue'
import Certificates from '../views/Certificates.vue'
import SafetyStation from '../views/SafetyStation.vue'
import Contact from '../views/Contact.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'AboutUs',
    component: AboutUs
  },
  {
    path: '/products',
    name: 'Products',
    component: Products
  },
  {
    path: '/qualifications',
    name: 'Qualifications',
    component: Qualifications
  },
  {
    path: '/certificates',
    name: 'Certificates',
    component: Certificates
  },
  {
    path: '/safety-station',
    name: 'SafetyStation',
    component: SafetyStation
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router

