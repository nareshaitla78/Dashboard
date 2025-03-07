import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "../views/HomePage.vue"
import AboutUs from "../views/AboutUs.vue"
import Service from "../views/Services.vue"
import Contact from "../views/Contact.vue"
import Testmonials from "../views/Testimonials.vue"
import CaseStudies from "../views/CaseStudies.vue"
import Login from "../views/Login.vue"
const  routes= [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/about',
    name: 'about',
    component
    : AboutUs
  },
  {
    path: '/services',
    name: 'services',
    component
    : Service
  },
  {
    path: '/case-studies',
    name: 'case-studies',
    component
    : CaseStudies
  },
  {
    path: '/contact',
    name: 'contact',
    component
    : Contact
  },
  {
    path: '/testimonials',
    name: 'testimonials',
    component
    : Testmonials
  },
  {
    path: '/login',
    name: 'login',
    component
    : Login
  }


  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (About.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import('../views/AboutView.vue'),
  // },
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
 routes
})

export default router
