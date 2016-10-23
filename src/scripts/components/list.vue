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
        <div class="list-main">
          <div>
            <div class="listmainTopO">
                <ul class="listmain-top">
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
    let Vue = require("../libs/vue.js");
    let VueResource = require("../libs/vue-resource.js");

    let myScroll = null;
    let myScroll2 = null;
    let myScroll3 = null;
    //  var VueRouter = require('../libs/vue-router.js')

    //import VueRouter from "../libs/vue-router.js"

    // Vue.use(VueRouter);
    //let router = new VueRouter();


    Vue.use(VueResource);
    // Vue.use(router);

    //router.go({name:'contain',params:{userId:1}})

    export default {
        data() {
            return {
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
        ready() {
            //scroll 滚动
            // myScroll = new IScroll(".list-left", {
            //         mouseWheel: true,
            //         scrollbars: false,
            //         probeType: 1
            //     })
                /* myScroll2=new IScroll(".listmain-top",{
                mouseWheel:true,
                scrollbars:false,
                probeType:1
           })*/

            /*myScroll2=new IScroll(".listmain-top",{
         	 	 mouseWheel:true,
                scrollbars:false,
                probeType:1

         	 })*/
             myScroll3 = new IScroll(".list-main",{
                   mouseWheel:true,
                   scrollbars:true,
                   probeType:1
             })

            var that = this;
            that.$http.get("/mock/list2.json")
                .then((res) => {

                    that.list2 = res.data.data;

                }, (response) => {
                    // error callback
                    console.log("error");
                });
            that.$http.get("/mock/list3.json")
                .then((res) => {
                    console.log(res.data);
                    that.list3 = res.data.data;
                }), (response) => {
                    console.log("error");
                }


        }
    }
</script>
