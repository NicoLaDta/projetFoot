import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

const getDefaultState = () => {
  return {
    token: '',
    user: {},
    isLoggedIn: false
  };
};
export default new Vuex.Store({
  strict: true,
  plugins: [createPersistedState()],
  state: getDefaultState(),
  getters: {
    isLoggedIn: state => {
      return state.token;
    },
    getUser: state => {
      return state.user;
    }
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token;
      if (token){
        state.isLoggedIn = true
      }else{
        state.isLoggedIn = false
      }
    },
    SET_USER: (state, user) => {
      state.user = user;
    },
    RESET: state => {
      Object.assign(state, getDefaultState());
    }
  },
  actions: {
    login: ({ commit, dispatch }, { token, user }) => {
      console.log(dispatch)
      commit('SET_TOKEN', token);
      commit('SET_USER', user);
      // set auth header
      Axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    },
    logout: ({ commit }) => {
      commit('RESET', '');
    }
  }
});