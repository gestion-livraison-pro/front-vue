<script setup>
import brumb from '../../components/brumbs/basic.vue'

import expenses from '../../components/tables/mini_table.vue'

</script>

<template>
  <div class="main-content">
    <div class="page-content">
      <div class="container-fluid">

        <brumb pageTitle="Ramassages Statut" buttonText="Nouveau Statut" buttonLink="pickup/status/new" />

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
                <div class="mb-3">
                  <filters placeholder="Rechercher par Motcle" @filter-updated="lien_filter = $event" filters_fields="search,orderStatusPhase" />
                </div>
                <expenses apiUrl="https://api.gestion-livraison.pro/api/pickups_status" :filters_update="lien_filter" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

