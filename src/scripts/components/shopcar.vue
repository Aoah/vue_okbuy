<style>

</style>


<template>
   <div class="shopcar-containter">
       <router-view>
       </router-view>
       <div class="shopcar-main">
            <div class="goods">
                <div class="goods1" v-for="item in shoplist1">
                     <i @click="dome($index)"  v-bind:class="[yuan,item.flag?'':'bgchange']">

                     </i>
                     <div class="phone">
                         <img v-bind:src="item.src"/>
                     </div>
                     <div class="shoptext">
                         <p> {{item.contain}}</p>
                         <p class="shopP"> <i> {{item.size}}</i>      <b>{{item.price}}</b>
                          </p>
                         <div class="shoptextBottom">
                             <ul class="shopcarBtn">
                                 <li v-on:click="jian($index)">-</li>
                                 <li>{{item.count}}</li>
                                 <li v-on:click="jia($index)"> + </li>
                             </ul>
                             <i @click="delete($index)">
                             </i>
                         </div>
                     </div>
                </div>
            </div>
       </div>
       <div class="shopcar-total">
          <i></i>
          <div class="money">
          </div>
          <div>
            去结算({{total.}})
          </div>

       </div>
   </div>
</template>



<script>
  import {changeIndex} from "../vuex/actions";
    export default {
         data(){
             return{
               total:{
                    all:300,
                    origin:400,
                    bit:40
               },
               yuan:'yuan',
               bgchange:'bgchange',
               shoplist1:[]
             }
         },
         vuex:{
            actions:{
                change:changeIndex
            }
         },
         ready(){
           this.change(3);
           var that=this;
           that.$http.get("/rest/list5")
                .then(
                   (res)=>{
                     console.log(res.data.data);
                     that.shoplist1=res.data.data;

                   },(response)=>{

                       console.log(error);
                   }
                )
         },
         methods:{
           delete(index){
               this.shoplist1.splice(index,1);

           },
           dome(index){
              this.shoplist1[index].flag=!this.shoplist1[index].flag;
           },
           jian(index){
             if(this.shoplist1[index].count>1){
               this.shoplist1[index].count--;
             }
           },
           jia(index){
              this.shoplist1[index].count++;

           }

         }
    }



</script>
