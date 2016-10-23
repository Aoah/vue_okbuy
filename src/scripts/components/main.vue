<style >
   .swiper-slide{
       width:100%;
       height:1.1rem;
   }
   .swiper-slide img{
       width:100%;
       height:100%;
   }
   .main-center{
       overflow: hidden;
   }
   .main-middle{
        width:100%;
        height:.76rem;
        border-bottom:1px solid #ededed;
        background: white;
        display:flex;
        flex-driection:row;
        align-items: center;
        justify-content: space-around;
   }
   .middle-con {
       display: flex;
       flex-direction: column;
       justify-content:center;
       align-items: center;

   }
   .middle-con img{
       width:.4rem;
       height:.4rem;
   }
   .middle-con p{
       font-size:.12rem;
       color: #a7a7a7;
   }

   .main-mid1{
    display: flex;
    align-items: center;
      height:.31rem;
      width:100%;
      background: white;
   }
  .main-mid1 .laba{
       margin-left:.1rem;
       margin-right: .05rem;
        width:.15rem;
        height: .15rem;
        background:url("/images/laba.png");
        background-size:100%;
  }
  .heng{
       height:.1rem;
       width:100%;
       background:url('/images/heng.png') repeat-x;
  }
  .main-ad {
    background: white;
      width:100%;
      display: flex;
      flex-direction:column;
      align-items: center;
      padding-top: .05rem;
  }
  .ad1{
        margin-top:.1rem;
        width:3.02rem;
        height:1.74rem;
        border-bottom: 1px solid #ededed;
  }
  .ad1 img{
        display: block;
        margin:0 auto;
        height:1.31rem;
        width:2.89rem;
  }
  .ad1 i, .ad1 b{
          line-height: .45rem;
          font-size:.15rem;
          font-style:normal;
  }
  .ad1 i {
         color:red;
  }
  .ad1 b{
     font-weight: normal;
  }
  /*   下拉更新*/
  .main-down{
      display: flex;
      justify-content: center;
      align-items: center;
       width:100%;
       height:50px;
  }
  .main-down img{
      height:100%;
  }

</style>
<template>
	  <div class="main-containter">
            <router-view></router-view>

            <div class="main-center">
              <div>
                  <div class="main-down">
                     <img  v-bind:src="iscroll.orignImg"/>
                      <i>{{iscroll.originText}}  </i>
                  </div>
                  <div class="swiper-container">
                        <div class="swiper-wrapper">
                                 <div class="swiper-slide" v-for="ls in swiper" >
                                    <img v-bind:src="ls" />

                                 </div>
                        </div>
                  </div>
                  <div class="main-middle">
                       <div class="middle-con" v-for="l in logo ">
                                <img :src="l.src"/>
                                <p> {{l.text}}</p>
                       </div>
                  </div>
                  <div class="main-mid1">
                        <i class="laba"></i>
                        <b> 评价, 晒单有好礼</b>
                  </div>
                  <div class="heng">

                  </div>
                  <div class="main-ad">
                        <div class="ad1" v-for=" l in ad">
                             <img :src="l.src"/>
                             <i> {{l.text1}}</i>
                            <b>  {{l.text2}}</b>
                        </div>
                  </div>
              </div>
            </div>

     </div>
</template>



 <script>



      export default {
         data(){
            return{
              iscroll:{
                   orignImg:'/images/stop.png',
                   originText:'下拉更新....',
                   secondText:'松手更新....',
                   updataImg:'/images/okbuy.gif',
                   thirdText:'更新中....'

              },
              swiper:[
                 "/images/swp1.jpg",
                 "/images/swp2.jpg",
                 "/images/swp3.jpg",
                 "/images/swp4.jpg",
                 "/images/swp5.jpg",
                 "/images/swp6.jpg",
                 "/images/swp7.jpg",
                 "/images/swp8.jpg"
              ],
              logo:[
                   {
                      text:" 品牌 ",
                      src:"/images/tit1.png"
                   }, {
                      text:" 分类 ",
                      src:"/images/tit2.png"
                   }, {
                      text:"我的订单",
                      src:"/images/tit3.png"
                   }, {
                      text:"我的收藏",
                      src:"/images/tit4.png"
                   },
               ],
               ad:[

        {
           "src":"/images/more1.jpg",
           "text1":"2.9折起 ",
           "text2":"耐克秋装全场满99减10元可累计"
        },
        {
           "src":"/images/more2.jpg",
           "text1":"249元 ",
           "text2":"NB鬼重虎休闲鞋"
        },
        {
           "src":"/images/more3.jpg",
           "text1":"2.9折封顶 ",
           "text2":"阿迪全线特惠一口价"
        },
        {
           "src":"/images/more4.jpg",
           "text1":"38元起 ",
           "text2":"李宁红外套/棉羽专场"
        },
        {
           "src":"/images/more5.jpg",
           "text1":"一折起",
           "text2":"阿迪粉丝节疯狂换季"
        },
        {
           "src":"/images/more6.jpg",
           "text1":"多件多折",
           "text2":"马克华菲夹克外套"
        },
        {
           "src":"/images/more7.jpg",
           "text1":"两双299元",
           "text2":"爱乐 好货不断"
        }
    ]


        }

    },
   ready:function(){
      var _this=this;
       //swiper 的初始化
         let mySwiper = new Swiper('.swiper-container', {
                  loop:true,
                  autoplay: 3000
                })
     //iscorll 的 初始化
       let myScroll=new IScroll(".main-center",{
            mouseWheel:true,
            scrollbars:false,
            probeType:1
       })
        myScroll.scrollTo(0,-50)
        myScroll.on("scroll",function(){
             var y=this.y,
                  maxY=this.maxScrollY-y;
              if(y>=0){
                 _this.iscroll.originText="松手更新....";
              }
         })
         myScroll.on("scrollEnd",function(){
            let y=this.y,
                maxY=this.maxScrollY-y;
               if(y>=-35&&y<0){
                  myScroll.scrollTo(0,-50);
                   _this.iscroll.originText="下拉更新....";
                        _this.iscroll.orignImg="/images/stop.png";
                      }
                  else if(y>=0){
                          _this.iscroll.originText="更新中....";
                          _this.iscroll.orignImg="/images/okbuy.gif";
                   setTimeout(function(){
                         _this.iscroll.originText="下拉更新....";
                        _this.iscroll.orignImg="/images/stop.png";
                         myScroll.scrollTo(0,-50);
                   },3000)
                  }

           })


  }
}
  </script>
