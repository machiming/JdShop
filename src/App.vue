<template>
  <div id="app">
    <!-- <img src="./assets/logo.png">-->
    <!--  <router-view name="HelloWorld"></router-view>-->
    <!--<router-view name="SearchBar"></router-view>-->
    <search-bar></search-bar>
    <banner-nav></banner-nav>
    <nav-bar></nav-bar>
    <news></news>
    <xnew-goods></xnew-goods>
    <news2></news2>
    <boxnav></boxnav>
    <footer-menu></footer-menu>
    <!--<router-view name="footerMenu"></router-view>-->

  </div>
</template>

<script>
import BannerNav from "./components/Index/bannerNav";
import NavBar from "./components/Index/navBar";
import SearchBar from "./components/Index/SearchBar";
import FooterMenu from "./components/Index/footerMenu";
import News from "./components/Index/News";
import XnewGoods from "./components/Index/XnewGoods";
import News2 from "./components/Index/news2";
import Boxnav from "./components/Index/boxnav";

export default {
  components: {
    Boxnav,
    News2,
    XnewGoods,
    News,
    FooterMenu,
    SearchBar,
    NavBar,
    BannerNav},
  name: 'App'
}
</script>

<style  lang="scss" >
  *{
    margin: 0;
    padding: 0;
   }
body{
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0 auto 0;
  max-width: 640px;
  width: 100%;
  height: 2000px;

}
  #app ::-webkit-scrollbar {display:none}
  body ::-webkit-scrollbar {display:none}
  html ::-webkit-scrollbar {display:none}
  @media screen and (max-width: 750px){
    html,body,#app{
      font-size:18px;
    }
  }
  @media screen and (max-width: 500px){
    html,body,#app{
      font-size:16px;
    }
  }
  @media screen and (max-width: 375px){
    html,body,#app{
      font-size:14px;
    }
  }
  @media screen and (max-width: 320px){
    html,body,#app{
      font-size:12px;
    }
  }
</style>
