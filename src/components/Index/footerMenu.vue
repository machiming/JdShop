<template>
 <div>
   <div>
     <router-view />
   </div>
   <div class="footerB">
     <ul>
       <li v-for="site in box" @click="selectP(site)" :class="{hover:site.hover}">
         <router-link v-bind:to="site.url" ></router-link>
       </li>
     </ul>
   </div>
 </div>
</template>

<script>
    export default {
        name: "footerMenu",
        data() {
          return{
            box: [
              { name: '首页',avtar:'./assets/footer/5aa10cd2N46f18ce6.png',"url":"/","hover":true },
              { name: '分类',avtar:'../../assets/footer/kind.png',"url":"/kind","hover":false},
              { name: '发现',avtar:'../../assets/footer/find.png' ,"url":"/find","hover":false},
              { name: '购物车',avtar:'../../assets/cart.png',"url":"/cart" ,"hover":false},
              { name: '我的',avtar:'../../assets/footer/my.png' ,"url":"/my","hover":false},
            ]
          }
      },
        methods:{
          selectP(site){
            this.box.forEach((value, index) => {
              value.hover = false
            });
            site.hover = true;
          }
        },
        mounted(){

        }
    }
</script>

<style scoped lang="scss">
  .footerB{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    max-width: 640px;
    margin: 0 auto;
    z-index: 10000;
    background: white;
  }
 .footerB ul{
   background: white;
   list-style: none;
   display: flex;
   width: 100%;
   position: absolute;
   bottom: 0;
   left: 0;
   right: 0;
   justify-content: space-between;
   box-shadow: 0 -2px 5px rgba(212,212,212,0.4) ;
 }
  .footerB ul li{
    width: 100%;
    height: 3.5rem;
    line-height: 3.5rem;
    font-size: 0.8rem;
    a{
      display: block;
      width: 100%;
      height: 100%;
    }
  }
  .footerB ul li:nth-child(1){background: url("../../assets/footer/home.png")no-repeat center center;background-size:auto 100%}
  .footerB ul li:nth-child(2){background: url("../../assets/footer/kind.png")no-repeat center center;background-size:auto 100%}
  .footerB ul li:nth-child(3){background: url("../../assets/footer/find.png")no-repeat center center;background-size:auto 100%}
  .footerB ul li:nth-child(4){background: url("../../assets/footer/cart.png")no-repeat center center;background-size:auto 100%}
  .footerB ul li:nth-child(5){background: url("../../assets/footer/my.png")no-repeat center center;background-size:auto 100%}
  .footerB ul li:nth-child(1).hover{background: url("../../assets/footer/home-hover.png")no-repeat center center;background-size:auto 100%}
  .footerB ul li:nth-child(2).hover{background: url("../../assets/footer/kind-hover.png")no-repeat center center;background-size:auto 100%}
  .footerB ul li:nth-child(3).hover{background: url("../../assets/footer/find-hover.png")no-repeat center center;background-size:auto 100%}
  .footerB ul li:nth-child(4).hover{background: url("../../assets/footer/cart-hover.png")no-repeat center center;background-size:auto 100%}
  .footerB ul li:nth-child(5).hover{background: url("../../assets/footer/my-hover.png")no-repeat center center;background-size:auto 100%}

</style>
