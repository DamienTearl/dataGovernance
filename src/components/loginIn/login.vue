<template>
  <el-container class="loginPage">
    <el-header>
      <el-row class="headerBox clearfix">
        <img class="logoBox" src="@/assets/images/gbicclogo_s1.png" alt="">
        <img class="logoTextBox" src="@/assets/images/login_titile_text.png" alt="">
      </el-row>
    </el-header>
    <el-main>
      <el-row class="loginFromBox">
        <el-row class="fromBox">
          <el-row class="form-title">
            数据治理平台登录
          </el-row>
          <el-form :model="formData"  :rules="rules">
            <el-form-item prop="userName">
              <el-input 
                prefix-icon="icon-login_user iconfonts" 
                v-model="formData.userName" 
                placeholder="请输入用户名" 
                style="width:100%"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item prop="userPass">
              <el-input 
                type="password"
                prefix-icon="icon-login_key iconfonts" 
                v-model="formData.userPass" 
                placeholder="请输入密码" 
                style="width:100%"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-button @click="handleSubmit">登录</el-button>
            </el-form-item>
          </el-form>
        </el-row>
      </el-row>
    </el-main>
    <el-footer>
      <p>Copyright© 2002 - 2015 吉贝克信息技术有限公司</p>
      <p>www.gbicc.net 版权所有®京ICP备05030832号</p>
    </el-footer>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        userName: '',
        userPass: ''
      },
      rules: {
        userName: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
        ],
        userPass: [
          { required: true, message: '请输入用户密码', trigger: 'blur' },
        ]
      }
    }
  },
  methods: {
    handleSubmit () {
      let token = JSON.stringify(this.formData)
      window.sessionStorage.setItem('token', token)
      this.$router.push('/homepage')
    }
  }
}
</script>

<style>
.el-header img {
  line-height: 80px;
}
.el-header .headerBox {
  width: 1200px;
  padding: 10px 0;
  margin: auto;
}
.logoBox {
  float: left;
}
.logoTextBox {
  float: right;
  margin-top: 8px;
}
.loginPage .el-main {
  height: calc(100% - 194px);
}
.loginPage .el-footer, .loginPage .el-header {
  height: auto!important;
  padding: 15px 0;
}
.el-footer p {
  line-height: 2em;
}
.loginPage > .el-main {
  overflow: hidden;
  padding: 0;
  background: url('~@/assets/images/login_bg.jpg');
  background-size: cover;
}
.loginFromBox {
  width: 1200px;
  height: 100%;
  margin: auto;
  position: relative;
}
.loginFromBox .fromBox {
  width: 360px;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  padding: 20px 40px;
  background-color: #e7e8ec;
  border-radius: 10px;
}
.loginFromBox .fromBox .form-title {
  font-size: 22px;
  font-weight: 540;
  letter-spacing: 5px;
  border-bottom: 1px solid #cacacc;
  padding-bottom: 15px;
  margin-bottom: 20px;
}
.loginFromBox .fromBox .iconfonts {
  font-size: 18px;
  vertical-align: -3px;
  color: #919191;
}
.loginFromBox .el-input--prefix .el-input__inner {
  padding-left: 35px;
}
.loginFromBox .el-input__prefix {
  left: 10px;
}
.loginFromBox .el-form-item:last-child {
  margin-bottom: 0;
  margin-top: 30px;
}
.loginFromBox .el-button {
  width: 100%;
  background-color: #1285e0;
  color: #fff;
}
</style>
