<template>
  <!-- 注册页面 -->
  <div class="page-register">
    <!-- 注册头部 -->
    <div class="header">
      <header>
        <a href="#" class="site-logo"></a>
        <div class="login">
          <span>已有美团账号</span>
          <router-link :to="{name: 'login'}">登陆</router-link>
        </div>
      </header>
    </div>
    <!-- 注册表单部分 -->
    <div class="content">
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名" prop="userName">
          <el-input type="text" v-model="ruleForm.userName" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="ruleForm.password" autocomplete="off" @input="input"></el-input>
          <div class="pw-strength">
            <div :class="['bar', strengthClass]"></div>
            <div class="letter">
              <span>弱</span>
              <span>中</span>
              <span>强</span>
            </div>
          </div>
        </el-form-item>
        <el-form-item label="确认密码" prop="rePassword">
          <el-input type="password" v-model="ruleForm.rePassword" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!-- 注册底部 -->
    <footer>
      <p>©meituan.com 京ICP证070791号 京公网安备11010502025545号</p>
    </footer>
  </div>
</template>

<script>
import api from '@/api/index.js'

export default {
  data() {
    var validateUser = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else if (value.length < 4 || value.length > 16) {
        callback(new Error("用户名必须为4-16位的字母数字下划线组成"));
      } else {
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else if (value.length < 6 || value.length > 16) {
        callback(new Error("密码必须为6-16位的字母数字下划线组成"));
      } else {
        if (this.ruleForm.rePassword !== "") {
          this.$refs.ruleForm.validateField("rePassword");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        userName: "",
        password: "",
        rePassword: ""
      },
      strengthClass: "",
      rules: {
        userName: [{ validator: validateUser, trigger: "blur" }],
        password: [{ validator: validatePass, trigger: "blur" }],
        rePassword: [{ validator: validatePass2, trigger: "blur" }]
      }
    };
  },
  methods: {
      submitForm(formName) {
          this.$refs[formName].validate(vaild => {
              if (vaild) {
                  api.register(this.ruleForm).then(res => {
                      if (res.data.status == 'success'){
                          this.$router.push({name: 'login'})
                          this.$store.commit('setUserName', this.ruleForm.userName)
                      } else {
                          alert(res.data.msg);
                      }
                  })
              } else {
                  console.log('error');
                  return false;
              }
          })
      },
      input() {
          if(this.ruleForm.password.length <= 8){
              this.strengthClass = 'weak';
          } else if (this.ruleForm.password.length > 8 && this.ruleForm.password.length < 12){
              this.strengthClass = 'normal';
          } else if (this.ruleForm.password.length > 12) {
              this.strengthClass = 'strong';
          } else if (!this.ruleForm.password){
              this.strengthClass = '';
          }
      }
  }
};
</script>

<style lang='scss'>
@import "@/assets/css/register/index.scss";
</style>