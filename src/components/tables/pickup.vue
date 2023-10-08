<template>
    <div v-if="data.length" class="custom_table shadow-sm">
      <div class="custom_table_header p-3 bg--dark radius-top shadow-sm border bg-light">
        <!-- Header row -->
        <div class="row w-100 m-0 d-flex justify-content-between">

            <div class="col-md bold d-none d-md-inline text-weight-bold">Ref</div>
            <div class="col-md bold d-none d-md-inline text-weight-bold">Client</div>
            <div class="col-md bold d-none d-md-inline text-weight-bold">Quantite</div>
            <div class="col-md bold d-none d-md-inline text-weight-bold">Quantite</div>
            <div class="col-md bold d-none d-md-inline text-weight-bold">Trait</div>
            <div class="col-md bold d-none d-md-inline text-weight-bold">Date</div>
          <div class="col-md bold d-none d-md-inline text-weight-bold">Action</div>
          <div class="col-md bold d-none d-md-inline text-weight-bold">Ramassages</div>
        </div>
      </div>
      <div class="custom_table_body">
        <!-- Table rows -->
        <div v-for="item in data" :key="item.id"
          class="row mb-3 mb-sm-0 m-0 p-3 shadow border d-flex justify-content-between">
  
          <div class="col-md d-md-inline mb-2 mb-sm-0">{{ item.ref }}</div>
          <div class="col-md d-md-inline mb-2 mb-sm-0">{{ item.Client }}</div>
          <div class="col-md d-md-inline mb-2 mb-sm-0">{{ item.nbrColis }}</div>
          <div class="col-md d-md-inline mb-2 mb-sm-0">{{ item.Colis ? "Colis":"Stock" }}</div>
          <div class="col-md-1 mb-1 mb-sm-0" v-if="checkModule(this.$props.validation_role)">
            <checkd v-model="bon.Valid" :value="bon.Valid" Class_Content="" :id_check="`bon-${item.Ref}`"
              :is_checked="item.Valid" :checked="item.Valid === 1" @update:value="formData.Valid = $event"
              @change="toggleValid(item)" />
          </div>
  
  
          <div v-else class="col-md-1">
            <div :class="`badge badge-success ${item.Valid === 1 ? 'bg-success ' : 'bg-danger '}`">{{ item.Valid === 1 ?
              "Oui" : "Non" }}</div>
          </div>

          <div class="col-md d-md-inline mb-2 mb-sm-0">{{ item.Date }}</div>

  
          <div v-if="!item.Valid" class="ctb_item col-md-2 mb-1 mb-sm-0">
            <div class="d-flex order-actions">
              <router-link :to="`/bon/${item.id}/${this.$props.api_name_middle}/update`"
                class="btn bg-light btn-sm waves-effect mx-1"><i class="fas fa-pencil-alt "></i></router-link>
              <router-link :to="`/bon/${item.id}/${this.$props.api_name_middle}/update`"
                class="btn bg-light btn-sm waves-effect mx-1"><i class="fas fa-trash-alt "></i></router-link>
            </div>
          </div>
        </div>
      </div>

       <!-- Pagination -->
       <div class="row d-flex justify-content-between align-items-center my-4 p-3">
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
  
    <div v-else class="p-3 text-center bg-light">
      <p>no-data</p>
    </div>
  
    <div class="mx-2 m-3 pb-3 pt-3"></div>
  </template>
    
    
    
    
    
  <script>
  import { ref, onMounted } from 'vue';
  import { fetchDataPagination, updateData, checkPermission, GenerateBonPdf, GenerateBonUserPdf } from '../../../composition/crud.js';
  import checkd from '../../inputs/check.vue';
  
  export default {
    components: {
      checkd
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
      },
      hidden_columns:{
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

        bon: {
          Valid: '',
        },
        tableFields:[],
        data:[],
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
      async getFetchData(filters=null) {
        const response = await fetchDataPagination(this.apiUrl+filters);
  
          this.data = response.data;
          this.pagination = response.pagination;
          this.tableFields = Object.keys(response.data[0]);
          this.tableFields = this.tableFields.filter(field => !this.hidden_columns.includes(field));
      },
  
    },
    mounted(){
      this.getFetchData("");
    },
    watch: {
      // whenever question changes, this function will run
      filters_update(new_filter) {
        this.page = 0   
        this.filters=new_filter;
        this.getFetchData(new_filter)
      }
    },
  }
  </script>
    