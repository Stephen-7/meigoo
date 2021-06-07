<template>
  <div class="search">
    <div class="searchFor">
      <img class="searchIcon" @click="searchs" src="../assets/image/icon_glass_22_d6@2x.png" alt="">
      <input class="searchInput" @click="searchs" v-if="searchDisabled" placeholder="搜索商品热门关键词" type="text">
      <input class="searchInput" v-model="searchValue" v-else placeholder="搜索商品热门关键词" type="text">
    </div>
    <slot name="shoppingCart"></slot>
    <slot name="news"></slot>
    <slot name="cancel"></slot>
  </div>
</template>

<script>
  export default {
    name: "cp-global-search",
    props:{
      searchType:String,
    },
    data() {
      return {
        disabled:false,
        searchValue:"",
      }
    },
    computed:{
      searchDisabled(){
        return this.searchType === 'toSearch'
      },
    },
    methods: {
      searchs() {
        switch(this.searchType) {
          case 'toSearch':
            this.$router.push('/search');
            break;
          case 'commoditySearch':
            console.log('commoditySearch',this.searchValue);
            // if(this.searchValue){
            //   this.$emit('commoditySearch',this.searchValue);
            // }
            break;
          default:
        }
      },
    },
    mounted() {

    },
    beforeDestroy() {
      // console.log(this.searchCancel,'searchType');
      // if(this.searchCancel){
      //   this.searchName = "";
      // }
    }
  }
</script>

<style scoped>

</style>
