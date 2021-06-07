<template>
  <div class="view">
    <cpGlobalTitle :isBack="true" :isTitle="'个人信息'"/>
    <div class="item">
      <span class="itemLeft">头像</span>
      <div class="itemRight">
        <span class="itemRightImg"></span>
        <span class="itemRightIcon"></span>
      </div>
    </div>
    <div class="item">
      <span class="itemLeft">昵称</span>
      <div class="itemRight">
        <span class="itemRightTitle" :class="{'color':name}">{{name}}</span>
        <span class="itemRightIcon"></span>
      </div>
    </div>
    <div class="item">
      <span class="itemLeft">手机号</span>
      <div class="itemRight">
        <span class="itemRightTitle" :class="{'color':phone}">{{phone}}</span>
        <span class="itemRightIcon"></span>
      </div>
    </div>
    <div class="item" @click="$router.push('/shippingAddress')">
      <span class="itemLeft">收货地址管理</span>
      <div class="itemRight">
        <span class="itemRightIcon"></span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "personalInformation",
    data(){
      return{
        name:"设置昵称",
        phone:"绑定手机号"
      }
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
    background-color: white;
  }

  .itemLeft{
    font-size: 4vw;
    font-weight: 400;
    color: #666666
  }

  .itemRight{
    width: auto;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: row;
  }

  .itemRightImg{
    width: 10.67vw;
    height: 10.67vw;
    display: block;
    border-radius: 50%;
    background-image: url("../../assets/image/icon_headprotrait_shop_40@2x.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: center center;

  }

  .itemRightTitle{
    font-size: 4vw;
    font-weight: 400;
    color: #333333;
  }

  .color{
    color: #999999;
  }

  .itemRightIcon{
    width: 5.87vw;
    height: 5.87vw;
    display: block;
    background-image: url("../../assets/image/icon_go_22_gray@2x.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center center;
  }
</style>
