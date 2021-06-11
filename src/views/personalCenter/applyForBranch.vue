<template>
  <div class="view">
    <div class="topBar">
      <cpGlobalTitle :isBack="true" :isTitle="'申请分公司'"/>
    </div>


  </div>
</template>

<script>
  export default {
    name: "applyForBranch",
    data(){
      return{
        dataArr:[]
      }
    },
    methods:{

    },
    mounted() {

    }
  }
</script>

<style scoped>
  .view {
    width: 100%;
    overflow: scroll;
    height: calc(100vh - 14vw);
    background-color: #F8F8F8;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    box-sizing: border-box;
  }

  .topBar {
    z-index: 9;
    background-color: white;
  }
</style>
