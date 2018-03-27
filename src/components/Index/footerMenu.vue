<template>
<div class="footerB">
  <ul>
    <li v-for="site in box"></li>
  </ul>
</div>
</template>

<script>
    export default {
        name: "footerMenu",
        data() {
          return{
            box: [
              { name: '首页',avtar:'./assets/footer/5aa10cd2N46f18ce6.png' },
              { name: '分类',avtar:'../../assets/footer/5aa10cdbNa9cd0320.png'},
              { name: '发现',avtar:'../../assets/footer/5aa10ce2N848e2dbd.png' },
              { name: '购物车',avtar:'../../assets/5aa10ceaN649eec12.png' },
              { name: '我的',avtar:'../../assets/footer/5aa10cf6Nee5122a5.png' }
            ]
          }
      }
    }
</script>

<style scoped>
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
  }
  .footerB ul li:nth-child(1){background: url("../../assets/footer/5aa10cd2N46f18ce6.png")no-repeat center center;background-size:auto 100%}
  .footerB ul li:nth-child(2){background: url("../../assets/footer/5aa10cdbNa9cd0320.png")no-repeat center center;background-size:auto 100%}
  .footerB ul li:nth-child(3){background: url("../../assets/footer/5aa10ce2N848e2dbd.png")no-repeat center center;background-size:auto 100%}
  .footerB ul li:nth-child(4){background: url("../../assets/footer/5aa10ceaN649eec12.png")no-repeat center center;background-size:auto 100%}
  .footerB ul li:nth-child(5){background: url("../../assets/footer/5aa10cf6Nee5122a5.png")no-repeat center center;background-size:auto 100%}
</style>
