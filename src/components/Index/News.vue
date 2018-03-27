<template>
  <div class="bg">
    <img :src="newspic"/>
  </div>
</template>

<script>
    export default {
        name: "news",
        data(){
          return{
              newspic:'../static/5aa903f1Nb5500948.png!q70.jpg'
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
