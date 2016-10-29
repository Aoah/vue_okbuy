<style>

</style>


<template>

    <div class="buy-containter">
        <router-view>
        </router-view>
        <div class="buy-main">
            <div class="buy-header">
                <ul>
                    <li
                     v-on:click="changeIndex($index)"
                    v-for="item in buyList" v-bind:class="$index==current?'active': ''">{{item}}</li>
                </ul>

            </div>
            <div class="swiper-container"  id="swiperbuy">
              <div class="swiper-wrapper">
                    <div style="height:100%" class="swiper-slide" v-for="items in buylist2">
                          <ul >
                            <li v-for="item in items.test1">
                               <img v-bind:src="item.src"/>
                               <div>
                                   <p><i>{{item.t1}}</i>  <b>{{item.t2}}</b> </p>
                                   <p> {{item.t3}}</p>
                               </div>
                            </li>

                          </ul>
                     </div>
              </div>
            </div>
        </div>

    </div>
</template>




<script>
//  var myswiperbuy=null;
import {changeIndex } from "../vuex/actions"
  import imageLoad from "../utils/commonUtil";
  let myswiperbuy;
  let myScroll4;
    export default {
        data() {
            return {
               current:0,
                buyList: ["全新", "最新", "服饰", "鞋类", "包配", "儿童"],
                buylist2:[]
            }
        },
        vuex:{
             actions:{
                 change: changeIndex
             }
        },
        created(){
           var that=this;
          that.$http.get("/rest/list4")
              .then (
                  (res) => {
                      console.log(res.data.data);
                      that.buylist2=res.data.data;
                  }, (response) => {
                      console.log("error");
                  }
              )
        },
        ready() {
            this.change(2);
            var that = this;

            // Vue.nextTick(function(){
            //           that.swiperbuydic=".swiper-container"
            // })

            imageLoad.isAllLoaded('#swiperbuy',function(){
                 $("#swiperbuy").find(".swiper-slide").each(function(){
                        console.log(this);

                   new IScroll(this,{
                          mouseWheel: true,
                          scrollbars: false,
                          probeType: 1,
                          click:true
                  })
                 })

              // myScroll4.refresh();
              myswiperbuy= new Swiper('#swiperbuy',{
                          onSlideChangeStart:function(swiper){
                                 that.current = myswiperbuy.activeIndex
                          }

                })
            })


        },
        methods:{
             changeIndex(index){
                     this.current=index;
                     myswiperbuy.slideTo(index);
             }
        }
    }
</script>
