<template>
  <div class="cp_search">
    <div class="cp_search_left" @click="$router.back()">
      <img class="cp_search_left_img" src="../assets/image/icon_back_24_black@2x.png" alt="">
    </div>
    <div class="cp_search_right">
      <img class="cp_search_right_img" src="../assets/image/icon_glass_22_d6@2x.png" @click="searchData">
      <input class="cp_search_right_input" type="text" v-model="inputValue" placeholder="搜索商品热门关键词">
      <img class="cp_search_right_cancel" src="../assets/image/icon_close_22_cicle@2x.png" v-show="inputValue" @click="cancel">
    </div>
  </div>
</template>

<script>
  export default {
    name: "cp-global-backSearch",
    data() {
      return {
        inputValue:"",
      }
    },
    methods: {
      searchData(){
        if(this.inputValue){
          this.$emit('backSearchValue',this.inputValue)
        }
      },

      cancel(){
        this.inputValue = "";
      },
    },
    mounted() {
    }
  }
</script>

<style scoped>
  .cp_search {
    width: 100%;
    height: 12vw;
    /*padding: 0 3.2vw;*/
    /*box-sizing: border-box;*/
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
  }

  .cp_search_left {
    width: 9vw;
    height: 9vw;
    margin-right: 2vw;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  .cp_search_left_img {
    width: 6.4vw;
    height: 6.4vw;
    display: block;
  }

  .cp_search_right {
    flex: 1;
    height: 9.3vw;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    border-radius: 4.67vw;
    background-color: #F8F8F8;
    position: relative;
  }

  .cp_search_right_img {
    width: 6.4vw;
    height: 6.4vw;
    display: block;
    margin: 0 2.13vw 0 3.2vw;
  }

  .cp_search_right_input {
    flex: 1;
    height: 100%;
    font-size: 3.73vw;
    font-weight: 400;
    color: #999999;
    padding-right: 10vw;
    background-color: transparent;
  }

  .cp_search_right_cancel {
    width: 7vw;
    height: 7vw;
    display: block;
    position: absolute;
    top: 12%;
    right: 2vw;
    z-index: 2;
  }
</style>
