<template>
  <div>
    <router-view/>
    <div id="TabBar">
      <ul class="list">
        <router-link v-for="(item,index) in tabBar" :key="index" :to="item.path" tag="li" class="item">
          <i class="icon" :style="`backgroundImage:url(${$route.path==item.path?item.selectedIcon:item.icon})`"></i>
          <p class="text" :class="$route.path==item.path?'select-text':''">{{item.name}}</p>
        </router-link>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    name: "TabBar",
    data() {
      return {
        tabBar: [
          {
            name: '首页',
            path: '/home',
            icon: require('@/assets/image/tabBar/icon_tab1_24_nor@2x.png'),
            selectedIcon: require('@/assets/image/tabBar/icon_tab1_24_pre@2x.png'),
          },
          {
            name: '分类',
            path: '/classification',
            icon: require('@/assets/image/tabBar/icon_tab2_24_nor@2x.png'),
            selectedIcon: require('@/assets/image/tabBar/icon_tab2_24_pre@2x.png'),
          },
          {
            name: '收益',
            path: '/income',
            icon: require('@/assets/image/tabBar/icon_tab3_24_nor@2x.png'),
            selectedIcon: require('@/assets/image/tabBar/icon_tab3_24_pre@2x.png'),
          },
          {
            name: '分享',
            path: '/shareIt',
            icon: require('@/assets/image/tabBar/icon_tab4_24_nor@2x.png'),
            selectedIcon: require('@/assets/image/tabBar/icon_tab4_24_pre@2x.png'),
          },
          {
            name: '我的',
            path: '/mine',
            icon: require('@/assets/image/tabBar/icon_tab5_24_nor@2x.png'),
            selectedIcon: require('@/assets/image/tabBar/icon_tab5_24_pre@2x.png'),
          },
        ]
      }
    }
  }
</script>
<style scoped>
  #TabBar {
    width: 100vw;
    height: 13.07vw;
    background-color: #ffffff;
    box-shadow: 0 0 2vw 0 rgba(116, 116, 116, 0.18);
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 111;
  }

  .list {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .item {
    flex: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .icon {
    width: 6.4vw;
    height: 6.4vw;
    background-repeat: no-repeat;
    background-size: contain;
  }

  .text {
    font-size: 2.93vw;
    font-weight: 400;
    color: #999999;
  }

  .select-text {
    color: #333333;
  }
</style>
