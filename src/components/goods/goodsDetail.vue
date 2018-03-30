<template>
   <div>
     <div class="goodsDetail">
       <div class="navs">
         <div class="back">返</div>
         <div class="title">
           <div v-for="item in obj" :class="{choose:item.show}" @click="tab(item)">
             <router-link v-bind:to="{path:item.path,query:rec}">{{item.tab}}</router-link>
           </div>

         </div>
         <div class="home"><router-link :to="{path:'/'}">主</router-link></div>
         <div class="more">更</div>
       </div>
     </div>
     <router-view />
   </div>
</template>

<script>
    export default {
        name: "goodsDetail",
        data(){
          return{

            obj:[
              {"tab":"商品","show":true,"title":"1111","path":"/detail"},
              {"tab":"详情","show":false,"title":"2222","path":"/detail2"},
              {"tab":"评价","show":false,"title":"3333","path":"/common"}
            ],
            select:true,
            rec:this.$route.query
          }
        },
        methods:{
          tab(item){
            this.obj.forEach(value => {
              value.show = false;
            });
            item.show=true
          },
        },
        mounted(){
           this.rec=this.$route.query
        }
    }
</script>

<style scoped lang="scss">
  .choose{
    border-bottom: 3px solid black;
  }
    .navs{
      display: flex;
      justify-content: space-between;
      flex-flow: nowrap;
      height: 3rem;
      line-height: 3rem;
      border-bottom: 1px solid rgba(212,212,212,0.7);
      .back{
         width: 15%;
      }
      .title{
        width: 70%;
        display: flex;
        justify-content: center;
        flex-flow: nowrap;
        div{
          box-sizing: border-box;
          margin: 0 1rem;
        }
      }
      .home{
        width: 7.5%;
      }
      .more{
        width: 7.5%;
      }
  }
</style>
