<template>
  

  <div v-if="data.length>0" class="row">
    <div class="col-xl-3 col-md-4" v-for="item in data" :key="item.id">
      <div class="card position-relative">
        
        <img class="card-img-top" :src="'https://api.gestion-livraison.pro/' + item.Img" alt="Card image cap">
        <div class="card-body text-center">
          <p>{{ item.Nom }}</p>
          <p class="card-title">{{ item.Prix }} Dh</p>

          <div class="row d-flex justify-content-center mt-3">
            <router-link :to="`/package/${item.id}/update`"  class="btn bg-light btn-sm waves-effect col-5 mx-1"><i
                class="fas fa-pencil-alt "></i></router-link>
            <button type="button" class="btn bg-light btn-sm waves-effect col-5 mx-1" @click="delete_row_id = item.id;"
              data-bs-toggle="modal" data-bs-target="#DeleteRow"><i class="fas fa-trash-alt "></i></button>
          </div>
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

  <Supprimer :apiUrl="`https://api.gestion-livraison.pro/api/package/${delete_row_id}/delete`"
    @deleted-id="deletedRow = $event" />

</template>
    
    

<style scoped>
  img{
    width: 100%;
    height: 300px;
    object-fit: cover;
  }
</style>
  

<script>
import { ref, onMounted } from 'vue';
import { fetchData } from '../../composition/crud.js';

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
      data:[],
      filters:ref([]),  

      delete_row_id: null,
      deletedRow: "",

      loading: false,

    }
  },
  methods:{
    async getFetchData(filters=null) {
      this.loading = true

      const response = await fetchData(this.apiUrl+filters);
      console.log(response);

        this.data = response;
        console.log(this.data);

        this.loading = false

    },
  },
  mounted(){
    this.getFetchData("");
  },
  watch: {
    // whenever question changes, this function will run
    filters_update(new_filter) {
      this.filters=new_filter;
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






