<template>
    <div  class="tab-bar-item"  @click="itemclick">
            <div v-if="isActive"><slot name="item-icon"></slot></div>
            <div v-else><slot name="item-icon-active"></slot></div>
            <div :style="activeStyle"><slot name="item-text"></slot></div>
    </div>
          
</template>
<script>
  export default {
    name:"TabBarItem",
    props:{
      path:String,
      activeColor:{
        type:String,
        default:'red'
      }
    },
    data(){
      return {
        // isActive :false
      }
    },
    computed :{
      isActive() {
        // this.$route.path  当前活跃的路由路径
        // console.log("==="+this.$route.path.indexOf(this.path))
        return  this.$route.path.indexOf(this.path) !==-1
      },
      activeStyle (){
        return this.isActive ? {color:this.activeColor} : {}
      }
    },
    methods :{
      itemclick(){
        console.log(this.path);
        this.$router.push({name:this.path , query:{name:'xxxx' ,age:'11'}})
        // this.$router.replace(this.path);
        // this.$router.push({
        //          name:this.path,
        //           params:{
        //               id:1
        //           }
        // })
      }
    }
  }
</script>
<style scoped>
   
  .tab-bar-item{
    /**均衡分布 */
    flex: 1;
    /**居中 */
    text-align: center;
    height: 49px;
  }
  .tab-bar-item img{
    width: 20px;
    height: 20px;
    margin-top: 3px;
  }

  
</style>