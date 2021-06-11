<template>
  <div class="item">
    <div class="itemLeft">
      <span class="itemLeftType" v-show="!item.time && (type === 1 || type === 2)">已失效</span>
      <span class="itemLeftType" v-show="!item.num && (type === 1 || type === 2)">库存不足</span>
      <p class="itemTime" v-show="item.time && type === 1">距结束：{{item.time}}</p>
      <img class="itemImage" :src="item.imageUrl" alt="">
    </div>
    <div class="itemContent">
      <p class="itemContentTitle">{{item.title}}</p>
      <div class="itemContentType">
        <div class="itemContentTypeLeft">
          <p class="itemContentPrice">¥{{item.price}}</p>
          <p class="itemContentNum" v-show="type === 1 || type === 2 || type === 5">已有{{item.num}}个团</p>
        </div>
        <!--马上分享-->
        <p class="itemContentRightBnt" v-show="type === 1">马上分享</p>

        <!--收藏-->
        <span class="itemContentFavorites" v-show="type === 2" @click="selectFavorites"
              :class="item.state?'trueFavorites':'falseFavorites'"></span>

        <!--拼团-->
        <span class="itemJigsaw itemJigsawColor" v-show="item.groupStatus === 1 && type === 3">拼团成功</span>
        <span class="itemJigsaw" v-show="item.groupStatus === 2 && type === 3">拼团失败</span>

        <!--发团-->
        <span class="itemJigsaw itemJigsawColor" v-show="item.groupStatus === 1 && type === 4">发团成功</span>
        <span class="itemJigsaw" v-show="item.groupStatus === 2 && type === 4">发团失败</span>
        <div class="sendGroup" v-show="item.groupStatus === 3 && type === 4">
          <span class="itemSendGroup">发团中</span>
          <span class="SendGroupInvitation">邀请好友参团</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {Toast} from 'vant';

  export default {
    name: "cp-global-productList",
    props: {
      item: Object,
      type: Number,
      index: Number,
      selectCollection: Function,
    },
    methods: {
      selectFavorites() {
        let {num, time} = this.item;
        if (!num) {
          Toast('商品库存不足，无法操作');
          return
        }
        if (!time) {
          Toast('商品已失效，无法操作');
          return
        }
        this.$emit('backChangeItem',{
          item:this.item,
          index:this.index,
        });
      }
    },
  }
</script>

<style scoped>
  .item {
    width: 100%;
    height: 37vw;
    padding: 0 3.2vw;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    background-color: white;
    border-bottom: 0.1vw solid #EEEEEE;
  }

  .itemLeft {
    position: relative;
    margin-right: 4.27vw;
  }

  .itemTime {
    padding: 0.5vw 2vw;
    font-size: 3.2vw;
    font-weight: 400;
    color: #FFFFFF;
    position: absolute;
    top: 0;
    left: 0;
    background-image: url("../assets/image/sepecial_keeptime_20@2x.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: center center;
  }

  .itemLeftType {
    width: 21vw;
    height: 9vw;
    background: rgba(0, 0, 0, 0.3);
    border-radius: 1.07vw;
    font-size: 3.47vw;
    font-weight: 400;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .itemImage {
    width: 30vw;
    height: 30vw;
    display: block;
  }

  .itemContent {
    flex: 1;
    height: 30vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
  }

  .itemContentTitle {
    width: 100%;
    height: 11.2vw;
    font-size: 4vw;
    font-weight: bold;
    color: #333333;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: break-word;
    white-space: normal !important;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .itemContentType {
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    flex-direction: row;
  }

  .itemContentTypeLeft {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
  }

  .itemContentPrice {
    font-size: 4.53vw;
    font-weight: 500;
    color: #FF4E56;
  }

  .itemContentNum {
    font-size: 3.47vw;
    font-weight: 400;
    color: #999999;
    margin-top: 1.35vw;
  }

  .itemContentFavorites {
    width: 8vw;
    height: 8vw;
    display: block;
    background-size: 6vw 6vw;
    background-repeat: no-repeat;
    background-position: center center;
  }

  .trueFavorites {
    background-image: url("../assets/image/icon_collect_22_333_pre@2x.png");
  }

  .falseFavorites {
    background-image: url("../assets/image/icon_collect_22_333_nor@2x.png");
  }

  .itemJigsaw {
    width: 20vw;
    height: 7.73vw;
    background: #E6F4EE;
    border-radius: 1.07vw;
    font-size: 4vw;
    font-weight: 500;
    color: #2EBA80;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .itemJigsawColor {
    color: #FF4E56;
  }

  .sendGroup {
    width: 24.27vw;
    height: auto;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .itemSendGroup {
    width: 100%;
    height: 7.73vw;
    background: #E6F4EE;
    border-radius: 1.07vw;
    font-size: 4vw;
    font-weight: 500;
    color: #FF7900;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .SendGroupInvitation {
    width: 100%;
    height: 7vw;
    background: #FF7900;
    border-radius: 0 0 1.07vw 1.07vw;
    font-size: 3.47vw;
    font-weight: 500;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .itemContentRightBnt {
    width: 24vw;
    height: 8vw;
    background: #E2B575;
    border-radius: 4vw;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3.47vw;
    font-weight: 500;
    color: #FFFFFF;
  }
</style>
