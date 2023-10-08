const state = {
    test: 'hello', // Your test state variable
  };
  
  const mutations = {
    SET_TEST(state, value) {
      state.test = value;
    },
  };
  
  const actions = {
    updateTest({ commit }, value) {
      commit('SET_TEST', value);
    },
  };
  
  const getters = {
    getTest: (state) => state.test,
  };
  
  export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
  };
  