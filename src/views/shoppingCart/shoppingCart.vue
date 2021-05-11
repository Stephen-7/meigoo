<template>
  <div class="view">
    <div class="topBar">
      <cpGlobalTitle :isBack="true" :isTitle="'购物车'">
        <template v-slot:rightBut>
          <p class="selectEdit" v-show="!isEdit" @click="selectEdit(true)">编辑</p>
          <p class="selectCarryOut" v-show="isEdit" @click="selectEdit(false)">完成</p>
        </template>
      </cpGlobalTitle>
    </div>

    <div class="list" v-for="(list,index) in listArr" :key="index">
      <div class="information">
        <van-checkbox style="margin-left: 2vw;" icon-size="20px" checked-color="#E2B575"
                      v-model="list.businessChecked" @click.stop="listChange(list)"></van-checkbox>
        <img class="informationIcon" :src="list.businessAvatar" alt="">
        <span class="informationName">{{list.businessName}}</span>
      </div>
      <div class="item" v-for="(item,i) in list.productList" :key="i">
        <div class="content">
          <div class="contentLeft">
            <van-checkbox icon-size="18px" checked-color="#E2B575" v-model="item.checked"
                          @click.stop="itemChange(list,item)"></van-checkbox>
          </div>
          <img class="contentImage" :src="item.imageUrl" alt="">
          <div class="contentRight">
            <p class="contentRightTitle">{{item.title}}</p>
            <p class="contentRightType">
              <span>颜色：{{item.colour}}</span>&nbsp;&nbsp;<span>尺码：{{item.size}}</span>
            </p>
            <div class="contentRightAttributes">
              <p class="contentRightAttributesPrice">￥{{item.price}}</p>
              <van-stepper v-model="item.quantity" disable-input input-width="45px" button-size="25px"
                           @minus="quantityIndex(-1)"
                           @plus="quantityIndex(1)" @change="quantityChange(item)"/>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bottomBar">
      <div class="bottomBarLeft">
        <van-checkbox icon-size="20px" checked-color="#E2B575" v-model="allChecked"
                      @click="allChange"></van-checkbox>
        <span class="bottomBarLeftName">全选</span>
      </div>
      <div class="bottomBarRight">
        <p class="bottomBarRightPrice">合计<span class="bottomBarRightContent">¥{{allPrice}}</span></p>
        <p class="bottomBarRightBuyNow" :class="{'bottomBarRightNoData':listArr.length === 0}" v-show="!isEdit"
           @click.stop="toDetermineOrder">立即购买</p>
        <p class="bottomBarRightDelete" v-show="isEdit" @click.stop="isDelete">删除</p>
      </div>
    </div>

    <cpGlobalMessage :message="'message'" v-show="listArr.length === 0"/>
  </div>
</template>

<script>
  let index = null;
  import {Toast} from 'vant';

  export default {
    name: "shoppingCart",
    data() {
      return {
        isEdit: false,
        checked: false,
        allChecked: false,
        allPrice: 0,
        listArr: [
          {
            businessChecked: false,
            businessAvatar: require('@/assets/image/icon_headprotrait_shop_40@2x.png'),
            businessName: "Stephen",
            productList: [
              {
                id: 1,
                checked: false,
                imageUrl: require('@/assets/image/class2.png'),
                title: "完美日记限定口红季节限定完美日记限定口红季节限定",
                quantity: 1,
                colour: "红色",
                size: 36,
                price: 500,
                prices: 500,
              },
              {
                id: 2,
                checked: false,
                imageUrl: require('@/assets/image/class2.png'),
                title: "完美日记限定口红季节限定完美日记限定口红季节限定",
                quantity: 1,
                colour: "红色",
                size: 36,
                price: 500,
                prices: 500,
              }
            ],
          },
          {
            businessChecked: false,
            businessAvatar: require('@/assets/image/icon_headprotrait_shop_40@2x.png'),
            businessName: "Stephen",
            productList: [
              {
                id: 3,
                checked: false,
                imageUrl: require('@/assets/image/class2.png'),
                title: "完美日记限定口红季节限定完美日记限定口红季节限定",
                quantity: 1,
                colour: "红色",
                size: 36,
                price: 500,
                prices: 500,
              },
              {
                id: 4,
                checked: false,
                imageUrl: require('@/assets/image/class2.png'),
                title: "完美日记限定口红季节限定完美日记限定口红季节限定",
                quantity: 1,
                colour: "红色",
                size: 36,
                price: 500,
                prices: 500,
              }
            ],
          },
        ],
      }
    },
    methods: {
      selectEdit(state) {
        this.isEdit = state;
      },

      listChange(item) {
        item.businessChecked ? this.shopTrue(item) : this.shopFalse(item)
      },

      //循环店铺中的商品，先筛选出目前没选中的商品，给它执行choSeTrue函数
      shopTrue(item) {
        item.productList.forEach((pro) => {
          pro.checked === false && this.choSeTrue(item, pro)
        })
      },

      //循环店铺中的商品，先筛选出目前被选中的商品，给它执行choSeFalse函数
      shopFalse(item) {
        item.productList.forEach((pro) => {
          pro.checked === true && this.choSeFalse(item, pro)
        })
      },

      //单个商品的选中按钮
      itemChange(item, pro) {
        pro.checked ? this.choSeTrue(item, pro) : this.choSeFalse(item, pro)
      },

      //将商品选中状态改为true
      choSeTrue(item, pro) {
        pro.checked = true;
        let listLength = this.listArr.length;
        let itemLength = item.productList.filter(item => {
          return item.checked === true
        }).length;
        itemLength === item.productList.length ? item.businessChecked = true : item.businessChecked = false;
        let businessLength = this.listArr.filter(item => {
          return item.businessChecked === true
        }).length;
        listLength === businessLength ? this.allChecked = true : this.allChecked = false;
        this.allPrice += pro.prices * pro.quantity;
      },

      //将商品选中状态改为false
      choSeFalse(item, pro) {
        pro.checked = false;
        if (item.businessChecked) {
          item.businessChecked = false;
        }
        this.allChecked = false;
        this.allPrice -= pro.prices * pro.quantity;
      },

      //全选商品的选中按钮
      allChange() {
        this.allChecked = !this.allChecked;
        console.log(this.allChecked = !this.allChecked);
        this.allChecked ? this.listArr.forEach((item) => this.shopTrue(item)) : this.listArr.forEach((item) => this.shopFalse(item))
      },

      quantityIndex(e) {
        index = e;
      },

      //数量加减和金额计算
      quantityChange(pro) {
        switch (index) {
          case  -1:
            if (pro.checked) {
              this.allPrice -= pro.prices;
            }
            break;
          case  1:
            if (pro.checked) {
              this.allPrice += pro.prices;
            }
            break;
        }
      },

      toDetermineOrder() {
        if (this.allChecked) {
          this.$router.push('/confirmOrder')
        } else {
          Toast('请选择商品');
        }
      },

      isDelete() {
        if (this.allChecked) {
          this.listArr = [];
          this.allPrice = 0;
          this.isEdit = false;
          this.allChecked = false;
        } else {
          Toast('请选择商品');
        }
      },
    },
    mounted() {
      this.isEdit = false;
    }
  }
</script>

<style scoped>
  .view {
    width: 100%;
    overflow: scroll;
    padding-top: 12.5vw;
    padding-bottom: 3.2vw;
    height: calc(100vh - 14vw);
    background-color: #F8F8F8;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    box-sizing: border-box;
  }

  .topBar {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9;
    background-color: white;
  }

  .selectEdit {
    width: auto;
    height: 100%;
    font-size: 4vw;
    font-weight: 400;
    color: #333333;
    text-align: right;
  }

  .selectCarryOut {
    width: auto;
    height: 100%;
    font-size: 4vw;
    font-weight: 400;
    color: #E2B575;
    text-align: right;
  }

  .list {
    width: calc(100% - 6.4vw);
    height: auto;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    margin: 3.5vw 3.2vw 0 3.2vw;
    border-radius: 1.07vw;
    background: #FFFFFF;
  }

  .list:last-child {
    margin: 3.5vw 3.2vw !important;
  }

  .item {
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    margin-bottom: 2.5vw;
  }

  .information {
    width: 100%;
    height: 10.67vw;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
  }

  .informationIcon {
    width: 6.33vw;
    height: 6.33vw;
    display: block;
    margin-left: 2vw;
  }

  .informationName {
    font-size: 3.47vw;
    font-weight: 400;
    color: #333333;
    margin-left: 2vw;
  }

  .content {
    width: 100%;
    height: 30vw;
    padding: 3.2vw 2.4vw;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
  }

  .contentLeft {
    width: auto;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .contentImage {
    width: 24vw;
    height: 24vw;
    display: block;
    margin: 0 2.4vw;
  }

  .contentRight {
    flex: 1;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
  }

  .contentRightTitle {
    width: 100%;
    font-size: 4vw;
    font-weight: 500;
    color: #333333;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: break-word;
    white-space: normal !important;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }

  .contentRightType {
    width: 100%;
    font-size: 3.2vw;
    font-weight: 400;
    color: #999999;
    margin-top: 1.3vw;
  }

  .contentRightAttributes {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    margin-top: 5vw;
  }

  .contentRightAttributesPrice {
    font-size: 4.27vw;
    font-weight: 500;
    color: #FF303A
  }

  .bottomBar {
    width: 100%;
    height: 14vw;
    padding: 0 3.2vw;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 9;
    background-color: white;
  }

  .bottomBarLeft {
    width: auto;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  .bottomBarLeftName {
    font-size: 3.73vw;
    font-weight: 400;
    color: #999999;
    margin-left: 1.5vw;
  }

  .bottomBarRight {
    width: auto;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: row;
  }

  .bottomBarRightPrice {
    font-size: 3.7vw;
    font-weight: 400;
    color: #333333;
  }

  .bottomBarRightContent {
    font-size: 4.8vw;
    font-weight: 500;
    color: #FF303A
  }

  .bottomBarRightDelete {
    width: 29.87vw;
    height: 10.67vw;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5.33vw;
    font-size: 4vw;
    font-weight: 500;
    color: #FF4E56;
    border: 0.13vw solid #FF4E56;
    margin-left: 2.67vw;
    background-color: white;
  }

  .bottomBarRightBuyNow {
    width: 29.87vw;
    height: 10.67vw;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5.33vw;
    font-size: 4vw;
    font-weight: 500;
    color: #ffffff;
    border: 0.13vw solid transparent;
    margin-left: 2.67vw;
    background-color: #E2B575;
  }

  .bottomBarRightNoData {
    background-color: #A6A8B6;
  }
</style>
