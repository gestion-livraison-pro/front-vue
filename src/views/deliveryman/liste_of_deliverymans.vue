<script setup>
import brumb from '../../components/brumbs/basic.vue'

import deliverymans from '../../components/tables/basic.vue'
import filters from '../../components/filters/search.vue'

import {ref} from "vue"
const lien_filter = ref(null)

</script>

<template>


  <div class="main-content">
    <div class="page-content">
      <div class="container-fluid">

        <brumb pageTitle="Liste des Livreurs" buttonText="Nouveau Livreur" buttonLink="deliveryman/new" />

        <div class="card">
          <div class="card-body">

            <div class="mb-3">
              <filters placeholder="Rechercher par Motcle" @filter-updated="lien_filter=$event" filters_fields="search"/>
            </div>

            <deliverymans apiUrl="https://api.gestion-livraison.pro/api/deliverymans" Module="deliveryman" ActiveCol="1" :filters_update="lien_filter" :hidden_columns='["id", "user_id","Active"]'  />
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
