import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Movies from '@/views/Movies.vue'
import Shows from '@/views/Shows.vue'
import Upcoming from '@/views/Upcoming.vue'

const routes = [
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/movies',
        component: Movies
    },
    {
        path: '/',
        name: 'Shows',
        component: Shows
    },
    {
        path: '/upcoming',
        name: 'Upcoming',
        component: Upcoming
    },
]

const router = new VueRouter({
  routes: routes
})

export default router