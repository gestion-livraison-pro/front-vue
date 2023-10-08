<script setup>
import stocks from '../../components/boxs/embalages.vue'
import brumb from '../../components/brumbs/basic.vue'

import filters from '../../components/filters/search.vue'
import {ref} from "vue"
const lien_filter = ref(null)

</script>

<template>
  <div class="main-content">
    <div class="page-content">
      <div class="container-fluid">


        <brumb pageTitle="Liste des Embalages" buttonText="Nouveau Embalage" buttonLink="package/new" />


        <div class="card">
          <div class="card-body">
            <filters placeholder="Rechercher par Motcle" @filter-updated="lien_filter=$event"  filters_fields="search"/>
          </div>
        </div>


        <stocks apiUrl="https://api.gestion-livraison.pro/api/packages" :filters_update="lien_filter" />

      </div>
    </div>
  </div>
</template>

