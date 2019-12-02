<template>
    <!-- 登陆页面 -->
    <div class="page-login">
        <!-- 登陆头部 -->
        <div class="login-header">
            <a href="http://www.meituan.com" class="logo"></a>
        </div>
        <!-- 登陆内容 -->
        <div class="login-panel">
            <!-- 左侧图片部分 -->
            <div class="banner">
                <img src="//s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg" width="480" height="370" alt="美团网">
            </div>
            <!-- 账号登陆 -->
            <div class="form">
                <h4 v-if="error" class="tips">
                    <i></i>
                    {{error}}
                </h4>
                <p class='from-top'>
                    <span>账号登陆</span>
                </p>
                <el-input :class="{'error': error && !userName}" v-model="userName" placeholder="账号" prefix-icon='profile'></el-input>
                <el-input :class="{'error': error && !password}" v-model="password" placeholder="密码" type='password' prefix-icon='password'></el-input>
                <div class='foot'>
                    <a>忘记密码?</a>
                </div>
                <el-button type="primary" class="btn-login" @click="submit">登陆</el-button>
                <p class="reg">
                    <span>还没有账号？</span>
                    <router-link :to="{name: 'register'}">免费注册</router-link>
                </p>
                <div class="oauth-wrapper J-oauth-wrapper">
                    <h3 class="title-wrapper"><span class="title">用合作网站账号登录</span></h3>
                    <div class="oauth cf">
                        <span class="oauth__link oauth__link--qq third-login-btn" data-href="/account/connect/tencent" target="_blank" id="J-third-tencent"></span>
                        <span class="oauth__link oauth__link--weibo third-login-btn" data-href="/account/connect/sina" target="_blank" id="J-third-sina"></span>
                    </div>
                    <i id="thirdLoginRiskpartner" data-riskpartner="0"></i>
                </div>
            </div>
        </div>
        <!-- 登陆底部 -->
        <footer>
            <ul>
                <li><a href="#">关于我们</a></li>
                <li><a href="#">加入我们</a></li>
                <li><a href="#">商家入驻</a></li>
                <li><a href="#">帮助中心</a></li>
                <li><a href="#">美团手机版</a></li>
            </ul>
            <p>
                ©2019 美团网团购 meituan.com 京ICP证070791号 京公网安备11010502025545号
            </p>
        </footer>
    </div>
</template>

<script>
import api from '@/api/index.js'

export default {
    data(){
        return {
            userName: '',
            password: '',
            error: ''
        }
    },
    methods: {
        // 校验账号
        submit() {
            console.log(this.userName, this.password)
            if(!this.userName){
                this.error = '请输入账号';
                return false;
            }
            if(!this.password){
                this.error = '请输入密码';
                return false;
            }
            api.login({
                userName: this.userName,
                password: this.password
            }).then(res => {
                console.log(res);
                if(res.data.status == 'success'){
                    this.$router.push({name: 'index'})
                } else {
                    this.error = res.data.msg;
                }

            })
        }
    }
}
</script>

<style lang='scss'>
@import '@/assets/css/login/index.scss';
</style>