<style>
</style>

<template>

<div class="user-containter">
   <loading v-if="true">
   </loading>


</div>


</template>

<script>
      // 引入vuex 的action 事件
     import {changeIndex} from "../vuex/actions"

        // 引入  自定义的loading 插件
      // import loading from "../plugins/vue-loading/index.js";
      // Vue.use(loading);

   import loading from "../plugins/yo-loading/loading.js"
   Vue.use(loading);

    // 引入自定义的对话框组件
      // import vuedialog from "../plugins/vue-dialog.js";
      //  Vue.use(vuedialog);


     export default {
          data(){
            return {
               isLoading:false
            }
          },
          vuex:{
             actions:{
                 change:changeIndex
             }
           },
           ready(){
               this.change(4);
           }

     }


</script>
