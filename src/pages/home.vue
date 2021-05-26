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

    <div class="modelView">
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

      <div class="discount">
        <img class="discount-img" :src="discount.image" alt="">
        <div class="discount-box">
          <div class="discount-left" @click="$router.push('/spike')">
            <p>{{discount.left[0].region}}</p>
            <p>{{discount.left[0].timeLimit}}</p>
            <van-count-down millisecond :time="discount.left[0].time" format="HH:mm:ss" class="time"/>
            <img :src="discount.left[0].image" alt="">
            <p>￥{{discount.left[0].price}}</p>
          </div>
          <div class="discount-right">
            <template v-for="item in discount.right">
              <div class="discount-view" :style="`backgroundImage:url(${item.bgImage})`">
                <p>{{item.title}}</p>
                <p>{{item.discount}}</p>
                <p>￥{{item.preferentialPrice}}</p>
                <p>￥{{item.originalPrice}}</p>
              </div>
            </template>
          </div>
        </div>
      </div>

      <div class="today">
        <div class="today-left">
          <div class="today-left-top">
            <p class="top-title1">今日推荐</p>
            <p class="top-title2">今日推荐特区</p>
            <p class="top-title3"></p>
          </div>
          <div class="today-left-center">
            <img class="today-left-center-image" src="../assets/image/106b97ecaf43bc97.jpg" alt="">
            <p class="today-left-center-bg">¥19.00</p>
          </div>
          <div class="today-left-bottom">
            <p class="bottom-title1">进口山竹 500g</p>
            <p class="bottom-title2">今日份的新鲜</p>
          </div>
        </div>
        <div class="today-right">
          <div class="today-right-set">
            <div class="set-top">
              <p class="set-top-title">正宗小龙虾</p>
              <p class="set-top-text">鲜活秒杀</p>
            </div>
            <div class="set-image">
              <img class="set-image-img" src="../assets/image/5ae422c8N81829b22.jpg" alt="">
            </div>
            <p class="set-text">限量500份</p>
          </div>

          <div class="today-right-set">
            <div class="set-top">
              <p class="set-top-title">绿色有机紫薯</p>
              <p class="set-top-text">有机认证</p>
            </div>
            <div class="set-image">
              <img class="set-image-img" src="../assets/image/59b92e63Nde7029ce.jpg" alt="">
            </div>
            <p class="set-text">秒杀9元/500g</p>
          </div>
        </div>
      </div>

      <div class="activity">
        <img class="activity-left" src="../assets/image/special_pic_home1@2x.png" alt="">
        <img class="activity-right" src="../assets/image/special_pic_home2@2x.png" alt="">
      </div>

      <div class="NearbyBusinesses">
        <div class="all-top">
          <p class="add-top-merchant">附近商家</p>
          <p class="add-top-add">更多优惠 <span class="add-top-add-go"></span></p>
        </div>
        <div class="NearbyBusinesses-set">
          <ul class="NearbyBusinesses-set-item">
            <li class="NearbyBusinesses-set-item-index" v-for="(item,index) in businesses" :key="index">
              <img :src="item.image" class="index-left-image" alt="">
              <div class="index-right-box">
                <p class="index-right-box-title">{{item.title}}</p>
                <div class="index-right-box-center">
                  <div class="center-top">
                    <p class="center-top-num">
                      <span class="center-top-num-length" :style="{width:item.length}"></span>
                    </p>
                    <p class="center-top-text">{{item.sold}}</p>
                  </div>
                  <div class="center-bottom">
                    <div class="center-bottom-money">
                      <p class="money-key1">¥<span class="money-value1">{{item.discountPrice}}</span></p>
                      <p class="money-key2">¥<span class="money-value2">{{item.originalPrice}}</span></p>
                    </div>
                    <p class="center-bottom-addShop">{{item.panicBuying}}</p>
                  </div>
                </div>
                <div class="index-right-box-footer">
                  <p class="footer-address">{{item.address}}</p>
                  <p class="footer-distance">{{item.distance}}</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="newShop">
        <div class="classTitle" style="margin-top: 3vw;">新品上架</div>
        <ul class="newShopList">
          <li class="newShopItem" v-for="(item,index) in newProducts" :key="index">
            <img class="newShopItemImage" :src="item.image" alt="">
            <p class="newShopItemTitle">{{item.title}}</p>
            <p class="newShopItemPrice">¥{{item.price}}</p>
          </li>
        </ul>
      </div>

      <div class="classTitle">精品推荐</div>
      <ul class="list">
        <li class="items" v-for="(index) in 7" :key="index" @click="$router.push(`/productDetails`)">
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
        announcement:[
          '2015最新秒杀商品将在今天10:00开始，敬请期待~',
          '2016最新秒杀商品将在今天10:00开始，敬请期待~',
          '2017最新秒杀商品将在今天10:00开始，敬请期待~',
          '2018最新秒杀商品将在今天10:00开始，敬请期待~',
          '2019最新秒杀商品将在今天10:00开始，敬请期待~',
          '2020最新秒杀商品将在今天10:00开始，敬请期待~',
        ],
        discount: {
          "image": require('@/assets/image/shuiguodazhetu.png'),
          "left": [
            {
              "region": "秒杀专区",
              "timeLimit": "限时抢购",
              "time": 60 * 60 * 60 * 1000,
              "image": require('@/assets/image/home-xiyiji.jpg'),
              "price": "999",
            },
          ],
          "right": [
            {
              "title": "生猛海鲜",
              "discount": "优惠打折",
              "bgImage": require('@/assets/image/5b8ce77eNec36944e.jpg'),
              "preferentialPrice": "80",
              "originalPrice": "120",
            },
            {
              "title": "季节时令",
              "discount": "优惠打折",
              "bgImage": require('@/assets/image/5af1c50bNfd569ea7.jpg'),
              "preferentialPrice": "70",
              "originalPrice": "50",
            },
            {
              "title": "儿童启蒙",
              "discount": "优惠打折",
              "bgImage": require('@/assets/image/hong_discount_right_1.jpg'),
              "preferentialPrice": "120",
              "originalPrice": "160",
            },
            {
              "title": "健康蔬菜",
              "discount": "优惠打折",
              "bgImage": require('@/assets/image/59b92e63Nde7029ce.jpg'),
              "preferentialPrice": "15",
              "originalPrice": "30",
            },
          ],
        },
        businesses:[
          {
            image:require('@/assets/image/97cfdfe73e1ae0e4.jpg'),
            title:'麻辣江湖小龙虾旗舰店',
            length:'40%',
            sold:'已售895',
            discountPrice:'65.5',
            originalPrice:'88.9',
            panicBuying:'马上抢购',
            address:'广州海珠区客村丽影广场',
            distance:'800m',
          },
          {
            image:require('@/assets/image/Wuyang.jpg'),
            title:'广州五羊冰淇淋旗舰店',
            length:'40%',
            sold:'已售302533',
            discountPrice:'35',
            originalPrice:'70',
            panicBuying:'马上抢购',
            address:'广东省广州市番禺区富怡路265号',
            distance:'20km',
          },
          {
            image:require('@/assets/image/fenxiang.png'),
            title:'养生素食馆',
            length:'70%',
            sold:'已售1349',
            discountPrice:'55',
            originalPrice:'80',
            panicBuying:'马上抢购',
            address:'番禺区汉溪长隆G出口美食城',
            distance:'17km',
          }
        ],
        newProducts:[
          {
            image:require('@/assets/image/class5.png'),
            title:'新鲜鸡蛋',
            price:'0.7',
          },
          {
            image:require('@/assets/image/class6.png'),
            title:'现切牛肉',
            price:'40',
          },
          {
            image:require('@/assets/image/class7.png'),
            title:'苹果',
            price:'6',
          },
          {
            image:require('@/assets/image/class8.png'),
            title:'葡萄',
            price:'12',
          },
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
    height: 100%;
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

  .modelView{
    width: 100%;
    height: calc(100vh - 11.53vw - 11vw);
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    overflow: scroll;
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
    height: 10vw;
    margin-top: 3vw;
    padding: 0 3.2vw;
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
    /*background-color: #F8F8F8;*/
  }

  .publicity-left {
    width: 10vw;
    height: 6vw;
    margin-right: 1vw;
    background-image: url("../assets/image/special_modify_notice_20@2x.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center center;
  }

  .publicity-swipe {
    flex: 1;
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
    padding: 3.2vw;
    margin-top: 3vw;
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
    margin-top: 3vw;
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
    margin-bottom: 13vw;
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








  .discount {
    width: 100%;
    height: auto;
    /*margin-top: 15px;*/
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
  }

  .discount-img {
    width: 100%;
    height: 27vw;
  }

  .discount-box {
    width: 100%;
    height: 50vw;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .discount-left {
    flex: 1.3;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
  }

  .time {
    font-size: 12px;
    color: #4077FF;
  }

  .discount-left p {
    width: 100%;
    height: 5vw;
    font-size: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .discount-left p:nth-child(1) {
    font-size: 12px;
  }

  .discount-left img {
    width: 80%;
    height: 40%;
    margin: 5px;
  }

  .discount-left p:last-child {
    color: red;
    font-size: 12px;
  }

  .discount-right {
    flex: 3;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

  }

  .discount-view {
    width: 50%;
    height: 50%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: center;
    background-size: 14vw 14vw;
    background-repeat: no-repeat;
    background-position: 90% center;
    border-left: 0.5px solid #eeeeee;
    border-bottom: 0.5px solid #eeeeee;
  }

  .discount-view:nth-child(2), .discount-view:nth-child(4) {
    border-bottom: none;
  }

  .discount-view p {
    padding-left: 2.5vw;
    height: 4vw;
    font-size: 10px;
    color: #333333;
    margin-top: 2.5px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  .discount-view p:nth-child(3) {
    color: red;
    font-size: 12px;
  }

  .discount-view p:nth-child(4) {
    color: #CCCCCC;
    font-size: 10px;
    text-decoration: line-through;
  }

  .discount-view p:nth-child(1) {
    font-size: 12px;
  }




  .today{
    width: 100%;
    margin-top: 3vw;
    height: 50vw;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
  }

  .today-left {
    width: 50%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    position: relative;
    align-items: center;
    justify-content: center;
    border-right: 0.5pt solid #f8f8f8;
  }

  .today-left-top {
    flex: 1;
    height: 11vw;
    margin-left: 7%;
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
  }

  .top-title1{
    width: 100%;
    color: #2AC845;
    font-size: 15px;
    font-weight: bold;
  }

  .top-title2{
    width: 100%;
    color: #A6A8B6;
    font-size: 12px;
  }

  .top-title3{
    width: 15vw;
    height: 15vw;
    position: absolute;
    top: 0;
    right: 0;
    background-image: url("../assets/image/cakes.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center center;
  }

  .today-left-center {
    width: 90%;
    height: 23vw;
    margin: 0 5%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .today-left-center-image{
    width: 50%;
    height: 21vw;
  }

  .today-left-center-bg{
    width: 15vw;
    height: 15vw;
    border-radius: 50%;
    background-color: #2AC845;
    font-size: 12px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .today-left-bottom {
    flex: 1;
    height: 11vw;
    margin-left: 7%;
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
  }

  .bottom-title1{
    width: 100%;
    font-size: 13px;
    color: #333333;
  }

  .bottom-title2{
    width: 100%;
    color: #A6A8B6;
    font-size: 12px;
  }

  .today-right {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    box-sizing: border-box;
  }

  .today-right-set {
    width: 100%;
    height: 50%;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }

  .today-right-set:nth-child(1){
    border-bottom: 0.5pt solid #f8f8f8;
  }

  .set-image {
    width: 50%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .set-image-img{
    width: 80%;
    height: 80%;
  }

  .set-text{
    color: white;
    font-size: 10px;
    padding: 2px 7px;
    border-radius: 20px;
    background-color: brown;
    position: absolute;
    bottom: 10px;
    left:10px;
  }

  .set-top {
    flex: 1;
    height: 90%;
    padding-top: 5%;
    padding-left: 5%;
    z-index: 1;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: flex-start;
  }

  .set-top-title{
    width: auto;
    height: 20px;
    font-size: 14px;
    color: #666666;
  }

  .set-top-text{
    width: 100%;
    height: 15px;
    color: #A6A8B6;
    font-size: 10px;
  }

  .set-image {
    width: 50%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }


  .NearbyBusinesses {
    width: 100%;
    margin-top: 3vw;
    height: auto;
    background-color: white;
  }

  .all-top {
    flex: 1;
    padding: 0 3%;
    height: 10vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 0.5pt solid #f8f8f8;
  }

  .add-top-merchant{
    width: auto;
    height: 100%;
    font-size: 15px;
    color: #333333;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .add-top-add {
    width: auto;
    height: 100%;
    font-size: 12px;
    color: #6d6d72;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .add-top-add-go{
    width: 15px;
    height: 100%;
    display: inline-block;
    background-image: url("../assets/image/icon_go_22_gray@2x.png");
    background-size: 15px 15px;
    background-repeat: no-repeat;
    background-position: center center;
  }

  .NearbyBusinesses-set {
    flex: 1;
    padding: 0 3%;
  }

  .NearbyBusinesses-set-item {
    width: 100%;
    height: auto;
    list-style: none;
  }

  .NearbyBusinesses-set-item-index {
    width: 100%;
    height: 30vw;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 0.5pt solid #f8f8f8;
  }

  .index-left-image{
    width: 29%;
    height: 85%;
    margin: 2.5% 3% 2.5% 0;
  }

  .index-right-box {
    flex: 1;
    height: 85%;
    margin: 2.5% 0;
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
    justify-content: center;
  }

  .index-right-box-title{
    flex: 1;
    font-size: 14px;
    color: #333333;
  }

  .index-right-box-center {
    width: 100%;
    height: auto;
  }

  .center-top {
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  .center-top-num {
    width: 40%;
    height: 6px;
    background-color: #FFc000;
    margin-right: 5%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-radius: 10px;
  }

  .center-top-num-length{
    width: 80%;
    height: 6px;
    display: inline-block;
    background-color: red;
    border-radius: 10px;
  }

  .center-top-text{
    width: auto;
    font-size: 12px;
    color: #6d6d72;
  }

  .center-bottom {
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .center-bottom-money {
    width: auto;
    display: flex;
    align-items: flex-end;
    justify-content: center;
  }

  .money-key1 {
    font-size: 10px;
    color: red;
    margin-right: 10px;
  }

  .money-value1{
    font-size: 16px;
    color: red;
  }

  .money-key2 {
    font-size: 10px;
    color: #6d6d72;
    /*text-decoration: line-through;*/
  }

  .money-value2{
    font-size: 13px;
    color: #6d6d72;
  }

  .center-bottom-addShop{
    padding: 5px 10px;
    background-color: red;
    font-size: 12px;
    color: white;
    border-radius: 20px;
  }

  .index-right-box-footer {
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .footer-address{
    width: auto;
    font-size: 12px;
    color: #6d6d72;
  }

  .footer-distance{
    width: auto;
    font-size: 12px;
    color: #6d6d72;
  }

  .NearbyBusinesses-set-item-index:last-child{
    border-bottom:none;
  }

</style>
