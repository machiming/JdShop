<template>
    <div class="goodslist">
      <div class="gray-text">
        <span class="gray-layout">
          为您推荐
        </span>
      </div>
        <ul class="goodsctx">
          <li v-for="item in goodsitem" class="goodsitem">
            <div class="goodsimg">
              <img :src="item.img"/>
            </div>
            <div class="goodsname">
              <p>{{item.title  }}</p>
            </div>
            <div class="goodsprice">
               <p>￥{{item.price}}</p>
                 <div class="cart">
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
               {"id":1,"title":"十大萨达啥事萨达十大萨达啥事萨达十大萨达啥事萨达","img":"static/goodslist/goodslist (2).jpg","price":199},
               {"id":1,"title":"十大萨达啥事萨达","img":"static/goodslist/goodslist (3).jpg","price":199},
               {"id":1,"title":"十大萨达啥事萨达","img":"static/goodslist/goodslist (4).jpg","price":199},
               {"id":1,"title":"十大萨达啥事萨达","img":"static/goodslist/goodslist (5).jpg","price":199},
               {"id":1,"title":"十大萨达啥事萨达","img":"static/goodslist/goodslist (6).jpg","price":199},
               {"id":1,"title":"十大萨达啥事萨达","img":"static/goodslist/goodslist (7).jpg","price":199},
               {"id":1,"title":"十大萨达啥事萨达","img":"static/goodslist/goodslist (8).jpg","price":199},
               {"id":1,"title":"十大萨达啥事萨达","img":"static/goodslist/goodslist (9).jpg","price":199},
               {"id":1,"title":"十大萨达啥事萨达","img":"static/goodslist/goodslist (10).jpg","price":199},
               {"id":1,"title":"十大萨达啥事萨达","img":"static/goodslist/goodslist (11).jpg","price":199},
               {"id":1,"title":"十大萨达啥事萨达","img":"static/goodslist/goodslist (12).jpg","price":199},
               {"id":1,"title":"十大萨达啥事萨达","img":"static/goodslist/goodslist (13).jpg","price":199},
             ],
             cart: ''
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
            width: 100%;
            position: absolute;
            top: 50%;
            left: 0;
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
