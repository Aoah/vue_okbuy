
<style>
   header{
   	   padding-right:.07rem;
   	   height:.44rem;
   	   background:black;
   	   display: flex;
   	   flex-direction: row;
   	   align-items: center;
   	   justify-content: space-between;
   	   border-bottom: .01rem solid #585858;
   }
   .HL{
   	    width:.55rem;
        height:.22rem;
        margin:0 .07rem 0 .13rem;
        background:url("/images/logo.png");
        background-size: 100%;

   }
   .HR{
   	padding:0 .13rem;
   	    display: flex;
   	    flex-direction:row;
   	    justify-content: space-between;
   	    align-items: center;
     	border:.01rem solid #585858;
     	border-radius: .13rem;
   	    height:.31rem;
   	    flex:1;
   	    padding-right:.07rem;
   }
   .search{
   	   width:.14rem;
   	   heigh:.14rem;

   }
   .video{
   	  width:.14rem;
   	  height:.16;
   }
   .HR input{
   	outline: none;
    	border:0;
   	background: black;
   	   color:#585858;
   }

</style>

 <template>
     <header>
        <div class="HL">

        </div>
        <div class="HR">
             <img  class="search" src="/images/main-search.png"/>
            <input @click="beginSearch()" type="input" placeholder="搜索你要寻找的商品"/>
            <img class="video" src="/images/main-video.png">
        </div>

     </header>

 </template>

<script >
      export default {
            data(){
                 return {


                 }
            },
            methods:{
                beginSearch(){
                  this.mag.info=true;
                    console.log(this.mag.info)
                  //  this.msg=true;
                }
            },
            props:{
                mag:{
                      info:true
                }
            }
      }
		// import Vue from "../libs/vue.js";

		// var MyComponent=Vue.extend({
		// 	  template:'<div>A custom component! </div>'
		// })

		// Vue.component('main-header',MyComponent);

		// new Vue({
		// 	  el:".main-containter"
		// })
</script>
