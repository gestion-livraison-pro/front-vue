<script setup>
import bon_delivery from '../../../components/tables/bon/bon.vue'
import brumb from '../../../components/brumbs/basic.vue'

</script>

<template>
  <div class="main-content">
    <div class="page-content">
      <div class="container-fluid">

        <brumb pageTitle="Bon de Stock" buttonText="Nouveau Bon de stock" buttonLink="/bons/stock/new" />

        <div class="card">
          <div class="card-body">
            <div class="table-responsive mt-3">
              <bon_delivery apiUrl="https://api.gestion-livraison.pro/api/bons/stocks" api_name_middle="stock" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

