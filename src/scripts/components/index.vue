<template>
    <div class="containter">
      <div class="index-containter">
        <router-view>
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
      export default{
          data(){
               return{
                        current:0,
                        list:[
                          {path:'/',icon:"&#xe6b8;",name:"首页"},
                          {path:"/list",icon:"&#xe6fe;",name:"分类"},
                         {path:"/buy",icon:"&#xe6b2;",name:"限时特卖"},
                         {path:"/shopcar",icon:"&#xe6af;",name:"购物车"},
                         {path:"/user",icon:"&#xe78b;",name:"用户"}
                        ]
               }
          },
          methods:{
              changePage(index){
                this.current=index
              }
          }
      }
  </script> 
