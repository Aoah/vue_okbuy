   //

  //  import  { state} from "/states";
  //  import { mutation} from "/mutation";
const state = {
       // todo: 放置初始状态
       tabIndex:0
}
const mutations = {
      CHANGETAB(state,currentIndex){
          state.tabIndex=currentIndex;
      }
}
export default new Vuex.Store({
           state,
           mutations
})
