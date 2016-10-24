
import "../styles/usage/page/app.scss";
//把每个界面对应的vue 文件都加载进来
import index from "./components/index.vue";
import main from  "./components/main.vue";
import list from "./components/list.vue";
import buy from "./components/buy.vue";
import shopcar from "./components/shopcar.vue";
import user from "./components/user.vue";

import mainHeader from "./components/mainHeader.vue"

import listHeader from "./components/listHeader.vue"

import buyHeader from "./components/buyHeader.vue"

import shopcarHeader from "./components/shopcarHeader.vue"

//  自定义指令
/*******/  import imageLoad from "./utils/commonUtil";
/*******/   imageLoad.mySwiper();
            imageLoad.myScroll();

//import sss from "./components/listTest.vue"
// import  listcontain  from "./components/listContain.vue";
// 引入单独定义的路由
// import Router from "./router"]

// 引入创建的store
import store from "./vuex/store"

// 引入vue 的相关路由文件
 // import Vue from "./libs/vue.js";
 // import VueRouter from "./libs/vue-router.js"

  // Vue.use(VueRouter);
 let router = new VueRouter();

  let App =Vue.extend({
      store:store
  });

 router.map({
      "/":{
            component: index,
            subRoutes:{
                 "/":{
                   name:"main",
                   component: main,
                   subRoutes:{
                      "/":{
                          component:mainHeader
                      }
                   }
                 },
                 "/list":{
                    name:"list",
                    component:list,
                    subRoutes:{
                      "/":{
                          component:listHeader
                      }
                    }
                 },
                 "/buy":{
                      name:"buy",
                      component:buy,
                      subRoutes:{
                         "/":{
                             component:buyHeader
                         }
                      }
                   },
                   "/shopcar":{
                        name:"shopcar",
                        component:shopcar,
                        subRoutes:{
                            "/":{
                                component:shopcarHeader
                            }
                        }
                   },
                   "/user":{
                         name:user,
                         component:user
                   }
            }
       }
})

  // var index=Vue.extend({
  //     template:"<h1> this is index</h1>"
  // })

   router.start(App,'body');
