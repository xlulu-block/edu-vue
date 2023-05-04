import { createRouter, createWebHistory } from 'vue-router'
// 引入AppLayout组件
import AppLayout from '@/components/layout/AppLayout.vue'
// 引入默认首页
import indexView from '@/views/indexView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/login',
      name:'login',
      component:()=>import('../views/Login/LoginView.vue')
    },
    {
      path: '/',
      name: 'AppLayout',
      component: AppLayout,
      children: [
        {
          path: '',
          name: 'indexView',
          component: indexView
        },
        {
          path: '/about',
          name: 'about',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/AboutView.vue')
        }
      ]
    },
    // 404页面
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: ()=>import('../views/NotFound.vue') }
  ]
})

export default router
