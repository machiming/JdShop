import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import footerMenu from '@/components/Index/footerMenu'
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      components: {
        HelloWorld:HelloWorld,
        footerMenu:footerMenu
      }
    },{
      path:'/my',
      name:'my',
      components:{
        footerMenu:footerMenu,
      }
    }
  ]
})
