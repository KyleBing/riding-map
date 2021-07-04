import Vue from "vue"
import Vuex from 'vuex'
Vue.use(Vuex)
export default  new Vuex.Store({
   state: {
      navWidth: 200, // 导航宽度
      windowInsets: { // 窗口数据
         height: 0,
         width: 0
      }
   },
   getters: {
   },
   mutations: {
      SET_NAV_WIDTH(state, value){
         state.navWidth = value
      },
      SET_WINDOW_INSETS(state, value){
         state.windowInsets = value
      }
   }
})