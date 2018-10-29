import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'


Vue.use(Vuex);

const store = new Vuex.Store({
  state:{
    token:''
  },
  mutations:{

    ADD_TOKEN(state,payload){
        state.token =payload
    },
    RESET_TOKEN(state,payload){
        state.token = payload
    }
  },
  plugins: [
    createPersistedState({
      storage: {
      getItem: key => localStorage.getItem(key),
      setItem: (key, value) => localStorage.setItem(key, value),
      removeItem: key => localStorage.removeItem(key),
    }
  })
  ]
})

export default store
