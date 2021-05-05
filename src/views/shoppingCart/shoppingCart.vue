<template>
  <div class="view">
    <cpGlobalTitle :isBack="true" :isTitle="'购物车'"/>
  </div>
</template>

<script>
  export default {
    name: "shoppingCart"
  }
</script>

<style scoped>
  .view {
    width: 100%;
    min-height: 100vh;
    background-color: #F8F8F8;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    box-sizing: border-box;
  }
</style>
