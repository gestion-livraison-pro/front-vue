<script setup>
import { ref } from 'vue';

import orders from '../../components/tables/orders.vue'
import brumb from '../../components/brumbs/basic.vue'
import order_info from '../../components/modals/order_info.vue'; // Import the modal component
import order_history from '../../components/modals/order_history.vue'; // Import the modal component

import filters from '../../components/filters/search.vue'
const lien_filter = ref(null)

const selectedOrderId = ref(null);
const SelectedStatus = ref([]);
const ScannedOrderId = ref([]);
const selectedOrderIdHistory = ref(null)
const selectedOrderIdTickets = ref([])



</script>

<template>
  <div class="main-content">
    <div class="page-content">
      <div class="container-fluid">



        <brumb pageTitle="Liste des Commandes" buttonText="Nouvelle Commande" buttonLink="order/new"
          requiredModule="AjouterCommande" />


        <div class="card">
          <div class="card-body">

            <div>
              <filters placeholder="Rechercher par Motcle" @filter-updated="lien_filter=$event"  filters_fields="customer,search,date,driver,orderStatus"/>
            </div>

            <div class="mt-3">
              <orders apiUrl="https://api.gestion-livraison.pro/api/orders" Module="order"
                @show-order-details="selectedOrderId = $event" @show-order-history="selectedOrderIdHistory = $event" :scannedOrderId="ScannedOrderId"
                @TicketsordersId="selectedOrderIdTickets = $event"  :filters_update="lien_filter" />
                
              <order_info :orderId="selectedOrderId" />

              <order_history :orderId="selectedOrderIdHistory" />


              <scanner v-if="SelectedStatus && Role!='customer'" :NewStatusSelected="SelectedStatus" :is_active="isActive" @scanned-order="ScannedOrderId = $event"  />

              <PreScan v-if="Role!='customer'" @select-new-status="SelectedStatus = $event" class="mt-5" />

              <Tickets :ordersId="selectedOrderIdTickets" />
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


</template>



<script>
//:new_status_id="newStatus_id" :new_status="newStatus" :new_status_color="newStatus_color"
import PreScan from '../../components/modals/pre_scan.vue'
import scanner  from '../../components/modals/order_scanner.vue'; // Import the specific component
import Tickets  from '../../components/modals/eticket.vue'; // Import the specific component

import { getRole } from '../../composition/crud.js';

export default {
    components:{
      PreScan,
      scanner,
      Tickets
    },
    data() {
      return {
        Role: getRole()
      }
    },

  }

  </script>