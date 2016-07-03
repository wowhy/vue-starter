<template>
  <div class="container">
    <form class="form-login m-x-auto card-panel" v-loading="loading">
      <h2>登录系统</h2>
      <div class="row m-b-0">
        <div class="input-field col s12">
          <input name="username" type="text" v-model="userName">
          <label>用户名</label>
        </div>
      </div>
      <div class="row m-b-0">
        <div class="input-field col s12">
          <input name="password" type="password" v-model="password">
          <label>密码</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <a class="btn waves-effect waves-light col s12" @click="login">登录</a>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
  import PageBase from 'fx/page/base'
  import Auth from 'fx/auth'

  export default {
    extends: PageBase,
    name: 'login',
    auth: false,

    data() {
      return {
        userName: '',
        password: '',
        loading: false
      };
    },

    methods: {
      login() {
        this.loading = true;
        Auth.login(this.userName, this.password).then(() => {
          this.$router.go('/home');
          this.$dispatch('login');
        }, (error) => {
          window.alert(error);
        }).then(() => {
          this.loading = false;
        });
      }
    }
  };
</script>

<style>
  .form-login {
    max-width: 25rem;
    padding: 1rem 2rem;
  }
</style>
