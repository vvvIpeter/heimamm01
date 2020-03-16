// 导入vue
import Vue from "vue"
import VueRouter from "vue-router"
// 导入login.vue
import login from "../views/login/index.vue"
import UseElement from "../views/useelement/index.vue"
Vue.use(VueRouter)
const router = new VueRouter({
    routes: [
      {
        path:'/login',
        component:login
      },
      {
        //   路由重定向
          path:'*',
          redirect:'/login'
      },
    {
          path:'/useelement',
          component:UseElement
      }
    ]    
})

// 将新的对象暴露出去
export default router