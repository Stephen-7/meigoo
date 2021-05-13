<template>
  <div class="view">
    <div class="topBar">
      <cpGlobalTitle :isTitle="'分享'"/>
    </div>

    <ul class="list">
      <li class="item">
        <p class="itemIime">距结束：3天</p>
        <img class="itemImage" src="../assets/image/106b97ecaf43bc97.jpg" alt="">
        <div class="itemContent">
          <p class="itemContentTitle">美国骨得金护颈枕 u型枕 旅行枕颈椎枕 u形枕 颈枕脖子u型枕头</p>
          <div class="itemContentType">
            <div class="itemContentTypeLeft">
              <p class="itemContentPrice">¥326.3</p>
              <p class="itemContentNum">已有3个团</p>
            </div>
            <p class="itemContentRightBnt">马上分享</p>
          </div>
        </div>
      </li>
      <li class="item">
        <p class="itemIime">距结束：06:23:45</p>
        <img class="itemImage" src="../assets/image/106b97ecaf43bc97.jpg" alt="">
        <div class="itemContent">
          <p class="itemContentTitle">美国骨得金护颈枕 u型枕 旅行枕颈椎枕 u形枕 颈枕脖子u型枕头</p>
          <div class="itemContentType">
            <div class="itemContentTypeLeft">
              <p class="itemContentPrice">¥326.3</p>
              <p class="itemContentNum">已有3个团</p>
            </div>
            <p class="itemContentRightBnt">马上分享</p>
          </div>
        </div>
      </li>
      <li class="item">
        <p class="itemIime">距结束：3天</p>
        <img class="itemImage" src="../assets/image/106b97ecaf43bc97.jpg" alt="">
        <div class="itemContent">
          <p class="itemContentTitle">美国骨得金护颈枕 u型枕 旅行枕颈椎枕 u形枕 颈枕脖子u型枕头</p>
          <div class="itemContentType">
            <div class="itemContentTypeLeft">
              <p class="itemContentPrice">¥326.3</p>
              <p class="itemContentNum">已有3个团</p>
            </div>
            <p class="itemContentRightBnt">马上分享</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "shareIt"
  }
</script>

<style scoped>
  .view {
    width: 100%;
    overflow: scroll;
    padding-top: 12.5vw;
    padding-bottom: 3.2vw;
    height: calc(100vh - 14vw);
    background-color: #F8F8F8;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    box-sizing: border-box;
  }

  .topBar {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9;
    background-color: white;
  }

  .list{
    width: 100%;
    height: auto;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
  }

  .item{
    width: 100%;
    height: 39.73vw;
    padding: 0 3.2vw;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    background-color: white;
    border-bottom: 0.1vw solid #EEEEEE;
    position: relative;
  }

  .itemIime{
    padding: 0.5vw 3vw;
    font-size: 3.2vw;
    font-weight: 400;
    color: #FFFFFF;
    position: absolute;
    top: 3.2vw;
    left: 3.2vw;
    background-image: url("../assets/image/sepecial_keeptime_20@2x.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: center center;
  }

  .itemImage{
    width: 32vw;
    height: 32vw;
    display: block;
    margin-right: 4.27vw;
  }

  .itemContent{
    flex: 1;
    height: 32vw;
    display: flex;
   align-items: center;
    justify-content: space-between;
    flex-direction: column;
  }

  .itemContentTitle{
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

  .itemContentType{
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    flex-direction: row;
  }

  .itemContentTypeLeft{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
  }

  .itemContentPrice{
    font-size: 4.53vw;
    font-weight: 500;
    color: #FF4E56;
  }

  .itemContentNum{
    font-size: 3.47vw;
    font-weight: 400;
    color: #999999;
    margin-top: 1.35vw;
  }

  .itemContentRightBnt{
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
