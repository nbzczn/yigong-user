<template>
  <div>
    <x-header>基本资料</x-header>
    <group>
      <x-input title="姓名" v-model="real_name"></x-input>
      <x-input title="身份证号" v-model="card_id"></x-input>
      <selector title="性别" v-model="gender"
                :options="[{key: '',  value:'请选择'},{key:'M',value:'男'},{key:'F',value: '女'}]"></selector>
      <x-textarea title="地址" v-model="address"></x-textarea>
    </group>
    <box gap="20px 10px">
      <x-button text="提交资料" type="warn" @click.native="handleSubmit"></x-button>
    </box>
  </div>
</template>
<script>
  import {Cell, Group, XInput, Selector, XTextarea, XButton, Box, XHeader} from 'vux'
  import axios from 'axios'
  import {UserApi} from '@/configure/api'
  export default {
    data () {
      return {
        real_name: '',
        card_id: '',
        gender: '',
        address: ''
      }
    },
    mounted: function () {
      this.getBaseInfo()
    },
    methods: {
      getBaseInfo () {
        const user = localStorage.getItem('user')
        const accessToken = JSON.parse(user).access_token
        axios.get(UserApi.profile, {
          headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + accessToken
          }
        }).then((res) => {
          if (res.data.data) {
            this.real_name = res.data.data.real_name
            this.card_id = res.data.data.card_id
            this.gender = res.data.data.gender
            this.address = res.data.data.address
          }
        }).catch(() => {
          this.$vux.toast.show({
            type: 'text',
            text: '获取信息失败',
            position: 'middle'
          })
        })
      },
      handleSubmit () {
        if (!this.real_name) {
          this.$vux.toast.show({
            type: 'text',
            text: '姓名必须填写',
            position: 'middle'
          })
          return
        }
        if (!this.card_id) {
          this.$vux.toast.show({
            type: 'text',
            text: '身份证号码必须填写',
            position: 'middle'
          })
          return
        }
        if (!this.gender) {
          this.$vux.toast.show({
            type: 'text',
            text: '请选择您的性别',
            position: 'middle'
          })
          return
        }
        if (!this.address) {
          this.$vux.toast.show({
            type: 'text',
            text: '请填写地址',
            position: 'middle'
          })
          return
        }
        const user = localStorage.getItem('user')
        const accessToken = JSON.parse(user).access_token
        axios.put(UserApi.updateProfile, {
          real_name: this.real_name,
          card_id: this.card_id,
          gender: this.gender,
          address: this.address
        }, {
          headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + accessToken
          }
        }).then(() => {
          this.$vux.toast.show({
            type: 'text',
            text: '修改成功',
            position: 'middle'
          })
          this.$router.back()
        }).catch((err) => {
          console.log(err)
          this.$vux.toast.show({
            type: 'text',
            text: '修改失败',
            position: 'middle'
          })
        })
      }
    },
    components: {
      Cell,
      Group,
      XInput,
      Selector,
      XTextarea,
      XButton,
      Box,
      XHeader
    }
  }
</script>

<style lang="less" ref="stylesheet/less">

</style>
