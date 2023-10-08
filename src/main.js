import { createApp } from 'vue';
import store from './stores/index'; // Import your store.js file
import axios from 'axios';
import router from './router';
import App from './App.vue';

// Set up Axios to include the token in all requests
axios.interceptors.request.use(
  function (config) {
    // Get the token from storage
    const token = localStorage.getItem('token');

    // Add the token to the request headers
    if (token) {
      config.headers.Authorization = 'Bearer ' + token;
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Create a Vue app instance
const app = createApp(App);

// Use Vuex store and Vue Router
app.use(store);



/*
// Periodically fetch permissions data every 5 seconds
const fetchPermissionsPeriodically = async () => {
  while (true) {
    console.log("1122222")
    // Check if the user is authenticated and an admin
    if (store.state.auth.IsAuth) {
      await store.dispatch('permissions/fetchPermissions');
      console.log("444444444")
      console.log(store.state.permissions.permissions)

    }

    console.log("44455555555444444")

    // Wait for 5 seconds before fetching permissions again
    await new Promise((resolve) => setTimeout(resolve, 5000));
  }
};
// Start the periodic fetch
fetchPermissionsPeriodically();

*/


app.use(router);


app.mount('#layout-wrapper');
