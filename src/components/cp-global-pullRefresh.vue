<template>
  <van-pull-refresh class="refresh" v-model="refreshing" @refresh="onRefresh">
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <slot name="item"></slot>
    </van-list>
  </van-pull-refresh>
</template>

<script>
  export default {
    name: "cp-global-pullRefresh",
    props: {},
    data() {
      return {
        list: [1, 2, 3, 4],
        activeKey: 0,
        loading: false,
        finished: false,
        refreshing: false,
      }
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
  .refresh {
    width: 100%;
    height: 100%;
    overflow: scroll;
  }
</style>
