<template>
  <div class="cp-tab">
    <ul class="cp-tabList">
      <li class="cp-tabItem" :class="{'cp-active':chanIndex === index}" v-for="(item,index) in tabArr" @click="changeIndex(index)" :key="index">{{item.title}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "cp-global-tab",
    props: {
      tabArr: Array,
      tabIndex: Number,
    },
    data(){
      return{
        chanIndex: 0,
      }
    },
    watch:{
      tabIndex(val){
        this.chanIndex = val;
      }
    },
    methods: {
      changeIndex(index){
        this.$emit('backTabIndex',index)
      }
    },
  }
</script>

<style scoped>
  .cp-tab {
    width: 100%;
    height: 10.67vw;
    background-color: white;
  }

  .cp-tabList {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
  }

  .cp-tabItem {
    flex: 1;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3.73vw;
    font-weight: 500;
    color: #333333;
  }


  .cp-active {
    position: relative;
    font-weight: bold;
  }

  .cp-active::before {
    content: "";
    width: 2.67vw;
    height: 0.8vw;
    background: #E2B575;
    border-radius: 0.53vw;
    position: absolute;
    bottom: 1.3vw;
    left: 50%;
    transform: translate(-50%, 0);
  }
</style>
