//action 会会收到 Store 作为它的第一个参数
// 既然我们只对事件的分发（dispatch 对象) 感兴趣
//
  export const changeIndex=function({dispatch,state},value){
        dispatch('CHANGETAB',value)
  }
