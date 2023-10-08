<template>
  <div v-if="data.length" class="row">
    <div class="col-xl-3 col-md-4" v-for="item in data" :key="item.id">

      <div class="card">



        <img class="card-img-top" :src="'https://api.gestion-livraison.pro/' + item.img" alt="Card image cap">
        <div class="card-body text-center">
          <p class="card-title p-2">{{ item.Titre }}</p>


          <div class="row d-flex align-items-center">
            <div v-if="item.Client" class="col-md-12 border p-2">
              <p class="text-mute text-start">Client</p>
              <strong class="">{{ item.Client }}</strong>
            </div>
            <div class="col-md-6 border p-2">
              <p class="text-mute text-start">Embalage</p>
              <strong class="">{{ item.Embalage }}</strong>
            </div>
            <div class="col-md-6 border p-2">
              <p class="text-mute text-start">Quantite</p>
              <h5 class="">
                <div class="badge bg-success">{{ item.Quantite }}</div>
              </h5>
            </div>
          </div>

          <div class="row d-flex align-items-center">
            <div class="col-md-6 border p-2">
              <p class="text-mute text-start">Categorie</p>
              <strong class="">{{ item.Categorie }}</strong>
            </div>
            <div class="col-md-6 border p-2">
              <p class="text-mute text-start">type</p>
              <strong class="">{{ item.Type }}</strong>
            </div>
          </div>

          <div class="row d-flex justify-content-center mt-3">
            <router-link :to="`/product/${item.id}/update`" class="btn bg-light btn-sm waves-effect col-5 mx-1"><i
                class="fas fa-pencil-alt "></i></router-link>
            <button type="button" class="btn bg-light btn-sm waves-effect col-5 mx-1" @click="delete_row_id = item.id;"
              data-bs-toggle="modal" data-bs-target="#DeleteRow"><i class="fas fa-trash-alt "></i></button>
          </div>

        </div>
      </div>
    </div>


    <!-- Pagination -->
    <div class="card">
      <div class="card-body">
        <div class="row d-flex justify-content-between align-items-center">
          <div class="col-md-1">
            <select class="form-control" v-model="per_page" @change="pageCount">
              <option value="8">8</option>
              <option value="20">20</option>
              <option value="50">50</option>
              <option value="100">100</option>
              <option value="200">200</option>
              <option value="500">500</option>
              <option value="1000">1000</option>
            </select>

          </div>

          <nav class="col-md-6 d-flex justify-content-end align-items-center">
            <ul class="pagination  d-flex align-items-center">
              <li class="page-item" v-if="pagination.current_page > 1">
                <a class="page-link" href="#" @click="loadPage(pagination.current_page - 1)">Précédent</a>
              </li>

              <li class="page-item" v-for="page in pagination.last_page" :key="page"
                :class="{ 'active': page === pagination.current_page }">
                <a class="page-link" href="#" @click="loadPage(page)">{{ page }}</a>
              </li>

              <li class="page-item" v-if="pagination.current_page < pagination.last_page">
                <a class="page-link" href="#" @click="loadPage(pagination.current_page + 1)">Suivant</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>


  </div>

  <div v-else-if="loading" class="d-flex justify-content-center py-4 bg-light">
    <span class="loader"></span>
  </div>

  <div v-else class="card p-3 text-center">
    <p>no-data</p>
  </div>

  <Supprimer :apiUrl="`https://api.gestion-livraison.pro/api/product/${delete_row_id}/delete`"
    @deleted-id="deletedRow = $event" />
</template>
    
    
  

<script>
import { ref, onMounted } from 'vue';
import { fetchDataPagination } from '../../composition/crud.js';

import Supprimer from '../../components/popups/delete.vue';

export default {

  components: {
    Supprimer
  },
  props: {
    apiUrl: {
      type: String,
      required: true
    },
    filters_update: {
      type: String,
      required: true,
    }
  },
  data() {
    return {
      pagination: [],
      filters: "",
      pagination_filters: "",
      per_page: 8,
      page: 1,

      data: [],
      filters: ref([]),

      delete_row_id: null,
      deletedRow: "",

      loading: false,

    }
  },
  methods: {
    loadPage(nbr) {
      this.page = nbr
      let query
      if (this.filters.length>0) {
        query = this.filters + "&page=" + this.page + "&per_page=" + this.per_page
      } else {
        query = "?page=" + this.page + "&per_page=" + this.per_page
      }
      this.getFetchData(query)
    },
    pageCount() {
      let query
      if (this.filters.length>0) {
        query = this.filters + "&page=" + this.page + "&per_page=" + this.per_page
      } else {
        query = "?page=" + this.page + "&per_page=" + this.per_page
      }
      this.getFetchData(query)
      console.log(query)
    },
    async getFetchData(filters) {
      this.loading= true
      const response = await fetchDataPagination(this.apiUrl + filters);
      this.data = response.data;
      this.pagination = response.pagination;
      this.loading= false

    },
  },
  mounted() {
    this.getFetchData("");
  },
  watch: {
    // whenever question changes, this function will run
    filters_update(new_filter) {
      this.filters = new_filter;
      this.getFetchData(new_filter)
    },
    deletedRow(deletedId) {
      //update table
      const index = this.data.findIndex((item) => item.id === parseInt(deletedId));
      if (index !== -1) {
        this.data.splice(index, 1);
      }
    },
  },
}
</script>






