import Vue from 'vue'
import Router from 'vue-router'
import tabBar from '@/components/tabbar/TabBar'


const  Home = () => import('../views/home/Home')
const  Cart = () => import('../views/cart/Cart')
const  Category = () => import('../views/category/Category')
const  Profile = () => import('../views/profile/Profile')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name:'home',
      component: Home
    },
    {
      path: '/cart',
      name:'cart',
      component: Cart
    },
    {
      path: '/category',
      name:'category',
      component: Category
    },
    {
      path: '/profile',
      name:'profile',
      component: Profile
    },
  ]
})
