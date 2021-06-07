<template>
  <div class="cover">
    <div class="loading">
      <van-loading color="#FFFFFF" size="35px" vertical>加载中...</van-loading>
    </div>
  </div>
</template>

<script>
  export default {
    name: "cp-global-loading",
  }
</script>

<style scoped>
  .cover {
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .loading {
    width: 100px;
    height: 100px;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
</style>
