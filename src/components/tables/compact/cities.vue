

<template>


<div v-if="data.length > 0" class="table-responsive">
    <table class="table table-bordered">
      <thead class="bg-light">
        <tr>
          <th v-for="field in tableFields" :key="field">{{ field }}</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in data" :key="item.id">
          <td v-for="field in tableFields" :key="field"><span class="header_side">{{field}} : </span> {{ item[field] }} <span v-if="field ==='Prix' || field ==='Retour' || field ==='Refuse'"> DH</span></td>
          <td class="table_actions">
            <div class="d-flex align-items-center order-actions">
              <button type="button" class="btn bg-light btn-sm waves-effect mx-1" @click="openUpdateModal(item)"><i
                class="fas fa-pencil-alt"></i></button>
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


  <div id="modalUpdate" class="modal fade" tabindex="-1" aria-labelledby="myModalLabel" aria-hidden="true">
    <form @submit.prevent="submitFormUpdate">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title mt-0" id="myModalLabel">ID</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">

            <SelectDropdown :value="formData.CodeId" apiUrl="https://api.gestion-livraison.pro/api/cities/codes"
              fieldName="Nom" first_option="Selectionner le Code" label="Code" Class_Content="col-md-12 mt-4"
              @update:value="formData.CodeId = $event" />

            <input_text v-model="Prix" label="Prix" type="text" Class_Content="col-md-12 mt-4" :value="formData.Prix"
              @update:value="formData.Prix = $event" />

            <div class="row">
              <input_text v-model="Refuse" label="Refuse" type="text" Class_Content="col-md-6 mt-4"
                :value="formData.Refuse" @update:value="formData.Refuse = $event" />

              <input_text v-model="Retour" label="Retour" type="text" Class_Content="col-md-6 mt-4"
                :value="formData.Retour" @update:value="formData.Retour = $event" />
            </div>

            <input_text v-model="Duree" label="Duree" type="text" Class_Content="col-md-12 mt-4" :value="formData.Duree"
              @update:value="formData.Duree = $event" />

            <input_text v-model="Nom" label="Nom" type="text" Class_Content="col-md-12 mt-4" :value="formData.Nom"
              @update:value="formData.Nom = $event" />

          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary waves-effect waves-light"
              data-bs-dismiss="modal">Fermer</button>
            <button type="submit" class="btn btn-primary waves-effect waves-light">Modifier</button>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal-dialog -->
    </form>
  </div><!-- /.modal -->



  <!-- Add city -->
  <div id="modalAdd" class="modal fade" tabindex="-1" aria-labelledby="modalAdd" aria-hidden="true">
    <form @submit.prevent="submitFormAdd">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title mt-0" id="modalAdd">ID</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">

            <SelectDropdown :value="formData.CodeId" apiUrl="https://api.gestion-livraison.pro/api/cities/codes"
              fieldName="Nom" first_option="Selectionner le Code" label="Code" Class_Content="col-md-12 mt-4"
              @update:value="formData.CodeId = $event" />

            <input_text v-model="Prix" label="Prix" type="text" Class_Content="col-md-12 mt-4" :value="formData.Prix"
              @update:value="formData.Prix = $event" />

            <div class="row">
              <input_text v-model="Refuse" label="Refuse" type="text" Class_Content="col-md-6 mt-4"
                :value="formData.Refuse" @update:value="formData.Refuse = $event" />

              <input_text v-model="Retour" label="Retour" type="text" Class_Content="col-md-6 mt-4"
                :value="formData.Retour" @update:value="formData.Retour = $event" />
            </div>

            <input_text v-model="Duree" label="Duree" type="text" Class_Content="col-md-12 mt-4" :value="formData.Duree"
              @update:value="formData.Duree = $event" />

            <input_text v-model="Nom" label="Nom" type="text" Class_Content="col-md-12 mt-4" :value="formData.Nom"
              @update:value="formData.Nom = $event" />
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary waves-effect waves-light"
              data-bs-dismiss="modal">Fermer</button>
            <button type="submit" class="btn btn-primary waves-effect waves-light">Ajouter</button>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal-dialog -->
    </form>
  </div><!-- /.modal -->

  <Supprimer :apiUrl="`https://api.gestion-livraison.pro/api/city/${delete_row_id}/delete`"
    @deleted-id="deletedRow = $event" />
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
import { fetchDataPagination, updateData, addData } from '../../../composition/crud.js';

import input_text from '../../inputs/input.vue'
import button_simple from '../../buttons/simple.vue'
import SelectDropdown from '../../inputs/select.vue';
import Supprimer from '../../popups/delete.vue';


export default {
  components: {
    input_text,
    button_simple,
    SelectDropdown,
    Supprimer,
  },
  data() {
    return {
      pagination: [],
      filters: "",
      pagination_filters: "",
      per_page: 10,
      page: 1,

      formData: {
        Nom: '',
        Duree: '',
        Prix: '',
        Retour: '',
        Refuse: '',
        CodeId: '',
        id: '',
      },
      data: [],
      tableFields: [],
      module: [],

      delete_row_id: "",
      deletedRow: "",

      loading: false,

    };
  },
  props: {
    apiUrl: {
      type: String,
      required: true
    },
    Module: {
      type: String,
      required: true
    },
    filters_update: {
      type: String,
      required: true,
    },
    hidden_columns: {
      type: Object,
      required: true,
    },
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
    async submitFormUpdate() {
      console.log(this.formData)
      const CityID = this.formData.id; // Retrieve the customer ID from the URL
      const return_data = await updateData(`https://api.gestion-livraison.pro/api/city/${CityID}/update`, this.formData);

      if (return_data.data) {

        this.formData = {
          id: "",
          Nom: '',
          Duree: '',
          Prix: '',
          Retour: '',
          Refuse: '',
          CodeId: '',
        };

        $('#modalUpdate').modal('hide');
      }

      //update table
      const existingRowIndex = this.data.findIndex((item) => item.id === return_data.data.id);
      if (existingRowIndex !== -1) {
        // Update the existing row
        this.data[existingRowIndex] = { ...this.data[existingRowIndex], ...return_data.data };
      }

    },
    openUpdateModal(cityData) {
      this.formData = { ...cityData }; // Make a copy of cityData to avoid reactivity issues
      $('#modalUpdate').modal('show');
      // Show the modal using JavaScript if you are using Bootstrap
      // Example: $('#modal').modal('show');
    },
    async submitFormAdd() {
      console.log(this.formData)
      const res = await addData("https://api.gestion-livraison.pro/api/city/new", this.formData);


      if (res.data) {
        this.formData = {
          id: "",
          Nom: '',
          Duree: '',
          Prix: '',
          Retour: '',
          Refuse: '',
          CodeId: '',
        };

        $('#modalAdd').modal('hide');
      }

      //update table
      this.data.push(res.data);

    },
    async getFetchData(filters = null) {
      this.loading = true

      const response = await fetchDataPagination(this.apiUrl + filters);
      this.data = response.data;
      this.pagination = response.pagination;

      if (this.data.length > 0) {
        this.tableFields = Object.keys(response.data[0]);
        this.tableFields = this.tableFields.filter(field => !this.hidden_columns.includes(field));
      }

      this.loading = false

    },
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
