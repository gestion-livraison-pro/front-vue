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
            <td v-for="field in tableFields" :key="field"><span class="header_side">{{field}} : </span> {{ item[field] }}</td>
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
import { fetchData } from '../../composition/crud.js';

export default {

  props: {
    apiUrl: {
      type: String,
      required: true
    }
  },

  setup(props) {
    console.log("response");

    const data = ref([]);
    const tableFields = ref([]);

   

    async function fetchDataAndFields() {
      const response = await fetchData(props.apiUrl);
      console.log(response);

      if (response.length > 0) {
        data.value = response;
        console.log(data.value);
        tableFields.value = Object.keys(response[0]);
      }
    }

    const showData = fetchDataAndFields;

    onMounted(async () => {
      await showData();
    });
    
    return {
      data,
      tableFields,
      showData,

    };
  },
  
}
</script>
  