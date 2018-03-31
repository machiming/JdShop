import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import footerMenu from '@/components/Index/footerMenu';
import XnewGoods from '@/components/Index/XnewGoods';
import boxnav from '@/components/Index/boxnav';
import SearchBar from '@/components/Index/SearchBar';
import searchbox from '@/components/Index/searchbox';
import good from '@/components/Index/good';
import goodsDetail from '@/components/goods/goodsDetail';
import goodsSubDetail from '@/components/goods/goodsSubDetail';
import cart from '@/components/cart/cart';

Vue.use(Router);
export default new Router({
  routes: [
    {
      path: '/',
      name: 'footerMenu',
      component:footerMenu,
      children:[
        {
          path:"/",
          component: HelloWorld
        },
        {
          path:"/kind",
          component:good
        },
        {
          path:"/find",
          component: XnewGoods
        },
        {
          path:"/cart",
          component: cart
        },
        {
          path:"/my",
          component: boxnav
        }
        ]
    },
    {
      path: '/footer',
      component: footerMenu,
      children:[
        {
          path:"/index",
          component: HelloWorld
        },

      ]
    },
    {
      path: '/search',
      component: SearchBar,
      children:[
        {
          path:'/',
          name: 'search',
          component:searchbox
        }
      ]
    },
    {
      path:"/detail",
      name:"detail",
      component:goodsDetail,
      children:[{
        path:"/",
        component:goodsSubDetail
      },
        {
          path:"/detail2",
          name:"detail2",
          component:searchbox
        },
        {
          path:"/common",
          component:searchbox
        }
      ]
    }
  ]
})
