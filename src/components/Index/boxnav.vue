<template>
  <div>
    <button @click="show=!show">点击</button>
  <transition name="slide-fade">
  <div class="boxnavs" id="box" v-show="show">
    <ul>
      <li v-for="item in boxnav">
        <span class="title">{{item.title}}</span>
        <span class="des">{{item.des}}</span>
        <img :src="'static/boxnav/'+item.img"/>
      </li>
    </ul>
  </div>
  </transition>
  </div>

</template>

<script>
    export default {
        name: "boxnav",
        data(){
          return{
            show: true,
             boxnav:[
               {"title":"白条商城","des":"1元抢免息","img":"boxnav (1).jpg","colorA":"#000","colorB":"#fff"},
               {"title":"品牌秒杀","des":"低价抢大牌","img":"boxnav (2).jpg","colorA":"#000","colorB":"#fff"},
               {"title":"闪购","des":"大牌限时特卖","img":"boxnav (3).jpg","colorA":"#000","colorB":"#fff"},
               {"title":"拍拍二手","des":"大牌包5折起","img":"boxnav (4).jpg","colorA":"#000","colorB":"#fff"},
               {"title":"排行榜","des":"专属购物指南","img":"boxnav (5).jpg","colorA":"#000","colorB":"#fff"},
               {"title":"发现好货","des":"发现品质生活","img":"boxnav (6).jpg","colorA":"#000","colorB":"#fff"},
               {"title":"会买专辑","des":"教你买买买","img":"boxnav (7).jpg","colorA":"#000","colorB":"#fff"},
               {"title":"新品首发","des":"新品抢先看","img":"boxnav (8).jpg","colorA":"#000","colorB":"#fff"},
             ]
          }
        }
    }
</script>

<style scoped lang="scss">
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateX(-100%);
    opacity: 0;
  }
  #box{
    width: 100%;
    ul{
      display: flex;
      list-style: none;
      justify-content: space-between;
      flex-flow: wrap;
      width: 100%;
      box-sizing: border-box;
      li{
        width: 25%;
        padding: 0.5rem 0 0;
        box-sizing: border-box;
        border-right: 1px solid rgba(212,212,212,0.3);
        border-bottom: 1px solid rgba(212,212,212,0.3);
        &:nth-child(4n){
          border-right: none;
        }
        &:nth-child(n+5){
          border-bottom: none;
        }
        &:nth-child(1) .title{
          background-image: -webkit-linear-gradient(left, rgb(255, 42, 42), rgb(241, 57, 210));
          -webkit-background-clip:text;
          -webkit-text-fill-color: transparent;
        }
        &:nth-child(2) .title{
          background-image: -webkit-linear-gradient(left, rgb(254, 133, 55), rgb(240, 43, 43));
          -webkit-background-clip:text;
          -webkit-text-fill-color: transparent;
        }
        &:nth-child(3) .title{
          background-image: -webkit-linear-gradient(left, rgb(255, 42, 42), rgb(241, 57, 210));
          -webkit-background-clip:text;
          -webkit-text-fill-color: transparent;
        }
        &:nth-child(4) .title{
          background-image: -webkit-linear-gradient(left, rgb(255, 42, 42), rgb(241, 57, 210));
          -webkit-background-clip:text;
          -webkit-text-fill-color: transparent;
        }
        &:nth-child(5) .title{
          background-image: -webkit-linear-gradient(left, rgb(255, 42, 42), rgb(241, 57, 210));
          -webkit-background-clip:text;
          -webkit-text-fill-color: transparent;
        }
        &:nth-child(6) .title{
          background-image: -webkit-linear-gradient(left, rgb(0, 194, 171), rgb(62, 148, 255));
          -webkit-background-clip:text;
          -webkit-text-fill-color: transparent;
        }
        &:nth-child(7) .title{
          background-image: -webkit-linear-gradient(left, rgb(255, 42, 42), rgb(241, 57, 210));
          -webkit-background-clip:text;
          -webkit-text-fill-color: transparent;
        }
        &:nth-child(8) .title{
          background-image: -webkit-linear-gradient(left, rgb(42, 211, 150), rgb(133, 187, 31));
          -webkit-background-clip:text;
          -webkit-text-fill-color: transparent;
        }
        span{
          width: 100%;
          display: block;
          text-align: left;
          box-sizing: border-box;
          padding: 0 0.5rem;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .title{
          font-size: 1.1rem;
          line-height: 1.1rem;
          height: 1.1rem;

        }
        .des{
          font-size: 0.9rem;
          line-height: 1.5rem;
          height: 1.5rem;
        }
        img{
          width: 60%;
          margin: 0.5rem auto;
        }
      }
    }
  }
</style>
