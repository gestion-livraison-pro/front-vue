<template>
  <div v-if="data.length > 0" class="table-responsive">

    <div class="col-md-4 mb-3" v-if="selectedRows.length > 0">
          <div class="d-flex">
            <a
                href="#"
                @click="ValidSelected(1)"
                class="btn flex-grow-1 m-l-xxs mx-2"
                style="background: #d3f7d8; color: #3cab23"
                ><i class="fas fa-check mx-1"></i>Accepter</a
              >

              <a
                href="#"
                @click="ValidSelected(0)"
                class="btn flex-grow-1 m-r-xxs mx-2"
                style="background: #fce3e5; color: #ff4857"
                ><i class="fas fa-times mx-1"></i>Refuser</a
              >
          </div>
    </div>

    <table class="table table-bordered">
      <thead class="bg-light">
        <tr>
        <th><input type="checkbox" class="" @click="toggleAllRowsSelection"
              :checked="selectedRows.length === data.length" /></th>
          <th>Nouvelle Commandes</th>
          <th>Changer a</th>
          <th>Commandes En Retour</th>

          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in data" :key="item.id">
            <td><input @change="toggleRowSelection(item.id)"
                :checked="selectedRows.includes(item.id)"
                 type="checkbox" class="" />
            </td>
          <td>
            <a
              href=""
              class="mx-md-0 mx-4"
              @click="showOrderDetails(item.NewId)"
              data-bs-toggle="modal"
              data-bs-target="#orderInfo"
              >{{ item.NewRef }}</a
            >
          </td>
          <td><i class="fas fa-arrow-right fa-2x"></i></td>
          <td>
            <a
              href=""
              class="mx-md-0 mx-4"
              @click="showOrderDetails(item.OldId)"
              data-bs-toggle="modal"
              data-bs-target="#orderInfo"
              >{{ item.OldRef }}</a
            >
          </td>
          <td v-if="Role != 'deliveryman'" class="table_actions">
            <div v-if="!item.Accept && !item.Refuse" class="d-flex">
              <a
                href="#"
                @click="ValidOne(1, item.id)"
                class="btn flex-grow-1 m-l-xxs mx-2"
                style="background: #d3f7d8; color: #3cab23"
                ><i class="fas fa-check mx-1"></i>Accepter</a
              >

              <a
                href="#"
                @click="ValidOne(0, item.id)"
                class="btn flex-grow-1 m-r-xxs mx-2"
                style="background: #fce3e5; color: #ff4857"
                ><i class="fas fa-times mx-1"></i>Refuser</a
              >
            </div>

            <div v-else class="d-flex">
              <a
                v-if="item.Accept && !item.Refuse"
                href="#"
                class="btn flex-grow-1 m-l-xxs mx-2 disabled w-100 disabled"
                style="background: #d3f7d8; color: #3cab23"
                ><i class="fas fa-check mx-1"></i>Accepté</a
              >

              <a
                v-if="!item.Accept && item.Refuse"
                href="#"
                class="btn flex-grow-1 m-r-xxs mx-2 disabled w-100 disabled"
                style="background: #fce3e5; color: #ff4857"
                ><i class="fas fa-times mx-1"></i>Refusé</a
              >
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <div v-else-if="loading" class="d-flex justify-content-center py-4 bg-light">
    <span class="loader"></span>
  </div>

  <div v-else class="p-3 text-center bg-light">
    <p>no-data</p>
  </div>

  <div class="mx-2 m-3 pb-3 pt-3"></div>
</template>
  
  
  
<style scoped>
.table-responsive {
  overflow-x: auto;
}

table span.header_side {
  display: none;
}

thead th {
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
  }

  table span.header_side {
    display: block;
  }
}
</style>
  
  
  
<script>
import { ref, onMounted, watch } from 'vue'
import { fetchData, updateData, fetchDataPagination } from '../../composition/crud.js'

import checkd from '../../components/inputs/check.vue'

import Supprimer from '../../components/popups/delete.vue'

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
      required: true
    },
    ActiveCol: {
      type: String,
      required: true
    },
    filters_update: {
      type: String,
      required: true
    },
    hidden_columns: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      pagination: [],
      filters: '',
      pagination_filters: '',
      per_page: 10,
      page: 1,

      data: [],
      tableFields: [],

      delete_row_id: '',
      deletedRow: '',

      loading: false,

      ValidData: {
        Valid: null,
        Requests_ids: []
      },
      selectedRows:[]
    }
  },
  methods: {
    showOrderDetails(orderId) {
      this.$emit('show-order-details', orderId)
    },
    async ValidOne(Valid, request_id) {
      this.ValidData.Requests_ids.push(request_id)
      this.ValidData.Valid = Valid
      await updateData(`https://api.gestion-livraison.pro/api/orders/match/valid`, this.ValidData)

      // Update the data in the table
      this.data.forEach((item) => {
        if (item.id === request_id) {
          if (Valid === 1) {
            item.Accept = true
            item.Refuse = false
          } else if (Valid === 0) {
            item.Accept = false
            item.Refuse = true
          }
        }
      })

      this.ValidData.Requests_ids = []
      this.Valid = null
    },

    toggleRowSelection(rowId) {
      // Toggle the selection of a row by adding or removing its ID from selectedRows
      if (this.selectedRows.includes(rowId)) {
        this.selectedRows = this.selectedRows.filter((id) => id !== rowId)
      } else {
        this.selectedRows.push(rowId)
      }
    },
    async ValidSelected(Valid) {
      // Perform the validation action on selected rows
        // Update the data on the server for each selected row
        await updateData(`https://api.gestion-livraison.pro/api/orders/match/valid`, {
          Valid,
          Requests_ids: this.selectedRows,
        });

        // Update the mirrorData array based on the selected rows
        this.data.forEach((item) => {
            if (this.selectedRows.includes(item.id)) {
            if (Valid === 1) {
                item.Accept = true;
                item.Refuse = false;
            } else if (Valid === 0) {
                item.Accept = false;
                item.Refuse = true;
            }
            }
        });

      // Clear the selectedRows array after processing
      this.selectedRows = [];
    },
    toggleAllRowsSelection() {
      // Toggle selection for all rows based on the master checkbox status
      if (this.selectedRows.length === this.data.length) {
        // All rows are already selected, so deselect all
        this.selectedRows = [];
      } else {
        // Not all rows are selected, so select all
        this.selectedRows = this.data.map((item) => item.id);
      }
    },


    async getFetchData(filters = null) {
      this.loading = true

      const response = await fetchDataPagination(this.apiUrl + filters)
      console.log(response)

      this.data = response.data
      if (this.data.length > 0) {
        this.pagination = response.pagination
        this.tableFields = Object.keys(response.data[0])
        this.tableFields = this.tableFields.filter((field) => !this.hidden_columns.includes(field))
      }

      this.loading = false
    },
    loadPage(nbr) {
      this.page = nbr
      let query
      if (this.filters) {
        query = this.filters + '&page=' + this.page + '&per_page=' + this.per_page
      } else {
        query = '?page=' + this.page + '&per_page=' + this.per_page
      }
      this.getFetchData(query)
    },

    pageCount($event) {
      console.log($event)
      let query
      if (this.filters) {
        query = this.filters + '&page=' + this.page + '&per_page=' + this.per_page
      } else {
        query = '?page=' + this.page + '&per_page=' + this.per_page
      }
      this.getFetchData(query)
      console.log(query)
    }
  },
  mounted() {
    this.getFetchData('')
  },
  watch: {
    // whenever question changes, this function will run
    filters_update(new_filter) {
      this.page = 1
      this.filters = new_filter
      this.getFetchData(new_filter)
    },
    deletedRow(deletedId) {
      //update table
      const index = this.data.findIndex((item) => item.id === parseInt(deletedId))
      if (index !== -1) {
        this.data.splice(index, 1)
      }
    }
  }
}
</script>
  