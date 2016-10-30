<template>
<div class="list-containter">
    <router-view :msg.sync="mag">
    </router-view>
     <search  :msgsearch.sync="mag" v-if="mag.info">
    </search>
    <loading v-if="loadingFlag">
    </loading>
    <div class="list-middle">
        <div class="list-left">
            <ul>
                <li v-on:click="chagneLeft($index)"
                     v-for="item in list1"
                      v-bind:class="listCurrent==$index? 'liactive':'' "
                       >
                    {{item}}
                </li>
            </ul>
        </div>
        <div class="list-main" v-srcoll="scrollR">
          <div >
            <div v-show="list2.length" class="listmainTopO">
                <ul class="listmain-top" @click="tet">
                      <li v-for="item in list2">
                          <img v-bind:src="item.src" />
                          <p>{{item.name}}</p>
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

    import loading from "../plugins/yo-loading/loading"
    Vue.use(loading);
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
        data(){
            return {
              mag:{
                 info:false
              },
              loadingFlag:true,
              listflag:true,
              listCurrent:0,
              scrollR:'.list-main',
                list1: [
                    "运动生活",
                    "户外鞋服",
                    "休闲服装",
                    "精品男装",
                    '时尚女鞋',
                    "快乐儿童",
                    "全球购",
                    "家居服饰",
                    "品牌馆"
                ],
                list2: [],
                list3: [],
                list4: [],
                list5:[],
            }
        },
        methods:{
            tet(){
              console.log("dddd");
            },
            chagneLeft(index){

              var _this=this;

              _this.loadingFlag=true;
              console.log(_this.loadingFlag);

              this.list2 = this.list5[index].data;
              this.listCurrent=index;
              this.list3=this.list4[index].data;
              console.log(this.list2.length)
              if(this.list2.length){
                this.listflag=false;
              }else{
                 this.listflag=true;
              }
              Vue.nextTick(function(){
                console.log("scroll refresh")
                myScroll2.refresh();
                myScroll3.refresh();

              })
             //loading 在图片完全加载后 隐藏图片
          imageLoad.isAllLoaded(".list-main",function(){
                 _this.loadingFlag=false;
              })
            }
        },
        vuex:{
            actions:{
               change:changeIndex
            }
        },
        created () {
          var that = this;
          that.$http.get("/rest/list7")
              .then((res) => {
                 that.list5=res.data;
                  that.list2 = that.list5[0].data;
              }, (response) => {
                  // error callback
                  console.log("error");
              });
          that.$http.get("/rest/list6")
              .then((res) => {
                  that.list4 = res.data;
                  that.list3=that.list4[0].data;
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
                    probeType: 1,
                    click:true
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
                   _this.loadingFlag=false;
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
