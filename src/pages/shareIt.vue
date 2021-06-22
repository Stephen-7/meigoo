<template>
  <div class="view">
    <div class="topBar">
      <cpGlobalTitle :isBorderColor="true" :isTitle="'分享'"/>
    </div>
    <div class="list" v-show="dataArr.length !== 0">
      <cpGlobalPullRefresh>
        <template v-slot:item>
          <cpGlobalProductList v-for="(item,index) in dataArr" :item="item" :index="index" :type="type" :key="index"/>
        </template>
      </cpGlobalPullRefresh>
    </div>
    <cpGlobalMessage :message="'message'" v-show="dataArr.length === 0"/>
  </div>
</template>

<script>
  export default {
    name: "shareIt",
    data() {
      return {
        // 1.分享 2.收藏 3.拼图 4.发团
        type:1,
        dataArr: [
          {
            id: 1,
            title: "美国骨得金护颈枕 u型枕 旅行枕颈椎枕 u形枕 颈枕脖子u型枕头",
            imageUrl: require('@/assets/image/106b97ecaf43bc97.jpg'),
            price: "326.3",
            num: "",
            time: "1天",
            state:true,
          },
          {
            id: 2,
            title: "美国骨得金护颈枕 u型枕 旅行枕颈椎枕 u形枕 颈枕脖子u型枕头",
            imageUrl: require('@/assets/image/106b97ecaf43bc97.jpg'),
            price: "122",
            num: 1,
            time: "",
            state:false,
          },
          {
            id: 1,
            title: "美国骨得金护颈枕 u型枕 旅行枕颈椎枕 u形枕 颈枕脖子u型枕头",
            imageUrl: require('@/assets/image/106b97ecaf43bc97.jpg'),
            price: "326.3",
            num: 3,
            time: "1天",
            state:false,
          },
          {
            id: 2,
            title: "美国骨得金护颈枕 u型枕 旅行枕颈椎枕 u形枕 颈枕脖子u型枕头",
            imageUrl: require('@/assets/image/106b97ecaf43bc97.jpg'),
            price: "122",
            num: 1,
            time: "06:23:45",
            state:false,
          },
          {
            id: 1,
            title: "美国骨得金护颈枕 u型枕 旅行枕颈椎枕 u形枕 颈枕脖子u型枕头",
            imageUrl: require('@/assets/image/106b97ecaf43bc97.jpg'),
            price: "326.3",
            num: 3,
            time: "1天",
            state:false,
          },
          {
            id: 2,
            title: "美国骨得金护颈枕 u型枕 旅行枕颈椎枕 u形枕 颈枕脖子u型枕头",
            imageUrl: require('@/assets/image/106b97ecaf43bc97.jpg'),
            price: "122",
            num: 1,
            time: "06:23:45",
            state:false,
          }
        ],
      }
    },
    methods:{

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

  .list {
    width: 100%;
    height: calc(100vh - 13.07vw );
    overflow: scroll;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
  }
</style>
