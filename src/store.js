import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    panel: false,
    todo: []
  },
  mutations: {
    ADD_TODO(state,data){
      let status = {
        like: false,
        success: false
      }
      let ev = Object.assign({},data,status)
      state.todo.push(ev)
    },
    SET_LIKE(state,index){
      state.todo[index].like = !state.todo[index].like
    },
    SET_CHECKED(state,index){
      state.todo[index].success = !state.todo[index].success
    },
    SET_PANEL(state,status){
      state.panel = status
    },
    CLEAR_TODO(state){
      state.todo = []
    }
  }
})
