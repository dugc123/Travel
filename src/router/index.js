import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name:"Home",
      component: () =>  import("@/pages/Home/Home")
    },
    {
      path:"/city",
      name:"City",
      component: () =>  import("@/pages/City/City")
    },
    {
      path: "/detail/:id",
      name: "Detail",
      component: () =>  import("@/pages/Detail/Detail")
    }
  ],
  scrollBehavior(to, from, savedPosition) {
      return {
        x: 0,
        y: 0
      }
  } 
})
