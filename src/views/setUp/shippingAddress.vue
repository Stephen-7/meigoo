<template>
  <div class="view">
    <div style="z-index: 9">
      <cpGlobalTitle :isBack="true" :isTitle="'收货地址'"/>
    </div>
    <div class="list" v-show="dataArr.length !== 0">
      <div class="item" v-for="(item,index) in dataArr" :key="index">
        <div class="itemTop">
          <div class="itemTopLeft">
            <span>{{item.name}}</span><span>{{item.phone}}</span>
          </div>
          <div class="itemTopRight">
            <span>默认</span>
            <van-checkbox v-model="item.checked" @click="onchange(index)" icon-size="5vw"
                          checked-color="#E2B575"></van-checkbox>
          </div>
        </div>
        <p class="itemContent">{{item.address}}{{item.addressDetails}}</p>
        <div class="itemBottom">
          <span class="itemBottomIcon delete" @click="deleteItem(item.id,index)"></span>
          <span class="itemBottomIcon edit" @click="$router.push(`/addAndChangeAddress?id=${item.id}`)"></span>
        </div>
        <p class="bottomColor"></p>
      </div>
      <div class="add">
        <p class="submit" @click="$router.push('/addAndChangeAddress')">添加地址</p>
      </div>
    </div>
    <cpGlobalMessage :address="true" v-show="dataArr.length === 0"/>
  </div>
</template>

<script>
  import {Toast, Dialog} from 'vant';

  export default {
    name: "shippingAddress",
    data() {
      return {
        dataArr: []
      }
    },
    computed: {
      addressLists() {
        return this.$store.state.addressList
      }
    },
    watch: {
      addressLists(value) {
        this.dataArr = value;
      }
    },
    methods: {
      onchange(index) {
        let dataArr = this.dataArr;
        if (this.dataArr.length > 1) {
          dataArr.map(item => {
            item.checked = false;
            return item;
          });
          dataArr[index]['checked'] = !dataArr[index]['checked'];
        }
        this.dataArr = [...dataArr]
      },

      deleteItem(id, index) {
        // let data = this.dataArr;
        Dialog.confirm({
          title: '删除地址',
          message: `确认是否删除第${id}条地址数据？`,
        })
          .then(() => {
            // data.splice(index,1);
            // this.dataArr = [...data];
            this.$store.commit('deleteAddressList', index);
            Toast('删除成功');
          })
          .catch(() => {
            Toast('已取消操作');
          });
      }
    },
    mounted() {
      if (this.$store.state.addressList.length !== 0) {
        this.dataArr = this.$store.state.addressList;
      }
    }
  }
</script>

<style scoped>
  .view {
    width: 100%;
    height: 100vh;
    background-color: #FFFFFF;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    box-sizing: border-box;
  }

  .list {
    width: 100%;
    height: calc(100% - 13.5vw);
    background-color: white;
    overflow: scroll;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
  }

  .item {
    width: 100%;
    height: auto;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
  }

  .itemTop {
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    margin-top: 3.73vw;
    padding: 0 4.27vw;
    box-sizing: border-box;
  }

  .itemTopLeft {
    flex: 1;
    display: flex;
    align-items: baseline;
    justify-content: flex-start;
    flex-direction: row;
  }

  .itemTopLeft span:nth-child(1) {
    font-size: 4vw;
    color: #333333;
    font-weight: bold;
    margin-right: 3.2vw;
  }

  .itemTopLeft span:nth-child(2) {
    font-size: 4vw;
    font-weight: 400;
    color: #333333;
  }

  .itemTopRight {
    width: auto;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: row;
  }

  .itemTopRight span:nth-child(1) {
    font-size: 4vw;
    font-weight: 400;
    color: #666666;
    margin-right: 2.3vw;
  }

  .itemContent {
    width: 100%;
    height: auto;
    text-align: left;
    font-size: 3.73vw;
    font-weight: 400;
    color: #333333;
    margin-top: 2.13vw;
    margin-bottom: 3.2vw;
    padding: 0 4.27vw;
    box-sizing: border-box;
  }

  .itemBottom {
    width: 100%;
    height: 12.53vw;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: row;
    border-top: 0.1vw solid #EEEEEE;
    padding: 0 4.27vw;
    box-sizing: border-box;
  }

  .itemBottomIcon {
    width: 19.2vw;
    height: 8.53vw;
    display: block;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center center;
  }

  .delete {
    background-image: url("../../assets/image/btn_none_30_delete_gray@2x.png");
  }

  .edit {
    margin-left: 2.67vw;
    background-image: url("../../assets/image/btn_line_30_compile_gray@2x.png");
  }

  .bottomColor {
    width: 100%;
    height: 2.67vw;
    background-color: #F8F8F8;
  }

  .add {
    width: 100%;
    height: 11.73vw;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 12.8vw;
    margin-bottom: 5vw;
  }

  .submit {
    width: 53.33vw;
    height: 11.73vw;
    border-radius: 5.87vw;
    border: 0.13vw solid #E2B575;
    font-size: 4vw;
    font-weight: 500;
    text-align: center;
    color: #E2B575;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
