<template>
  <Topbar v-if="IsAuth" />
  <div v-if="IsAuth">
    <Menu />
  </div>

  <RouterView />
  
  <footer  v-if="IsAuth" class="footer text-center">
    © 2023 GESTION LIVRAISON
    <span class="d-none d-sm-inline-block">
      - Developed by
      <i class="mdi mdi-heart text-danger"></i
      ><a target="__blank" href="https://onzmedia.com">ONZMEDIA</a>
    </span>
  </footer>
</template>

<script>

import Topbar from './components/includes/topbar.vue'
import Menu from './components/includes/menu.vue'

import jwtDecode from 'jwt-decode';
import { mapActions, mapState } from 'vuex';

export default {
  components: {
    Topbar,
    Menu
  },
  computed: {
    ...mapState('auth', ['IsAuth']),
  },
};
</script>
