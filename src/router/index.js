import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import Movies from '../views/movie/movie.vue'
import Profile from '../views/profile/profile.vue'
import Theater from '../views/theater/theater.vue'
import HotShowing from '../views/movie/HotShowing.vue'
import ComingSoon from '../views/movie/ComingSoon.vue'
import City from '../views/city/City.vue'
import Search from "../views/search/Search"
import AllMovies from "../views/search/AllMovies.vue"
import Detail from "../views/detail/Detail.vue"


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Index,
    redirect: '/movies',
    children:[
      {
        path:'/movies',
        component:Movies,
        redirect: '/movies/hotshowing',
        children:[
         { 
           path:'hotshowing',
          component:HotShowing,
          meta:1
        },{ 
          path:'comingsoon',
         component:ComingSoon,
          meta:2
       },

        ]
      },{
        path:'/theater',
        component:Theater
      },{
        path:'/profile',
        component:Profile
      }
    ] 
  },{
    path:'/city',
    component:City
  },
  {
    path:'/search',
    component:Search
  },
  {
    path:'/movies',
    component:AllMovies
  },
  {
    path:'/detail',
    name:'detail',
    component:Detail
  }

]

const router = new VueRouter({
  routes
})

export default router
