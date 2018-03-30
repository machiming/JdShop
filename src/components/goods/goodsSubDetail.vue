<template>
    <div class="detail">
      <div class="part1">
        <div class="imgTop">
           <img :src="goods.img"/>
        </div>
        <div class="textTop">
           <div class="firstLine">
             <div class="leftline">图</div>
             <div class="leftline">{{goods.title}}</div>
             <div class="leftline">关注</div>
           </div>
          <div class="secondLine">{{goods.des}}</div>
          <div class="price">￥<span>{{goods.price}}</span></div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "goodsSubDetail",
        data(){
          return{
            goods:''
          }
        },
      mounted(){
        this.goods=this.$route.query
      }

    }
</script>

<style scoped lang="scss">
  .detail{
    .part1{
       .imgTop{
         width: 100%;
         height: auto;
         font-size: 0;
          img{
            width: 100%;
            height: 100vw;
            font-size: 0;
          }
       }
       .textTop{
         .firstLine{
           display: flex;
           flex-flow: nowrap;
           justify-content: space-between;
           height: 40px;
           margin: 0 10px;
           box-sizing: border-box;

         }
         .secondLine{
           text-align: left;
           margin: 0 10px;
           box-sizing: border-box;
         }
         .price{
           color: #f23030;
           font-size: 16px;
           text-align: left;
           padding: 0 10px;
           span{
             font-size: 23px;
             font-weight: bold;
             color: #f23030;
           }
         }
       }
    }
  }
</style>
