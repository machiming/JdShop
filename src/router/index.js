import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import footerMenu from '@/components/Index/footerMenu'
import XnewGoods from '@/components/Index/XnewGoods'
import boxnav from '@/components/Index/boxnav'
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'footerMenu',
      component: footerMenu,
      children:[
        {
          path:"/",
          name:"/HelloWorld",
          component: HelloWorld
        },
        {
          path:"/kind",
          name:"/HelloWorld",
          component: HelloWorld
        },
        {
          path:"/find",
          name:"/XnewGoods",
          component: XnewGoods
        },
        {
          path:"/cart",
          name:"/HelloWorld",
          component: HelloWorld
        },
        {
          path:"/my",
          name:"/boxnav",
          component: boxnav
        }
        ]
    },
    {
      path: '/footer',
      name: 'footerMenu',
      component: footerMenu,
      children:[
        {
          path:"/index",
          name:"/HelloWorld",
          component: HelloWorld
        },

      ]
    },

  ]
})
