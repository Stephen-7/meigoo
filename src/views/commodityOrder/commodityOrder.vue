<template>
  <div class="view">
    <div class="top">
      <cpGlobalBackSearch :placeholder="'搜索我的订单'" @backSearchValue="getSearchValue"/>
      <cpGlobalTab :tabArr="tabArr" :tabIndex="tabIndex" @backTabIndex="getTabIndex"/>
    </div>


  </div>
</template>

<script>
  export default {
    name: "commodityOrder",
    data() {
      return {
        searchValue: "",
        tabType: "",
        tabIndex: 0,
        typeArr: ['all', 'payment', 'delivered', 'received', 'comment', 'afterSale'],
        tabArr: [
          {
            title: "全部",
          },
          {
            title: "待付款",
          },
          {
            title: "待发货",
          },
          {
            title: "待收货",
          },
          {
            title: "待评价",
          },
        ],
      }
    },
    methods: {
      getSearchValue(value) {
        this.searchValue = value;
        this.getData()
      },

      getTabIndex(e) {
        this.tabIndex = e;
        this.tabType = this.typeArr[e];
        this.getData()
      },

      getData() {
        console.log(this.searchValue);
        console.log(this.tabType);
      }

    },
    mounted() {
      this.tabIndex = Number(this.$route.query.type);
      this.tabType = this.typeArr[this.$route.query.type];
      this.getData()
    },
    beforeDestroy() {
      this.searchValue = "";
      this.tabType = "";
      this.tabIndex = 0;
    }
  }
</script>

<style scoped>
  .view {
    width: 100%;
    height: 100vh;
    /*padding-bottom: 13vw;*/
    background-color: #f8f8f8;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
  }

  .top {
    width: 100%;
    height: auto;
    padding: 0 3.2vw;
    box-sizing: border-box;
    background-color: white;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
  }


</style>
