let commonUtil = {
    isAllLoaded(scroll, cb) {
        let allFlag = false; //标识是否所有的图片都已经加载完成
        let time;
        let outTime; //设置定时器的标识
        return isImgLoad(cb);

        function isImgLoad(cb) {
          console.log('sssss');
            $(scroll).find("img").each(function() {
                if (!this.height) {
                    allFlag = false;
                    return false;
                }
            })
            if (allFlag) {
                time = null;
                cb();
            } else {
              Vue.nextTick(function(){
                  isImgLoad(cb);
              })
                // time = setTimeout(function() { //设置每过0.5秒就检查一下图片是否全部加载完毕
                //     isImgLoad(cb);
                // }, 500)
            }


        }
    },
    mySwiper() {
        Vue.directive('swiper', (value) => {
                if (value) {

                    new Swiper(value, {
                        loop: true,
                        autoplay: 3000
                    })
                }
                console.log(value);

            }
            //  bind:function(){
            //      console.log("bind");
            //  },
            //  update:function(newValue, oldValue){
            //   //  new Swiper('.swiper-container', {
            //   //              loop: true,
            //   //              autoplay: 3000
            //   //    })
            //        console.log(newValue+"*******"+oldValue);
            //  },
            //  unbind:function(){
            //       console.log("unbind")
            //  }

        )
    },
    myScroll() {
        var that = this;
        Vue.directive("srcoll", (value) => {
            if (value) {
                // that.isAllLoaded(value,value =>{
                //       new IScroll(value,{
                //               mouseWheel: true,
                //               scrollbars: false,
                //               probeType: 1,
                //               click:true
                //       })
                // })

            }
        })


    }
}
export default commonUtil
