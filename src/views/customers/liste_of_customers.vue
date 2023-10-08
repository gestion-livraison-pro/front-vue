<script setup>

import {ref} from "vue"
import brumb from '../../components/brumbs/basic.vue'

import customers from '../../components/tables/basic.vue'

import filters from '../../components/filters/search.vue'

const lien_filter = ref(null)
</script>

<template>


  <div class="main-content">
    <div class="page-content">
      <div class="container-fluid">

        <brumb pageTitle="Liste des clients" buttonText="Nouveau Client" buttonLink="customer/new" />

        <div class="card">
          <div class="card-body">
            <div class="mb-3">
              <filters placeholder="Rechercher par Motcle" @filter-updated="lien_filter=$event" filters_fields="search"/>
            </div>
            <customers apiUrl="https://api.gestion-livraison.pro/api/customers" Module="customer" ActiveCol="1" :filters_update="lien_filter" :hidden_columns='["id", "user_id","Active"]' />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
