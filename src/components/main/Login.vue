<template>
  <div class="container">
    <form class="form-login m-x-auto card-panel">
      <h2>登录系统</h2>
      <div class="row m-b-0">
        <div class="input-field col s12">
          <input type="text">
          <label>用户名</label>
        </div>
      </div>
      <div class="row m-b-0">
        <div class="input-field col s12">
          <input name="password" type="password">
          <label>密码</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field">
          <input type="checkbox" id="remember-me"/>
          <label for="remember-me">记住登录</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <a class="btn waves-effect waves-light col s12">登录</a>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
  import PageBase from 'fx/page/base';

  export default {
    extends: PageBase,
    name: 'login',
    auth: false
  };
</script>

<style>
  .form-login {
    max-width: 25rem;
    padding: 4rem 1rem 1rem;
  }
</style>
