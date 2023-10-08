<template>
  <div v-if="data.length > 0" class="table-responsive">
    <table class="table table-bordered">
      <thead class="bg-light">
        <tr>
          <th v-for="field in tableFields" :key="field">{{ field }}</th>
          <th v-if="ActiveCol">Active</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in data" :key="item.id">
          <td v-for="field in tableFields" :key="field"><span class="header_side">{{field}} : </span> {{ item[field] }}</td>
          <td v-if="ActiveCol"> <span class="header_side">Active : </span>
            <checkd v-model="IsActive" :value="IsActive" Class_Content="col-md-1 mb-1 mb-sm-0"
              :id_check="`User-${item.user_id}`" :is_checked="item.Active" :checked="item.Active === 1"
              @update:value="IsActive = $event" @change="toggleActive(item)" />
          </td>
          <td v-if="Role != 'deliveryman'" class="table_actions">
            <div class="d-flex align-items-center order-actions">
              <router-link :to="`/${Module}/${item.id}/update`" class="btn bg-light btn-sm waves-effect mx-1"><i
                  class="fas fa-pencil-alt "></i></router-link>
              <button type="button" class="btn bg-light btn-sm waves-effect mx-1" @click="delete_row_id = item.id;"
                data-bs-toggle="modal" data-bs-target="#DeleteRow"><i class="fas fa-trash-alt "></i></button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>



    <!-- Pagination -->

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


  <Supprimer :apiUrl="`https://api.gestion-livraison.pro/api/${Module}/${delete_row_id}/delete`"
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
import { ref, onMounted, watch } from 'vue';
import { fetchData, updateData, fetchDataPagination } from '../../composition/crud.js';

import checkd from '../../components/inputs/check.vue';

import Supprimer from '../../components/popups/delete.vue';

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
    Module: {
      type: String,
      required: true,
    },
    ActiveCol: {
      type: String,
      required: true,
    },
    filters_update: {
      type: String,
      required: true,
    },
    hidden_columns: {
      type: Object,
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

      data: [],
      tableFields: [],

      delete_row_id: "",
      deletedRow: "",

      loading: false,
    }
  },
  methods: {
    async toggleActive(item) {
      item.Active = item.Active === 1 ? 0 : 1;
      await updateData(`https://api.gestion-livraison.pro/api/user/${item.user_id}/activation`, { Active: item.Active });
    },
    async getFetchData(filters = null) {
      this.loading = true

      const response = await fetchDataPagination(this.apiUrl + filters);
      console.log(response);

      this.data = response.data;
      if (this.data.length > 0) {
        this.pagination = response.pagination;
        this.tableFields = Object.keys(response.data[0]);
        this.tableFields = this.tableFields.filter(field => !this.hidden_columns.includes(field));
      }


      this.loading = false

    },
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

    pageCount($event) {
      console.log($event)
      let query
      if (this.filters) {
        query = this.filters + "&page=" + this.page + "&per_page=" + this.per_page
      } else {
        query = "?page=" + this.page + "&per_page=" + this.per_page
      }
      this.getFetchData(query)
      console.log(query)
    }

  },
  mounted() {
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
