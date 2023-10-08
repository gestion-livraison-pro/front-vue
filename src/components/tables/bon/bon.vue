<template>
  <div v-if="data.length > 0" class="table-responsive">
    <table class="table table-bordered">
      <thead class="bg-light">
        <tr>
          <th v-for="field in tableFields" :key="field">{{ field }}</th>
          <th>Valide/Colis</th>
          <th>Validation</th>

          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in data" :key="item.id">
          <td v-for="field in tableFields" :key="field"><span class="header_side">{{ field }} : </span> {{ item[field] }}
          </td>
          <td><span class="header_side">Valide/Colis : </span>
            <div v-if="item.Colis != null"> {{ item.Valide + "/" + item.Colis }}</div>
            <div v-else>Counred</div>
          </td>

          <td>
            <span class="header_side">Validation : </span>

            <checkd v-if="Role=='deliveryman' && item.Valid ===0" v-model="bon.Valid" :value="bon.Valid" Class_Content="" :id_check="`bon-${item.Ref}`"
              :is_checked="item.Valid" :checked="item.Valid === 1" @update:value="formData.Valid = $event"
              @change="toggleValid(item)" />

            <checkd  v-if="checkModule(this.$props.validation_role) && Role !='deliveryman'" v-model="bon.Valid" :value="bon.Valid" Class_Content="" :id_check="`bon-${item.Ref}`"
              :is_checked="item.Valid" :checked="item.Valid === 1" @update:value="formData.Valid = $event"
              @change="toggleValid(item)" />

              <div v-else :class="`badge badge-success ${item.Valid === 1 ? 'bg-success ' : 'bg-danger '}`">{{ item.Valid === 1 ?
            "Oui" : "Non" }}</div>


          </td>

          <td class="table_actions">
            <div class="d-flex align-items-center order-actions">
              <button @click="GenerateBon(item.id)" type="button" class="btn bg-light btn-sm waves-effect mx-1"><i
                class="fas fa-file-invoice"></i></button>
            <router-link v-if="Role!='deliveryman' && Role=='Admin' || item.Valid!=1" :to="`/bon/${item.id}/${this.$props.api_name_middle}/update`"
              class="btn bg-light btn-sm waves-effect mx-1"><i class="fas fa-pencil-alt "></i></router-link>
            <button v-if="Role!='deliveryman' &&  Role=='Admin' || item.Valid!=1" type="button" class="btn bg-light btn-sm waves-effect mx-1" @click="delete_row_id = item.id;"
              data-bs-toggle="modal" data-bs-target="#DeleteRow"><i class="fas fa-trash-alt "></i></button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Pagination -->
    <div class="row d-flex justify-content-between align-items-center ">
      <div class="col-md-1">
        <select class="form-control" v-model="per_page" @change="pageCount">
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
          <option value="100">100</option>
          <option value="200">200</option>
          <option value="500">500</option>
          <option value="1000">1000</option>
        </select>

      </div>

      <nav class="col-md-6 d-flex justify-content-end align-items-center">
        <ul class="pagination  d-flex align-items-end">
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

  <div v-else-if="loading" class="d-flex justify-content-center py-4 bg-light">
    <span class="loader"></span>
  </div>

  <div v-else class="p-3 text-center bg-light">
    <p>no-data</p>
  </div>


  <Supprimer :apiUrl="`https://api.gestion-livraison.pro/api/bon/${api_name_middle}/${delete_row_id}/delete`"
    @deleted-id="deletedRow = $event" />

  <div class="mx-2 m-3 pb-3 pt-3"></div>
</template>
  
  
  
    
    
<style scoped>
.table-responsive {
  overflow-x: auto;
}

table span.header_side {
  display: none;
}

thead th{
  font-weight: bolder;
}

@media (max-width: 768px) {
  .table-responsive table {
    width: 100%;
  }

  .table-responsive thead {
    display: none;
    /* Hide headers in mobile */
  }

  .table-responsive tbody tr {
    display: block;
    margin-bottom: 10px;
    border: 1px solid #ddd;
    padding: 10px;
  }

  .table-responsive tbody td {
    display: flex;
    justify-content: space-between;
  }



  .table_actions {
    display: flex;
    justify-content: center !important;
    ;
  }

  table span.header_side {
    display: block;
  }
}



</style>
  
  
  
<script>
import { ref, onMounted } from 'vue';
import {getRole ,fetchData, updateData, checkPermission, GenerateBonPdf, GenerateBonUserPdf, fetchDataPagination } from '../../../composition/crud.js';
import checkd from '../../inputs/check.vue';

import Supprimer from '../../popups/delete.vue';


export default {
  components: {
    checkd,
    Supprimer
  },
  props: {
    apiUrl: {
      type: String,
      required: true
    },
    api_name_middle: {
      type: String,
      required: true
    },
    validation_role: {
      type: String,
      required: true
    },
    keyword: {
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
      per_page: 10,
      page: 1,

      bon: {
        Valid: '',
      },
      tableFields: [],
      data: [],

      delete_row_id: "",
      deletedRow: "",

      loading: false,
      Role: getRole(),

    };
  },
  methods: {
    loadPage(nbr) {
      this.page = nbr
      let query
      if (this.filters) {
        query = this.filters + "&page=" + this.page + "&per_page=" + this.per_page
      } else {
        query = "?page=" + this.page + "&per_page=" + this.per_page
      }
      this.getFetchData(query)
    },
    pageCount() {
      let query
      if (this.filters) {
        query = this.filters + "&page=" + this.page + "&per_page=" + this.per_page
      } else {
        query = "?page=" + this.page + "&per_page=" + this.per_page
      }
      this.getFetchData(query)
      console.log(query)
    },
    async toggleValid(item) {
      item.Valid = item.Valid === 1 ? 0 : 1;
      await updateData(`https://api.gestion-livraison.pro/api/bon/${item.id}/${this.$props.api_name_middle}/valid/update`, { Valid: item.Valid });
    },
    checkModule(module) {
      const response = checkPermission(module);
      console.log(response);
      return response;
    },

    //downloads
    async GenerateBon(BonID) {
      if (this.$props.keyword === "delivery" || this.$props.keyword === "customerreturn") {
        await GenerateBonPdf(BonID, this.$props.keyword, "https://api.gestion-livraison.pro/api/bon/" + this.$props.keyword + "/" + BonID + "/download/get");
      } else await GenerateBonUserPdf(BonID, this.$props.keyword, "https://api.gestion-livraison.pro/api/bon/" + this.$props.keyword + "/" + BonID + "/download/get");
    },
    async getFetchData(filters = null) {
      this.loading = true

      const response = await fetchDataPagination(this.apiUrl + filters);

      this.data = response.data;
      this.pagination = response.pagination;

      if (this.data.length > 0) {
        this.tableFields = Object.keys(response.data[0]);
        this.tableFields = this.tableFields.filter(field => !['id', 'Valid', 'Valide', 'Colis'].includes(field));
      }

      this.loading = false

    },

  },
  mounted() {
    this.$emit('selectedOrders', this.selectedOrders);
    this.getFetchData("");
  },
  watch: {
    // whenever question changes, this function will run
    filters_update(new_filter) {
      this.page = 1
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
  