<template>
  <div class="register-container">
    <group>
      <x-input type="text" is-type="china-mobile" keyboard="number" v-model="form.mobile" placeholder="请输入手机号码">
        <x-icon class="icon mobile" slot="label" type="iphone" size="24"></x-icon>
        <x-button :disabled="disabled || time > 0" type="primary" @click.native="handleSendCode" mini slot="right"
                  class="send-btn">{{text}}



        </x-button>
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
      <x-button type="warn" @click.native="handelRegister" class="login-btn">立即注册</x-button>
      <x-button type="warn" @click.native="handleToLogin" class="login-btn">已有账号？马上登录</x-button>
    </box>
  </div>
</template>
<script>
  import {Group, XInput, XButton, Box} from 'vux'
  import axios from 'axios'
  import {VerifyApi, UserApi} from '../configure/api'
  // 手机号匹配的正则表达式
  const mobileReg = /^1[3|4|5|7|8][0-9]{9}$/
  export default {
    data () {
      return {
        form: {
          mobile: '',
          code: '',
          password: '',
          repassword: ''
        },
        disabled: false,
        time: 0,
        second: 60
      }
    },
    components: {
      Group,
      XInput,
      XButton,
      Box
    },
    methods: {
      handelRegister () {
        if (!this.form.mobile) {
          this.$vux.toast.show({
            type: 'text',
            text: '请输入手机号',
            position: 'middle'
          })
          return
        }
        if (!mobileReg.test(this.form.mobile)) {
          this.$vux.toast.show({
            type: 'text',
            text: '请验证手机号码是否正确',
            position: 'middle'
          })
          return
        }
        if (!this.form.code) {
          this.$vux.toast.show({
            type: 'text',
            text: '请输入验证码',
            position: 'middle'
          })
          return
        }
        if (!this.form.password) {
          this.$vux.toast.show({
            type: 'text',
            text: '请输入密码',
            position: 'middle'
          })
          return
        }
        if (!this.form.repassword) {
          this.$vux.toast.show({
            type: 'text',
            text: '你输入重复密码',
            position: 'middle'
          })
          return
        }
        if (this.form.password !== this.form.repassword) {
          this.$vux.toast.show({
            type: 'text',
            text: '密码与重复密码不一致',
            position: 'middle'
          })
          return
        }
        axios.post(UserApi.register, {
          mobile: this.form.mobile,
          password: this.form.password,
          code: this.form.code
        }).then(() => {
          this.$vux.toast.show({
            type: 'text',
            text: '注册成功',
            position: 'middle'
          })
          this.$router.replace({path: '/login'})
        }).catch((err) => {
          console.log(err)
          this.$vux.toast.show({
            type: 'text',
            text: '服务器错误',
            position: 'middle'
          })
        })
      },
      handleToLogin () {
        this.$router.replace({path: '/login'})
      },
      handleSendCode () {
        if (!this.form.mobile) {
          this.$vux.toast.show({
            type: 'text',
            text: '手机号不能为空',
            position: 'middle'
          })
          return
        }
        if (!mobileReg.test(this.form.mobile)) {
          this.$vux.toast.show({
            type: 'text',
            text: '请检查手机号码是否正确',
            position: 'middle'
          })
          return
        }
        axios.post(VerifyApi.send, {
          mobile: this.form.mobile
        }).then(() => {
          this.$vux.toast.show({
            type: 'text',
            text: '验证码发送成功',
            position: 'middle'
          })
          this.disabled = true
          this.run()
        }).catch((err) => {
          console.log(err)
          this.$vux.toast.show({
            type: 'text',
            text: '验证码发送失败',
            position: 'middle'
          })
        })
      },
      run: function () {
        this.time = this.second
        this.timer()
      },
      timer: function () {
        if (this.time > 0) {
          this.time--
          setTimeout(this.timer, 1000)
        } else {
          this.disabled = false
        }
      }
    },
    computed: {
      text: function () {
        return this.time > 0 ? this.time + 's 后重新获取' : '获取验证码'
      }
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
