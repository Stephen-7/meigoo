<template>
  <div class="view">
    <div class="search">
      <div class="searchFor">
        <img class="searchIcon" @click="searchs" src="../../assets/image/icon_glass_22_d6@2x.png" alt="">
        <input class="searchInput" v-model="searchValue" placeholder="搜索商品" type="text">
      </div>
      <div class="searchCancel" @click="cancel">取消</div>
    </div>

    <div class="content">
      <div class="row">
        <div class="row-ber">
          <p class="row-title">热门标签</p>
        </div>
        <div class="row-data">
          <template v-for="(item,index) in popular">
            <p class="row-data-text" :class="{'action':item.state}" @click="tabPopular(index)" :key="index">
              {{item.title}}</p>
          </template>
        </div>
      </div>
      <div class="row">
        <div class="row-ber">
          <p class="row-title">历史搜索</p>
          <div class="row-delete" @click="deleteData">
            <p class="deleteIcn"></p>删除
          </div>
        </div>
        <div class="row-data">
          <template v-for="(item,index) in history">
            <p class="row-data-text" :class="{'action':item.state}" @click="tabHistory(index)" :key="index">
              {{item.title}}</p>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {Toast} from 'vant';

  export default {
    name: "search",
    data() {
      return {
        searchId:"",
        searchValue: "",
        popular: [
          {
            id: 1,
            title: "美妆",
            state: false,
          },
          {
            id: 2,
            title: "美容",
            state: false,
          },
          {
            id: 3,
            title: "美妆",
            state: false,
          },
          {
            id: 4,
            title: "美容",
            state: false,
          },
          {
            id: 5,
            title: "美妆",
            state: false,
          },
          {
            id: 6,
            title: "美容",
            state: false,
          }
        ],
        history: [
          {
            id: 1,
            title: "迪奥",
            state: false,
          },
          {
            id: 2,
            title: "阿玛尼",
            state: false,
          },
          {
            id: 3,
            title: "LV",
            state: false,
          },
          {
            id: 4,
            title: "圣罗兰",
            state: false,
          },
          {
            id: 5,
            title: "美妆",
            state: false,
          },
          {
            id: 6,
            title: "美妆",
            state: false,
          },
          {
            id: 7,
            title: "超值宝贝",
            state: false,
          },
          {
            id: 8,
            title: "圣罗兰",
            state: false,
          },
        ]
      }
    },
    methods: {
      cancel() {
        this.initialization()
        this.$router.back()
      },

      searchs() {
        if (this.searchValue) {
          // console.log(this.searchId);
          // console.log(this.searchValue.trim());
          // this.$router.push(`/searchResults?searchId=${this.searchId}+'&searchValue='+${this.searchValue}`);
          this.$router.push('/searchResults?searchId='+this.searchId+'&searchValue='+this.searchValue.trim())
        } else {
          Toast('请输入搜索内容');
        }
      },

      initialization() {
        this.searchId = "";
        this.searchValue = "";
        this.popular.map((item) => {
          return item.state = false;
        });
        this.history.map((item) => {
          return item.state = false;
        });
      },

      tabPopular(index) {
        this.initialization();
        this.searchId = this.popular[index].id;
        this.searchValue = this.popular[index].title;
        this.popular[index].state = !this.popular[index].state;
      },

      tabHistory(index) {
        this.initialization();
        this.searchId = this.history[index].id;
        this.searchValue = this.history[index].title;
        this.history[index].state = !this.history[index].state;
      },

      deleteData() {
        this.history = [];
      },
    }
  }
</script>

<style scoped>
  .view {
    width: 100%;
    height: 100vh;
    background-color: #FFFFFF;
  }

  .content {
    flex: 1;
    height: auto;
    margin: 0 3.2vw;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .row {
    width: 100%;
    height: auto;
  }

  .row-ber {
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .row-title {
    width: 100%;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
    font-size: 4.6vw;
    font-weight: bold;
    color: rgba(51, 51, 51, 1);
    margin: 5vw 0 2.5vw 0;
  }

  .row-delete {
    width: 18vw;
    height: auto;
    display: flex;
    align-items: center;
    flex-direction: row;
    font-size: 4.27vw;
    font-weight: 400;
    color: #999999;
    margin-top: 2vw;
  }

  .deleteIcn {
    width: 6vw;
    height: 8vw;
    background-image: url("../../assets/image/icon_delete_15@2x.png");
    background-size: 4.5vw 4.5vw;
    background-repeat: no-repeat;
    background-position: center center;
  }

  .row-data {
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
  }

  .row-data-text {
    width: auto;
    height: 8vw;
    padding: 0 4vw;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(248, 248, 248, 1);
    border-radius: 4.3vw;
    font-size: 4vw;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
    border: 0.1vw solid transparent;
    margin-right: 2vw;
    margin-bottom: 2vw;
  }

  .action {
    color: #FF4E56;
    background-color: rgba(255, 235, 236, 1);
    border: 0.1vw solid rgba(255, 48, 58, 1)
  }
</style>
