import yoloading  from "./loading.vue"

let loading = () =>{ }

  loading.install = ( Vue,options) =>{
        // 添加全局的方法或属性
        Vue.myGlobalMethod =

        //添加全局资源
        Vue.component('loading',Vue.extend(yoloading));

  }
    export default loading;
