

<template>
    <!-- <div v-loading ="isLoading" :loading-options="{options}"></div>
     <button @click="isLoading = true">
     </button>
     <!-- <div class="block" v-loading="loading.a">
                <p>v-loading="loading"</p>
                <a class="button blue" href="javascript:;" @click="showLoading('a')">Loading this block</a>
            </div> -->
   <my-component>
   </my-component>

   <!-- <div class="user-containter">
   <div class="form">
       <div class="userId">
           <label>{{inputContent.laberT}} </label>
           <input bindinput="bindKeyInputName" placeholder="{{inputContent.inputT}}"> </input>
       </div>
       <div class="userId">
           <label>{{inputContent.laberB}}</label>
           <input bindinput="bindKeyPassword" password type="number" placeholder="{{inputContent.inputB}}"> </input>
       </div>
    </div>

     <div class="loginWay">
           <div class="iconPass">
                  <div catchtap="passtap" type="{{posswordIn}}" size="25" color="#666">
                  </div>
                  <p class="{{changeTextC.passbind}}">密码登录</p>
            </div>
            <div class="iconPhone">
                  <div catchtap="phonetap" type="{{phoneIn}}" size="25" color="#666">
                  </div>
                    <p class="{{changeTextC.yanzebind}}">手机验证码登录</p>
            </div>
     </div>

     <button class="loginBtn" type="warn" size="default" bindtap="warn"> 登录 </button>

     <div class="link">

             <p>注册</p>

            <p>忘记密码?</p>
     </div>

   <div  class="toget">
        <div class="liner">
        </div>
        <p> 联合登录</p>
        <div class="liner">
        </div>
   </div>

   <div class="other">
        <img src="/images/pay.png" />
         <img src="/images/qq.png"/>
         <img src="/images/weixin.png" />
          <img src="/images/sina.png"/>
   </div>

   </div> -->

</template>

<script>
      // 引入vuex 的action 事件
     import {changeIndex} from "../vuex/actions"

        // 引入  自定义的loading 插件
      // import loading from "../plugins/vue-loading/index.js";
      // Vue.use(loading);

    // 引入自定义的对话框组件
      import vuedialog from "../plugins/vue-dialog.js";
       Vue.use(vuedialog);

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
