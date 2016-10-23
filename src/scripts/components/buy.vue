<style>

</style>


<template>

    <div class="buy-containter">
        <router-view>
        </router-view>
        <div class="buy-main">
            <div class="buy-header">
                <ul>
                    <li v-for="item in buyList">{{item}}</li>
                </ul>

            </div>
            <div class="swiper-container">
              <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="items in buylist2">
                  <ul>
                      {{items}}
                      <!-- <li v-for="item in items.test1">
                         <img v-bind:src="item.src"/>
                         <div>
                             <p><i>{{item.t1}}</i>  <b>{{item.t2}}</b> </p>
                             <p> {{item.t3}}</p>
                         </div>
                      </li> -->
                  </ul>
                </div>
              </div>
            </div>
        </div>

    </div>
</template>




<script>
//  var myswiperbuy=null;
    export default {
        data() {
            return {
                buyList: ["全新", "最新", "服饰", "鞋类", "包配", "儿童"],
              buylist2:[]
            }
        },
        ready() {
            var that = this;
            let myswiperbuy= new Swiper('.swiper-container',{
               loop:true,
               autoplay: 3000
             })
            that.$http.get("/mock/list4.json")
                .then (
                    (res) => {
                        console.log(res.data.data);
                        that.buylist2=res.data.data;
                    }, (response) => {
                        console.log("error");
                    }
                )
        }
    }
</script>
