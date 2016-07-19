<template>
  <div>
    <div class="account-pages"></div>
    <div class="clearfix"></div>
    <div class="wrapper-page">
      <div class="text-center">
        <a v-link="{ name: 'home' }" class="logo"><span>Admin<span>to</span></span></a>
        <h5 class="text-muted m-t-0 font-600">Responsive Admin Dashboard</h5>
      </div>
      <div class="m-t-40 card-box">
        <div class="text-center">
          <h4 class="text-uppercase font-bold m-b-0">登录系统</h4>
        </div>
        <div class="panel-body">
          <form class="form-horizontal m-t-20">

            <div class="form-group ">
              <div class="col-xs-12">
                <input class="form-control" type="text" required="" placeholder="用户名" v-model="username">
              </div>
            </div>

            <div class="form-group">
              <div class="col-xs-12">
                <input class="form-control" type="password" required="" placeholder="密码" v-model="password">
              </div>
            </div>

            <div class="form-group ">
              <div class="col-xs-12">
                <div class="checkbox checkbox-custom">
                  <input id="checkbox-signup" type="checkbox">
                  <label for="checkbox-signup"> 记住我 </label>
                </div>

              </div>
            </div>

            <div class="form-group text-center m-t-30">
              <div class="col-xs-12">
                <a class="btn btn-custom btn-bordred btn-block waves-effect waves-light" @click="login">登录</a>
              </div>
            </div>

            <div class="form-group m-t-30 m-b-0">
              <div class="col-sm-12">
                <a href="page-recoverpw.html" class="text-muted"><i class="fa fa-lock m-r-5"></i> 忘记密码?</a>
              </div>
            </div>
          </form>

        </div>
      </div>
      <!-- end card-box-->

      <div class="row">
        <div class="col-sm-12 text-center">
          <p class="text-muted">没有账号? <a href="page-register.html" class="text-primary m-l-5"><b>注册账号</b></a></p>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import Auth from '../../utils/auth'
  import {
    updateAuthed
  } from '../../vuex/actions'

  export default {
    data() {
      return {
        username: 'admin',
        password: 'admin'
      }
    },

    methods: {
      login() {
        Auth.login(this.username, this.password).then(() => {
          this.updateAuthed(true)
          this.$route.router.go({ name: 'home' })
        }, (result) => {
          window.alert(result.message)
        })
      }
    },

    vuex: {
      actions: {
        updateAuthed: updateAuthed
      }
    },

    ready() {
      Auth.logout()
      this.updateAuthed(false)
    }
  }
</script>