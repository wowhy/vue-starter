<template>
  <div class="app-login container">
    <form class="login-form" @submit.prevent="login">
        <div class="card is-fullwidth">
            <div class="card-content">
              <h1 class="title">登录系统</h1>

              <p class="control has-icon">
                <input class="input" type="email" placeholder="邮箱" required>
                <i class="fa fa-envelope"></i>
              </p>
              <p class="control has-icon">
                <input class="input" type="password" placeholder="密码" required>
                <i class="fa fa-lock"></i>
              </p>
              <p class="control">
                <button class="button is-success" type="submit">
                  登录
                </button>
              </p>
            </div>
        </div>    
      </form>
  </div>
</template>

<script>
  import auth from '../../utils/auth'

  export default {
    methods: {
      login() {
        auth.login('admin', 'admin').then(() => {
          this.$store.commit('authed', true)
        }, (result) => {
          console.log(result)
        })
      }
    }
  }
</script>

<style lang="scss">
  .app-login {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100%;
    .login-form {
      margin-left: auto;
      margin-right: auto;
      .card {
        width: 400px;
        /*height: 300px;*/
      }
    }
  }
</style>