<template>
  <div class="view">
    <div class="topBar">
      <cpGlobalTitle :isBack="true" :isTitle="'商品详情页'">
        <template v-slot:rightBut>
          <p class="customerService"></p>
        </template>
      </cpGlobalTitle>
    </div>

    <div class="swiper">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item class="van-swipe-item">1</van-swipe-item>
        <van-swipe-item class="van-swipe-item">2</van-swipe-item>
        <van-swipe-item class="van-swipe-item">3</van-swipe-item>
        <van-swipe-item class="van-swipe-item">4</van-swipe-item>
      </van-swipe>
    </div>

    <div class="detail">
      <div class="spaceBetween">
        <p class="price">¥500</p>
        <p class="sold">已售2843件</p>
      </div>
      <p class="title">完美日记星动臻色金钻唇膏小金钻大口红推荐女学生款</p>
      <div class="spaceBetween">
        <div class="left">
          <p class="typeTitle marginRight">规格</p>
          <p class="typeTitle">请选择规格</p>
        </div>
        <div class="right">
          <img class="rightIcon" src="../../assets/image/icon_go_22_gray@2x.png" alt="">
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "details",
    mounted() {
      // console.log(this.$route.query.id)
    }
  }
</script>

<style scoped>
  .view {
    width: 100%;
    height: 100vh;
    overflow: scroll;
    padding-top: 12.5vw;
    background-color: #f8f8f8;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    box-sizing: border-box;
  }

  .topBar {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9;
    background-color: white;
  }

  .customerService{
    width: 6.5vw;
    height: 6.5vw;
    /*display: block;*/
    background-image: url("../../assets/image/icon_sevice_24_black@2x.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center center;
  }

  .swiper .my-swipe{
    width: 100vw;
    height: 100vw;
    background-color: red;
  }

  .van-swipe-item{
    width: 100%;
    height: 100%;
    background-color: yellow;
  }

  .detail{
    width: 100%;
    height: auto;
    padding: 0 4.27vw;
    box-sizing: border-box;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    background-color: white;
  }

  .spaceBetween{
    width: 100%;
    height: 14vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
  }

  .price{
    font-size: 5.87vw;
    font-weight: 500;
    color: #FF303A;
  }

  .sold{
    font-size: 3.4vw;
    font-weight: 400;
    color: #999999;
  }

  .title{
    width: 100%;
    font-size: 4.27vw;
    font-weight: 500;
    color: #333333;
    text-align: left;
  }

  .left{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
  }

  .typeTitle{
    font-size: 3.73vw;
    font-weight: 400;
    color: #999999;
  }

  .marginRight{
    margin-right: 4vw;
  }

  .right{
    width: 6vw;
    height: 6vw;
  }

  .rightIcon{
    width: 6vw;
    height: 6vw;
    display: block;
  }


</style>
