<template>
  <div class="hello">
    <search-bar></search-bar>
    <banner-nav></banner-nav>
    <nav-bar></nav-bar>
    <news></news>
    <xnew-goods></xnew-goods>
    <news2></news2>
    <boxnav></boxnav>
  </div>
</template>

<script>
  import xnew from '@/components/Index/XnewGoods'
  import SearchBar from "./Index/SearchBar";
  import NavBar from "./Index/navBar";
  import News from "./Index/News";
  import XnewGoods from "./Index/XnewGoods";
  import News2 from "./Index/news2";
  import Boxnav from "./Index/boxnav";
  import BannerNav from "./Index/bannerNav";
export default {
    components:{
      BannerNav,
      Boxnav,
      News2,
      XnewGoods,
      News,
      NavBar,
      SearchBar,
      xnew
    },
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
