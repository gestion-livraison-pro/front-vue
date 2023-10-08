<script setup>
import heading from '../../../components/brumbs/heading.vue'

import customers_invoices from '../../../components/tables/customer_invoice.vue'

import filters from '../../../components/filters/search.vue'
import {ref} from "vue"
const lien_filter = ref(null)

</script>

<template>
  <div class="main-content">
    <div class="page-content">
      <div class="container-fluid">
        <heading pageTitle="Factures Clients" />
        <div class="card">
          <div class="card-body">

            <div class="mb-3">
              <filters placeholder="Rechercher par Motcle" @filter-updated="lien_filter=$event"  filters_fields="customer,search,date"/>
            </div>

              <customers_invoices apiUrl="https://api.gestion-livraison.pro/api/customer_invoices" requiredModule_Cloturé="FactureClientCloturer" requiredModule_Versé="FactureClientPaye" :filters_update="lien_filter" />
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

