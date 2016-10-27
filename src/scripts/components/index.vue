<template>
    <div class="containter">
      <div class="index-containter">
        <router-view  :transition=" this.flag ? 'gotoLeft' : 'gotoRight'"  transition-mode="out-in">
        </router-view>
      </div>
      <footer id="footer">
          <ul>
              <li v-bind:class="current==$index ? 'active':''" v-on:click="changePage($index)" v-for="item in list" v-link="{path:item.path}">
                  <i class="iconfont">{{{item.icon}}}</i>
                  <b> {{item.name}}</b>
              </li>
          </ul>
      </footer>
 </div>
</template>

 <script>
   import { changeIndex } from "../vuex/actions";
   import { getIndex  } from "../vuex/getters"

      export default{
          data(){
               return{

                        flag:true,
                        list:[
                          {path:'/index/',icon:"&#xe6b8;",name:"首页"},
                          {path:"/index/list",icon:"&#xe6fe;",name:"分类"},
                         {path:"/index/buy",icon:"&#xe6b2;",name:"限时特卖"},
                         {path:"/index/shopcar",icon:"&#xe6af;",name:"购物车"},
                         {path:"/index/user",icon:"&#xe78b;",name:"用户"}
                        ]
               }
          },
          vuex:{
             actions:{
                 change:changeIndex
             },
             getters:{
                  current:getIndex
             }
          },
          methods:{
              changePage(index){
                if(index>this.current){
                   this.flag=true;
                }else{
                    this.flag=false;
                }
                this.change(index)

              }
          }
      }
  </script>
