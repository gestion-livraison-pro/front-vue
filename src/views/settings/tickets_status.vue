<script setup>
import brumb from '../../components/brumbs/basic.vue'

import expenses from '../../components/tables/mini_table.vue'

</script>

<template>
  <div class="main-content">
    <div class="page-content">
      <div class="container-fluid">

        <brumb pageTitle="Tickets Statut" buttonText="Nouveau Statut" buttonLink="ticket/status/new" />

        <div class="row">
          <div class="col-md-4">
            <div class="card">
              <div class="card-body">
                <h1>form</h1>
              </div>
            </div>
          </div>
          <div class="col-md-8">
            <div class="card">
              <div class="card-body">
                <expenses apiUrl="https://api.gestion-livraison.pro/api/reclamations_status" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

