<template>
  <div class="cp-title">
    <div class="cp-left">
      <p class="cp-back" v-show="isBack" @click="$router.back()"></p>
    </div>
    <div class="cp-content">{{isTitle}}</div>
    <div class="cp-right">
      <slot name="rightBut"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      isBack:{
        type:Boolean,
      },
      isTitle:{
        type:String
      }
    },
    name: "cp-global-title"
  }
</script>

<style scoped>
  .cp-title {
    width: 100vw;
    height: 12.5vw;
    padding: 0 3.2vw;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    background-color: white;
  }

  .cp-left {
    flex: 1;
    text-align: left;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  .cp-back {
    width: 7vw;
    height: 7vw;
    background-image: url("../assets/image/icon_back_24_black@2x.png");
    background-size: 6vw 6vw;
    background-repeat: no-repeat;
    background-position: center center;
  }

  .cp-content {
    flex: 3;
    font-size: 4.53vw;
    font-weight: 500;
    color: #333333;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .cp-right {
    flex: 1;
    text-align: right;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
</style>
