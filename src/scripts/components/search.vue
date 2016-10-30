<style scoped>


</style>


<template>
   <div  class="searchBody">
       <header>
            <div class="searchKey">
               <img  class="search" src="/images/search1.png"/>
                  <input onfocus="" type="input" placeholder="请输入关键词"/>
               <img class="video" src="/images/laba1.png">
            </div>
            <b @click="backmain">
                取消
            </b>
      </header>
      <section>
           <p>历史搜索</p>
           <p>鞋子</p>
           <p>鞋子</p>
           <p>鞋子</p>
           <input type="button" value="清除历史搜索">
      </section>

   </div>
</template>


<script>
   export default {
           data(){
                   return {
                    //  searchshow:true

                   }
           },
           props:{
             msgsearch:{
                info:true
             }

           },

           ready(){


           },
           methods:{
             backmain(){
                  this.msgsearch.info=false;
                  // this.searchshow=false;
             }

           }


   }


</script>
