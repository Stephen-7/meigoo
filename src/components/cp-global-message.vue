<template>
  <div class="cp_dialog">
    <div class="cp_dialogView" v-show="message">
      <img class="cp_dialogViewImage" src="../assets/image/icon_empty1@2x.png" alt="">
      <span class="cp_dialogViewTitle">暂无商品记录</span>
    </div>
    <div class="cp_dialog" v-show="notice">
      <img class="cp_dialogViewImage" src="../assets/image/icon_empty1@2x.png" alt="">
      <span class="cp_dialogViewTitle">暂无通知</span>
    </div>
    <div class="cp_dialog" v-show="comment">
      <img class="cp_dialogViewImage" src="../assets/image/icon_empty2@2x.png" alt="">
      <span class="cp_dialogViewTitle">暂无评论</span>
    </div>
    <div class="cp_dialog" v-show="address">
      <img class="cp_dialogViewImage" src="../assets/image/icon_empty3@2x.png" alt="">
      <span class="cp_dialogViewTitle">暂无收货地址</span>
      <div class="cp_add">
        <p class="cp_submit" @click="$router.push('/addAndChangeAddress')">添加地址</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "cp-global-message",
    props:{
      message:Boolean,
      notice:Boolean,
      comment:Boolean,
      address:Boolean,
    },
  }
</script>

<style scoped>
  .cp_dialog{
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #F8F8F8;
    z-index: 8;
    position: fixed;
    top:0;
    left: 0;
  }

  .cp_dialogView{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .cp_dialogViewImage{
    width: 33vw;
    height: 33vw;
    display: block;
  }

  .cp_dialogViewTitle{
    font-size: 4vw;
    font-weight: 400;
    color: #999999;
    text-align: center;
    margin-top: 2vw;
  }

  .cp_add {
    width: 100%;
    height: 11.73vw;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 13vw;
  }

  .cp_submit {
    width: 53.33vw;
    height: 11.73vw;
    border-radius: 5.87vw;
    border: 0.13vw solid #E2B575;
    font-size: 4vw;
    font-weight: 500;
    text-align: center;
    color: #E2B575;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
