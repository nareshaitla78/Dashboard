import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "../views/HomePage.vue"
import AboutUs from "../views/AboutUs.vue"
import Service from "../views/Services.vue"
import Contact from "../views/Contact.vue"
import Testmonials from "../views/Testimonials.vue"
import CaseStudies from "../views/CaseStudies.vue"
import Login from "../views/Login.vue"
import DashBoard from "../views/DashBoard.vue"
import { useAuthStore } from '../stores/auth'

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
  // {
  //   path: '/testimonials',
  //   name: 'testimonials',
  //   component
  //   : Testmonials
  // },
  {
    path: '/login',
    name: 'login',
    component
    : Login
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component
    : DashBoard,
    meta: {
      requiresAuth: true,
    },
    
  }

]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
 routes
})
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()  

  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    alert("Access Denied! Please log in first.") 
    next('/login')  
  } else {
    next()  
  }
})
export default router
