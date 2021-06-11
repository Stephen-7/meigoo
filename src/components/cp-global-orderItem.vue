<template>
  <div class="item">
    <div class="information">
      <div class="informationLeft">
        <img class="informationIcon" src="../assets/image/icon_headprotrait_shop_40@2x.png" alt="">
        <span class="informationName">Stephen</span>
      </div>
      <div class="informationRight">
        <p class="informationRightState" v-show="type === 2">待付款</p>
      </div>
    </div>
    <div class="items">
      <div class="content">
        <div class="contentLeft">
          <img class="contentImage" src="../assets/image/class2.png" alt="">
        </div>
        <div class="contentRight">
          <div class="contentRightAttributes">
            <p class="contentRightTitle">哇哇哇哇未付费接口就开拿可查看科技局可参加阿尔克课件课件课件课件就网卡角度来看警方可怜见看来飞机</p>
            <p class="contentRightType">
              <span>颜色：红色</span>&nbsp;&nbsp;<span>尺码：22</span>
            </p>
          </div>
          <div class="contentRightAttributesType">
            <p class="contentRightAttributesPrice">￥222</p>
            <p class="contentRightAttributesQuantity">x3</p>
          </div>
        </div>
      </div>
    </div>
    <div class="orderNotes">
      <span class="orderNotesName">订单备注</span>
      <input type="text" class="orderNotesInput" placeholder="可输入您希望的注意事项">
    </div>
    <div class="total">
      <p class="totalName">共6件商品 合计：</p>
      <span class="totalNum">¥3265</span>
    </div>
    <div class="bottom" v-show="type === 2">
      <span class="bottomCancel">取消订单</span>
      <span class="bottomToPay">去付款</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "cp-global-orderItem",
    props: {
      type:Number,
    },
    data() {
      return {}
    },
    methods: {},
    mounted() {}
  }
</script>

<style scoped>
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

  /*.item:last-child {*/
  /*  margin: 3.5vw 3.2vw !important;*/
  /*}*/

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

  .informationLeft {
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

  .informationRight {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: row;
  }

  .informationRightState {
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

  .bottom {
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: row;
    margin-bottom: 4.27vw;
  }

  .bottomCancel {
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

  .bottomToPay {
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

</style>
