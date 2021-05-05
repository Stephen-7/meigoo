<template>
  <div class="view">
    <cpGlobalSearch :searchType="'toSearch'">
      <template v-slot:shoppingCart>
        <div class="searchType" @click="$router.push('/shoppingCart')">
          <img class="img" src="../assets/image/icon_shoppingcar_24_circle_gray@2x.png" alt="">
        </div>
      </template>
      <template v-slot:news>
        <div class="searchType" @click="$router.push('/eventNews')">
          <img class="img" src="../assets/image/icon_message_24_black@2x.png" alt="">
        </div>
      </template>
    </cpGlobalSearch>

    <div class="classification">
      <p class="classificationType" :class="{'classificationAction':classIndex === index}"
         @click="tabIndex(index)" v-for="(item,index) in classificationArr" :key="index">{{item.title}}</p>
      <p class="classificationIcon" @click="$router.push('/classification')"></p>
    </div>

    <div class="swiper">
      <van-swipe class="my-swipe" :autoplay="2000" indicator-color="white">
        <van-swipe-item v-for="(item,index) in swiperArr" :key="index"><img class="swipeImg" :src="item.image" alt="">
        </van-swipe-item>
      </van-swipe>
    </div>

    <div class="grid">
      <van-grid :column-num="4" icon-size="46px" :border="false">
        <van-grid-item v-for="(classItem,index) in classArr" :key="index" :icon="classItem.icon"
                       :text="classItem.title"/>
      </van-grid>
    </div>

    <div class="publicity">
      <div class="publicity-view">
        <p class="publicity-left"></p>
        <van-swipe class="publicity-swipe" :autoplay="2000" :show-indicators="false" vertical>
          <van-swipe-item class="publicity-swipe-item" v-for="(item,index) in newsArr" :key="index">{{item.title}}
          </van-swipe-item>
        </van-swipe>
        <p class="publicity-right"></p>
      </div>
    </div>

    <div class="activity">
      <img class="activity-left" src="../assets/image/special_pic_home1@2x.png" alt="">
      <img class="activity-right" src="../assets/image/special_pic_home2@2x.png" alt="">
    </div>

    <div class="newShop">
      <div class="classTitle" style="margin-top: 3vw;">新品上架</div>
      <ul class="newShopList">
        <li class="newShopItem" v-for="(index) in 4" :key="index">
          <img class="newShopItemImage" src="../assets/image/class2.png" alt="">
          <p class="newShopItemTitle">德国原装进德国原装进</p>
          <p class="newShopItemPrice">¥192</p>
        </li>
      </ul>
    </div>

    <div class="classTitle">精品推荐</div>
    <ul class="list">
      <li class="items" v-for="(index) in 7" :key="index" @click="$router.push(`/details?id=${12}`)">
        <img class="itemsImage" src="../assets/image/class1.png" alt="">
        <div class="itemsType">
          <p class="itemsTitle">智能自动机器人扫地智能自动机器人扫地</p>
          <p class="itemsPrice">¥326.3</p>
          <p class="itemsNum">已售 23897件</p>
        </div>
      </li>
      <li class="itemsHd">- 到底啦 -</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "home",
    data() {
      return {
        classIndex: 0,
        classificationArr: [
          {
            id: 1,
            title: "首页",
          },
          {
            id: 2,
            title: "百货",
          },
          {
            id: 3,
            title: "手机",
          },
          {
            id: 4,
            title: "电脑",
          },
          {
            id: 5,
            title: "女装",
          },
          {
            id: 6,
            title: "鞋子",
          },
        ],
        swiperArr: [
          {
            id: 1,
            image: require('@/assets/image/special_home_banner@2x.png'),
          },
          {
            id: 2,
            image: require('@/assets/image/banner_home@2x.png'),
          },
          {
            id: 3,
            image: require('@/assets/image/special_minebanner1@2x.png'),
          },
          {
            id: 3,
            image: require('@/assets/image/special_shopbanner1@2x.png'),
          },
        ],
        classArr: [
          {
            id: 1,
            icon: require('@/assets/image/icon_kingkong1@2x.png'),
            title: "数码家电",
          },
          {
            id: 2,
            icon: require('@/assets/image/icon_kingkong2@2x.png'),
            title: "家具家私",
          },
          {
            id: 3,
            icon: require('@/assets/image/icon_kingkong3@2x.png'),
            title: "服装服饰",
          },
          {
            id: 4,
            icon: require('@/assets/image/icon_kingkong4@2x.png'),
            title: "美妆",
          },
          {
            id: 5,
            icon: require('@/assets/image/icon_kingkong5@2x.png'),
            title: "办公文具",
          },
          {
            id: 6,
            icon: require('@/assets/image/icon_kingkong6@2x.png'),
            title: "眼镜钟表",
          },
          {
            id: 7,
            icon: require('@/assets/image/icon_kingkong8@2x.png'),
            title: "洗护",
          },
          {
            id: 8,
            icon: require('@/assets/image/icon_kingkong7@2x.png'),
            title: "箱包",
          },
        ],
        newsArr: [
          {
            id: 1,
            title: "通知内容通知通知通知通知通知内容内容通知内容通知通知通知",
          },
          {
            id: 2,
            title: "你错过的，别人才会得到。正如你得到的都是别人错过的。",
          }
        ],
      }
    },
    methods: {
      tabIndex(index) {
        this.classIndex = index;
      },
    },
  }
</script>

<style scoped>
  .view {
    width: 100%;
    min-height: 100vh;
    background-color: #F8F8F8;
  }

  .classification {
    width: 100%;
    height: 10.67vw;
    padding: 2.13vw 3.2vw;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    background-color: white;
    border-top: 2.13vw solid white;
  }

  .classificationType {
    flex: 1.1;
    height: 10.67vw;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 3.73vw;
    font-weight: 400;
    color: #666666;
  }

  .classificationIcon {
    width: 7vw;
    height: 10.67vw;
    background-image: url("../assets/image/icon_item_24_black@2x.png");
    background-size: 7vw 7vw;
    background-repeat: no-repeat;
    background-position: center right;
  }

  .classificationAction {
    color: #333333;
    font-weight: bold;
  }

  .swiper {
    width: 100%;
    height: 38vw;
    padding: 3vw 3.2vw 0 3.2vw;
    box-sizing: border-box;
    background-color: white;
  }

  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 35vw;
    text-align: center;
    /*border-radius: 2vw;*/
  }

  .swipeImg {
    width: 100%;
    height: 35vw;
    display: block;
  }

  .grid {
    width: 100%;
    height: auto;
    padding: 3vw 3.2vw 0 3.2vw;
    box-sizing: border-box;
    background-color: white;
  }

  .publicity {
    width: 100%;
    height: 12vw;
    padding: 3vw 3.2vw 0 3.2vw;
    box-sizing: border-box;
    background-color: white;
  }

  .publicity-view {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    background-color: #F8F8F8;
  }

  .publicity-left {
    width: 8.37vw;
    height: 3.2vw;
    margin: 0 1vw 0 3.2vw;
    background-image: url("../assets/image/pic_notice_black@2x.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center center;
  }

  .publicity-swipe {
    width: 70.53vw;
    height: 5vw;
    line-height: 5vw;
  }

  .publicity-swipe-item {
    height: 5vw !important;
    line-height: 5vw;
    text-align: center;
    font-size: 3.73vw;
    font-weight: 400;
    color: #666666;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: break-word;
    white-space: normal !important;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }

  .publicity-right {
    width: 7.4vw;
    height: 100%;
    background-image: url("../assets/image/icon_go_22_gray@2x.png");
    background-size: 6vw 6vw;
    background-repeat: no-repeat;
    background-position: center center;
  }

  .activity {
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    padding: 5vw 3.2vw;
    box-sizing: border-box;
    background-color: white;
  }

  .activity-left {
    width: 45vw;
    height: 35vw;
    display: block;
  }

  .activity-right {
    width: 45vw;
    height: 35vw;
    display: block;
  }

  .classTitle {
    width: 100%;
    height: 10vw;
    font-size: 4.27vw;
    font-weight: bold;
    color: #333333;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url("../assets/image/icon_homebg_42@2x.png");
    background-size: 11.3vw 2.13vw;
    background-repeat: no-repeat;
    background-position: 40vw 6vw;
  }

  .newShop {
    width: 100%;
    height: 56.53vw;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    background-color: white;
    margin-top: 2.67vw;
    margin-bottom: 5vw;
    overflow: hidden;
  }

  .newShopList {
    width: 100%;
    height: auto;
    margin-top: 3.2vw;
    padding: 0 3.2vw !important;
    box-sizing: border-box;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: row;
    -webkit-overflow-scrolling: touch;
  }

  .newShopItem {
    width: 21.9vw;
    margin-right: 2vw;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
  }

  .newShopItemImage {
    width: 21.9vw;
    height: 21.9vw;
    display: block;
  }

  .newShopItemTitle {
    font-size: 3.47vw;
    font-weight: 400;
    color: #333333;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: break-word;
    white-space: normal !important;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    margin-top: 2vw;
  }

  .newShopItemPrice {
    font-size: 4.53vw;
    font-weight: 500;
    color: #FF4E56;
    margin-top: 1vw;
  }

  .list {
    width: 100%;
    height: auto;
    padding: 0 3.2vw 2vw 3.2vw !important;
    box-sizing: border-box;
    margin-bottom: 13.5vw;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .items {
    width: 45.33vw;
    /*height: 69.6rem;*/
    margin-top: 3.2vw;
    height: auto;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    background-color: white;
    border-radius: 1.07vw;
    overflow: hidden;
  }

  .itemsImage {
    width: 100%;
    height: 45.33vw;
    display: block;
  }

  .itemsType {
    width: 100%;
    height: 24.27vw;
    padding: 0 2.13vw;
    box-sizing: border-box;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
  }

  .itemsTitle {
    width: 100%;
    margin-bottom: 3vw;
    font-size: 4vw;
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

  .itemsPrice {
    font-size: 4.53vw;
    font-weight: 500;
    color: #FF4E56;
  }

  .itemsNum {
    font-size: 3.47vw;
    font-weight: 400;
    color: #999999
  }

  .itemsHd {
    width: 100%;
    height: 11.6vw;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3.47vw;
    font-weight: 400;
    color: #999999;
    margin-top: 2vw;
  }

</style>
