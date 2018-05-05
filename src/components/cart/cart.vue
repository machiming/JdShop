<template>
     <div class="cart" id="cart">
        <div class="topNav">
           <div class="title">购物车</div>
           <div class="deal">
              <div class="do1">编辑</div>
              <div class="do2">客</div>
           </div>
        </div>
        <div class="shoplist">
         <!-- <div class="shops">
            <div class="shopdetail">
              <div class="slt"><input type="checkbox"/></div>
              <div class="title">京东全球购自营</div>
              <div class="coupon">优惠券</div>
            </div>
            <div class="goodslist">
              <div class="goodsdetail">
                <div class="slt"><input type="checkbox"/></div>
                <div class="good">
                  <div class="left">
                    <div><img src="static/goods/5a2a6d2aN557c463d.jpg!q70.jpg"/></div>
                  </div>
                  <div class="right">
                    <div class="title">的盛世嫡妃十大萨达</div>
                    <div class="type">口味：<span>ewwqqe</span></div>
                    <div class="bottom">
                      <div class="price">￥212</div>
                      <div class="chooseBox">
                        <button class="del">-</button>
                        <input type="text" value="1"/>
                        <button class="add">+</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="goodsdetail">
                <div class="slt"><input type="checkbox"/></div>
                <div class="good">
                  <div class="left">
                    <div><img src="static/goods/5a2a6d2aN557c463d.jpg!q70.jpg"/></div>
                  </div>
                  <div class="right">
                    <div class="title">的盛世嫡妃十大萨达</div>
                    <div class="type">口味：<span>ewwqqe</span></div>
                    <div class="bottom">
                      <div class="price">￥212</div>
                      <div class="chooseBox">
                        <button class="del">-</button>
                        <input type="text" value="1"/>
                        <button class="add">+</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="goodsdetail">
                <div class="slt"><input type="checkbox"/></div>
                <div class="good">
                  <div class="left">
                    <div><img src="static/goods/5a2a6d2aN557c463d.jpg!q70.jpg"/></div>
                  </div>
                  <div class="right">
                    <div class="title">的盛世嫡妃十大萨达</div>
                    <div class="type">口味：<span>ewwqqe</span></div>
                    <div class="bottom">
                      <div class="price">￥212</div>
                      <div class="chooseBox">
                        <button class="del">-</button>
                        <input type="text" value="1"/>
                        <button class="add">+</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>-->
          <div class="shops">
            <div class="shopdetail">
              <div class="slt"><input type="checkbox"/></div>
              <div class="title">京东自营店</div>
              <div class="coupon">优惠券</div>
            </div>
            <div class="goodslist">
            <div class="goodsdetail" v-for="item in cartList">
              <div class="slt"><input type="checkbox" :checked="selects.indexOf(item.id)>=0"  @click="check(item.id)"/></div>
              <div class="good">
                <div class="left">
                  <div><img :src="item.img"/></div>
                </div>
                <div class="right">
                  <div class="title">{{item.title}}</div>
                  <div class="type">口味：<span>{{item.des}}</span></div>
                  <div class="bottom">
                    <div class="price">￥{{item.price}}</div>
                    <div class="chooseBox">
                      <button class="del" @click="$store.commit('del', item)" :class="{zero:item.count==0}">-</button>
                      <input  type="text" v-model="item.count" @blur="item.count=item.count==''||undefined?0:item.count"/>
                      <button class="add" @click="addToCart(item)" >+</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
          </div>
         <!-- <div class="shops" v-for="items in cart">
            <div class="shopdetail">
              <div class="slt"><input type="checkbox" :checked="items.isCheckedAll"  @click="sltall(items)"/></div>
              <div class="title">{{items.shopname}}</div>
              <div class="coupon">优惠券</div>
            </div>
            <div class="goodslist">
              <div class="goodsdetail" v-for="item in items.goods">
                <div class="slt"><input type="checkbox" :checked="selects.indexOf(item.id)>=0"  @click="check(item.id)"/></div>
                <div class="good">
                  <div class="left">
                    <div><img :src="item.img"/></div>
                  </div>
                  <div class="right">
                    <div class="title">{{item.name}}</div>
                    <div class="type">口味：<span>{{item.type}}</span></div>
                    <div class="bottom">
                      <div class="price">￥{{item.price}}</div>
                      <div class="chooseBox">
                        <button class="del" @click="item.count>0?item.count&#45;&#45;:0" :class="{zero:item.count==0}">-</button>
                        <input type="text" v-model="item.count" @blur="item.count=item.count==''||undefined?0:item.count"/>
                        <button class="add" @click="item.count++">+</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>-->
        </div>
       <div style="height: 4rem"></div>
        <div class="alls">
            <div class="allcheck">
              <input type="checkbox"/>
            </div>
          <div class="alltext">
            全选
          </div>
           <div class="moneys">
             合计：￥<span>{{totalPrice}}</span>
           </div>
           <div class="go">去结算(6)</div>
         </div>
     </div>
</template>
<script>
  import {mapGetters,mapActions} from 'vuex'
    export default {
        name: "cart",
        data(){
          return{
          /*  cart:[
              {"id":11,"shopname":"京东自营店铺",isCheckedAll:false,
                goods:[
                  {"id":1,"name":"这是个什么东西我也不知道","type":"不好吃的口味","price":199,"img":"static/goods/5a2df7f6Ne8b28453.jpg!q70.jpg","count":7},
                  ]
              },
              {"id":21,"shopname":"京东自营店铺2",isCheckedAll:false,
                goods:[
                  {"id":2,"name":"一个名字很长啊实打实的产品","type":"不知道是啥","price":199,"img":"static/goods/5a6ef6a4Nc6c37bf2.jpg!q70.jpg","count":3},
                  {"id":3,"name":"这是个什也不知道","type":"可能没有规格吧","price":199,"img":"static/goods/5a9ca2f4N67518f48.jpg!q70.jpg","count":5},
                  {"id":4,"name":"西我也不知道","type":"极速这样","price":199,"img":"static/goods/5aa783aeN9df05256.jpg!q70.jpg","count":2},
                ]
              }
            ],*/
            selects:[],
            isCheckedAll:false,
          }
        },

      methods:{
          ...mapActions(['addToCart']),
          check(obj){
            let idIndex = this.selects.indexOf(obj);
            console.log(idIndex);
            if(idIndex<0){
              this.selects.push(obj)
            }else {
              this.selects.splice(idIndex,1)
            }
            console.log(this.selects)
          },
          sltall(obj){
           obj.isCheckedAll = !obj.isCheckedAll;
           if(!obj.isCheckedAll){
             obj.goods.forEach(value=>{
               let idIndex = this.selects.indexOf(value.id);
               if(idIndex>-1){
                 this.selects.splice(idIndex,1)
               }
             })
           }else {
             obj.goods.forEach(value=>{
               let idIndex = this.selects.indexOf(value.id);
               if(idIndex<0){
                 this.selects.push(value.id)
               }
             })
           }
           console.log(this.selects)
         }
      },

      computed:{
        ...mapGetters(['cart','cartList','totalPrice']),
      }
    }
</script>
<style scoped lang="scss">
  #cart .zero{
    background: rgba(212,212,212,0.3);
  }
  .cart{
    background: #f0f2f4;
    width: 100%;
    .topNav{
      width: 100%;
      height: 3rem;
      border-bottom: 1px solid rgb(212,212,212);
      display: flex;
      justify-content: flex-end;
      line-height: 3rem;
      background: white;
      .title{
        width: 60%;
        font-weight: bold;
      }
      .deal{
        width: 20%;
        display: flex;
        font-size: 14px;
        color: gray;
        .do1{
          width: 50%;
        }
        .do2{
          width: 50%;
        }

      }
    }
    .shops{
      width: 100%;
      margin-top: 0.5rem;
      border-bottom: 1px solid rgba(212,212,212,0.5);
      .shopdetail{
        width: 100%;
        height: 3.5rem;
        background: #fafaf9;
        line-height: 3.5rem;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid rgba(212,212,212,0.5);
        border-top: 1px solid rgba(212,212,212,0.5);
        .slt{
           width: 15%;
        }
        .title{
            width: 70%;
          font-weight: bold;
          text-align: left;
        }
        .coupon{
           width: 15%;
          color: red;
          text-align: right;
          font-size: 14px;
          padding-right: 10px;
        }
      }
      .goodsdetail{
        display: flex;
        width: 100%;
        justify-content: space-between;
        background: white;
        padding: 10px 0;
        .slt{
          width: 15%;
          height: 120px;
          input{
            height: 120px;
            line-height: 120px;
          }
        }
        .good{
          width: 85%;
          display: flex;
          justify-content: space-between;
          height: 120px;
          .left{
            width:120px;
            height: 120px;
            line-height: 120px;
            font-size: 0;
            img{
              width: 100%;
              vertical-align: middle;
              font-size: 0;
              border: 1px solid rgba(212,212,212,0.3);
              border-radius: 5px;
            }
          }

          .right{
            width: 60%;
            box-sizing: border-box;
            padding: 3px;
            display: flex;
            flex-flow: wrap;
            .title{
              font-size: 16px;
              text-align: left;
              font-weight: bold;
              width: 100%;
            /*  height: 20px;*/
            }
            .type{
              font-size: 14px;
              color: gray;
              text-align: left;
              height: 16px;
              white-space: nowrap;
              width: 100%;
              overflow: hidden;
              display: inline-block;
              text-overflow: ellipsis;
            }
            .bottom{
              width: 100%;
              display: flex;
              justify-content: space-between;
              align-self: flex-end;
              .price{
                color: red;
                font-weight: bold;
                width: 40%;
                text-align: left;
                line-height: 2rem;
              }
              .chooseBox{
                  width: 60%;
                  display: flex;
                  justify-content: center;
                  button{
                      height: 2rem;
                      border: none;
                      outline: none;
                      padding: 0 0.8rem;
                      font-size: 18px;
                    &:active{
                      background:rgba(0,0,0,0.1);
                    }
                  }
                  .del{
                    border-top-left-radius: 3px;
                    border-bottom-left-radius: 3px;
                    border: 1px solid rgb(212,212,212);
                    background: white;
                  }
                .add{
                  border-top-right-radius: 3px;
                  border-bottom-right-radius: 3px;
                  border: 1px solid rgb(212,212,212);
                  background: white;
                }
                  input{
                     width: 2rem;
                     border: none;
                     outline: none;
                     text-align: center;
                     border-top: 1px solid rgb(212,212,212);
                     border-bottom: 1px solid rgb(212,212,212);
                  }
              }
            }
          }
        }
      }

    }
    .alls{
      display: flex;
      justify-content: space-between;
      height: 4rem;
      line-height: 4rem;
      background: #fefefe;
      width: 100%;
      position: fixed;
      bottom: 3.5rem;
      border-top: 1px solid rgba(212,212,212,0.5);
      box-shadow: inset -2px -2px 5px rgba(0,0,0,0.1);
      .allcheck{
        width: 15%;
      }
      .alltext{
        width: 10%;
        font-size: 14px;
        text-align: left;
        position: relative;
        left: -5%;
        font-weight: bold;
      }
      .moneys{
        width: 45%;
        font-weight: bold;
        text-align: left;
      }
      .go{
        width: 30%;
        background: #de433a;
        color: white;
        font-size: 18px;
      }
    }
  }
</style>
