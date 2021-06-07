<template>
  <div class="view">
    <cpGlobalTitle :isTitle="'收益'"/>
    <div class="nav">
      <div class="nav-bg">
        <p class="nav-title">红包余额</p>
        <p class="nav-total">¥2945.00</p>
      </div>
    </div>

    <div class="list">
      <cpGlobalPullRefresh>
        <template v-slot:item>
          <div class="uls">
            <cpGlobalAssetType v-for="(item,index) in list" :item="item" :key="index"/>
          </div>
        </template>
      </cpGlobalPullRefresh>
    </div>
  </div>
</template>

<script>
  export default {
    name: "income",
    data() {
      return {
        list: [
          {
            className: "充值",
            times: "2020-08-28 11:21:42",
            prices: "30.00",
          },
          {
            className: "购买",
            times: "2020-08-28 11:21:42",
            prices: "-4200.00",
          },
          {
            className: "拼团失败奖励",
            times: "2020-08-28 11:21:42",
            prices: "4200.00",
          },
        ],
      }
    },
    methods: {},
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

  .nav {
    width: 100%;
    height: 33.4vw;
    padding: 3.2vw;
    box-sizing: border-box;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    background-color: white;
  }

  .nav-bg {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    background-image: url("../assets/image/special_bg_mine3@2x.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center center;
  }

  .nav-title {
    font-size: 4vw;
    font-weight: 500;
    color: #CF5700;
    margin-top: 4.27vw;
    margin-left: 4.53vw;
  }

  .nav-total {
    font-size: 5.87vw;
    font-weight: 500;
    color: #CF5700;
    margin-top: 4.27vw;
    margin-left: 4.53vw;
  }

  .list {
    width: 100%;
    height: calc(100vh - 33vw - 13.07vw - 13.05vw);
    overflow: scroll;
    margin-bottom: 13.1vw;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
  }

  .uls {
    width: 100%;
    height: auto;
    padding: 0 3.2vw;
    box-sizing: border-box;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    background-color: white;
  }

  .item {
    width: calc(97vw - 6.3vw);
    height: 20vw;
    margin-left: 3vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    border-bottom: 0.3vw solid #EEEEEE;
  }

  .item:last-child {
    border-bottom: 0
  }

  .type {
    width: auto;
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;

  }

  .className {
    font-size: 4vw;
    color: #333333;
    font-weight: bold;
    margin-bottom: 1vw;
  }

  .times {
    font-size: 3.47vw;
    font-weight: 400;
    color: #999999;
    margin-top: 1vw;
  }

  .price {
    font-size: 4.27vw;
    font-weight: 500;
  }

  .addColor {
    color: #FF4E56;
  }

  .lessColor {
    color: #2EBA80;
  }

</style>
