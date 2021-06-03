<template>
  <div class="view">
    <cpGlobalTitle :isBack="true" :isTitle="'常见问题'"/>
    <div class="item" style="margin-top: 2.67vw">
      <span class="itemLeft">为什么不能支付</span>
      <span class="itemRight"></span>
    </div>
    <div class="item">
      <span class="itemLeft">什么时候申请售后</span>
      <span class="itemRight"></span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "commonProblem",
    methods: {

    }
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

  .item{
    width: 100%;
    height: 13.33vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    background-color: white;
    padding: 0 3.2vw;
    box-sizing: border-box;
    border-bottom: 0.1vw solid #eeeeee;
  }

  .itemLeft{
    font-size: 4vw;
    font-weight: 400;
    color: #666666
  }

  .itemRight{
    width: 5.87vw;
    height: 5.87vw;
    display: block;
    background-image: url("../../assets/image/icon_go_22_gray@2x.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center center;
  }
</style>
