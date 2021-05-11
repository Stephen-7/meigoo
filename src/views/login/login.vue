<template>
  <div class="view">
    <p class="title">登录</p>
    <div class="item" style="margin-top: 9vw">
      <input class="input" placeholder="请输入手机号" v-model="phone" maxlength="11"
             oninput="value=value.replace(/[^\d]/g,'')" type="text">
      <van-icon size="25" v-show="phone" @click.stop="cancels" :name="cancel"/>
    </div>
    <div class="item">
      <input class="input" placeholder="请输入验证码" v-model="code" maxlength="6" oninput="value=value.replace(/[^\d]/g,'')"
             type="text">
      <p class="code" @click="getCode">{{codeName}}</p>
    </div>
    <div class="select">
      <van-checkbox v-model="checked" icon-size="18px" checked-color="#E2B575"></van-checkbox>
      <p class="selectTitle">请勾选同意<span class="selectProtocol" @click="toServiceAgreement">《美购时代服务协议》</span></p>
    </div>
    <div class="submit" @click="submit">登录</div>
    <div class="loginType">
      <div class="loginTypeTop">
        <span class="loginTypeLess"></span>
        <span class="loginTypeName">其他方式登录</span>
        <span class="loginTypeLess"></span>
      </div>
      <div class="loginBottom">
        <img class="loginBottomIcon" src="../../assets/image/icon_wechat_27_green@2x.png" alt="">
        <p class="loginBottomTitle">使用微信登录</p>
      </div>
    </div>
    <div class="showView" v-show="isAccept">
      <div class="showToast">
        <p class="showToastTitle">温馨提示</p>
        <p class="showToastText">感谢您下载环球美购时代App，我们非常重视您的个人信息和隐私保护。为了更好地保障您的权益，请您认真阅读<span class="showToastContent">《用户协议和隐私政策》</span> 的全部内容，同意并接受全部条款后开始使用我们的产品和服务。</p>
        <div class="showToastItem">
          <p class="showToastItemLeft" @click="accept">不同意</p>
          <p class="showToastItemRight" @click="accept">同意并继续</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {Toast} from 'vant';
  export default {
    name: "login",
    data() {
      return {
        cancel: require('@/assets/image/icon_close_22_cicle@2x.png'),
        phone: "",
        code: "",
        codeState: true,
        codeName: "获取验证码",
        checked: false,
        isAccept:true,
      }
    },
    methods: {
      accept(){
        this.isAccept = false
      },

      cancels() {
        this.phone = "";
      },

      getCode() {
        let num = "";
        let count = 60;
        let codeArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        if (!this.phone) {
          Toast('请输入手机号码');
          return
        }
        if (this.codeState) {
          for (let i = 0; i < 6; i++) {
            let randomIndex = Math.floor(Math.random() * 10);
            num += codeArr[randomIndex];
          }
          setTimeout(() => {
            this.code = num;
          }, 4000);
          this.codeState = false;
          let times = setInterval(() => {
            count--;
            this.codeName = count + "s";
            if (count <= 0) {
              this.codeName = "重新获取";
              this.codeState = true;
              clearInterval(times);
            }
          }, 1000)
        } else {
          Toast('请勿重复操作');
        }
      },

      submit() {
        let {phone, code, checked} = this;
        if (!phone) {
          Toast('请输入手机号码');
          return
        }
        if (!code) {
          Toast('请输入验证码');
          return
        }
        if (!checked) {
          Toast('请勾选服务协议');
          return
        }
        Toast('登录成功');
        let userInfo = {
          "phone": phone,
          "name": "Stephen",
          "avatar": require('@/assets/image/touxiang.jpg'),
          "grade": "2",
        };
        let token = "token-PBxfOVrxbiReytchFNuxjsZxQQOkyVsKIYUFIfkDIhqGDMFs";
        sessionStorage.setItem('userInfo', JSON.stringify(userInfo));
        sessionStorage.setItem('token', token);
        setTimeout(() => {
          this.$router.push("/home");
          this.phone = "";
          this.code = "";
          this.checked = false;
        }, 2000)
      },

      toServiceAgreement() {

      },
    },
    mounted() {
      // console.log(this.$route.query.id);
    }
  }
</script>

<style scoped>
  .view {
    width: 100%;
    min-height: 100vh;
    padding: 0 7.2vw;
    box-sizing: border-box;
    background-color: #FFFFFF;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    position: relative;
  }

  .title {
    margin-top: 20vw;
    font-size: 6.4vw;
    font-weight: bold;
    color: #333333;
  }

  .item {
    width: 100%;
    height: 13.6vw;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    border-bottom: 0.1vw solid #eeeeee;
  }

  .input {
    flex: 1;
    height: 10vw;
    padding-right: 2vw;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 4.27vw;
    font-weight: 400;
    color: #333333;
  }

  .code {
    width: 28vw;
    height: 8vw;
    font-size: 3.8vw;
    font-weight: 400;
    color: #333333;
    display: flex;
    align-items: center;
    justify-content: center;
    border-left: 0.1vw solid #eeeeee;
  }

  .select {
    width: 100%;
    height: 5vw;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    margin-top: 10vw;
  }

  .selectTitle {
    font-size: 3.2vw;
    font-weight: 400;
    color: #999999;
    margin-left: 2vw;
  }

  .selectProtocol {
    font-size: 3.2vw;
    font-weight: 400;
    color: #333333
  }

  .submit {
    width: 86vw;
    height: 10.67vw;
    margin-top: 4.27vw;
    background-color: #E2B575;
    border-radius: 5.33vw;
    font-size: 4vw;
    font-weight: 500;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .loginType {
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: absolute;
    bottom: 20vw;
    left: 0;
  }

  .loginTypeTop {
    width: 100%;
    height: 5vw;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
  }

  .loginTypeLess {
    width: 28.4vw;
    height: 0.13vw;
    background-color: #EEEEEE;
  }

  .loginTypeName {
    font-size: 3.47vw;
    font-weight: 400;
    color: #999999;
    margin: 0 3vw;
  }

  .loginBottom {
    width: 68vw;
    height: 11.73vw;
    background: #F8F8F8;
    border-radius: 7.47vw;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    margin-top: 6.4vw;
  }

  .loginBottomIcon {
    width: 7vw;
    height: 7vw;
    display: block;
  }

  .loginBottomTitle {
    font-size: 4vw;
    font-weight: 400;
    color: #666666;
    margin-left: 1.8vw;
  }
  .showView{
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top:0;
    left: 0;
    z-index: 111;
    background-color: rgba(0,0,0,0.3);
  }

  .showToast{
    width: 70vw;
    height: auto;
    padding: 5.4vw;
    background: #FFFFFF;
    border-radius: 1.07vw;
  }

  .showToastTitle{
    width: 100%;
    text-align: center;
    font-size: 5vw;
    font-weight: bold;
    color: #333333;
  }

  .showToastText{
    font-size: 4vw;
    font-weight: 400;
    color: #333333;
    margin-top: 4.27vw;
  }

  .showToastContent{
    font-size: 4vw;
    font-weight: 400;
    color: #FF7900;
  }

  .showToastItem{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    margin-top: 6.4vw;
  }

  .showToastItemLeft{
    width: 33.07vw;
    height: 11.73vw;
    border-radius: 5.87vw;
    border: 0.13vw solid #D6D6D6;
    font-size: 4.27vw;
    font-weight: 400;
    color: #333333;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 3vw;
  }

  .showToastItemRight{
    width: 33.07vw;
    height: 11.73vw;
    border-radius: 5.87vw;
    font-size: 4.27vw;
    font-weight: 400;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #E2B575;;
  }
</style>
