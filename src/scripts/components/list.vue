<template>
<div class="list-containter">
    <router-view>
    </router-view>
    <div class="list-middle">
        <div class="list-left">
            <ul>
                <li v-for="item in list1">
                    {{item}}
                </li>
            </ul>
        </div>
        <div class="list-main" v-srcoll="scrollR">
          <div >
            <div class="listmainTopO">
                <ul class="listmain-top" @click="tet">
                      <li v-for="item in list2">
                          <img v-bind:src="item.src" />
                          <p>{{item.dec}}</p>
                      </li>
                </ul>
            </div>
            <div class="listmainCon">
                <div class="listcon1" v-for="items in list3">
                    <p class="listcon1P">{{items.title}}</p>
                    <div class="listcon1A">
                        <div class="listcon1C"   v-for="item in items.more">
                            <img v-bind:src="item.src" />
                            <p>{{item.titLittle}}</p>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
    </div>
</div>
</template>


<script>

    let myScroll = null;
    let myScroll2 = null;
    let myScroll3 = null;
    //  var VueRouter = require('../libs/vue-router.js')
    //import VueRouter from "../libs/vue-router.js"
    // Vue.use(VueRouter);
    //let router = new VueRouter();
    // Vue.use(VueResource);
    // Vue.use(router);
    //router.go({name:'contain',params:{userId:1}})

    //配置vuex中的action 点击事件
    import {changeIndex } from "../vuex/actions"
    import imageLoad from "../utils/commonUtil";
  var scroll;
    export default {
        data() {
            return {
              scrollR:'.list-main',
                list1: [
                    "运动生活",
                    "户外鞋服",
                    "休闲服装",
                    "精品男装",
                    "时尚男鞋",
                    '时尚女鞋',
                    "快乐儿童",
                    "全球购",
                    "家居服饰",
                    "品牌馆"
                ],
                list2: [],
                list3: []

            }
        },
        methods:{
            tet(){
              console.log("dddd");
             }
        },
        vuex:{
            actions:{
               change:changeIndex
            }
        },
        created () {
          var that = this;
          that.$http.get("/rest/list2")
              .then((res) => {

                  that.list2 = res.data.data;

              }, (response) => {
                  // error callback
                  console.log("error");
              });
          that.$http.get("/rest/list3")
              .then((res) => {
                  console.log(res.data);
                  that.list3 = res.data.data;
                  console.log(this.list3);
              }), (response) => {
                  console.log("error");
              }
        },
        ready() {
          var _this=this;
          Vue.nextTick(function(){
                _this.scrollR=".list-main";
          })
            //scroll 滚动
             myScroll = new IScroll(".list-left", {
                    mouseWheel: true,
                    scrollbars: false,
                    probeType: 1
                })
             myScroll2 = new IScroll(".listmainTopO",{
                      eventPassthrough:true,
                      scrollX:true,
                      scrollY:false,
                      preventDefault:false,
                      mouseWheel: true,
                      scrollbars: false,
                      probeType: 1,
                      click:true
             })
             myScroll3 = new IScroll(".list-main",{
                       mouseWheel: true,
                       scrollbars: false,
                       probeType: 1,
                       click:true
               })
           imageLoad.isAllLoaded(".list-main",function(){
                   // console.log("dddd");
                   myScroll2.refresh();
                   myScroll3.refresh();
           })
              this.change(1);  //vue中的actions的配置

            //  myScroll3 = new IScroll(".list-main",{
            //          mouseWheel: true,
            //          scrollbars: false,
            //          probeType: 1,
            //          click:true
            //  })



        }
    }
</script>
