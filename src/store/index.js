import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isShowDownload:true,
    isAppDown:false,
    city:{
      name:"北京",
      id:"1"
    }
  },
  mutations: {
    UPDATE_SHOW_DOWNLOAD(state,param){
      state.isShowDownload = param.dl;
      state.isAppDown = param.app;
    },
    UPDATE_SHOW_APP(state,param){
      state.isAppDown = param.dl;
      state.isAppDown = param.app;
    },
    UPDATE_CITIES(state,city){
      state.city = city;
    }
    
  },
  actions: {

  },
  modules: {
  }
})
