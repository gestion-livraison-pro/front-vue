<script setup>
import brumb from '../../components/brumbs/heading_modal.vue'

import cities from '../../components/tables/compact/notes.vue'

import filters from '../../components/filters/search.vue'
import {ref} from "vue"
const lien_filter = ref(null)

</script>

<template>
  <div class="main-content">
    <div class="page-content">
      <div class="container-fluid">

        <brumb pageTitle="Liste des Remqrques" toggle="modal"
          target="#modalAdd" modalText="Nouvelle Remarque" />

        <div class="row">
          <div class="card">
            <div class="card-body">
              <div class="mb-3">
                <filters placeholder="Rechercher par Motcle" @filter-updated="lien_filter = $event"
                  filters_fields="search" />
              </div>
              <cities apiUrl="https://api.gestion-livraison.pro/api/notes" @data-to-parent="handleDataFromChild"
                @submitFormAdd="submitFormAdd" :filters_update="lien_filter" :hidden_columns='["id","RoleId"]' />



            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>


