<template>
  <div class="view">
    <cpGlobalTitle :is-back="true" :isTitle="'支付方式'"/>
    <div class="totalAmount">
      <p class="totalAmountTitle">合计金额</p>
      <p class="totalAmountNum">¥830.56</p>
    </div>
    <div class="selectType">
      <div class="selectTypeTop">
        <p class="selectTypeTopTitle">支付方式</p>
      </div>
      <div class="selectTypeItem">
        <div class="selectTypeItemLeft">
          <img class="selectTypeItemLeftImg" src="../../assets/image/icon_wechatpay_20_green@2x.png" alt="">
          <span class="selectTypeItemLeftTitle">微信支付</span>
        </div>
        <van-checkbox v-model="checked1" @click="change(1)" checked-color="#E2B575"></van-checkbox>
      </div>
      <div class="selectTypeItem">
        <div class="selectTypeItemLeft">
          <img class="selectTypeItemLeftImg" src="../../assets/image/icon_alipay_24_blue@2x.png" alt="">
          <span class="selectTypeItemLeftTitle">支付宝支付</span>
        </div>
        <van-checkbox v-model="checked2" @click="change(2)" checked-color="#E2B575"></van-checkbox>
      </div>
    </div>
    <div class="selectType">
      <div class="selectTypeTop">
        <p class="selectTypeTopTitle">可用优惠（只可选一种）</p>
      </div>
      <div class="selectTypeItem">
        <div class="selectTypeItemLeft">
          <img class="selectTypeItemLeftImg" src="../../assets/image/icon_redbag_20@2x.png" alt="">
          <span class="selectTypeItemLeftTitle">红包（可抵扣 ¥20.00）</span>
        </div>
        <van-checkbox v-model="checked3" @click="change(3)" checked-color="#E2B575"></van-checkbox>
      </div>
      <div class="selectTypeItem">
        <div class="selectTypeItemLeft">
          <img class="selectTypeItemLeftImg" src="../../assets/image/icon_integral_20@2x.png" alt="">
          <span class="selectTypeItemLeftTitle">积分（可抵扣 ¥40.00） </span>
        </div>
        <van-checkbox v-model="checked4" @click="change(4)" checked-color="#E2B575"></van-checkbox>
      </div>
    </div>
    <div class="selectPayment" @click="submit">去支付</div>
  </div>
</template>

<script>
  import {Toast} from 'vant';
  export default {
    name: "payment",
    data() {
      return {
        index:"",
        checked1: false,
        checked2: false,
        checked3: false,
        checked4: false,
        paymentArr:['微信',"支付宝","红包","积分"],
      }
    },

    methods: {
      change(index) {
        this.index = index;
        switch (index) {
          case 1:
            this.checked1 = true;
            this.checked2 = false;
            this.checked3 = false;
            this.checked4 = false;
            break;
          case 2:
            this.checked1 = false;
            this.checked2 = true;
            this.checked3 = false;
            this.checked4 = false;
            break;
          case 3:
            this.checked1 = false;
            this.checked2 = false;
            this.checked3 = true;
            this.checked4 = false;
            break;
          case 4:
            this.checked1 = false;
            this.checked2 = false;
            this.checked3 = false;
            this.checked4 = true;
            break;
          default:
        }
      },

      submit(){
        let index = this.index;
        let paymentArr = this.paymentArr;
        if(!index){
          Toast('请选择支付方式');
          return
        }
        console.log(index,paymentArr[index-1]);
        this.$store.commit('showLoading');
        setTimeout(()=>{
          this.$store.commit('hideLoading');
          Toast('支付成功');
          this.$router.push('/commodityOrder?type=2')
        },3000);
      },
    }
  }
</script>

<style scoped>
  .view {
    width: 100%;
    min-height: 100vh;
    background-color: #F8F8F8;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    box-sizing: border-box;
  }

  .totalAmount {
    width: calc(100% - 6.4vw);
    height: 28.8vw;
    margin: 2.67vw 3.2vw 0 3.2vw;
    background: #FFFFFF;
    border-radius: 1.07vw;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .totalAmountTitle {
    width: 100%;
    font-size: 3.47vw;
    font-weight: 400;
    color: #666666;
    text-align: center;
  }

  .totalAmountNum {
    width: 100%;
    font-size: 9.6vw;
    font-weight: 500;
    color: #333333;
    text-align: center;
    margin-top: 2.13vw;
  }

  .selectType {
    width: calc(100% - 6.4vw);
    height: auto;
    margin: 2.67vw 3.2vw 0 3.2vw;
    background: #FFFFFF;
    border-radius: 1.07vw;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
  }

  .selectTypeTop {
    width: 100%;
    height: 14.67vw;
    background: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  .selectTypeTopTitle {
    font-size: 4vw;
    font-weight: 500;
    color: #333333;
    padding-left: 4vw;
  }

  .selectTypeItem {
    width: 100%;
    height: 13.33vw;
    padding: 3.2vw;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
  }

  .selectTypeItemLeft {
    width: auto;
    display: flex;
    flex-direction: row;
  }

  .selectTypeItemLeftImg {
    width: 5.33vw;
    height: 5.33vw;
    display: block;
    margin-right: 2.13vw;
  }

  .selectTypeItemLeftTitle {
    font-size: 4vw;
    font-weight: 400;
    color: #333333;
  }

  .selectPayment {
    width: 92vw;
    height: 10.67vw;
    margin: 8vw 4vw 0 4vw;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #E2B575;
    font-size: 4vw;
    font-weight: 500;
    color: #FFFFFF;
    border-radius: 6vw;
  }
</style>
