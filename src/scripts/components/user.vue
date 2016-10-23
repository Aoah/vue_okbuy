

<template>
   <div class="user-containter">
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
                  <icon catchtap="passtap" type="{{posswordIn}}" size="25" color="#666"/>
                  <text class="{{changeTextC.passbind}}">密码登录</text>
            </div>
            <div class="iconPhone">
                  <icon catchtap="phonetap" type="{{phoneIn}}" size="25" color="#666"/>
                    <text class="{{changeTextC.yanzebind}}">手机验证码登录</text>
            </div>
     </div>

     <button class="loginBtn" type="warn" size="default" bindtap="warn"> 登录 </button>

     <div class="link">
         
             <text>注册</text>
        
            <text>忘记密码?</text>
     </div>

   <div  class="toget">
        <div class="liner">
        </div>
        <text> 联合登录</text>
        <div class="liner">
        </div>
   </div>

   <div class="other">
        <img src="/images/pay.png" />
         <img src="/images/qq.png"/> 
         <img src="/images/weixin.png" />
          <img src="/images/sina.png"/> 
   </div>

   </div>

</template>

<script>
   

</script>
