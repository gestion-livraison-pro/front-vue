<script setup>
import brumb from '../../components/brumbs/basic.vue'
import users from '../../components/tables/basic.vue'

import filters from '../../components/filters/search.vue'
import {ref} from "vue"
const lien_filter = ref(null)

</script>

<template>


  <div class="main-content">
    <div class="page-content">
      <div class="container-fluid">

        <brumb pageTitle="Liste des Utilisateurs" buttonText="Nouveau Utilisateur" buttonLink="user/new" requiredModule="AjouterUtilisateurs"/>

        <div class="card">
          <div class="card-body">
            <div class="mb-3">
              <filters placeholder="Rechercher par Motcle" @filter-updated="lien_filter=$event" filters_fields="search,role" />
            </div>
            <users apiUrl="https://api.gestion-livraison.pro/api/users" ActiveCol="1" Module="user" :filters_update="lien_filter"  :hidden_columns='["id", "user_id","Active"]' />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
