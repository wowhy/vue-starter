<template>
  <div class="row page-login">
    <div class="col s12 z-depth-4 card-panel">
      <form class="login-form">
        <div class="row">
          <div class="input-field col s12 center">
            <img alt="" class="circle responsive-img valign profile-image-login">

            <p class="center login-form-text">登录系统</p>
          </div>
        </div>
        <div class="row margin">
          <div class="input-field col s12">
            <i class="material-icons prefix">person_outline</i>
            <input id="username" type="text">
            <label for="username" class="center-align">用户名</label>
          </div>
        </div>
        <div class="row margin">
          <div class="input-field col s12">
            <i class="material-icons prefix">lock_outline</i>
            <input id="password" type="password">
            <label for="password">密码</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12 m12 l12  login-text">
            <input type="checkbox" id="remember-me"/>
            <label for="remember-me">下次自动登录</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <a @click="onLoginClick" class="btn waves-effect waves-light col s12">登录</a>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s6 m6 l6">
            <p class="margin medium-small"><a v-link="{ path: '/register' }">注册账号!</a></p>
          </div>
          <div class="input-field col s6 m6 l6">
            <p class="margin right-align medium-small"><a href="page-forgot-password.html">忘记密码 ?</a></p>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import Auth from 'fx/auth';
  import PageBase from 'fx/page/base';

  export default {
    extends: PageBase,

    name: 'login',
    authed: false,
    methods: {
      onLoginClick: function handler() {
        Auth.login();
      }
    }
  };
</script>

<style>
  .page-login {
    width: 380px;
  }

  .login-form {
    width: 350px;
  }

  .login-form-text {
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  .profile-image-login {
    width: 100px;
    height: 100px !important;
  }

  .login-text {
    margin-top: -6px;
    margin-left: -6px !important;
  }
</style>
