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

        <brumb pageTitle="Bon de livraison" buttonText="Nouveau Bon de Livraison" buttonLink="/bons/delivery/new" requiredModule="AjouterBonDeLivraison" />

        <div class="card">
          <div class="card-body">
            <div class="table-responsive mt-3">
              <div class="mb-3">
              <filters placeholder="Rechercher par Motcle" @filter-updated="lien_filter=$event"  filters_fields="driver,search,date"/>
            </div>
              <bon_delivery apiUrl="https://api.gestion-livraison.pro/api/bons/delivery" keyword="delivery"  api_name_middle="delivery" validation_role="ValidationBonDeLivraison"  :filters_update="lien_filter" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <scan_bar v-if="Role!='customer'" />

  <bon_scanner v-if="Role!='customer'" getDataUrl="https://api.gestion-livraison.pro/api/bon/order/delivery/" updateDataUrl="https://api.gestion-livraison.pro/api/bon/delivery/order/valid"/>

</template>



<script>
import scan_bar from '../../../components/elements/scan_bar.vue'
import bon_scanner from '../../../components/modals/bon_scanner.vue'
import { getRole } from '../../../composition/crud.js';

export default {
    components:{
      scan_bar,
      bon_scanner
    },
    data() {
      return {
        Role: getRole()
      }
    },
}

</script>

