import { createRouter, createWebHistory } from 'vue-router'
import Bloglisting from '../views/Bloglisting.vue'
import Postdetails from "../views/Postdetails.vue" 
import Menubutton from "../components/Menubutton"

const routes = [
  {
    path: '/',
    name: 'Blog listing',
    component: Bloglisting
  },
  {
    path: '/Postdetails/:id',
    name: 'Postdetails',
    component: Postdetails
  },
  {
    path: '/Menubutton',
    name: 'Menu',
    component: Menubutton
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router