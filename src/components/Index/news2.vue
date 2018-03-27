<template>
  <div class="bg">
    <img :src="newspic2"/>
  </div>
</template>

<script>
  export default {
    name: "news2",
    data(){
      return{
        newspic2:'static/new/5ab4da6aNdf8a555d.gif'
      }
    }
  }
</script>

<style scoped lang="scss">
  .bg{
    width: 100%;
    font-size: 0;
    img{
      width: 100%;
    }
  }
</style>
