<script setup>
import brumb from '../../components/brumbs/basic.vue'
import tickets from '../../components/tables/basic.vue'

import filters from '../../components/filters/search.vue'
import {ref} from "vue"
const lien_filter = ref(null)

</script>

<template>


  <div class="main-content">
    <div class="page-content">
      <div class="container-fluid">

        <brumb pageTitle="Liste des Tickets" buttonText="Nouveau Ticket" buttonLink="ticket/new" requiredModule="AjouterTicket" />

        <div class="card">
          <div class="card-body">
            <div class="mb-3">
              <filters placeholder="Rechercher par Motcle" @filter-updated="lien_filter=$event" filters_fields="search,ticketStatus,customer,ticketType,date"/>
            </div>
            <tickets apiUrl="https://api.gestion-livraison.pro/api/reclamations" :filters_update="lien_filter" Module="reclamation" :hidden_columns='["id", "user_id","Active"]' />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
