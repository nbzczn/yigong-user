<template>
  <div class="login-container">
    <group>
      <x-input type="text" is-type="china-mobile" keyboard="number" v-model="form.username" placeholder="请输入手机号码">
        <x-icon class="icon mobile" slot="label" type="iphone" size="24"></x-icon>
      </x-input>
      <x-input type="password" placeholder="请输入密码" v-model="form.password">
        <x-icon class="icon password" slot="label" type="ios-locked" size="24"></x-icon>
      </x-input>
    </group>
    <box gap="10px 10px">
      <x-button type="warn" class="login-btn">登录</x-button>
      <x-button type="warn" @click.native="handleRegister" class="register-btn">没有账号？立即注册</x-button>
    </box>
  </div>
</template>
<script>
  import { mapActions } from 'vuex'
  import { USER_SIGNIN } from '../store/user'
  import { Group, XInput, XButton, Box } from 'vux'
  export default {
    data () {
      return {
        form: {
          username: '',
          password: ''
        }
      }
    },
    components: {
      Group,
      XInput,
      XButton,
      Box
    },
    methods: {
      ...mapActions([USER_SIGNIN]),
      handleRegister () {
        this.$router.replace({path: '/register'})
      },
      logIn () {
        if (!this.form.username) {
          return
        }
        if (!this.form.password) {
          return
        }
        this.USER_SIGNIN(this.form)
      }
    }
  }
</script>

<style lang="less" ref="stylesheet/less">
  .login-container {
    margin-top: 50px;
    .icon {
      display: block;
      padding-right: 10px;
      &.mobile {
        fill: orange;
      }
      &.password {
        fill: orange;
      }
    }
    .login-btn {
      margin-top: 20px;
      background-color: orange;
      border-color: orangered;
      color: white;
      &:active {
        background-color: orangered !important;
      }
    }
    .register-btn {
      margin-top: 20px;
      background-color: orangered;
      border-color: #09f;
      color: white;
      &:active {
        background-color: red !important;
      }
    }
  }
</style>
