import { createRouter, createWebHistory } from 'vue-router'
import Bloglisting from '../views/Bloglisting.vue'
import Postdetails from "../views/Postdetails.vue" 
import Menubutton from "../components/Menubutton"
import Listedpost from "../components/Listedpost.vue"

const routes = [
  {
    path: '/',
    name: 'Blog listing',
    component: Bloglisting
  },
  {
    path: '/Postdetails',
    name: 'Post Details',
    component: Postdetails
  },
  {
    path: '/Menubutton',
    name: 'Menu',
    component: Menubutton
  },
  {
    path: '/Listedpost',
    name: 'Listedpost',
    component: Listedpost
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router