<template>
  <div class="view">
    <cpGlobalTitle :isBack="true" :isTitle="'商品分类'" />
    <div class="type">
      <van-sidebar class="left" v-model="activeKey">
        <van-sidebar-item v-for="(item,index) in activeArr" :key="index" :title="item.title" />
      </van-sidebar>

      <van-pull-refresh class="right" v-model="refreshing" @refresh="onRefresh">
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <ul class="lists">
            <li class="items" v-for="(index) in 40" :key="index">
              <img class="itemsImage" src="../assets/image/class3.png" alt="">
              <p class="itemsTitle">美妆护肤</p>
            </li>
          </ul>
        </van-list>
      </van-pull-refresh>
    </div>
  </div>
</template>

<script>
  export default {
    name: "classification",
    data() {
      return {
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
        list:[],
        activeKey: 0,
        loading: false,
        finished: false,
        refreshing: false,
      };
    },
    methods: {
      onLoad() {
        setTimeout(() => {
          if (this.refreshing) {
            // this.list = [];
            this.refreshing = false;
          }
          // for (let i = 0; i < 3; i++) {
          //   this.list.push(this.list.length + 1);
          // }
          this.loading = false;
          // if (this.list.length >= 20) {
          this.finished = true;
          // }
        }, 1000);
      },
      onRefresh() {
        // 清空列表数据
        this.finished = false;

        // 重新加载数据
        // 将 loading 设置为 true，表示处于加载状态
        this.loading = true;
        this.onLoad();
      },
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
    padding: 0 4vw;
    box-sizing: border-box;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .items{
    width: 20.27vw;
    height: auto;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    margin-top: 3.2vw;
  }

  .items:nth-child(2){
    margin: 3.2vw 2.5vw 0 2.5vw;
  }

  .items:nth-child(5){
    margin: 3.2vw 2.5vw 0 2.5vw;
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
