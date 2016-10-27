<style scoped>
    img{
        width:100%;
        height:100%;
    }
</style>

<template>
  <img src="/images/welcome.png">
</template>


<script>

//  var VueRouter = require('../libs/vue-router.js')
//import VueRouter from "../libs/vue-router.js"
// Vue.use(VueRouter);
//let router = new VueRouter();
// Vue.use(VueResource);
// Vue.use(router);
//router.go({name:'contain',params:{userId:1}})
 export default {
     data(){
            return {

            }
     }
,
 created(){
   let router = new VueRouter();
   setTimeout(function(){
         router.go({path:'/index'});
         console.log("跳转、");
   },3000)

 }
}

</script>
