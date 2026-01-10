import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue')
    },

    {
      path: '/tradehandbook',
      name: 'tradehandbook',
      component: () => import('../views/TradeHandbook.vue')
    },
    {
      path: '/compliancecommittee',
      name: 'compliancecommittee',
      component: () => import('../views/ComplianceCommittee.vue')
    },
    {
      path: '/speechpaper',
      name: 'speechpaper',
      component: () => import('../views/SpeechPaper.vue')
    },
    {
      path: '/understandnigeria',
      name: 'understandnigeria',
      component: () => import('../views/UnderstandNigeria.vue')
    },
    {
      path: '/portterminal',
      name: 'portterminal',
      component: () => import('../views/PortTerminal.vue')
    },
    
  ],
})

export default router
