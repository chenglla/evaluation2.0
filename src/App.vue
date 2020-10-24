<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="keepAlive"></router-view>
      <!--这里是会被缓存的组件-->
    </keep-alive>
    <router-view v-if="!keepAlive"></router-view>
    <router-view name="nav"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted () {
    if (localStorage.openid !== '') {
      this.$store.commit('SET_OPENID', localStorage.openid)
      return
    }
    if (document.cookie.split(';')[0].split('=')[1] !== '') {
      this.$store.commit('SET_OPENID', document.cookie.split(';')[0].split('=')[1])
    }

  },
  computed: {
    // openid () {
    //   return this.$store.state.user.openid
    // },
    keepAlive () {
      return this.$route.meta.keepAlive || false
    }
  },
}
</script>

<style>
  body{
    margin: 0;
    padding: 0;
  }
  html, body,
  #app{
    width: 100%;
    height: 100%;
    margin: 0;
  }
</style>
