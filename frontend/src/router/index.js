import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/login/:name',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/lobby',
      name: 'lobby',
      component: () => import('../views/LobbyView.vue'),
      children: [
        {
          path: '',
          name: 'lobbyMain',
          component: () => import('../components/lobby/RoomList.vue'),
        },
        {
          path: ':gameid',
          name: 'gameroom',
          component: () => import('../components/lobby/WaitingRoom.vue'),
        },
      ],
    },
    {
      path: '/game',
      name: 'game',
      component: () => import('../views/GameView.vue')
    },
    {
      path: '/redirect',
      name: 'redirect',
      component: () => import('../views/RedirectView.vue'),
    }
  ]
})

export default router
