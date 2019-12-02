import Vue from 'vue'
import Router from 'vue-router'
import defaultPage from '@/layout/default.vue'
import blankPage from '@/layout/blank.vue'
import Index from '@/page/index.vue'
import ChangeCity from '@/page/changeCity.vue'
import GoodsList from '@/page/goodsList.vue'
import Login from '@/page/login.vue'
import Register from '@/page/register.vue'
import ProductDetail from '@/page/productDetail.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    // content页面路由
    {
      path: '/', // 路劲
      name: 'defaultPage', // 路由名称
      component: defaultPage, // 加载页面
      redirect: '/index', // 重定向路由
      children: [ // 嵌套路由
        {
          path: '/index',
          name: 'index',
          component: Index
        },
        {
          path: '/changeCity',
          name: 'changeCity',
          component: ChangeCity
        },
        {
          path: 's/:name',
          name: 'goods',
          component: GoodsList
        },
        {
          path: '/productDetail',
          name: 'productDetail',
          component: ProductDetail
        }
      ]
    },
    // 登陆注册页面路由
    {
      path: '/blank',
      name: 'blankpage',
      component: blankPage,
      children: [ // 嵌套路由
        {
          path: 'login',
          name: 'login',
          component: Login
        },
        {
          path: 'register',
          name: 'register',
          component: Register
        }
      ]
    }
  ]
})
