
import vuedialog from "./dialog.vue"

 let vuediglog = ()=>{    }

   vuediglog.install = function( Vue,options){

              // 1.添加全局方法 或 属性
               Vue.myGlobalMethod ={

               }

               //2.添加全局资源  (自定义指令)
               Vue.directive ('my-directive',{


               })
               // 4.自定义组件
              Vue.component('my-component',Vue.extend(vuedialog))

               // 3。 添加实例方法
               Vue.prototype.$myMethod={

               }


 }

 export default vuediglog
