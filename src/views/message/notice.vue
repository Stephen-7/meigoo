<template>
  <div class="view">
    <cpGlobalTitle :isBack="true" :isTitle="'通知'"/>
    <div class="list">
      <div class="item" v-for="(item,index) in dataArr" :key="index" @click="changePath(item.path)">
        <img class="itemImage" :src="item.icon" alt="">
        <div class="itemType">
          <div class="itemTop">
            <p class="itemTopTitle">{{item.title}}</p>
            <p class="itemTopText">{{item.time}}</p>
          </div>
          <div class="itemBottom">
            <p class="itemBottomTitle">{{item.message}}</p>
            <p class="itemBottomNum">{{item.num<100?item.num:'···'}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "notice",
    data() {
      return {
        dataArr: [
          {
            icon: require('@/assets/image/icon_activity_40_red@2x.png'),
            title: "活动消息",
            time: "2019-12-11 10:00",
            message: "明天商品特价明天商品特价明天商品特价明天商品特价明天商品特价",
            num: "123",
            path:"/eventNews",
          },
          {
            icon: require('@/assets/image/icon_systeminform_40_yellow@2x.png'),
            title: "系统通知",
            time: "2019-12-11 10:00",
            message: "明天放假了",
            num: "9",
            path:"/",
          },
          {
            icon: require('@/assets/image/icon_order_40_red@2x.png'),
            title: "订单消息",
            time: "2019-12-11 10:00",
            message: "明天商品特价",
            num: "66",
            path:"/orderMessage",
          },
        ]
      };
    },
    methods:{
      changePath(path){
        this.$router.push(path)
      }
    }
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

  .list {
    width: 100%;
    height: auto;
    margin-top: 2.67vw;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
  }

  .item {
    width: 100vw;
    height: 18.93vw;
    padding: 0 3.2vw;
    box-sizing: border-box;
    background: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    border-bottom: 0.1vw solid #EEEEEE;
  }

  .itemImage {
    width: 10.67vw;
    height: 10.67vw;
    display: block;
    margin-right: 2.67vw;
  }

  .itemType {
    flex: 1;
    height: 10.67vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
  }

  .itemTop, .itemBottom {
    width: 100%;
    height: 5.6vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
  }

  .itemTopTitle {
    font-size: 4vw;
    font-weight: 600;
    color: #333333;
    text-align: left;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: break-word;
    white-space: normal !important;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }

  .itemTopText {
    font-size: 3.47vw;
    font-weight: 400;
    color: #999999;
    text-align: right;
  }

  .itemBottomTitle {
    width: 96%;
    font-size: 3.47vw;
    font-weight: 400;
    color: #999999;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: break-word;
    white-space: normal !important;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }

  .itemBottomNum {
    width: 4vw;
    height: 4vw;
    padding: 0.2vw 0;
    background: #FF4E56;
    border-radius: 20vw;
    border: 0.27vw solid #FFFFFF;
    font-size: 2.5vw;
    font-weight: 400;
    color: #FFFFFF;
    text-align: center;
    margin-left: 1vw;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
