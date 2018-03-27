<template>
  <div class="xnew">
    <div class="firstline">
      <div>
        <div class="miaosha">京东秒杀</div>
        <div class="shijian">18点场 {{time2}}</div>
      </div>
       <div class="more">
         <div class="moreTitle">京选轮番秒</div>
         <span>
           <img :src="'static/'+more"/>
         </span>
       </div>
    </div>
    <div class="goods">
        <ul>
          <li v-for="item in goodslist">
             <div>
               <img :src="'static/goods/'+item.img"/>
               <span class="price">￥{{item.pricenew}}</span>
               <span class="pricenew" style="text-decoration: line-through">￥{{item.price}}</span>
             </div>
          </li>
        </ul>
    </div>
  </div>
</template>

<script>
    export default {
        name: "xnew-goods",
        data(){
          return{
            goodslist:[
              {"title":"商品","price":"199","pricenew":"99","img":"5a2a6d2aN557c463d.jpg!q70.jpg"},
              {"title":"商品","price":"456","pricenew":"399","img":"5a2a6d2bNb152c875.jpg!q70.jpg"},
              {"title":"商品","price":"19","pricenew":"9.9","img":"5a2df7f6Ne8b28453.jpg!q70.jpg"},
              {"title":"商品","price":"124","pricenew":"108","img":"5a02bd3bN1c7f70a6.jpg!q70.jpg"},
              {"title":"商品","price":"88","pricenew":"79","img":"5a4f611cN696a2775.jpg!q70.jpg"},
              {"title":"商品","price":"989","pricenew":"980","img":"5a5ebb1fNc691d205.jpg!q70.jpg"},
              {"title":"商品","price":"998","pricenew":"888","img":"5a6ef6a4Nc6c37bf2.jpg!q70.jpg"},
              {"title":"商品","price":"542","pricenew":"499","img":"5a6fe231N81ebb11d.jpg!q70.jpg"},
              {"title":"商品","price":"547","pricenew":"479","img":"5a9ca2f4N67518f48.jpg!q70.jpg"},
              {"title":"商品","price":"999","pricenew":"580","img":"5a27ae6dNc530b5bb.jpg!q70.jpg"},
              {"title":"商品","price":"998","pricenew":"192","img":"5a34fed8Nffc2dff3.jpg!q70.jpg"},
            ],
            more:'arrow_rt.png',
            time2:this.getT()
          }
        },
      methods:{
          getD(){
            setInterval(() => {
              this.B();
            }, 1000);
          },
          getT(){
            let data = new Date();
            let hour = 18 - parseInt(data.getHours()) - 1;
            let Minutes = 60 - parseInt(data.getMinutes()) - 1;
            let second = 60 - data.getSeconds()-1;
            let hourD = hour < 10 ? '0' + hour : hour;
            let MinutesD = Minutes < 10 ? '0' + Minutes : Minutes;
            let secondD = second < 10 ? '0' + second : second;
            return hourD + ":" + MinutesD + ":" + secondD;
          },
          B:function () {
            this.time2 = this.getT();
          }
      },
       mounted(){
         this.getD();
       },
    }
</script>
<style scoped lang="scss">
  .xnew{
    margin-bottom: 5px;
    width: 100%;
    .firstline{
       height: 34px;
       line-height: 34px;
       display: flex;
       width: 100%;
       justify-content: space-between;
      &>div{
        display: flex;
        white-space: nowrap;
      }
      .miaosha{
        margin: .125rem .375rem 0;
        display: inline-block;
        vertical-align: middle;
        font-size: 1rem;
        color: #f02b2b;
        font-weight: 700;
      }
      .shijian{
        font-size: 12px;
        color: #232326;
        font-weight: 700;
        display: inline-block;
      }
      .more{
        width: 50%;
        display: inline-block;
        color: #f23030;
        float: right;
        font-size: 10px;
        text-align: right;
        position: relative;
        padding-right: 20px;
        position: relative;
        .moreTitle{
          line-height: 34px;
          height: 34px;

        }
        span{
          width: 12px;
          height: 34px;
          position: absolute;
          right: 4px;
          top: 0;
          img{
            width: 100%;
            vertical-align: text-top;
          }
        }
      }
    }
    .goods{
      width: auto;
      overflow-x: scroll;
      ::-webkit-scrollbar {display:none}
      ul{
        width: 1200px;
        overflow: hidden;
        flex-flow: row;
        list-style: none;
        li{
          width:93px;
          float: left;
          div{

          }
          img{
            width: 80%;
          }
          .price{
            display: block;
            text-align: center;
            color: #f23030;
            font-size: 16px;
            font-weight:bold;
          }
          .pricenew{
            display: block;
            text-align: center;
            font-size: 12px;
            color: #686868;
          }
        }
      }
    }
  }
</style>
