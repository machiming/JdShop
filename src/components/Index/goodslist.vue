<template>
    <div class="goodslist">
      <div class="gray-text">
        <span class="gray-layout">
          为您推荐
        </span>
      </div>
        <ul class="goodsctx">
          <li v-for="item in goodsitem" class="goodsitem" @click="good(item)">
            <div class="goodsimg">
              <img :src="item.img"/>
            </div>
            <div class="goodsname">
              <p>{{item.title  }}</p>
            </div>
            <div class="goodsprice">
               <p>￥{{item.price}}</p>
                 <div class="cart" @click="select(item.id)">
                       <img src="../../assets/carticon.png"/>
                 </div>
            </div>
          </li>
        </ul>
    </div>
</template>
<script>
    export default {
        name: "goodslist",
        data(){
          return {
             goodsitem:[
               {"id":1, "price":1991, "title":"收到付款收到回复可接受的快捷方式", "img":"static/goods/5aa783aeN9df05256.jpg!q70.jpg", "des":"买牛奶上京东！进口牛奶排位赛，低至满199减100，更有199减150神券限量抢！"},
               {"id":2, "price":1992, "title":"收到付款收到回复可接受的快捷方式", "img":"static/goodslist/goodslist (2).jpg", "des":"买牛奶上京东！进口牛奶排位赛，低至满199减100，更有199减150神券限量抢！"},
               {"id":3, "price":1993, "title":"收到付款收到回复可接受的快捷方式", "img":"static/goodslist/goodslist (3).jpg", "des":"买牛奶上京东！进口牛奶排位赛，低至满199减100，更有199减150神券限量抢！"},
               {"id":4, "price":1994, "title":"收到付款收到回复可接受的快捷方式", "img":"static/goodslist/goodslist (4).jpg", "des":"买牛奶上京东！进口牛奶排位赛，低至满199减100，更有199减150神券限量抢！"},
               {"id":5, "price":1995, "title":"收到付款收到回复可接受的快捷方式", "img":"static/goodslist/goodslist (5).jpg", "des":"买牛奶上京东！进口牛奶排位赛，低至满199减100，更有199减150神券限量抢！"},
               {"id":6, "price":1996, "title":"收到付款收到回复可接受的快捷方式", "img":"static/goodslist/goodslist (6).jpg", "des":"买牛奶上京东！进口牛奶排位赛，低至满199减100，更有199减150神券限量抢！"},
               {"id":7, "price":1997, "title":"收到付款收到回复可接受的快捷方式", "img":"static/goodslist/goodslist (7).jpg", "des":"买牛奶上京东！进口牛奶排位赛，低至满199减100，更有199减150神券限量抢！"},
               {"id":8, "price":1998, "title":"收到付款收到回复可接受的快捷方式", "img":"static/goodslist/goodslist (8).jpg", "des":"买牛奶上京东！进口牛奶排位赛，低至满199减100，更有199减150神券限量抢！"},
               {"id":9, "price":1999, "title":"收到付款收到回复可接受的快捷方式", "img":"static/goodslist/goodslist (9).jpg", "des":"买牛奶上京东！进口牛奶排位赛，低至满199减100，更有199减150神券限量抢！"},
               {"id":10, "price":191, "title":"收到付款收到回复可接受的快捷方式", "img":"static/goodslist/goodslist (10).jpg", "des":"买牛奶上京东！进口牛奶排位赛，低至满199减100，更有199减150神券限量抢！"},
               {"id":11, "price":192, "title":"收到付款收到回复可接受的快捷方式", "img":"static/goodslist/goodslist (11).jpg", "des":"买牛奶上京东！进口牛奶排位赛，低至满199减100，更有199减150神券限量抢！"},
             ],
             cart: ''
          }
        },
      methods:{
        good(obj){
          this.$router.push({path:"/detail",query:obj})
        },
        select(obj){
          console.log(obj)
        }
      }
    }
</script>

<style scoped lang="scss">
    .goodslist{
        .gray-text{
          position: relative;
          background: #f0f2f5;
          padding: 0.8rem 0;
          .gray-layout{
            padding: 0 10px;
            background-color: #f0f2f5;
            z-index: 10;
            position: relative;
            display: block;
            width: 100px;
            margin: 0 auto;
          }
          &:before{
            content: "";
            height: 1px;
            width: 94%;
            position: absolute;
            top: 50%;
            left: 3%;
            background-color: #cbcbcb;
            z-index: 1;
          }
        }
       .goodsctx{
         display: flex;
         flex-flow: wrap;
         list-style: none;
         .goodsitem{
           width: 50%;
           list-style: none;
           box-sizing: border-box;
           padding:0.5rem 0.5rem 0;
           border-right: 1px solid #e8e8ed;

           &:nth-child(2n){
             border-right: none;
           }
           &:nth-last-child(n+3){
             border-bottom: 1px solid #e8e8ed;
           }
         }
         .goodsimg{
           width: 100%;
           font-size: 0;
           img{
             width: 100%;
             font-size: 0;
           }
         }
         .goodsname{
           margin: 12px 0 4px;
           font-size: 12px;
           color: #333;
           line-height: 18px;
           height: 36px;
           text-align: left;
         }
         .goodsprice{
           display: flex;
           flex-flow: nowrap;
           justify-content: space-between;
           font-size: 16px;
           color: #e93b3d;
           margin-right: 3px;
           .cart{
             width: 30px;
             height: 24px;
             img{
               width: 50%;
             }
           }
         }
       }

    }
</style>
