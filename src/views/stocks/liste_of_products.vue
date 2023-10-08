<script setup>
import stocks from '../../components/boxs/products.vue'

import filters from '../../components/filters/search.vue'
import {ref} from "vue"
const lien_filter = ref(null)

</script>

<template>
  <div class="main-content">
    <div class="page-content">
      <div class="container-fluid">


        <div class="page-title-box">
          <div class="row align-items-center">
            <div class="col-md-6">
              <h6 class="page-title">Liste des Produits</h6>
            </div>
            <div class="col-md-6">
              <div class="float-end d-none d-md-block">
                <router-link to="/product/new" class="btn btn-primary mx-1">Nouveau Produit</router-link>
              </div>
            </div>
          </div>
        </div>


        <div class="card">
          <div class="card-body">
            <filters placeholder="Rechercher par Motcle" @filter-updated="lien_filter=$event"  filters_fields="productType,customer,search,productCategory"/>
          </div>
        </div>

        <stocks apiUrl="https://api.gestion-livraison.pro/api/products" :filters_update="lien_filter"  />

      </div>
    </div>
  </div>
</template>

