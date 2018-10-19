import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
  state:{
    token:'',
    imgDate:'',
    header:''
  },
  mutations:{

    ADD_TOKEN(state,payload){
        state.token =payload
    },
    RESET_TOKEN(state,payload){
        state.token = payload
    },
    IMG_URL(state,paylod){
      state.header = paylod
    },
    IMG_BASE(state,paylod){
      state.imgDate = paylod
    }
  }
})

export default store
