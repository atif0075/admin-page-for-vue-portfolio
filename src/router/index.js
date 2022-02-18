import { createRouter, createWebHistory } from 'vue-router'
import Messages from '../views/Messages.vue'

const routes = [
  {
    path: '/',
    name: 'Messages',
    component: Messages
  },
  {
    path: '/add-projects',
    name: 'AddProjects',
    component: () => import('../views/AddProjects.vue')
  },
  {
    path: '/add-skills',
    name: 'AddSkills',
    component: () => import('../views/AddSkills.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'text-green'
})

export default router
