<script setup>
import bon_delivery from '../../components/tables/compact/pickups.vue'
import brumb from '../../components/brumbs/heading_modal.vue'

import filters from '../../components/filters/search.vue'
import {ref} from "vue"
const lien_filter = ref(null)

</script>

<template>
  <div class="main-content">
    <div class="page-content">
      <div class="container-fluid">

        <brumb pageTitle="Liste des Ramassages" toggle="modal" target="#modalAdd" modalText="Nouvelle Demande" />


        <div class="card">
          <div class="card-body">
            <div class="mb-3">
              <filters placeholder="Rechercher par Motcle" @filter-updated="lien_filter=$event"  filters_fields="customer,search,date"/>
            </div>
            <div class="table-responsive mt-3">
              <bon_delivery apiUrl="https://api.gestion-livraison.pro/api/pickups" :filters_update="lien_filter" :hidden_columns='["id", "Valid"]' />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

