<script setup>
import brumb from '../../components/brumbs/basic.vue'
import expenses from '../../components/tables/basic.vue'
</script>

<template>

  <div class="main-content">
    <div class="page-content">
      <div class="container-fluid">

        <brumb pageTitle="Liste des Expenses" buttonText="Nouveau Expense" buttonLink="expense/new" />


            <div class="card">
              <div class="card-body">
                <expenses apiUrl="https://api.gestion-livraison.pro/api/expenses" Module="expense"/>
              </div>
            </div>
          

      </div>
  </div>
</div>

</template>



