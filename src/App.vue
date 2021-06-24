<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    
    <MainTarItem></MainTarItem>
    
  </div>
</template>

<script>

import MainTarItem from 'components/context/MainTabar/MainTabar'
export default {


  name: 'App',
  components: {
    MainTarItem
  }
}
</script>

<style>
@import 'assets/css/base.css'
</style>
