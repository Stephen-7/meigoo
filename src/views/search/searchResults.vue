<template>
  <div class="view">
    <cpGlobalTitle :isBack="true" :isTitle="'搜索结果'"/>

    <p class="animated fadeInUp">我是头部</p>
    <p class="animated fadeInUp">我是标题</p>
    <div class="item">
      <div class="left animated fadeInLeft">左</div>
      <div class="right">
        <div class="rightTop animated fadeInRight">右上</div>
        <div class="rightBottom animated fadeInRightBig">右下</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "searchResults",
    data() {
      return {
        isShow: true,
        showAnimate: true
      }
    },
    mounted() {
      console.log(this.$route.query);
    }
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

  .show {
    width: 100px;
    height: 100px;
    background-color: pink;
  }


  .item{
    width: 100%;
    height: 300px;
    padding: 0 3.2vw;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    background-color: pink;
  }

  .left{
    width: 48%;
    height: 100%;
    background-color: yellow;
  }

  .right{
    width: 48%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
  }

  .rightTop{
    width: 100%;
    height: 48%;
    background-color: #EEEEEE;
  }

  .rightBottom{
    width: 100%;
    height: 48%;
    background-color: rebeccapurple;
  }
</style>
