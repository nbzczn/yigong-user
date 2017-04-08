<template>
  <div class="register-container">
    <group>
      <x-input type="text" is-type="china-mobile" keyboard="number" v-model="form.mobile" placeholder="请输入手机号码">
        <x-icon class="icon mobile" slot="label" type="iphone" size="24"></x-icon>
        <x-button type="primary"  mini slot="right"  class="send-btn">发送验证码</x-button>
      </x-input>
      <x-input type="text" keyboard="number" v-model="form.code" placeholder="请输入验证码">
        <x-icon class="icon mobile" slot="label" type="code-working" size="24"></x-icon>
      </x-input>
      <x-input type="password" placeholder="请输入密码" v-model="form.password">
        <x-icon class="icon password" slot="label" type="ios-locked" size="24"></x-icon>
      </x-input>
      <x-input type="password" placeholder="确认输入密码" v-model="form.repassword">
        <x-icon class="icon password" slot="label" type="ios-locked" size="24"></x-icon>
      </x-input>
    </group>
    <box gap="20px 10px">
      <x-button type="warn" class="login-btn">立即注册</x-button>
      <x-button type="warn" class="login-btn">已有账号？马上登录</x-button>
    </box>
  </div>
</template>
<script>
  import { Group, XInput, XButton, Box } from 'vux'
  export default {
    data () {
      return {
        form: {
          mobile: '',
          code: '',
          password: '',
          repassword: ''
        }
      }
    },
    components: {
      Group,
      XInput,
      XButton,
      Box
    }
  }
</script>

<style lang="less" ref="stylesheet/less">
  .register-container {
    margin-top: 30px;
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
  }
</style>
