<script setup>
import brumb from '../../components/brumbs/heading_modal.vue'
import CustomerFee from '../../components/tables/compact/customer_fees.vue'

import filters from '../../components/filters/search.vue'
import {ref} from "vue"
const lien_filter = ref(null)


</script>

<template>
  <div class="main-content">
    <div class="page-content">
      <div class="container-fluid">
        <brumb pageTitle="Clients Tarifs" toggle="modal" target="#modalAdd" modalText="Nouveau Tarif" />
        <div class="card">
          <div class="card-body">
            <div class="mb-3">
              <filters placeholder="Rechercher par Motcle" @filter-updated="lien_filter=$event" filters_fields="customer,city"/>
            </div>
            <CustomerFee apiUrl="https://api.gestion-livraison.pro/api/customers/fees"  :filters_update="lien_filter" hidden_columns="id"/>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
