<template>
  <div class="view">
    <cpGlobalTitle :isBack="true" :isTitle="'设置'"/>
    <van-cell style="height: 13vw;margin-top: 2.67vw" title="关于我们" is-link />
    <van-cell style="height: 13vw" title="隐私政策" is-link />
    <van-cell style="height: 13vw" title="注销账号" is-link />
    <div class="out" @click="outUp">退出登录</div>
  </div>
</template>

<script>
  export default {
    name: "setUp",
    methods:{
      outUp(){
        this.$router.push('login');
        sessionStorage.clear()
      },
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

  .out{
    width: 100%;
    height: 13.33vw;
    background: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 4vw;
    font-weight: 400;
    color: #666666;
    margin-top: 4.27vw;
  }
</style>
