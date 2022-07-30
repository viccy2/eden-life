import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products : [
      {id : 1, name : 'Banana Girl', price : 100},
      {id : 2, name : 'Banana2 Girl', price : 200},
      {id : 3, name : 'Banana3 Girl', price : 300},
      {id : 4, name : 'Banana4 Girl', price : 400},
      {id : 5, name : 'Banana5 Girl', price : 500}
    ]
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
