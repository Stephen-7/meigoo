<template>
  <div>
    <div class="cp_item" v-for="(item,index) in assetTypeList" :key="index">
      <div class="cp_type">
        <p class="cp_className">{{item.className}}</p>
        <p class="cp_times">{{item.times}}</p>
      </div>
      <p class="cp_price" :class="item.prices < 0?'lessColor':'addColor'">¥{{item.prices}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    props:{
      assetTypeList:Array,
    },
    name: "cp-global-assetType",
    data(){
      return{

      }
    },
  }
</script>

<style scoped>
  .cp_item {
    width: calc(97vw - 6.3vw);
    height: 20vw;
    margin-left: 3vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    border-bottom: 0.3vw solid #EEEEEE;
  }

  .cp_item:last-child {
    border-bottom: 0
  }

  .cp_type {
    width: auto;
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;

  }

  .cp_className {
    font-size: 4vw;
    color: #333333;
    font-weight: bold;
    margin-bottom: 1vw;
  }

  .cp_times {
    font-size: 3.47vw;
    font-weight: 400;
    color: #999999;
    margin-top: 1vw;
  }

  .cp_price {
    font-size: 4.27vw;
    font-weight: 500;
  }

  .addColor {
    color: #FF4E56;
  }

  .lessColor {
    color: #2EBA80;
  }
</style>
