import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MovieDetail from '../views/MovieDetail.vue'
import AboutView from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/movie/:id',
      name: 'movieDetail',
      component: MovieDetail
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    }
  ]
})

export default router
