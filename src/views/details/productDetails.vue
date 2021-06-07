<template>
  <div class="view">
    <div class="topIcon">
      <img class="leftIcon" src="../../assets/image/btn_back_24_black_cicle@2x.png" alt="" @click="$router.back()">
      <div class="rightIcon">
        <img class="rightIcon1" src="../../assets/image/icon_shoppingcard_24_circle@2x.png"
             @click="$router.push('/shoppingCart')" alt="">
        <img class="rightIcon2" src="../../assets/image/icon_share_24_circle_gray@2x.png" alt="">
      </div>
    </div>

    <van-swipe class="swipe" :autoplay="2000" @change="onChange">
      <van-swipe-item class="swipe-item">
        <img class="swipe-item-image" src="../../assets/image/details@2x.png" alt="">
      </van-swipe-item>
      <van-swipe-item class="swipe-item">
        <img class="swipe-item-image" src="../../assets/image/details@2x.png" alt="">
      </van-swipe-item>
      <van-swipe-item class="swipe-item">
        <img class="swipe-item-image" src="../../assets/image/details@2x.png" alt="">
      </van-swipe-item>
      <van-swipe-item class="swipe-item">
        <img class="swipe-item-image" src="../../assets/image/details@2x.png" alt="">
      </van-swipe-item>
      <template #indicator>
        <div class="custom-indicator">
          {{ current + 1 }}/4
        </div>
      </template>
    </van-swipe>

    <div class="specification">
      <div class="specification-top">
        <div class="specification-type">完美日记星动臻色金钻唇膏小金钻大口红推荐女学生款</div>
        <div class="specification-price">
          <p class="specification-price-name">零售价</p>
          <p class="specification-price-num"><span class="specification-price-symbol">¥</span>150</p>
        </div>
      </div>
    </div>

    <div class="parameter">
      <div class="parameter-row" @click="onSpecificationShow">
        <p class="parameter-row-name">规格</p>
        <p class="parameter-row-sky" v-show="!typeObj.color">请选择规格</p>
        <p class="parameter-row-sky" v-show="typeObj.color"><span>颜色：{{typeObj.color}}</span>
          <span>尺寸：{{typeObj.size}}</span> <span>数量：{{typeObj.value}}</span></p>
        <p class="parameter-row-to"></p>
      </div>
    </div>

    <div class="comment">
      <div class="comment-top">
        <p class="comment-top-num">宝贝评论（22条）</p>
        <p class="comment-top-all" @click="$router.push('/productReviews')">查看全部<span class="comment-top-go"></span></p>
      </div>
      <cpGlobalComment v-for="(item,index) in 3" :key="index"/>
    </div>

    <div class="detailsImage">
      <p class="detailsImage-title">——— 宝贝详情 ———</p>
      <img class="detailsImage-image" src="../../assets/image/details@2x.png" alt="">
      <img class="detailsImage-image" src="../../assets/image/details@2x.png" alt="">
      <img class="detailsImage-image" src="../../assets/image/details@2x.png" alt="">
      <img class="detailsImage-image" src="../../assets/image/details@2x.png" alt="">
    </div>

    <div class="end">- 到底啦 -</div>

    <div class="bottomBar">
      <van-goods-action>
        <van-goods-action-icon :icon="tabStar?'star':'star-o'" :text="tabStar?'已收藏':'收藏'" color="#ff5000"
                               @click="onStar"/>
        <van-goods-action-icon icon="chat-o" text="客服" color="#07c160"/>
        <van-goods-action-button type="warning" @click="onSpecificationShow" text="加入购物车"/>
        <van-goods-action-button type="danger" text="立即购买" @click="toConfirmOrder"/>
      </van-goods-action>
    </div>

    <van-action-sheet v-model="specification" @select="onSpecificationHide">
      <div class="onSpecification">
        <div class="onSpecification-top">
          <img class="onSpecification-top-image" src="../../assets/image/image.png" alt="">
          <div class="onSpecification-top-type">
            <p class="onSpecification-top-type-price"><span class="onSpecification-top-type-symbol">￥</span>150</p>
            <p class="onSpecification-top-type-num">库存10000件</p>
            <p class="onSpecification-top-type-class">请选择颜色分类/尺码</p>
          </div>
        </div>
        <div class="row">
          <div class="row-ber">
            <p class="row-title">选择颜色</p>
          </div>
          <div class="row-data">
            <template v-for="(item,index) in popular1Arr">
              <p class="row-data-text" :class="popularIndex1 === index?'textAction':''"
                 @click="changeIndex('color',index)" :key="index">
                {{item}}</p>
            </template>
          </div>
        </div>
        <div class="row">
          <div class="row-ber">
            <p class="row-title">选择尺寸</p>
          </div>
          <div class="row-data">
            <template v-for="(item,index) in popular2Arr">
              <p class="row-data-text" :class="popularIndex2 === index?'textAction':''"
                 @click="changeIndex('size',index)" :key="index">
                {{item}}</p>
            </template>
          </div>
        </div>
        <div class="row-row">
          <p class="row-row-title">选择尺寸</p>
          <van-stepper v-model="value" disable-input/>
        </div>
        <div class="add">
          <p class="add-class" @click="addCart">加入购物车</p>
          <p class="add-immediately" @click="shopCart">立即购买</p>
        </div>
      </div>
    </van-action-sheet>
  </div>
</template>

<script>
  import {Swipe, SwipeItem, GoodsAction, GoodsActionIcon, GoodsActionButton, ActionSheet, Stepper} from 'vant';

  export default {
    name: "productDetails",
    components: {
      'van-Swipe': Swipe,
      'van-swipe-item': SwipeItem,
      'van-goods-action': GoodsAction,
      'van-goods-action-icon': GoodsActionIcon,
      'van-goods-action-button': GoodsActionButton,
      'van-action-sheet': ActionSheet,
      'van-stepper': Stepper,
    },
    data() {
      return {
        current: 0,
        tabStar: true,
        specification: false,
        parameter: false,
        popularIndex: '',
        value: 1,
        imageArr: [],
        popular1Arr: ["美妆", "美容", "美妆", "美妆", "美容", "超值宝贝",],
        popular2Arr: ["超值宝贝", "美容", "美妆", "美妆", "美妆", "美容",],
        popularIndex1: 0,
        popularIndex2: 0,
        frequency: 0,
        typeObj: {
          color: "",
          size: "",
          value: 1,
        },
      }
    },
    methods: {
      onChange(index) {
        this.current = index;
      },

      onStar() {
        this.tabStar = !this.tabStar
      },

      onSpecificationShow() {
        this.specification = true;
      },

      onSpecificationHide(item) {
        this.specification = false;
      },

      changeIndex(type, index) {
        if (type === 'color') {
          this.popularIndex1 = index;
        } else {
          this.popularIndex2 = index
        }
      },

      toConfirmOrder() {
        this.$router.push('/confirmOrder');
      },

      addCart() {
        let {popularIndex1, popularIndex2, value, popular1Arr, popular2Arr} = this;
        let popular1 = popular1Arr[popularIndex1];
        let popular2 = popular2Arr[popularIndex2];
        this.typeObj = {
          color: popular1,
          size: popular2,
          value: value,
        };
        this.specification = false;
      },

      shopCart() {

      },
    },
  }
</script>

<style scoped>
  .view {
    width: 100%;
    min-height: 100vh;
    padding-bottom: 13vw;
    background-color: #f8f8f8;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
  }

  .topIcon {
    width: 100%;
    /*height: 6vw;*/
    padding: 0 3.2vw;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    position: fixed;
    top: 24px;
    left: 0;
    z-index: 999;
  }

  .leftIcon {
    width: 6.4vw;
    height: 6.4vw;
    display: block;
  }

  .rightIcon {
    width: auto;
    height: auto;
    display: flex;
    flex-direction: row;
  }

  .rightIcon1, .rightIcon2 {
    width: 6.4vw;
    height: 6.4vw;
    display: block;
  }

  .rightIcon2 {
    margin-left: 12px;
  }

  .custom-indicator {
    position: absolute;
    right: 5px;
    bottom: 5px;
    padding: 2px 5px;
    font-size: 12px;
    background: rgba(0, 0, 0, 0.1);
  }

  .swipe {
    width: 100%;
    height: 100vw;
  }

  .swipe-item {
    width: 100%;
    height: 100%;
  }

  .swipe-item-image {
    width: 100%;
    height: 100%;
  }

  .specification {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    background-color: #FFFFFF;
    margin-bottom: 10px;
  }

  .specification-top {
    width: 100%;
    padding: 3.2vw;
    box-sizing: border-box;
    height: auto;
    display: flex;
    flex-direction: column;
    /*border-bottom: 0.5vw solid #eeeeee;*/
  }

  .specification-type {
    width: 100%;
    height: auto;
    font-size: 4.5vw;
    font-weight: bold;
    color: rgba(51, 51, 51, 1);
    /*margin: 5px 0 10px 0;*/
  }

  .specification-price {
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
  }

  .specification-price-name {
    font-size: 3.8vw;
    font-weight: 500;
    color: rgba(153, 153, 153, 1);
    margin-right: 3.2vw;
  }

  .specification-price-num {
    font-size: 4.5vw;
    font-weight: bold;
    color: rgba(255, 48, 58, 1);
  }

  .specification-price-symbol {
    font-size: 1vw;
    font-weight: 500;
    color: rgba(255, 48, 58, 1);
  }

  .parameter {
    width: 100%;
    height: auto;
    padding: 0 12px;
    box-sizing: border-box;
    background-color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 10px;
  }

  .parameter-row {
    width: 100%;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
  }

  .parameter-row-name {
    font-size: 14px;
    font-weight: 500;
    color: rgba(153, 153, 153, 1);
    margin-right: 26px;
  }

  .parameter-row-sky {
    flex: 1;
    font-size: 14px;
    font-weight: 400;
    color: #666666;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    -webkit-box-align: start;
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }

  .parameter-row-to {
    width: 6vw;
    height: 6vw;
    background-image: url("../../assets/image/icon_go_22_gray@2x.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: center center;
  }

  .comment {
    width: 100%;
    height: auto;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    background-color: #FFFFFF;
    margin-bottom: 10px;
  }

  .comment-top {
    width: 100%;
    padding: 0 3.2vw;
    margin-top: 3.2vw;
    box-sizing: border-box;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
  }

  .comment-top-num {
    font-size: 15px;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
  }

  .comment-top-all {
    font-size: 12px;
    font-weight: 400;
    color: rgba(153, 153, 153, 1);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
  }

  .comment-top-go {
    width: 6.4vw;
    height: 6.4vw;
    display: inline-block;
    background-image: url("../../assets/image/icon_go_22_gray@2x.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: center center;
  }


  .detailsImage {
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .detailsImage-title {
    width: 100%;
    height: 40px;
    font-size: 14px;
    font-weight: 500;
    color: rgba(153, 153, 153, 1);
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #FFFFFF;
  }

  .detailsImage-image {
    width: 100%;
  }

  .end {
    width: 100%;
    height: 13vw;
    font-size: 3.84vw;
    font-weight: 400;
    color: rgba(153, 153, 153, 1);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .onSpecification {
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #FFFFFF;
    /*padding: 0 12px;*/
  }

  .onSpecification-top {
    width: 100%;
    height: auto;
    margin: 3.2vw 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    padding: 0 3.2vw;
    box-sizing: border-box;
  }

  .onSpecification-top-image {
    width: 24vw;
    height: 24vw;
    display: block;
    margin-right: 3.2vw;
  }

  .onSpecification-top-type {
    flex: 1;
    height: 24vw;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .onSpecification-top-type p {
    width: 100%;
    text-align: left;
  }

  .onSpecification-top-type-price {
    font-size: 5vw;
    font-weight: bold;
    color: rgba(255, 48, 58, 1);
  }

  .onSpecification-top-type-symbol {
    font-size: 3.6vw;
    font-weight: 500;
    color: rgba(255, 48, 58, 1);
  }

  .onSpecification-top-type-num {
    font-size: 3.84vw;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
    margin-top: 1vw;
    margin-bottom: 1.1vw;
  }

  .onSpecification-top-type-class {
    font-size: 3.6vw;
    font-weight: 400;
    color: rgba(153, 153, 153, 1);
  }

  .row {
    width: 100%;
    height: auto;
    padding: 0 3.2vw;
    box-sizing: border-box;
  }

  .row-row {
    width: 100%;
    height: auto;
    padding: 0 3.2vw;
    margin-top: 1vw;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .row-row-title {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
    font-size: 4.2vw;
    font-weight: bold;
    color: rgba(51, 51, 51, 1);
  }

  .row-ber {
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .row-title {
    width: 100%;
    height: 6vw;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
    font-size: 4.2vw;
    font-weight: bold;
    color: rgba(51, 51, 51, 1);
    margin: 2vw 0 3.2vw 0;;
  }

  .row-data {
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
  }

  .row-data-text {
    width: auto;
    height: 7.5vw;
    padding: 0 3.5vw;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(248, 248, 248, 1);
    border-radius: 14px;
    font-size: 3.8vw;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
    border: 0.1vw solid transparent;
    margin-right: 3.2vw;
    margin-bottom: 3.2vw;
  }

  .textAction {
    color: #FF4E56;
    background: rgba(255, 235, 236, 1);
    border: 0.1vw solid rgba(255, 48, 58, 1)
  }

  .add {
    width: 100%;
    height: 15vw;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: row;
    margin: 3.2vw 0;
    padding: 0 3.2vw;
    box-sizing: border-box;
  }

  .add-class {
    width: 32vw;
    height: 10vw;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 4.3vw;
    font-weight: 400;
    color: rgba(255, 78, 86, 1);
    border-radius: 30vw;
    border: 0.1vw solid rgba(255, 48, 58, 1);
  }

  .add-immediately {
    width: 32vw;
    height: 10vw;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 4.3vw;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    border-radius: 30vw;
    margin-left: 3vw;
    background: linear-gradient(308deg, rgba(255, 48, 58, 1) 0%, rgba(255, 121, 0, 1) 100%);
  }


  .bottomBar {
    width: 100%;
    height: 14vw;
    /*padding: 0 3.2vw;*/
    /*box-sizing: border-box;*/
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 9;
    background-color: white;
  }
</style>
