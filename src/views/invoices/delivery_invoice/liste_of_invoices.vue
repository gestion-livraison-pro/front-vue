<script setup>

import delivery_invoices from '../../../components/tables/delivery_invoice.vue'
import heading from '../../../components/brumbs/heading.vue'


import filters from '../../../components/filters/search.vue'
import {ref} from "vue"
const lien_filter = ref(null)

</script>

<template>
  <div class="main-content">
    <div class="page-content">
      <div class="container-fluid">

        <heading pageTitle="Factures Livreurs" />


        <div class="card">
          <div class="card-body">

            <div class="mb-3">
              <filters placeholder="Rechercher par Motcle" @filter-updated="lien_filter=$event"  filters_fields="driver,search,date"/>
            </div>

              <delivery_invoices apiUrl="https://api.gestion-livraison.pro/api/delivery_invoices" requiredModule_Cloturé="FactureLivreurCloturer" requiredModule_Versé="FactureLivreurPaye" :filters_update="lien_filter" />

            </div>
          </div>
        </div>

    </div>
  </div>
</template>

