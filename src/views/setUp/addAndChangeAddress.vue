<template>
  <div class="view">
    <cpGlobalTitle :isBack="true" :isBorderColor="true" :isTitle="'收货地址'"/>
    <div class="item">
      <span class="itemLeft">联系人</span>
      <div class="itemRight">
        <input type="text" class="itemRightTitle color" v-model="userInfo.name" placeholder="请输入">
      </div>
    </div>
    <div class="item">
      <span class="itemLeft">联系电话</span>
      <div class="itemRight">
        <input type="text" oninput="value=value.replace(/[^\d]/g,'')" class="itemRightTitle color" maxlength="11" v-model="userInfo.phone" placeholder="请输入">
      </div>
    </div>
    <div class="item">
      <span class="itemLeft">所在地区</span>
      <div class="itemRight" @click="showPopup">
        <span class="itemRightTitle" :class="{'color': userInfo.address !== '请选择' }">{{userInfo.address}}</span>
        <span class="itemRightIcon"></span>
      </div>
    </div>
    <div class="details">
      <span class="itemLeft" style="line-height: 1.5;">详细地址</span>
      <textarea class="textarea" :class="{'color': userInfo.addressDetails }" v-model="userInfo.addressDetails" placeholder="请输入"></textarea>
    </div>
    <p class="bottomColor"></p>
    <div class="item">
      <span class="itemLeft" style="width: 24.53vw">设为默认地址</span>
      <div class="itemRight" style="justify-content: flex-end">
        <van-switch v-model="userInfo.checked" size="8vw" active-color="#E2B575"/>
      </div>
    </div>

    <div class="add">
      <p class="submit" :class="{'bc':isTrue}" @click="submit(isTrue)">添加地址</p>
    </div>

    <cpGlobalArea :areaShow="show" @cancel="hidePopup" @backArea="getArea"/>
  </div>
</template>

<script>
  import { Toast,Dialog } from 'vant';
  export default {
    name: "addAndChangeAddress",
    data() {
      return {
        id:"",
        show: false,
        userInfo: {
          name: "",
          phone: "",
          code: "",
          address: "请选择",
          addressDetails: "",
          checked: false,
        }
      };
    },
    computed:{
      isTrue(){
        let {
          name,
          phone,
          address,
          addressDetails,
        } = this.userInfo;
        if(name && phone && address && addressDetails){
          return true
        }else {
          return false
        }
      },
    },
    methods: {
      showPopup() {
        this.show = true
      },

      hidePopup() {
        this.show = false
      },

      getArea(e) {
        this.userInfo.code = e.code;
        this.userInfo.address = e.name;
      },

      submit(is) {
        let {
          name,
          phone,
          address,
          addressDetails,
          checked,
        } = this.userInfo;
        if(!is){
          Toast('请完善数据');
          return
        }
        let params = {
          id:1,
          name,
          phone,
          address,
          addressDetails,
          checked,
        };
        this.$store.commit('addressList',params);
        Toast('添加成功');
        setTimeout(()=>{
          this.$router.back();
          this.userInfo = {}
        },1000)
      },
    },
    mounted() {
      if(window.location.href.split("?")[1]){
        this.id = window.location.href.split("?")[1].split('=')[1];
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

  .item {
    width: 100%;
    height: 13.33vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    background-color: white;
    padding: 0 3.2vw;
    box-sizing: border-box;
    border-bottom: 0.1vw solid #eeeeee;
    background-color: white;
  }

  .itemLeft {
    width: 16vw;
    font-size: 4vw;
    font-weight: 400;
    color: #666666;
    margin-right: 4.27vw;
  }

  .itemRight {
    flex: 1;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
  }

  .itemRightTitle {
    font-size: 4vw;
    font-weight: 400;
    color: #999999;
  }

  input::-webkit-input-placeholder {
    color: #999999;
  }

  .color {
    color: #333333;
  }

  .itemRightIcon {
    width: 5.87vw;
    height: 5.87vw;
    display: block;
    background-image: url("../../assets/image/icon_go_22_gray@2x.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center center;
  }

  .details{
    width: 100%;
    height: auto;
    padding: 4vw 3.2vw;
    box-sizing: border-box;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: row;
  }

  .textarea{
    flex: 1;
    min-height: 13.33vw;
    max-height: 24vw;
    font-size: 4vw;
    font-weight: 400;
    color: #333333;
  }

  textarea::-webkit-input-placeholder {
    color: #999999;
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
    margin-top: 9.87vw;
  }

  .submit {
    width: 91.47vw;
    height: 11.73vw;
    background: #A6A8B6;
    border-radius: 5.87vw;
    font-size: 4vw;
    font-weight: 500;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
  }

  .bc {
    background-color: #E2B575;
  }
</style>
