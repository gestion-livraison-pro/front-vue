<template>
  <div class="custom_table shadow-sm">
    <div class="custom_table_header p-3 bg--dark radius-top shadow-sm border bg-light">
      <!-- Header row -->
      <div class="row w-100 m-0 d-flex justify-content-between">
        <div class="col-md-2 bold d-none d-md-inline text-weight-bold" v-for="field in tableFields" :key="field">{{ field
        }}</div>

        <div class="col-md-2 bold d-none d-md-inline">Action</div>
        <div class="col-md-2 bold d-md-none d-sm-inline">Roles</div>
      </div>
    </div>
    <div class="custom_table_body">
      <!-- Table rows -->
      <div v-for="item in data" :key="item.id"
        class="row mb-3 mb-sm-0 m-0 p-3 shadow border d-flex justify-content-between">

        <div class="ctb_item col-md-2 mb-2 mb-sm-0" v-for="field in tableFields" :key="field">{{ item[field] }}</div>

        <div class="ctb_item col-md-2 mb-1 mb-sm-0">
          <div class="d-flex order-actions">
            <router-link :to="`/${module}/${item.id}/update`" class="btn bg-light btn-sm waves-effect mx-1"><i
                class="fas fa-pencil-alt "></i></router-link>
            <button type="button" class="btn bg-light btn-sm waves-effect mx-1"><i class="fas fa-trash-alt "></i></button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="mx-2 m-3 pb-3 pt-3"></div>
</template>
  
  
  
  
  
<script>
import { ref, onMounted } from 'vue';
import { fetchDataPagination } from '../../composition/crud.js';

export default {

  props: {
    apiUrl: {
      type: String,
      required: true
    },
    Module: {
      type: String,
      required: true
    },
    hidden_columns: {
      type: Object,
      required: true
    }
  },

 
  methods: {
    async getFetchData(filters = null) {
      const response = await fetchDataPagination(this.apiUrl + filters);
      console.log(response);

      this.data = response.data;
      this.pagination = response.pagination;
      this.tableFields = Object.keys(response.data[0]);
      this.tableFields = this.tableFields.filter(field => !this.hidden_columns.includes(field));

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
      this.page=1
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
  