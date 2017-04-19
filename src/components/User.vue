<template>
  <div>
    <x-header :left-options="{showBack: false}">个人中心</x-header>
    <blur :blur-amount=30 :url="avatar">
      <p class="center"><img :src="avatar"></p>
      <p class="center2"><span class="name" v-text="name ? name : mobile"></span></p>
    </blur>
    <card :header="{title:'我的积分'}">
      <div slot="content" class="card-demo-flex card-demo-content01">
        <div class="vux-1px-l vux-1px-r">
          <span v-text="tpj"></span>
          <br/>
          天平金









        </div>
        <div class="vux-1px-r">
          <span v-text="tpxy"></span>
          <br/>
          信用积分









        </div>
        <div class="vux-1px-r">
          <span v-text="tpqy"></span>
          <br/>
          天平权益









        </div>
      </div>
    </card>
    <group>
      <cell title="个人资料" :link="{path: '/profileinfo'}" is-link></cell>
    </group>
    <group>
      <cell title="成为义工" :link="{path:'/beyigong'}" is-link></cell>
    </group>
    <group>
      <cell>
        <div slot="child" class="logout">退出登录</div>
      </cell>
    </group>
  </div>
</template>
<script>
  import {Blur, Flexbox, FlexboxItem, Divider, Card, Cell, Group, XHeader} from 'vux'
  import axios from 'axios'
  import {UserApi} from '@/configure/api'
  import defgaultAvatar from '../assets/avatar/avatar_3.png'
  export default {
    data () {
      return {
        avatar: defgaultAvatar,
        name: '',
        mobile: '',
        tpj: 1500,
        tpxy: 2000,
        tpqy: 210
      }
    },
    beforeMount: function () {
      this.getUser()
    },
    methods: {
      getUser: function () {
        const user = localStorage.getItem('user')
        const accessToken = JSON.parse(user).access_token
        axios.get(UserApi.detail, {
          headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + accessToken
          }
        }).then((res) => {
          if (res.data.user) {
            this.mobile = res.data.user.mobile
            if (res.data.user.profile) {
              this.name = res.data.user.profile.real_name
            }
          }
        }).catch((err) => {
          console.log(err)
          this.$vux.toast.show({
            type: 'text',
            text: '获取信息失败',
            position: 'middle'
          })
        })
      }
    },
    components: {
      Blur,
      Flexbox,
      FlexboxItem,
      Divider,
      Card,
      Cell,
      Group,
      XHeader
    }
  }
</script>

<style lang="less" ref="stylesheet/less">
  .logout {
    width: 100%;
    height: 100%;
    text-align: center;
    color: red;
  }

  .weui-panel {
    margin: 0 !important;
  }

  .center {
    text-align: center;
    padding-top: 20px;
    color: #fff;
    font-size: 18px;
    img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      border: 4px solid #ececec;
    }
  }

  .center2 {
    text-align: center;
    font-size: 16px;
    color: #222;
    margin-top: 10px;
  }

  .card-demo-flex {
    display: flex;
  }

  .card-demo-content01 {
    padding: 10px 0;
  }

  .card-padding {
    padding: 15px;
  }

  .card-demo-flex > div {
    flex: 1;
    text-align: center;
    font-size: 12px;
  }

  .card-demo-flex span {
    color: #f74c31;
  }
</style>
