<script setup>

import {ref} from "vue"
import brumb from '../../components/brumbs/basic.vue'
import order_info from '../../components/modals/order_info.vue'; // Import the modal component

import Matches from '../../components/tables/match_orders.vue'

import filters from '../../components/filters/search.vue'

const lien_filter = ref(null)
const selectedOrderId = ref(null);

</script>

<template>


  <div class="main-content">
    <div class="page-content">
      <div class="container-fluid">

        <brumb pageTitle="Changement d'adresse automatique" />

        <div class="alert alert-success bg-success border-success alert-dismissible  text-white" role="alert`">
          <strong>
            Cette nouvelle et incroyable fonctionnalité vous fait gagner du temps et moins de dépenses ainsi qu'un taux de livraison plus élevé, donc dans cette fonction il y a un robot qui compare entre les nouvelles commandes et les commandes avec statut (1,2,3) et ce robot vous fait un choix si vous je veux changer l'adresse de cette commande pour la livrer au nouveau client
          </strong>
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>

        <div class="card">
          <div class="card-body">
            <div class="mb-3">
              <filters placeholder="Rechercher par Motcle" @filter-updated="lien_filter=$event" filters_fields="search,customer,deliveryman,date,orderStatus"/>
            </div>
            <Matches apiUrl="https://api.gestion-livraison.pro/api/orders/match" @show-order-details="selectedOrderId = $event" Module="match" ActiveCol="1" :filters_update="lien_filter" :hidden_columns='["id", "user_id","Active"]' />
          </div>
        </div>
      </div>
    </div>
  </div>

  <order_info :orderId="selectedOrderId" />

</template>
