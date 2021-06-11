<template>
  <div class="view">
    <div class="topBar">
      <cpGlobalTitle :isBack="true" :isTitle="'确认订单'"/>
    </div>

    <div class="address">
      <div class="addressLeft" @click.stop="$router.push(`/shippingAddress?type=add`)">
        <img class="addressLeftIcon" src="../../assets/image/icon_location_22_line@2x.png" alt="">
        <p class="addressLeftTitle" v-show="!isAddress">请填写收获地址</p>
        <div class="addressLeftContent" v-show="isAddress">
          <p class="addressLeftContentName">王敏<span class="addressLeftContentPhone">18822221383</span></p>
          <span class="addressLeftTitle">中国广东省深圳市宝山区示范新村307号（爱心大楼旁）</span>
        </div>
      </div>
      <div class="addressRight">
        <img class="addressRightIcon" src="../../assets/image/icon_go_22_gray@2x.png" alt="">
      </div>
    </div>

    <cpGlobalOrderItem :type="type" />

    <div class="bottomBar">
      <p class="bottomBarPrice">合计<span class="bottomBarMoney">¥0</span></p>
      <p class="bottomBarBuyNow" @click="toPayment">立即购买</p>
    </div>

    <!--    <cpGlobalMessage :message="'message'" v-show="listArr.length === 0"/>-->
  </div>
</template>

<script>
  export default {
    name: "confirmOrder",
    data() {
      return {
        //1.确认订单 2.商品订单
        type:1,
        listArr: [],
        checked: false,
        isAddress:false,
      }
    },
    methods:{
      selectAddress(state){
        this.isAddress = state;
      },

      toPayment(){
        this.$router.push('/payment')
      }
    },
  }
</script>

<style scoped>
  .view {
    width: 100%;
    overflow: scroll;
    padding-top: 12.5vw;
    padding-bottom: 3.2vw;
    height: calc(100vh - 14vw);
    background-color: #F8F8F8;
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

  .address {
    width: calc(100% - 6.4vw);
    height: auto;
    margin: 3.2vw 3.2vw 0 3.2vw;
    padding: 3.7vw 3.2vw;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    background-color: white;
    border-radius: 1.07vw;
  }

  .addressLeft {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
  }

  .addressLeftIcon {
    width: 5.8vw;
    height: 5.8vw;
    display: block;
  }

  .addressLeftTitle {
    flex: 1;
    font-size: 4vw;
    font-weight: 400;
    color: #333333;
    text-align: left;
    margin-left: 1.5vw;
  }

  .addressLeftContent {
    flex: 1;
    height: auto;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
  }

  .addressLeftContentName {
    font-size: 4vw;
    font-weight: bold;
    color: #333333;
    text-align: left;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    margin-left: 1.5vw;
    margin-bottom: 1.8vw;
  }

  .addressLeftContentPhone {
    font-size: 4vw;
    font-weight: 400;
    color: #333333;
    margin-left: 4.27vw;
  }

  .addressRight {
    width: 5.8vw;
    display: flex;
  }

  .addressRightIcon {
    width: 5.8vw;
    height: 5.8vw;
  }

  .item {
    width: calc(100% - 6.4vw);
    height: auto;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    margin: 3.5vw 3.2vw 0 3.2vw;
    border-radius: 1.07vw;
    background: #FFFFFF;
  }

  .item:last-child {
    margin: 3.5vw 3.2vw !important;
  }

  .items {
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    margin-bottom: 2.5vw;
  }

  .information {
    width: 100%;
    height: 10.67vw;
    padding: 0 3.2vw;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
  }

  .informationLeft{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
  }

  .informationIcon {
    width: 6.33vw;
    height: 6.33vw;
    display: block;
  }

  .informationName {
    font-size: 3.47vw;
    font-weight: 400;
    color: #333333;
    margin-left: 2vw;
  }

  .informationRight{
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: row;
  }

  .informationRightState{
    font-size: 3.73vw;
    font-weight: 400;
    color: #FF4E56;
  }

  .content {
    width: 100%;
    height: 30vw;
    padding: 3.2vw;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
  }

  .contentLeft {
    width: auto;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .contentImage {
    width: 24vw;
    height: 24vw;
    display: block;
    /*margin: 0 2.4vw;*/
  }

  .contentRight {
    flex: 1;
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: row;
    margin-left: 2.4vw;
  }

  .contentRightAttributes {
    width: 100%;
    height: auto;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;
  }

  .contentRightTitle {
    width: 100%;
    min-height: 5.3vw;
    max-height: 10.67vw;
    font-size: 4vw;
    font-weight: 500;
    color: #333333;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: break-word;
    white-space: normal !important;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .contentRightType {
    width: 100%;
    font-size: 3.2vw;
    font-weight: 400;
    color: #999999;
    margin-top: 1.3vw;
  }

  .contentRightAttributesType {
    width: auto;
    height: 10.67vw;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
  }

  .contentRightAttributesPrice {
    font-size: 4.27vw;
    font-weight: 500;
    color: #333333;
  }

  .contentRightAttributesQuantity {
    font-size: 3.2vw;
    font-weight: 400;
    color: #999999;
    margin-top: 1.87vw;
  }

  .orderNotes {
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
  }

  .orderNotesName {
    font-size: 3.47vw;
    font-weight: 500;
    color: #999999;
    margin: 0 4.27vw;
  }

  .orderNotesInput {
    flex: 1;
    height: 8vw;
    font-size: 3.47vw;
    font-weight: 400;
    color: #999999;
    text-align: left;
    padding-right: 4.27vw;
  }

  .total {
    width: 100%;
    height: 8vw;
    padding: 0 3.2vw;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: row;
    margin-bottom: 3.2vw;
  }

  .totalName {
    font-size: 4vw;
    font-weight: 400;
    color: #333333;
  }

  .totalNum {
    font-size: 4vw;
    font-weight: 500;
    color: #FF4E56;
  }

  .bottom{
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: row;
    margin-bottom: 4.27vw;
  }

  .bottomCancel{
    width: 19.73vw;
    height: 7.47vw;
    border-radius: 3.73vw;
    border: 0.13vw solid #D6D6D6;
    font-size: 3.73vw;
    font-weight: 400;
    color: #333333;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 2.93vw;
  }

  .bottomToPay{
    width: 19.73vw;
    height: 7.47vw;
    background: #E2B575;
    border-radius: 3.73vw;
    font-size: 3.73vw;
    font-weight: 500;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 2.93vw;
  }

  .bottomBar {
    width: 100%;
    height: 14vw;
    padding: 0 3.2vw;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 9;
    background-color: white;
  }

  .bottomBarPrice {
    font-size: 3.7vw;
    font-weight: 400;
    color: #333333;
  }

  .bottomBarMoney {
    font-size: 4.8vw;
    font-weight: 500;
    color: #FF303A
  }

  .bottomBarBuyNow {
    width: 29.87vw;
    height: 10.67vw;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5.33vw;
    font-size: 4vw;
    font-weight: 500;
    color: #ffffff;
    border: 0.13vw solid transparent;
    margin-left: 2.67vw;
    background-color: #E2B575;
  }

  .orderNotes {
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
  }

  .orderNotesName {
    font-size: 3.47vw;
    font-weight: 500;
    color: #999999;
    margin: 0 4.27vw;
  }

  .orderNotesInput {
    flex: 1;
    height: 8vw;
    font-size: 3.47vw;
    font-weight: 400;
    color: #999999;
    text-align: left;
    padding-right: 4.27vw;
  }

  .total {
    width: 100%;
    height: 8vw;
    padding: 0 3.2vw;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: row;
    margin-bottom: 3.2vw;
  }

  .totalName {
    font-size: 4vw;
    font-weight: 400;
    color: #333333;
  }

  .totalNum {
    font-size: 4vw;
    font-weight: 500;
    color: #FF4E56;
  }
</style>
