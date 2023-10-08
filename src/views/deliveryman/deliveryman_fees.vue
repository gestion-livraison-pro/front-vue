<script setup>
import brumb from '../../components/brumbs/heading_modal.vue'
import CitiesCodes from '../../components/tables/compact/deliveryman_fees.vue'

import filters from '../../components/filters/search.vue'
import {ref} from "vue"
const lien_filter = ref(null)

</script>

<template>
  <div class="main-content">
    <div class="page-content">
      <div class="container-fluid">
        <brumb pageTitle="Livreurs Tarifs" toggle="modal" target="#modalAdd" modalText="Nouveau Tarif" />
        <div class="card">
          <div class="card-body">
            <div class="mb-3">
                <filters placeholder="Rechercher par Motcle" @filter-updated="lien_filter = $event"
                  filters_fields="driver,city" />
              </div>
            <CitiesCodes apiUrl="https://api.gestion-livraison.pro/api/deliverymans/fees" :filters_update="lien_filter" :hidden_columns="['VilleId','LivreurId','id']" />
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
