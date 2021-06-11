<template>
  <div class="view">
    <div class="top">
      <cpGlobalBackSearch :placeholder="'搜索商品热门关键词'" @backSearchValue="getSearchValue"/>
    </div>

    <nav class="nav">
      <div class="navBg">
        <div class="navItem" v-for="(item,index) in listArr" :key="index" @click="tabIndex(index)">
          <p class="navItemTime" :class="{'action':itemIndex === index}">{{item.time}}</p>
          <p class="navItemTitle">{{item.title}}</p>
        </div>
      </div>
    </nav>

    <div class="list">
      <div class="item" v-for="(item,index) in 7" :key="index" @click="$router.push('/productDetails')">
        <img class="itemImage" src="../../assets/image/details@2x.png" alt="">
        <div class="itemType">
          <p class="itemTitle">智能自动机器人扫地智能自动机器人扫地</p>
          <div class="itemCoupon">
            <p class="itemCouponLeft">赚¥0.32</p>
            <p class="itemCouponRight">得20积分</p>
          </div>
          <p class="itemPrice">¥326.3 <span class="itemPriceType">¥5544.6</span></p>
          <div class="itemInformation">
            <img class="itemAvatar" src="../../assets/image/icon_headprotrait_shop_40@2x.png" alt="">
            <p class="itemName">商家名称如果商家名称如果</p>
            <img class="itemPanicBuying" src="../../assets/image/special_bg_robbuy1@2x.png" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "spike",
    data() {
      return {
        listArr: [
          {
            time: '10:00',
            title: "已结束",
            isPanicBuying: false,
          },
          {
            time: '11:00',
            title: "抢购中",
            isPanicBuying: true,
          },
          {
            time: '12:00',
            title: "准备开始",
            isPanicBuying: false,
          },
          {
            time: '13:00',
            title: "准备开始",
            isPanicBuying: false,
          },
          {
            time: '14:00',
            title: "准备开始",
            isPanicBuying: false,
          },
        ],
        itemIndex: 1,
      }
    },
    methods: {
      getSearchValue(e){
        console.log(e);
      },

      tabIndex(index) {
        // this.itemIndex = index;
      },
    },
    mounted() {
    }
  }
</script>

<style scoped>
  .view {
    width: 100%;
    height: 100vh;
    /*padding-bottom: 13vw;*/
    background-color: #f8f8f8;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
  }

  .top {
    width: 100%;
    height: 12.67vw;
    padding: 0 3.2vw;
    box-sizing: border-box;
    background-color: white;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: row;
  }

  .nav {
    width: 100%;
    height: 17.87vw;
    margin-top: 3.2vw;
    padding: 0 3.2vw;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
  }

  .navBg {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    background-image: url("../../assets/image/special_bg_seckilltime@2x.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center center;
  }

  .navItem {
    width: 20%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .navItemTime {
    width: 18vw;
    height: 8vw;
    font-size: 4.8vw;
    font-weight: 500;
    color: #cccccc;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .navItemTitle {
    font-size: 3.2vw;
    font-weight: 400;
    color: #cccccc;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .action {
    width: 18vw;
    height: 8vw;
    color: white;
    margin-bottom: 0.5vw;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url("../../assets/image/special_bg_seckillbtn@2x.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center center;
  }

  .list {
    width: 100%;
    height: calc(100vh - 38.07vw);
    overflow: scroll;
    margin-top: 4vw;
    padding: 0 3.2vw;
    box-sizing: border-box;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .item {
    width: 45.33vw;
    height: auto;
    overflow: hidden;
    background: #FFFFFF;
    border-radius: 1.07vw;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    margin-bottom: 2.67vw;
  }

  .itemImage {
    width: 45.33vw;
    height: 45.33vw;
    display: block;
  }

  .itemType {
    width: 100%;
    padding: 0 2.13vw;
    box-sizing: border-box;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
  }

  .itemTitle {
    width: 100%;
    margin-top: 1.5vw;
    font-size: 3.73vw;
    font-weight: 500;
    color: #333333;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: break-word;
    white-space: normal !important;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }

  .itemCoupon{
    width: 100%;
    margin-top: 1vw;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
  }

  .itemCouponLeft{
    width: auto;
    height: 4.27vw;
    padding: 0 1.5vw;
    font-size: 2.93vw;
    font-weight: 400;
    color: #E94A17;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #FFEEEF;
    margin-right: 2vw;
  }

  .itemCouponRight{
    width: auto;
    height: 4.27vw;
    padding: 0 1.5vw;
    font-size: 2.93vw;
    font-weight: 400;
    color: #AC7452;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #FFEFD9;
  }

  .itemPrice {
    margin-top: 2vw;
    font-size: 4.53vw;
    font-weight: 500;
    color: #FF4E56;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
  }

  .itemPriceType{
    font-size: 3.2vw;
    font-weight: 400;
    color: #999999;
    margin-left: 1vw;
  }

  .itemInformation{
    width: 100%;
    height: auto;
    margin-top: 1vw;
    margin-bottom: 2vw;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
  }

  .itemAvatar{
    width: 4.8vw;
    height: 4.8vw;
    display: block;
  }

  .itemName {
    flex: 1;
    padding: 0 1.5vw;
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

  .itemPanicBuying{
    width: 6.93vw;
    height: 6.93vw;
    display: block;
  }
</style>
