<template>
  <div class="view">
    <cpGlobalTitle :isTitle="'收益'"/>
    <div class="nav">
      <div class="nav-bg">
        <p class="nav-title">红包余额</p>
        <p class="nav-total">¥2945.00</p>
      </div>
    </div>

    <van-pull-refresh class="list" v-model="refreshing" @refresh="onRefresh">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <ul class="uls">
          <li class="item" v-for="(item,index) in list" :key="index">
            <div class="type">
              <p class="className">{{item.className}}</p>
              <p class="times">{{item.times}}</p>
            </div>
            <p class="price" :class="item.prices < 0?'lessColor':'addColor'">¥{{item.prices}}</p>
          </li>
        </ul>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
  export default {
    name: "income",
    data() {
      return {
        list: [
          {
            className:"充值",
            times:"2020-08-28 11:21:42",
            prices:"30.00",
          },
          {
            className:"购买",
            times:"2020-08-28 11:21:42",
            prices:"-4200.00",
          },
          {
            className:"拼团失败奖励",
            times:"2020-08-28 11:21:42",
            prices:"4200.00",
          },
        ],
        loading: false,
        finished: false,
        refreshing: false,
      }
    },
    methods: {
      onLoad() {
        setTimeout(() => {
          if (this.refreshing) {
            // this.list = [];
            this.refreshing = false;
          }
          // for (let i = 0; i < 3; i++) {
          //   this.list.push(this.list.length + 1);
          // }
          this.loading = false;
          // if (this.list.length >= 20) {
            this.finished = true;
          // }
        }, 1000);
      },
      onRefresh() {
        // 清空列表数据
        this.finished = false;

        // 重新加载数据
        // 将 loading 设置为 true，表示处于加载状态
        this.loading = true;
        this.onLoad();
      },
    },
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
    /*height: calc(100vh - 47vw);*/
    margin-bottom: 13.1vw;;
    height: auto;
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
