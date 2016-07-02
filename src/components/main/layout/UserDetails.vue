<template>
  <li class="user-details cyan darken-2">
    <div class="row">
      <div class="col col s4 m4 l4">
        <img src="../../../assets/user.png" class="circle responsive-img valign profile-image"/>
      </div>
      <div class="col col s8 m8 l8">
        <ul id="profile-dropdown" class="dropdown-content">
          <li><a href="#"><i class="material-icons">face</i> Profile</a>
          </li>
          <li><a href="#"><i class="material-icons">live_help</i> Help</a>
          </li>
          <li class="divider"></li>
          <li><a href="#"><i class="material-icons">lock_outline</i> Lock</a>
          </li>
          <li><a href="#"><i class="material-icons">keyboard_tab</i> Logout</a>
          </li>
        </ul>
        <a class="btn-flat dropdown-button waves-effect waves-light white-text profile-btn"
           href="javascript:void(0);"
           data-activates="profile-dropdown">{{userName}}<i class="material-icons right">arrow_drop_down</i>
        </a>

        <p class="user-roal">{{roleName}}</p>
      </div>
    </div>
  </li>
</template>

<script>
  import Auth from 'fx/auth';

  export default {
    data() {
      return {
        userName: Auth.user.name,
        roleName: Auth.user.roleName
      };
    }
  };
</script>

<style>
  li.user-details {
    background: url("../../../assets/user-bg.jpg") no-repeat center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    margin-bottom: 15px;
    padding: 15px 0 0 15px !important;
  }

  li.user-details #profile-dropdown li:not(.divider) {
    min-height: 42px;
  }

  li.user-details #profile-dropdown a {
    padding-left: 15px;
  }

  li.user-details .profile-btn {
    margin: 0 !important;
    padding: 0 !important;
    text-transform: capitalize;
    text-shadow: 1px 1px 1px #444;
    font-size: 15px;
  }

  li.user-details .user-roal {
    color: #fff;
    margin-top: -16px;
    font-size: 13px;
    text-shadow: 1px 1px 1px #444;
  }

  li.user-details .user-details .row {
    margin: 0;
  }
</style>
