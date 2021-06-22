<template>
  <div class="view">
    <cpGlobalTitle :isBorderColor="true" :isBack="true" :isTitle="'商品分类'" />
    <div class="type">
      <van-sidebar class="left" v-model="activeKey">
        <van-sidebar-item style="text-align: center" v-for="(item,index) in activeArr" :key="index" :title="item.title" />
      </van-sidebar>
      <div class="right">
        <cpGlobalPullRefresh>
          <template v-slot:item>
            <ul class="lists">
              <li class="items" v-for="(index) in 8" :key="index">
                <img class="itemsImage" src="../assets/image/details@2x.png" alt="">
                <p class="itemsTitle">美妆护肤</p>
              </li>
            </ul>
          </template>
        </cpGlobalPullRefresh>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "classification",
    data() {
      return {
        activeKey: 0,
        activeArr:[
          {
            id:1,
            title:"鞋子",
          },
          {
            id:2,
            title:"上衣",
          },
          {
            id:3,
            title:"香水",
          },
          {
            id:4,
            title:"手表",
          },
          {
            id:5,
            title:"相机",
          },
          {
            id:6,
            title:"电脑",
          },
        ],
      };
    },
    methods: {

    },
  }
</script>

<style scoped>
  .view {
    width: 100%;
    min-height: 100vh;
    background-color: #FFFFFF;
  }

  .type{
    width: 100%;
    height: auto;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: row;
  }

  .left{
    width:26vw;
    height: calc(100vh - 12.5vw - 13.1vw);
    background-color: #f8f8f8;
  }

  .right{
    width: 74vw;
    height: calc(100vh - 13.07vw - 13.05vw);
    overflow: scroll;
  }

  .lists{
    width: 100%;
    height: auto;
    padding: 0 3.3vw;
    box-sizing: border-box;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 1.5fr 1.5fr 1.5fr;
  }

  .items{
    width: 20.27vw;
    height: auto;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    background-color: white;
  }

  .itemsImage{
    width: 20.27vw;
    height: 21.02vw;
  }

  .itemsTitle{
    width: 100%;
    font-size: 3.73vw;
    font-weight: 400;
    color: #333333;
    text-align: center;
    margin-top: 2vw;
  }
</style>
