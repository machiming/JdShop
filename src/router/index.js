import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import SearchBar from '@/components/Index/SearchBar'
import footerMenu from '@/components/Index/footerMenu'
import bannerNav from '@/components/Index/bannerNav'
import navBar from '@/components/Index/navBar'
import XnewGoods from '@/components/Index/XnewGoods'
import news2 from '@/components/Index/news2'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      components: {
        HelloWorld:HelloWorld,
        SearchBar:SearchBar,
        bannerNav:bannerNav,
        footerMenu:footerMenu,
        navBar,
        XnewGoods,
        news2
      }
    }
  ]
})
