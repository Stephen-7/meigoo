<template>
  <div class="view">
    <cpGlobalTitle :isBack="true" :isBorderColor="true" :isTitle="'订单详情'"/>
    <div class="box">
      <div class="top">
        <div class="top-left">
          <img class="top-left-img" src="../../assets/image/mine_pic_goods1@3x.png" alt="">
        </div>
        <div class="top-right">
          <p class="state">等待买家付款</p>
          <p class="time">29分59秒后自动关闭</p>
        </div>
      </div>
      <div class="address">
        <img class="addressIcon" src="../../assets/image/icon_location_22_line@2x.png" alt="">
        <div class="addressType">
          <p class="addressName">梁大文<span class="addressPhone">15923456789</span></p>
          <p class="addressDetails">广东省广州市番禺区汉溪大道汉溪长隆地铁G出口时代Epark A3栋2506</p>
        </div>
      </div>
      <div class="content">
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
      </div>
      <div class="information">
        <div class="item">
          <div class="itemType">
            <p class="itemName">订单信息</p>
          </div>
          <div class="orderNumber">
            <p class="orders">订单编号<span class="numbers">122432526431646</span></p>
<!--            <p class="orders">物流单号<span class="numbers">122432526431646</span></p>-->
            <p class="orders">创建时间<span class="numbers">2021-07-15 22:22:33</span></p>
<!--            <p class="orders">付款时间<span class="numbers">2021-07-15 22:22:33</span></p>-->
<!--            <p class="orders">发货时间<span class="numbers">2021-07-15 22:22:33</span></p>-->
<!--            <p class="orders">退款金额<span class="numbers">￥293</span></p>-->
<!--            <p class="orders">申请时间<span class="numbers">2021-07-15 22:22:33</span></p>-->
<!--            <p class="orders">售后编号<span class="numbers">122432526431646</span></p>-->
<!--            <p class="orders">退款原因<span class="numbers">不喜欢了</span></p>-->
<!--            <div class="ordersRow">-->
<!--              <p class="ordersTitle">退款说明</p>-->
<!--              <p class="orderShowText">43432423533656vtvr44ft5u25b5462u2</p>-->
<!--&lt;!&ndash;              <textarea class="orderEditText"></textarea>&ndash;&gt;-->
<!--            </div>-->
<!--            <div class="ordersRow">-->
<!--              <p class="ordersTitle">退款图片</p>-->
<!--              <img class="ordersUrl" src="../../assets/image/default.png" alt="暂无图片">-->
<!--              <img class="ordersUrl" src="../../assets/image/default.png" alt="暂无图片">-->
<!--              <img class="ordersUrl" src="../../assets/image/default.png" alt="暂无图片">-->
<!--              <img class="ordersUrl" src="../../assets/image/default.png" alt="暂无图片">-->
<!--            </div>-->
          </div>
        </div>
      </div>
      <div class="information">
        <div class="item">
          <div class="itemType">
            <p class="itemName">收货信息</p>
          </div>
          <div class="orderNumber">
            <p class="orders">联系人&nbsp;&nbsp;&nbsp;&nbsp;<span class="numbers">stephen</span></p>
            <p class="orders">联系电话<span class="numbers">111111111111</span></p>
            <p class="orders">收货地址<span class="numbers">广东省广州市番禺区兴南大道万达广场</span></p>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <p class="btn">联系客服</p>
      <p class="btn">取消订单</p>
      <p class="btn btn-ac">去付款</p>
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
    name: "orderDetails",
    data() {
      return {
        date: "",
      }
    },
    methods: {
      getTime() {
        setInterval(() => {
          var myDate = new Date();
          var myYear = myDate.getFullYear(); //获取完整的年份(4位,1970-????)
          var myMonth = myDate.getMonth() + 1; //获取当前月份(0-11,0代表1月)
          var myToday = myDate.getDate(); //获取当前日(1-31)
          var myDay = myDate.getDay(); //获取当前星期X(0-6,0代表星期天)
          var myHour = myDate.getHours(); //获取当前小时数(0-23)
          var myMinute = myDate.getMinutes(); //获取当前分钟数(0-59)
          var mySecond = myDate.getSeconds(); //获取当前秒数(0-59)
          var week = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
          var nowTime = `${myYear}年${this.fillZero(myMonth)}月${this.fillZero(myToday)}日  ${this.fillZero(myHour)}:${this.fillZero(myMinute)}:${this.fillZero(mySecond)} ${week[myDay]}`;
          console.log(nowTime);
        }, 1000)
      },

      fillZero(str) {
        var realNum;
        if (str < 10) {
          realNum = '0' + str;
        } else {
          realNum = str;
        }
        return realNum;
      },

      computedLastPayTime() {
        let self = this;
        setInterval(function () {
          let createTime = Date.parse(self.$store.state.subOrder.created_at) / 1000;
          let endTime = createTime + 900;
          let clientTime = Date.parse(new Date()) / 1000;
          let lastTime = endTime - clientTime;
          let int_minute;
          if (lastTime > 0) {
            int_minute = Math.floor(lastTime / 60);
            lastTime -= int_minute * 60;
            self.lastPayTime = int_minute + '分' + lastTime + '秒'
          } else {

          }
        }, 1000);
      }
    },
    mounted() {
      // this.getTime()
    }
  }
</script>

<style scoped>
  .view {
    width: 100%;
    min-height: 100vh;
    background: #F8F8F8;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    box-sizing: border-box;
  }

  .box {
    width: 100%;
    height: calc(100vh - 12.5vw - 13vw);
    overflow: scroll;
  }

  .top {
    width: 100%;
    height: 40vw;
    padding: 0 6.4vw;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    background: url("../../assets/image/mine_bg_blue@3x.png") no-repeat center center;
    background-size: 100% 100%;
  }

  .top-left {
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .top-left-img {
    max-width: 100%;
  }

  .top-right {
    flex: 1;
    height: auto;
    margin-left: 6vw;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
  }

  .state {
    width: 100%;
    font-size: 4.8vw;
    font-weight: 500;
    color: #ffffff;
    margin-bottom: 1vw;
  }

  .time {
    width: 100%;
    font-size: 3.47vw;
    font-weight: 400;
    color: #ffffff;
  }

  .content {
    width: 100%;
    height: auto;
    border-radius: 2.13vw 2.13vw 0 0;
    /*background-color: red;*/
  }

  .address {
    width: 93.6vw;
    height: auto;
    background: #FFFFFF;
    border-radius: 1.07vw;
    margin: 6vw 3.2vw 0;
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
    margin: 3.2vw 3.2vw 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    padding: 0 3.2vw 3.2vw;
    box-sizing: border-box;
  }

  .itemType {
    width: 100%;
    height: 11.7vw;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    border-bottom: 0.1vw solid #EEEEEE;
  }

  .itemIcon {
    width: 4.8vw;
    height: 4.8vw;
    display: block;
    margin-right: 2vw;
  }

  .itemName {
    font-size: 3.73vw;
    font-weight: 400;
    color: #333333;
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

  .information{
    margin-bottom: 10px;
  }

  .orderNumber{
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
  }

  .orders{
    width: 100%;
    height: 4.5vw;
    text-align: left;
    color: #999999;
    font-size: 3vw;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    margin-top: 3vw;
  }

  .numbers{
    color: #333333;
    margin-left: 10px;
  }

  .ordersRow{
    width: 100%;
    height: auto;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: row;
    margin-top: 3vw;
  }

  .ordersTitle{
    width: auto;
    text-align: left;
    color: #999999;
    font-size: 3vw;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
  }

  .orderShowText{
    flex: 1;
    height: 4.5vw;
    text-align: left;
    font-size: 12px;
    color: #333333;
    margin-left: 10px;
  }

  .orderEditText{
    flex: 1;
    height: 60px;
    text-align: left;
    font-size: 12px;
    color: #333333;
    margin-left: 10px;
  }

  .ordersUrl{
    width: 15.5vw;
    height: 15.5vw;
    display: block;
    margin-left: 10px;

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

  .bottom {
    width: 100%;
    height: 13vw;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: row;
    background-color: white;
    /*position: fixed;*/
    /*bottom: 0;*/
    /*left: 0;*/
    z-index: 12;
  }

  .btn {
    width: 75px;
    height: 25px;
    font-size: 12px;
    color: #333333;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 30px;
    margin-right: 15px;
    border: 1px solid #eeeeee;
  }

  .btn-ac {
    color: #ffffff;
    background-color: #E2B575;
    border: 1px solid #E2B575;
  }
</style>
