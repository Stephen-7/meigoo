<template>
  <div class="comment-content">
    <div class="comment-content-row">
      <div class="comment-content-row-left">
        <img class="comment-content-row-left-image" src="../assets/image/icon_headprotrait_shop_40@2x.png"
             alt="">
        <p class="comment-content-row-left-name">Stephen</p>
      </div>
      <div class="comment-content-row-right">2小时前</div>
    </div>
    <p class="comment-content-text">语雀是一款优雅高效的在线文档编辑与协同工具， 让每个企业轻松拥有文档，语雀是一款优雅高效的在线文档编辑与协同工具，
      让每个企业轻松拥有文档语雀是一款优雅高效的在线文档编辑与协同工具， 让每个企业轻松拥有文档语雀是一款优雅高效的在线文档编辑与协同工具， 让每个企业轻松拥有文档语雀是一款优雅高效的在线文档编辑与协同工具，
      让每个企业轻松拥有文档</p>
    <div class="comment-content-image">
      <img class="comment-content-image-follow" src="../assets/image/details@2x.png" alt="">
      <img class="comment-content-image-follow" src="../assets/image/details@2x.png" alt="">
      <img class="comment-content-image-follow" src="../assets/image/details@2x.png" alt="">
    </div>
    <div class="comment-content-type">颜色分类：红色 尺码：36</div>
  </div>
</template>

<script>
  export default {
    props: {
    },
    name: "cp-global-comment"
  }
</script>

<style scoped>
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

  .comment-content-type {
    width: 100%;
    height: 10vw;
    padding: 0 3.2vw;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    font-size: 3.47vw;
    font-weight: 400;
    color: #999999;
  }
</style>
