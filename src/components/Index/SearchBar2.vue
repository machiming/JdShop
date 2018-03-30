<template>
  <div>
    <div class="Search">
      <div class="zhezhao"></div>
      <div class="searchBox" :class="red?'red':'redB'">
        <div class="searhcCtx">
          <div class="searchLf">
            <div class="bar">
              <span class="span1"></span>
              <span class="span2"></span>
            </div>
            <input placeholder="领券满199减198" @click="search"/>
          </div>
          <div class="searchRt">{{deal}}</div>
        </div>
      </div>
    </div>
    <div>
      <router-view />
    </div>
  </div>
</template>

<script>
  export default {
    name: "search-bar",
    data (){
      return{
        red:false,
        deal:this.$route.params.deal==undefined?"登录":this.$route.params.deal,
        m:this.$route.params.userId==undefined?"0":this.$route.params.deal,
      }
    },
    methods:{
      handleScroll () {
        var scrollTop = window.pageYOffset||document.documentElement.scrollTop || document.body.scrollTop
        if(scrollTop>48){
          this.red = true;
        }
        else {
          this.red = false;
        }
        /* console.log()*/
      },
      search(){
        this.$router.push({name:"search",params:{"userId":"1","deal":"返回"}})
      },
      logorback(){
          this.$router.go(-1)
      }
    },
    mounted () {
      window.addEventListener('scroll', this.handleScroll)
    },
  }
</script>

<style scoped>
  .Search {
    width: 100%;
    max-width: 640px;
    min-width: 320px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 3.125rem;
    margin: 0 auto;
    z-index: 100000;
  }
  .Search .zhezhao{
    width: 100%;
    height: 3.125rem;
    background: -webkit-linear-gradient(top , rgba(0,0,0,0.8) 0%,rgba(0,0,0,0.6) 30%,rgba(0,0,0,0) 100%);
    position: absolute;
    top: 0;
  }
  .Search .searchBox{
    height: 3.125rem;
    position: absolute;
    top: 0;
    width: 100%;
    transition: all 0.5s;
  }
  .red{
    background: #e12f32;
  }
  .Search .searchBox .searhcCtx{
    margin: 0 15px;
    display: flex;
    justify-content: space-between;
    padding-top: 0.625rem;
    height: 1.875rem;
    width: 100%;
  }
  .Search .searchBox .searhcCtx .searchLf{
    width: 80%;
    display: flex;
    background: white;
    border-radius: 0.9375rem;
  }
  .Search .searchBox .searhcCtx .searchLf .bar{
    width: 6rem;
    display: flex;
  }
  .Search .searchBox .searhcCtx .searchLf .bar span{
    width: 50%;
    height: 100%;
    display: inline-block;
  }
  .Search .searchBox .searhcCtx .searchLf .bar span.span1{
    margin-left: 10px;
    background: url("../../assets/jdlogo.png")no-repeat;
    background-size:auto 70%;
    background-position: center center;
  }
  .Search .searchBox .searhcCtx .searchLf .bar span.span1:after{
    border-right: 1px solid rgb(240, 240, 240);
    content: "";
    height: 1.5rem;
    position: relative;
    left: 17.5px;
    top: 0.35rem;
  }
  .Search .searchBox .searhcCtx .searchLf .bar span.span2{
    margin-left: 5px;
    background: url("../../assets/search.png")no-repeat;
    background-size:auto 50%;
    background-position: center center;
  }
  .Search .searchBox .searhcCtx .searchLf input{
    width: 100%;
    outline: none;
    border: none;
    background: white;
    margin-right: 1rem;
    color: rgb(102, 102, 102);
  }
  .Search .searchBox .searhcCtx .searchRt{
    width: 20%;
    text-align: center;
    color: white;
    line-height: 1.875rem;
    font-size: 0.85rem;
  }
</style>

