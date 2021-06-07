<template>
  <div class="view">
    <div style="z-index: 9"><cpGlobalTitle :is-back="true" :isTitle="'商品评论'"/></div>
    <div class="list">
      <cpGlobalComment v-for="(item,index) in listArr" :key="index"/>
    </div>
    <cpGlobalMessage :comment="true" v-show="listArr.length === 0"/>
  </div>
</template>

<script>
  export default {
    name: "productReviews",
    data() {
      return {
        message: "",
        listArr:[1,1,1,1],
      }
    },
  }
</script>

<style scoped>
  .view {
    width: 100%;
    min-height: 100vh;
    background-color: #FFFFFF;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    box-sizing: border-box;
  }

  .list {
    width: 100%;
    height: calc(100vh - 12.5vw);
    overflow: scroll;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
  }
</style>
