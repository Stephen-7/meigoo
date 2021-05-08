<template>
  <div class="_dialog">
    <div class="_dialogView" v-show="message">
      <img class="_dialogViewImage" src="../assets/image/icon_empty1@2x.png" alt="">
      <span class="_dialogViewTitle">暂无商品记录</span>
    </div>
  </div>
</template>

<script>
  export default {
    props:{
      message:Boolean,

    },
    name: "cp-global-message",
    data(){
      return{

      }
    },
  }
</script>

<style scoped>
  ._dialog{
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    /*background-color: rgba(0,0,0,0.5);*/
    background-color: #F8F8F8;
    z-index: 8;
    position: fixed;
    top:0;
    left: 0;
  }

  ._dialogView{
    display: flex;
    flex-direction: column;
  }

  ._dialogViewImage{
    width: 33vw;
    height: 33vw;
    display: block;
  }

  ._dialogViewTitle{
    font-size: 4vw;
    font-weight: 400;
    color: #999999;
    text-align: center;
    margin-top: 2vw;
  }
</style>
