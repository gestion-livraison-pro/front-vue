import { createStore } from 'vuex';
import auth from './auth';
import test from './test';
import permissions from './permissions';


const store = createStore({
  modules: {
    auth,
    permissions,
    test,
  },
  // ...
});

export default store;
