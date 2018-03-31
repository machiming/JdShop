<template>
  <div id="app">
  <!--  <hello-world></hello-world>
    <footer-menu></footer-menu>-->
    <router-view />
    <div style="height: 4rem"></div>
  </div>
</template>
<script>
/*import HelloWorld from "./components/HelloWorld";
import FooterMenu from "./components/Index/footerMenu";*/
export default {
 /* components: {
    HelloWorld,

    FooterMenu,
  },*/
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
a{
  text-decoration: none;
  color: black;
  -webkit-tap-highlight-color:transparent;
}

  input[type='text'], textarea{
    -webkit-appearance: none;
    border-radius: 0;
  }
  html,body{-webkit-text-size-adjust: 100%;-webkit-tap-highlight-color: rgba(0, 0, 0, 0);}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0 auto 0;
  max-width: 640px;
  width: 100%;
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
