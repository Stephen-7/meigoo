<template>
  <div class="view">
    <cpGlobalTitle :isBack="true" :isBorderColor="true" :isTitle="'订单详情'"/>
    <div class="top">
      <p class="state">等待买家付款</p>
      <p class="time">23小时59分59秒后自动关闭</p>
    </div>
    <div class="content">
      <div class="address">
        <img class="addressIcon" src="../../assets/image/icon_location_22_line@2x.png" alt="">
        <div class="addressType">
          <p class="addressName">梁大文<span class="addressPhone">15923456789</span></p>
          <p class="addressDetails">广东省广州市番禺区汉溪大道汉溪长隆地铁G出口时代Epark A3栋2506</p>
        </div>
      </div>

      <div class="item">
        <div class="itemType">
          <img class="itemIcon" src="../../assets/image/icon_headprotrait_shop_40@2x.png" alt="">
          <p class="itemName">我是第一个商家</p>
        </div>
        <div class="itemContent">
          <img class="itemContentImg" src="../../assets/image/default.png" alt="">
          <div class="itemContentType">
            <div class="itemContentTop">
              <p class="itemContentTitle">完美日记限定口红季节限定商品名称商品名称商…</p>
              <div class="itemContentPay">
                <p class="itemContentPrice">¥3265</p>
                <p class="itemContentNum">x3</p>
              </div>
            </div>
          </div>
        </div>
        <div class="itemContent">
          <img class="itemContentImg" src="../../assets/image/default.png" alt="">
          <div class="itemContentType">
            <div class="itemContentTop">
              <p class="itemContentTitle">完美日记限定口红季节限定商品名称商品名称商…</p>
              <div class="itemContentPay">
                <p class="itemContentPrice">¥3265</p>
                <p class="itemContentNum">x3</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="calculation">
        <p></p>
        <div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // 订单列表全部：
  // 1.去付款：取消订单、去付款。
  // 2.待发货：申请退款、退款中。
  // 3.待收货：确认收货。
  // 4.已完成：去评价。
  // 5.已取消：null。
  //
  // 订单详情标题：
  // 1.去付款：等待买家付款，倒计时。。。
  // 2.等待商家发货
  // 3.待收货：等待确认收货、倒计时。快递公司、快递单号。
  // 4.已完成：交易成功。
  // 6.已取消：交易取消。
  export default {
    name: "orderDetails"
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

  .top {
    width: 100%;
    height: 35vw;
    padding: 0 6.4vw;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: white;

  }

  .state {
    width: 100%;
    font-size: 4.8vw;
    font-weight: 500;
    color: #333333;
    margin-bottom: 1vw;
  }

  .time {
    width: 100%;
    font-size: 3.47vw;
    font-weight: 400;
    color: #999999;
  }

  .content {
    width: 100%;
    height: auto;
    background: #F8F8F8;
    border-radius: 2.13vw 2.13vw 0 0;
    /*background-color: red;*/
  }

  .address {
    width: 93.6vw;
    height: auto;
    background: #FFFFFF;
    border-radius: 1.07vw;
    margin: 3vw 3.2vw 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    padding: 3.2vw;
    box-sizing: border-box;
  }

  .addressIcon {
    width: 8vw;
    height: 8vw;
    display: block;
  }

  .addressType {
    flex: 1;
    height: 100%;
    margin-left: 3.2vw;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;
  }

  .addressName {
    font-size: 4.27vw;
    font-weight: 500;
    color: #333333;
  }

  .addressPhone {
    font-size: 4.27vw;
    font-weight: 400;
    color: #333333;
    margin-left: 3.2vw;
  }

  .addressDetails {
    width: 100%;
    text-align: left;
    font-size: 3.73vw;
    font-weight: 400;
    color: #666666;
    margin-top: 2.13vw;
  }

  .item {
    width: 93.6vw;
    height: auto;
    background: #FFFFFF;
    border-radius: 1.07vw;
    margin: 3vw 3.2vw 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    padding: 0 3.2vw 4.27vw;
    box-sizing: border-box;
    border-bottom: 0.1vw solid #EEEEEE;
  }

  .itemType {
    width: 100%;
    height: 11.7vw;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
  }

  .itemIcon {
    width: 4.8vw;
    height: 4.8vw;
    display: block;
  }

  .itemName {
    font-size: 3.73vw;
    font-weight: 400;
    color: #333333;
    margin-left: 2vw;
  }

  .itemContent {
    width: 100%;
    height: auto;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: row;
    padding-top: 3.2vw;
  }

  .itemContentImg {
    width: 24vw;
    height: 24vw;
    display: block;
  }

  .itemContentType {
    flex: 1;
    height: 24vw;
    margin-left: 3.2vw;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: row;
  }

  .itemContentTop {
    width: 100%;
    height: auto;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: row;
  }

  .itemContentTitle {
    width: 75%;
    height: auto;
    text-align: left;
    font-size: 3.73vw;
    font-weight: 400;
    color: #333333;

  }

  .itemContentPay {
    flex: 1;
    display: flex;
    align-items: flex-end;
    flex-direction: column;
  }

  .itemContentPrice {
    font-size: 4vw;
    font-weight: 400;
    color: #333333;
  }

  .itemContentNum {
    font-size: 3.47vw;
    font-weight: 400;
    color: #999999;
  }

  .calculation {
    width: 93.6vw;
    height: 100px;
    background: #FFFFFF;
    border-radius: 1.07vw;
    margin: 3vw 3.2vw 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    padding: 0 3.2vw 4.27vw;
    box-sizing: border-box;
    border-bottom: 0.1vw solid #EEEEEE;
  }
</style>
