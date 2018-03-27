<template>
  <div class="navbar">
    <div class="bg"><img :src="bg"/></div>
    <ul>
      <li v-for="item in navBox">
        <img :src="'../static/nav/'+item.img">
        <span>{{item.title}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "nav-bar",
        data(){
          return {
             navBox:[
               {"title":"京东超市","img":"navs (9).png"},
               {"title":"全球购","img":"navs (1).png"},
               {"title":"京东服饰","img":"navs (1).gif"},
               {"title":"京东生鲜","img":"navs (2).png"},
               {"title":"排行榜","img":"navs (3).png"},
               {"title":"充值缴费","img":"navs (4).png"},
               {"title":"领京豆","img":"navs (5).png"},
               {"title":"领券","img":"navs (6).png"},
               {"title":"赚钱","img":"navs (7).png"},
               {"title":"物流查询","img":"navs (8).png"},
             ],
            bg:'../static/5ab769eeN6bbaa30d.jpg'
          }
        }
    }
</script>

<style scoped lang="scss">
  .navbar{
    position: relative;
     .bg{
       width: 100%;
       font-size: 0;
       img{
         width: 100%;
         border-top-left-radius: 5px;
         border-top-right-radius: 5px;
       }
      }
      ul{
        list-style: none;
        display: flex;
        flex-flow: wrap;
        position: absolute;
        top: 10px;
        li{
          width: 20%;
          margin-bottom: 1rem;
          text-align: center;
          img{
            width: 60%;
            display: block;
            margin: 0 auto;

          }
          span{
            font-size: 0.75rem;
          }
        }
      }

  }

</style>
