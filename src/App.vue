<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style lang="less">
  @import '~vux/src/styles/reset.less';
  html,body{
    width: 100%;
    height: 100%;
  }
  body {
    background-color: #fbf9fe;
  }
  #app-box{
    width: 100%;
    height: 100%;
  }
</style>
