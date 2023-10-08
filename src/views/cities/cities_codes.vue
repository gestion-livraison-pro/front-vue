<script setup>
import brumb from '../../components/brumbs/heading_modal.vue'
import CitiesCodes from '../../components/tables/compact/cities_codes.vue'

import filters from '../../components/filters/search.vue'
import {ref} from "vue"
const lien_filter = ref(null)

</script>

<template>
  <div class="main-content">
    <div class="page-content">
      <div class="container-fluid">
        <brumb pageTitle="Villes Codes" toggle="modal" target="#modalAdd" modalText="Nouvelle Code" />
        <div class="card">
          <div class="card-body">
            <div class="mb-3">
                <filters placeholder="Rechercher par Motcle" @filter-updated="lien_filter = $event"
                  filters_fields="search" />
              </div>
            <CitiesCodes apiUrl="https://api.gestion-livraison.pro/api/cities/codes" :filters_update="lien_filter" />
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
