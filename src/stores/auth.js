// auth.js
const state = {
  username: '', // Get the username from localStorage or set it as an empty string
  profileimg: '', // Get the username from localStorage or set it as an empty string
  R_order_status: '', // Get the username from localStorage or set it as an empty string
  IsAuth: false,
  IsActive: true,
};

const mutations = {
  setUsername(state, username) {
    state.username = username;
  },
  setProfileimg(state, profileimg) {
    state.profileimg = profileimg;
  },
  setIsAuth(state, IsAuth) {
    state.IsAuth = IsAuth;
    console.log("is auth 1 "+IsAuth)
  },
  setIsActive(state, IsActive) {
    state.IsActive = IsActive;
    console.log("IsActive 1 "+IsActive)
  },
  
  setR_order_status(state, R_order_status) {
    state.R_order_status = R_order_status;
  },
};

const actions = {
  setUsername({ commit }, username) {
    commit('setUsername', username);
  },
  setProfileimg({ commit }, profileimg) {
    commit('setProfileimg', profileimg);
  },
  setIsAuth({ commit }, IsAuth) {
    commit('setIsAuth', IsAuth);
    console.log("is auth commit  "+IsAuth)
  },
  setIsActive({ commit }, IsActive) {
    commit('setIsActive', IsActive);
    console.log(" IsActive commit  "+IsActive)
  },
  setR_order_status({ commit }, R_order_status) {
    commit('setR_order_status', R_order_status);
  },
};

const getters = {
  getUsername: (state) => state.username,
  getProfileimg: (state) => state.profileimg,

  getR_order_status: (state) => state.R_order_status,
  getIsAuth: (state) => state.IsAuth,
  getIsActive: (state) => state.IsActive

};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
