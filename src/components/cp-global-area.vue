<template>
  <van-popup v-model="isShow" round position="bottom" @close="cancel">
    <van-area title="选择地址" :area-list="areaList" @confirm="confirm" @cancel="cancel"/>
  </van-popup>
</template>

<script>
  import {areaList} from '@vant/area-data';
  export default {
    name: "cp-global-area",
    props: {
      areaShow: Boolean
    },
    data() {
      return {
        isShow: false,
        areaList: areaList,
      }
    },
    watch: {
      areaShow(value) {
        this.isShow = value
      }
    },
    methods: {
      confirm(data) {
        let code,name;
        for (let i = 0; i < data.length; i++) {
          code = `${data[0]['code']}-${data[1]['code']}-${data[2]['code']}`;
          name = `${data[0]['name']}-${data[1]['name']}-${data[2]['name']}`;
        }
        this.isShow = false;
        this.$emit('backArea', {code,name})
      },

      cancel() {
        this.isShow = false;
        this.$emit('cancel', false)
      },
    },
    mounted() {

    }
  }
</script>

<style scoped>

</style>
