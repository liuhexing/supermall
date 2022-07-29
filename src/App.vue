<template>
  <div id="app">

    <router-view/>
    <!-- 底部 -->
      <tab-bar>
        <tab-bar-item  path="home" activeColor="blue">
          <img slot="item-icon" src="~assets/img/tabbar/12.gif"/>
          <img slot="item-icon-active" src="~assets/img/tabbar/36.jpg"/>
          <div slot="item-text">首页</div>
        </tab-bar-item>
        <tab-bar-item  path="category">
          <img slot="item-icon" src="~assets/img/tabbar/12.gif"/>
          <img slot="item-icon-active" src="~assets/img/tabbar/36.jpg"/>

          <div slot="item-text">分类</div>
        </tab-bar-item>
        <tab-bar-item  path="cart">
          <img slot="item-icon" src="~assets/img/tabbar/12.gif"/>
           <img slot="item-icon-active" src="~assets/img/tabbar/36.jpg"/>
          <div slot="item-text">购物车</div>
        </tab-bar-item>
        <tab-bar-item path="profile">
          <img slot="item-icon" src="~assets/img/tabbar/12.gif"/>
           <img slot="item-icon-active" src="~assets/img/tabbar/36.jpg"/>
          <div slot="item-text">我的</div>
        </tab-bar-item>
      </tab-bar>
      
    
  </div>
</template>

<script>
import TabBar from './components/tabbar/TabBar.vue'
import tabBarItem from './components/tabbar/tabBarItem.vue'
export default {
  name: 'App',
  components: {
    TabBar,
    tabBarItem
  }
}
</script>

<style>
 @import "assets/css/base.css"
</style>
