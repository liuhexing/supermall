<template>
    <div><h2>首页      ======{{this.$route.query}}</h2>
        <ul v-for="(items,index) in  this.$route.query">
            <li>{{index}}==={{items}}</li>
        </ul>
    
    </div>
    
</template>
<script>
    export default {
        name:"Home",
         data(){
            return {
        }
    }
    }
</script>
<style scoped>

</style>