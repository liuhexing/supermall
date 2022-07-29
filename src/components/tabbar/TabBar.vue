<template>
  <div id="tab-bar">
          <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'tabBar',
  data () {
    return {
      msg: 'tabbar'
    }
  }
}
</script>

<style scoped>
   #tab-bar {
    /*并列在一行*/
    display: flex;
    background-color: azure;
    /**页面最底部 */
    position: fixed;
    left: 0px;
    right: 0px;
    bottom: 0px;

    /**生成区域 */
    box-shadow: 0 -3px rgba(100, 100, 100, .8);

    
  }
</style>
