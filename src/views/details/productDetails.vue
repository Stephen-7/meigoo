<template>
  <div class="view">
    <div class="topIcon">
      <img class="leftIcon" src="../../assets/image/btn_back_24_black_cicle@2x.png" alt="" @click="$router.back()">
      <div class="rightIcon">
        <img class="rightIcon1" src="../../assets/image/icon_shoppingcard_24_circle@2x.png" @click="$router.push('/shoppingCart')" alt="">
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
          <p class="specification-price-num"><span class="specification-price-symbol">¥</span>500</p>
        </div>
      </div>
      <div class="specification-bottom">
        <p class="specification-bottom-name">批发价</p>
        <div class="specification-bottom-type">
          <div class="specification-bottom-type-box">
            <p class="specification-bottom-type-box-price"><span class="specification-bottom-type-box-symbol">¥</span>499.00
            </p>
            <p class="specification-bottom-type-box-num">1-500件</p>
          </div>
          <div class="specification-bottom-type-box">
            <p class="specification-bottom-type-box-price"><span class="specification-bottom-type-box-symbol">¥</span>499.00
            </p>
            <p class="specification-bottom-type-box-num">1-500件</p>
          </div>
          <div class="specification-bottom-type-box">
            <p class="specification-bottom-type-box-price"><span class="specification-bottom-type-box-symbol">¥</span>499.00
            </p>
            <p class="specification-bottom-type-box-num">1-500件</p>
          </div>
        </div>
      </div>
    </div>

    <div class="sales">
      <div class="sales-left">
        <p class="sales-left-local"><span class="sales-left-ship">发货</span>上海</p>
        <p class="sales-left-expressDelivery">快递：10.00元</p>
      </div>
      <div class="sales-right">月售5万+件</div>
    </div>

    <div class="parameter">
      <div class="parameter-row" @click="onSpecificationShow">
        <p class="parameter-row-name">规格</p>
        <p class="parameter-row-sky">请选择规格</p>
        <p class="parameter-row-to"></p>
      </div>
      <div class="parameter-row">
        <p class="parameter-row-name">参数</p>
        <p class="parameter-row-sky">品牌名，小金砖口红单品，产地品牌名，小金砖口红单品，品牌名，小金砖口红单品</p>
        <p class="parameter-row-to"></p>
      </div>
    </div>

    <div class="comment">
      <div class="comment-top">
        <p class="comment-top-num">宝贝评论（22条）</p>
        <p class="comment-top-all">查看全部<span class="comment-top-go"></span></p>
      </div>

      <div class="comment-content">
        <div class="comment-content-row">
          <div class="comment-content-row-left">
            <img class="comment-content-row-left-image" src="../../assets/image/icon_headprotrait_shop_40@2x.png" alt="">
            <p class="comment-content-row-left-name">Stephen</p>
          </div>
          <div class="comment-content-row-right">2小时前</div>
        </div>
        <p class="comment-content-text">语雀是一款优雅高效的在线文档编辑与协同工具， 让每个企业轻松拥有文档，语雀是一款优雅高效的在线文档编辑与协同工具，
          让每个企业轻松拥有文档语雀是一款优雅高效的在线文档编辑与协同工具， 让每个企业轻松拥有文档语雀是一款优雅高效的在线文档编辑与协同工具， 让每个企业轻松拥有文档语雀是一款优雅高效的在线文档编辑与协同工具，
          让每个企业轻松拥有文档</p>
        <div class="comment-content-image">
          <img class="comment-content-image-follow" src="../../assets/image/details@2x.png" alt="">
          <img class="comment-content-image-follow" src="../../assets/image/details@2x.png" alt="">
          <img class="comment-content-image-follow" src="../../assets/image/details@2x.png" alt="">
        </div>
      </div>
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
        <van-goods-action-icon :icon="tabStar?'star':'star-o'" :text="tabStar?'已收藏':'收藏'" color="#ff5000" @click="onStar"/>
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
        <div class="specification-bottom" style="border-bottom: 1px solid #eeeeee">
          <p class="specification-bottom-name">批发价</p>
          <div class="specification-bottom-type">
            <div class="specification-bottom-type-box">
              <p class="specification-bottom-type-box-price"><span class="specification-bottom-type-box-symbol">¥</span>499.00
              </p>
              <p class="specification-bottom-type-box-num">1-500件</p>
            </div>
            <div class="specification-bottom-type-box">
              <p class="specification-bottom-type-box-price"><span class="specification-bottom-type-box-symbol">¥</span>499.00
              </p>
              <p class="specification-bottom-type-box-num">1-500件</p>
            </div>
            <div class="specification-bottom-type-box">
              <p class="specification-bottom-type-box-price"><span class="specification-bottom-type-box-symbol">¥</span>499.00
              </p>
              <p class="specification-bottom-type-box-num">1-500件</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="row-ber">
            <p class="row-title">选择颜色</p>
          </div>
          <div class="row-data">
            <template v-for="(item,index) in popular">
              <p class="row-data-text" :class="popularIndex === index?'row-data-text-action':''" :key="index">
                {{item}}</p>
            </template>
          </div>
        </div>
        <div class="row">
          <div class="row-ber">
            <p class="row-title">选择尺寸</p>
          </div>
          <div class="row-data">
            <template v-for="(item,index) in popular">
              <p class="row-data-text" :class="popularIndex === index?'row-data-text-action':''" :key="index">
                {{item}}</p>
            </template>
          </div>
        </div>
        <div class="row-row">
          <p class="row-row-title">选择尺寸</p>
          <van-stepper v-model="value"/>
        </div>
        <div class="add">
          <p class="add-class">加入购物车</p>
          <p class="add-immediately">立即购买</p>
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
        popular: ["美妆", "美容", "美妆", "美妆", "美容", "超值宝贝",],
        value: 1,
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

      toConfirmOrder() {
        this.$router.push('/confirmOrder');
      }
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
    border-bottom: 0.5vw solid #eeeeee;
  }

  .specification-type {
    width: 100%;
    height: auto;
    font-size: 17px;
    font-weight: bold;
    color: rgba(51, 51, 51, 1);
    margin: 5px 0 10px 0;
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
    font-size: 14px;
    font-weight: 500;
    color: rgba(153, 153, 153, 1);
    margin-right: 12px;
  }

  .specification-price-num {
    font-size: 22px;
    font-weight: bold;
    color: rgba(255, 48, 58, 1);
  }

  .specification-price-symbol {
    font-size: 13px;
    font-weight: 500;
    color: rgba(255, 48, 58, 1);
  }

  .specification-bottom {
    width: 100%;
    padding: 12px;
    box-sizing: border-box;
    height: auto;
    display: flex;
    flex-direction: row;
  }

  .specification-bottom-name {
    font-size: 14px;
    font-weight: 500;
    color: rgba(153, 153, 153, 1);
    margin-right: 12px;
  }

  .specification-bottom-type {
    width: auto;
    height: auto;
    display: flex;
    align-items: flex-start;
    justify-items: flex-start;
    flex-direction: row;
  }

  .specification-bottom-type-box {
    width: auto;
    height: auto;
    display: flex;
    align-items: flex-start;
    justify-items: flex-start;
    flex-direction: column;
    margin-right: 35px;
  }

  .specification-bottom-type-box:last-child {
    margin-right: 0;
  }

  .specification-bottom-type-box-price {
    font-size: 14px;
    font-weight: 500;
    color: rgba(255, 48, 58, 1);
  }

  .specification-bottom-type-box-symbol {
    font-size: 13px;
    font-weight: 500;
    color: rgba(255, 48, 58, 1);
  }

  .specification-bottom-type-box-num {
    font-size: 12px;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
  }

  .sales {
    width: 100%;
    height: 45px;
    padding: 0 12px;
    box-sizing: border-box;
    background-color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    margin-bottom: 10px;
  }

  .sales-left {
    width: auto;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
  }

  .sales-left-local {
    font-size: 14px;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
    margin-right: 13px;
  }

  .sales-left-ship {
    font-size: 14px;
    font-weight: 500;
    color: rgba(153, 153, 153, 1);
    margin-right: 26px;
  }

  .sales-left-expressDelivery {
    font-size: 14px;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
    border-left: 1px solid #EEEEEE;
    padding-left: 13px;
  }

  .sales-right {
    font-size: 14px;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
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
    color: rgba(51, 51, 51, 1);
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
    width: 22px;
    height: 22px;
    /*background-image: url("../../assets/img/cart/icon_go_22_gray@2x.png");*/
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
    padding: 0 12px;
    margin-top: 12px;
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
    width: 22px;
    height: 22px;
    display: inline-block;
    /*background-image: url("../../assets/img/cart/icon_go_22_gray@2x.png");*/
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: center center;
  }

  .comment-content {
    width: 100%;
    margin-top: 10px;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-bottom: 1px solid #EEEEEE;
  }

  .comment-content:last-child {
    border-bottom: none;
  }

  .comment-content-row {
    width: 100%;
    height: 25px;
    padding: 0 12px;
    margin-bottom: 10px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
  }

  .comment-content-row-left {
    width: auto;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
  }

  .comment-content-row-left-image {
    width: 6.4vw;
    height: 6.4vw;
    display: block;
    margin-right: 1.3vw;
  }

  .comment-content-row-left-name {
    font-size: 3.4vw;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
  }

  .comment-content-row-right {
    font-size: 3.4vw;
    font-weight: 400;
    color: rgba(153, 153, 153, 1);
  }

  .comment-content-text {
    width: 100%;
    padding: 0 3.2vw;
    margin-bottom: 2vw;
    /*padding-right: 15%;*/
    box-sizing: border-box;
    height: auto;
    font-size: 3.85vw;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
    text-align: left;
  }

  .comment-content-image {
    width: 100%;
    padding: 0 3.2vw;
    margin-bottom: 2vw;
    box-sizing: border-box;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .comment-content-image-follow {
    width: 25vw;
    height: 25vw;
    display: block;
    border-radius: 1.5vw;
    margin-right: 2vw;
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
    height: 40px;
    font-size: 13px;
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
    margin-top: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    padding: 0 12px;
    box-sizing: border-box;
  }

  .onSpecification-top-image {
    width: 90px;
    height: 90px;
    display: block;
    margin-right: 12px;
  }

  .onSpecification-top-type {
    flex: 1;
    height: 90px;
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
    font-size: 22px;
    font-weight: bold;
    color: rgba(255, 48, 58, 1);
  }

  .onSpecification-top-type-symbol {
    font-size: 13px;
    font-weight: 500;
    color: rgba(255, 48, 58, 1);
  }

  .onSpecification-top-type-num {
    font-size: 13px;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
    margin-top: 5px;
    margin-bottom: 7px;
  }

  .onSpecification-top-type-class {
    font-size: 13px;
    font-weight: 400;
    color: rgba(153, 153, 153, 1);
  }

  .row {
    width: 100%;
    height: auto;
    padding: 0 12px;
    box-sizing: border-box;
  }

  .row-row {
    width: 100%;
    height: auto;
    padding: 0 12px;
    margin-top: 5px;
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
    font-size: 16px;
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
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
    font-size: 16px;
    font-weight: bold;
    color: rgba(51, 51, 51, 1);
    margin: 16px 0 12px 0;
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
    height: 28px;
    padding: 0 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(248, 248, 248, 1);
    border-radius: 14px;
    font-size: 14px;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
    border: 1px solid transparent;
    margin-right: 12px;
    margin-bottom: 12px;
  }

  .row-data-text-action {
    width: auto;
    height: 28px;
    padding: 0 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 14px;
    font-size: 14px;
    font-weight: 400;
    color: #FF4E56;
    background: rgba(255, 235, 236, 1);
    border: 1px solid rgba(255, 48, 58, 1)
  }

  .add {
    width: 100%;
    height: 55px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: row;
    margin: 3.2vw 0;
    padding: 0 3.2vw;
    box-sizing: border-box;
  }

  .add-class {
    width: 120px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 15px;
    font-weight: 400;
    color: rgba(255, 78, 86, 1);
    border-radius: 40px;
    border: 1px solid rgba(255, 48, 58, 1);
  }

  .add-immediately {
    width: 120px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 15px;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    border-radius: 40px;
    margin-left: 8px;
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
