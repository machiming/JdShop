<template>
  <div class="box">
    <div class="title">
     <p class="titlename">最近搜索</p>
    </div>
    <div class="cont">
       <span>搜索</span>
      <span>最近搜索</span>
      <span>最近索</span>
      <span>最近d搜索</span>
      <span>最近山东搜索</span>
    </div>
    <div class="title">
       <p class="titlename">热门搜索</p>
    </div>
    <div class="cont">
      <span>搜索</span>
      <span>最近搜索</span>
      <span>最近索</span>
      <span>最近d搜索</span>
      <span>最近山东搜索</span>
    </div>
  </div>
</template>

<script>
    export default {
        name: "searchbox"
    }
</script>

<style scoped lang="scss">
  .box{
     margin-top: 4rem;
    .title{
       padding: 0 15px;
       .titlename{
         text-align: left;
       }
    }
    .cont{
      overflow: hidden;
      padding: 10px;
      span{
        height: 1.4375rem;
        line-height: 1.5rem;
        border-radius: 3px;
        display: inline-block;
        width: auto;
        color: #686868;
        white-space: nowrap;
        -o-text-overflow: ellipsis;
        text-overflow: ellipsis;
        background-color: #f0f2f5;
        padding-left: 13px;
        padding-right: 13px;
        overflow: hidden;
        float: left;
        margin: 5px 5px;
        font-size: 0.9rem;
      }
      &:after{
        content: "";
        clear: both;
      }
    }
  }
</style>
