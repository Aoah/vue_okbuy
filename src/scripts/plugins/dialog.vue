<style>


</style>


<template>
   <div>
        <div v-show="show" class="yo-dialog yo-dialog-test">
          <div class="bd">
              <p> 请先登录 ！</p>
          </div>
          <footer class="ft">
              <button class="yo-btn yo-btn-dialog yo-btn-l" @click="cancle">取消</button>
              <button class="yo-btn yo-btn-dialog yo-btn-l" @click="sure">确定</button>
          </footer>
      </div>

      <div v-show="show" class="yo-mask">
      </div>
    </div>
</template>

<script>
        export default {
              data(){
                      return{
                        show:true

                      }
              },
              methods:{
                cancle(){
                     this.show=true;
                    console.log("cancle");
                },
                sure(){
                     this.show=false;
                     console.log("sure");
                }


              },
              ready(){


              }

        }

</script>
