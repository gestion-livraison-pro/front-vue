import { ref } from 'vue';
import { fetchData } from '../composition/crud.js';

export default {
  namespaced: true,
  state: {
    permissionsLoaded:false,
    permissions: [],
  },
  mutations: {
    setPermissions(state, permissions) {
      state.permissions = permissions;
    },
    setPermissionsLoaded(state, loaded) {
      state.permissionsLoaded = loaded;
    },
  },
  actions: {
    async fetchPermissions({ commit }) {
      console.log("call fetchPermissions")
      try {
        const response = await fetchData("https://api.gestion-livraison.pro/api/permissions");
        console.log(response)
        commit('setPermissions', response);
      } catch (error) {
        // Handle error if needed
        console.error('Error fetching permissions:', error);
      }
    },

    setPermissionsLoaded({ commit }, loaded) {
      // Commit the mutation to update permissionsLoaded
      console.log("setPermissionsLoaded ->"+loaded)
      commit('setPermissionsLoaded', loaded);
    },
    setPermissions({ commit }, loaded) {
      // Commit the mutation to update permissionsLoaded
      console.log("setPermissions ->"+loaded)
      commit('setPermissions', loaded);
    },
  },
};
