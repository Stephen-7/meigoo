<template>
  <div class="view">
    <div class="topBar">
      <cpGlobalTitle :isBorderColor="true" :isBack="true" :isTitle="'订单消息'"/>
    </div>

    <div class="list" v-show="dataArr.length !== 0">
      <cpGlobalPullRefresh>
        <template v-slot:item>
          <div class="item" v-for="(item,index) in dataArr" :key="index" @click="changePath(item.path)">
            <p class="time">{{item.time}}</p>
            <div class="box">
              <div class="boxType">
                <p class="boxTitle">{{item.title}}</p>
                <p class="boxIcon"></p>
              </div>
              <p class="boxMessage">{{item.message}}</p>
            </div>
          </div>
        </template>
      </cpGlobalPullRefresh>
    </div>

    <cpGlobalMessage :notice="'notice'" v-show="dataArr.length === 0"/>
  </div>
</template>

<script>
  export default {
    name: "orderMessage",
    data() {
      return {
        dataArr: [
          {
            id: 1,
            path: "/commodityOrder?type=3",
            title: "您的订单发货了",
            time: "2019-12-11 10:00",
            message: "您申请的售后订单[65449464651]已经审核通过，请留意后续信息",
          },
          {
            id: 2,
            path: "/commodityOrder?type=3",
            title: "您的订单发货了",
            time: "2019-12-11 10:00",
            message: "您申请的售后订单[65449464651]已经审核通过，请留意后续信息",
          },
        ]
      };
    },
    methods:{
      changePath(path){
        console.log(path);
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

  .topBar {
    z-index: 9;
    background-color: white;
  }

  .list {
    width: 100%;
    height: calc(100vh - 13vw);
    overflow: scroll;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
  }

  .item {
    width: calc(100vw - 8.54vw);
    height: auto;
    margin: 0 4.27vw;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
  }

  .time {
    width: 100%;
    margin-top: 4vw;
    font-size: 3.73vw;
    font-weight: 400;
    color: #999999;
    text-align: center;
  }

  .box {
    width: 100%;
    height: auto;
    margin-top: 2.67vw;
    padding: 4.27vw;
    box-sizing: border-box;
    background: #FFFFFF;
    border-radius: 1.07vw;
  }

  .boxType {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
  }

  .boxTitle {
    flex: 1;
    padding-right: 4vw;
    font-size: 4vw;
    font-weight: bold;
    color: #333333;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: break-word;
    white-space: normal !important;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }

  .boxIcon {
    width: 6vw;
    height: 6vw;
    background-image: url("../../assets/image/icon_go_22_gray@2x.png");
    background-size: 6vw 6vw;
    background-repeat: no-repeat;
    background-position: center center;
  }

  .boxMessage {
    width: 100%;
    margin-top: 2.13vw;
    font-size: 3.73vw;
    font-weight: 400;
    color: #999999;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: break-word;
    white-space: normal !important;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
</style>
