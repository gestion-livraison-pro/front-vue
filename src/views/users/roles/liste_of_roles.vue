<script setup>
import brumb from '../../../components/brumbs/basic.vue'
import roles from '../../../components/tables/basic.vue'
</script>

<template>


  <div class="main-content">
    <div class="page-content">
      <div class="container-fluid">

        <brumb pageTitle="Liste des Roles" buttonText="Nouveau Role" buttonLink="role/new"  requiredModule="AjouterRoles" />

        <div class="card">
          <div class="card-body">
            <roles apiUrl="https://api.gestion-livraison.pro/api/roles" Module="role" :hidden_columns="[]"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
