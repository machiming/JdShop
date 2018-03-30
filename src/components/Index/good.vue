<template>
  <div>
    <news2></news2>
    <goodslist></goodslist>
  </div>
</template>

<script>
    import Goodslist from "./goodslist";
    import news2 from "./news2";
    export default {
        name: "good",
      components: {news2, Goodslist}
    }
</script>

<style scoped>

</style>
