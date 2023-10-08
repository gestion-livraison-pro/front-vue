<script setup>
import bon_delivery from '../../../components/tables/bon/bon.vue'
import brumb from '../../../components/brumbs/basic.vue'

import filters from '../../../components/filters/search.vue'
import {ref} from "vue"
const lien_filter = ref(null)

</script>

<template>
  <div class="main-content">
    <div class="page-content">
      <div class="container-fluid">

        <brumb pageTitle="Bon de Retour Client" buttonText="Nouveau" buttonLink="/bon/customer/return/new" requiredModule="AjouterBonDeRetourLivreur"  />

        <div class="card">
          <div class="card-body">
            <div class="mb-3">
              <filters placeholder="Rechercher par Motcle" @filter-updated="lien_filter=$event"  filters_fields="customer,search,date"/>
            </div>
            <div class="table-responsive mt-3">
              <bon_delivery apiUrl="https://api.gestion-livraison.pro/api/bons/customers/returns" keyword="customerreturn" api_name_middle="customer/return" validation_role="ValidationBonDeRetourClient" :filters_update="lien_filter"  />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>
