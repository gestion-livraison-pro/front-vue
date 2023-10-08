
                
<script setup>
import brumb from '../../components/brumbs/heading_modal.vue'
import status from '../../components/tables/compact/orders_status.vue'
import input_text from '../../components/inputs/input.vue'
import button_simple from '../../components/buttons/simple.vue'
import SelectDropdown from '../../components/inputs/select.vue';

import filters from '../../components/filters/search.vue'
import {ref} from "vue"
const lien_filter = ref(null)

</script>

<template>
  <div class="main-content">
    <div class="page-content">
      <div class="container-fluid">

        <brumb pageTitle="Liste des Statuses" toggle="modal" target="#modalAdd" modalText="Nouveau Statut" />


        <div class="card">
          <div class="card-body">
            <div class="mb-3">
              <filters placeholder="Rechercher par Motcle" @filter-updated="lien_filter=$event" filters_fields="search,orderStatusPhase"/>
            </div>
            <status apiUrl="https://api.gestion-livraison.pro/api/order/status" :filters_update="lien_filter" :hidden_columns="['PhaseId','id']" />
          </div>
        </div>
      </div>
    </div>
  </div>



</template>



<script>



import { ref, onMounted } from 'vue';
import { addData } from '../../composition/crud.js';

export default {

  data() {
    return {
      formData: {
        Phase: '',
        Nom: '',
        Coleur: '',
      },
    };
  },
 
}



</script>
