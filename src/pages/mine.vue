<template>
  <div class="view">
    <div class="topNav">
      <div class="user">
        <img class="userIcon" :src="userInfo.avatar" alt="">
        <div class="userType">
          <p class="userName">{{userInfo.name}}</p>
          <p class="userGrade" :class="vipArr[userInfo.grade]"></p>
          <p class="userSet" @click="$router.push('/setUp')"></p>
        </div>
      </div>
      <div class="assets">
        <div class="assetsTop">
          <p class="assetsTopTitle">我的资产</p>
          <p class="assetsTopIcon"></p>
        </div>
        <ul class="assetsBottom">
          <li class="assetsBottomItem" v-for="(item,index) in assetsArr" :key="index">
            <p class="assetsBottomItemPrice">{{item.price}}</p>
            <p class="assetsBottomItemText">{{item.title}}</p>
          </li>
        </ul>
      </div>
    </div>

    <div class="common">
      <p class="commonTitle">团购订单</p>
      <ul class="commonList">
        <li class="commonItem" v-for="(item,index) in groupBuyArr" :key="index">
          <van-icon size="30" :badge="item.num" :name="item.icon"/>
          <p class="commonItemText">{{item.title}}</p>
        </li>
      </ul>
    </div>

    <div class="common">
      <p class="commonTitle">商品订单</p>
      <ul class="commonList">
        <li class="commonItem" v-for="(item,index) in orderArr" :key="index">
          <van-icon size="30" :badge="item.num" :name="item.icon"/>
          <p class="commonItemText">{{item.title}}</p>
        </li>
      </ul>
    </div>

    <div class="common">
      <p class="commonTitle">其他服务</p>
      <ul class="commonList">
        <li class="commonItem" v-for="(item,index) in otherServiceArr" :key="index">
          <van-icon size="30" :badge="item.num" :name="item.icon"/>
          <p class="commonItemText">{{item.title}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "mine",
    components: {},
    computed:{
      userInfo(){
        // let userInfo = JSON.parse(sessionStorage.getItem('userInfo'))
        return JSON.parse(sessionStorage.getItem('userInfo'))
      },
    },
    data() {
      return {
        vipArr:['vip1','vip2','vip3'],
        assetsArr: [
          {
            id: 1,
            price: "2348.00",
            title: "红包余额",
          },
          {
            id: 2,
            price: "348.00",
            title: "发团额",
          },
          {
            id: 3,
            price: "248.00",
            title: "拼团券",
          },
        ],
        groupBuyArr: [
          {
            id: 1,
            num: 9,
            title: "全部",
            icon: require('@/assets/image/icon_grouporder_1_24@2x.png'),
          },
          {
            id: 2,
            num: 9,
            title: "待发货",
            icon: require('@/assets/image/icon_grouporder_2_24@2x.png'),
          },
          {
            id: 3,
            num: 9,
            title: "待收货",
            icon: require('@/assets/image/icon_grouporder_3_24@2x.png'),
          },
          {
            id: 4,
            num: 9,
            title: "待评价",
            icon: require('@/assets/image/icon_grouporder_4_24@2x.png'),
          },
        ],
        orderArr: [
          {
            id: 1,
            num: "",
            title: "全部",
            icon: require('@/assets/image/icon_grouporder_5_24@2x.png'),
          },
          {
            id: 2,
            num: "",
            title: "待付款",
            icon: require('@/assets/image/icon_grouporder_6_24@2x.png'),
          },
          {
            id: 3,
            num: "",
            title: "待发货",
            icon: require('@/assets/image/icon_grouporder_7_24@2x.png'),
          },
          {
            id: 4,
            num: "",
            title: "待收货",
            icon: require('@/assets/image/icon_grouporder_8_24@2x.png'),
          },
          {
            id: 5,
            num: "",
            title: "待评价",
            icon: require('@/assets/image/icon_grouporder_10_24@2x.png'),
          },
          {
            id: 6,
            num: "",
            title: "售后",
            icon: require('@/assets/image/icon_grouporder_9_24@2x.png'),
          },
        ],
        otherServiceArr: [
          {
            id: 1,
            num: "",
            title: "我的团队",
            icon: require('@/assets/image/icon_team_20@2x.png'),
          },
          {
            id: 2,
            num: "",
            title: "拼团记录",
            icon: require('@/assets/image/icon_other_2_24@2x.png'),
          },
          {
            id: 3,
            num: "",
            title: "发团记录",
            icon: require('@/assets/image/icon_other_8_24@2x.png'),
          },
          {
            id: 4,
            num: "",
            title: "联系客服",
            icon: require('@/assets/image/icon_sevice_24_black@2x.png'),
          },
          {
            id: 5,
            num: "",
            title: "常见问题",
            icon: require('@/assets/image/icon_other_5_24@2x.png'),
          },
          {
            id: 6,
            num: "",
            title: "我的收藏",
            icon: require('@/assets/image/icon_other_3_24@2x.png'),
          },
          {
            id: 7,
            num: "",
            title: "申请分公司",
            icon: require('@/assets/image/icon_other_7_24@2x.png'),
          },
          {
            id: 8,
            num: "",
            title: "浏览记录",
            icon: require('@/assets/image/icon_other_6_24@2x.png'),
          },
        ],
      }
    },
    methods: {},
    mounted() {}
  }
</script>

<style scoped>
  .view {
    width: 100%;
    min-height: 100vh;
    padding-bottom: 17vw;
    box-sizing: border-box;
    background-color: #F8F8F8;
  }

  .topNav {
    width: 100%;
    height: auto;
    padding-bottom: 3vw;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    background-color: white;
  }

  .user{
    width: 100%;
    height: 18vw;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    margin: 2.5vw 0;
    padding: 0 3.2vw;
    box-sizing: border-box;
  }

  .userIcon{
    width: 16vw;
    height: 16vw;
    display: block;
    border-radius: 50%;
  }

  .userType{
    flex: 1;
    height: 100%;
    padding-left: 3vw;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    position: relative;
  }

  .userName{
    font-size: 4.5vw;
    font-weight: bold;
    color: #666666;
    margin-bottom: 0.5vw;
  }

  .userGrade{
    width: 18vw;
    height: 6vw;
    background-image: url("../assets/image/icon_vip1@2x.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center center;
  }

  .vip1{
    background-image: url("../assets/image/icon_vip1@2x.png");
  }

  .vip2{
    background-image: url("../assets/image/icon_vip2@2x.png");
  }

  .vip3{
    background-image: url("../assets/image/icon_vip3@2x.png");
  }

  .userSet{
    width: 10vw;
    height: 10vw;
    background-image: url("../assets/image/icon_setting_24_black@2x.png");
    background-size: 7vw 7vw;
    background-repeat: no-repeat;
    background-position: center center;
    position: absolute;
    top:22%;
    right:0
  }

  .assets {
    width: calc(100vw - 6.4vw);
    height: 34vw;
    margin: 0 3.2vw;
    background-image: url("../assets/image/special_bg_mine3@2x.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center center;
  }

  .assetsTop {
    width: 100%;
    height: 13vw;
    padding: 0 3.2vw;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
  }

  .assetsTopTitle {
    font-size: 4vw;
    font-weight: bold;
    color: #333333;
  }

  .assetsTopIcon {
    width: 10vw;
    height: 100%;
    background-image: url("../assets/image/icon_go_22_grey@2x.png");
    background-size: 8vw 8vw;
    background-repeat: no-repeat;
    background-position: center right;
  }

  .assetsBottom {
    width: 100%;
    height: 15.47vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
  }

  .assetsBottomItem {
    flex: 1;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .assetsBottomItemPrice {
    font-size: 5.33vw;
    font-weight: bold;
    color: #CF5700;
    text-align: center;
  }

  .assetsBottomItemText {
    font-size: 3.47vw;
    font-weight: 400;
    color: #666666;
    text-align: center;
  }

  .common {
    width: calc(100% - 6.4vw);
    height: auto;
    margin: 2.67vw 3.2vw 0 3.2vw;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    background-color: white;
    border-radius: 1.07vw
  }

  .commonTitle {
    width: 100%;
    height: 11vw;
    font-size: 4vw;
    font-weight: bold;
    color: #333333;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 4vw;
    box-sizing: border-box;
  }

  .commonList {
    width: 100%;
    height: auto;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .commonItem {
    width: 25%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 1.5vw 0 3vw 0;
  }

  .commonItemText {
    font-size: 3.8vw;
    font-weight: 400;
    color: #666666;
    margin-top: 1vw;
  }
</style>
