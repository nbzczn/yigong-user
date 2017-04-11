<template>
  <div>
    <blur :blur-amount=30 :url="avatar">
      <p class="center"><img :src="avatar"></p>
      <p class="center2"><span class="name" v-text="name ? name : mobile"></span></p>
    </blur>
    <card :header="{title:'我的积分'}">
      <div slot="content" class="card-demo-flex card-demo-content01">
        <div class="vux-1px-l vux-1px-r">
          <span>1130</span>
          <br/>
          天平金
        </div>
        <div class="vux-1px-r">
          <span>15</span>
          <br/>
          信用积分
        </div>
        <div class="vux-1px-r">
          <span>0</span>
          <br/>
          天平权益
        </div>
      </div>
    </card>
    <group>
      <cell title="个人信息" is-link></cell>
      <cell title="设置" is-link></cell>
      <cell title="2222" is-link></cell>
    </group>
  </div>
</template>
<script>
  import {Blur, Flexbox, FlexboxItem, Divider, Card, Cell, Group} from 'vux'
  import defgaultAvatar from '../assets/avatar/avatar_3.png'
  export default {
    data () {
      return {
        avatar: defgaultAvatar,
        name: '陈泽韦',
        mobile: '13777298437'
      }
    },
    components: {
      Blur,
      Flexbox,
      FlexboxItem,
      Divider,
      Card,
      Cell,
      Group
    }
  }
</script>

<style lang="less" ref="stylesheet/less">
  .weui-panel{
    margin: 0!important;
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
  .center2{
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
