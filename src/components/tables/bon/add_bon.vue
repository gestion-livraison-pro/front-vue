<template>
  <!-- Orders table -->
  <div class="card">
    <div class="card-body">
      <h5>Commandes</h5>



<div v-if="orders.length > 0" class="table-responsive">
    <table class="table table-bordered">
      <thead class="bg-light">
        <tr>
          <th v-for="field in tableFields" :key="field">{{ field }}</th>
          <th>Statut</th>
          <th>
            <button type="button" class="btn bg-primary text-light btn-sm waves-effect mx-1"
                @click="moveAllToSelectedOrders()">
                <i class="fas fa-plus"></i>
              </button>
          </th>

        </tr>
      </thead>
      <tbody>
        <tr v-for="item in orders" :key="item.id">
          <td v-for="field in tableFields" :key="field"><span class="header_side">{{field}} : </span> {{ item[field] }}</td>
          <td><span class="badge" :style="{ backgroundColor: item.StatutColeur }"><span class="header_side">Statut : </span> {{ item.Statut }}</span></td>
          <td class="table_actions">
            <div class="d-flex align-items-center order-actions">
              <button type="button" class="btn bg-primary text-light btn-sm waves-effect mx-1"
                  @click="moveToSelectedOrders(item)">
                  <i class="fas fa-plus"></i>
                </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>


      <div v-else-if="loading" class="card-body d-flex justify-content-center py-4">
        <div class="text-center">
          <span class="loader"></span>
        </div>
      </div>

      <div v-else class="card-body">
        <div class="card p-3 bg-light text-center">
          <p>Aucun Commandes pour Ajouter</p>
        </div>
      </div>

    </div>


  </div>

  <!-- Selected orders table -->
  <div class="card">
    <div class="card-body">
      <h5>Les Commandes Sélectionnées</h5>



<div v-if="selectedOrders.length > 0" class="table-responsive">
    <table class="table table-bordered">
      <thead class="bg-light">
        <tr>
          <th v-for="field in tableFields" :key="field">{{ field }}</th>
          <th>Statut</th>
          <th>
            <button type="button" class="btn bg-danger text-light btn-sm waves-effect mx-1"
                  @click="removeAllFromSelectedOrders()">
                  <i class="fas fa-times"></i>
                </button>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="selectedOrder in selectedOrders" :key="selectedOrder.id">
          <td v-for="field in tableFields" :key="field"><span class="header_side">{{field}} : </span> {{ selectedOrder[field] }}</td>
          <td><span class="badge" :style="{ backgroundColor: selectedOrder.StatutColeur }"><span class="header_side">Statut : </span> {{ selectedOrder.Statut }}</span></td>
          <td class="table_actions">
            <div class="d-flex align-items-center order-actions">
              <button type="button" class="btn bg-danger text-light btn-sm waves-effect mx-1"
                  @click="removeFromSelectedOrders(selectedOrder)">
                  <i class="fas fa-times"></i>
                </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>


      <div v-else-if="loading_selected" class="card-body d-flex justify-content-center py-4">
        <div class="text-center">
          <span class="loader"></span>
        </div>
      </div>

      <div v-else class="card-body">
        <div class="card p-3 bg-light text-center">
          <p>Aucun Commandes Selectionne</p>
        </div>
      </div>

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
import { ref } from 'vue';
import { fetchData, getRow } from '../../../composition/crud.js';


export default {
  props: {
    apiUrl: {
      type: String,
      required: true,
    },
    tableX: {
      type: Array,
      required: true,
    },
    updateSelected: {
      type: Array,
    },
    filters_update: {
      type: String,
    }
  },
  data() {
    return {
      orders: [],
      tableFields: [],
      selectedOrders: [],

      loading: false,
      loading_selected: false,

    };
  },
  methods: {
    moveToSelectedOrders(item) {
      const index = this.orders.indexOf(item);
      if (index > -1) {
        this.orders.splice(index, 1);
        this.selectedOrders.push(item);
      }
      this.$emit('table-data', this.selectedOrders);
    },
    moveAllToSelectedOrders() {
      this.selectedOrders = this.selectedOrders.concat(this.orders);
      this.orders = [];
      this.$emit('table-data', this.selectedOrders);
    },
    removeAllFromSelectedOrders() {
      this.orders = this.orders.concat(this.selectedOrders);
      this.selectedOrders = [];
      this.$emit('table-data', this.selectedOrders);
    },
    
    removeFromSelectedOrders(selectedOrder) {
      const index = this.selectedOrders.indexOf(selectedOrder);
      if (index > -1) {
        this.selectedOrders.splice(index, 1);
        this.orders.push(selectedOrder);
        this.$emit('table-data', this.selectedOrders);
      }
    },
    async getFetchData(filters = "") {

      this.loading = true

      if (this.updateSelected) {
        this.loading_selected = true
        console.log(this.updateSelected);
        const response = await getRow(this.updateSelected);
        this.selectedOrders = response;
        this.loading_selected = false
      }

      const fetchDataResponse = await fetchData(this.apiUrl + filters);
      this.orders = fetchDataResponse;

      if (fetchDataResponse.length > 0) {
        this.tableFields = Object.keys(fetchDataResponse[0]);
        this.tableFields = this.tableFields.filter(field => !["id", "Statut", "StatutColeur"].includes(field));

      }
      this.loading = false

      this.$emit('table-data', this.selectedOrders);

    },

  },
  mounted() {
    this.getFetchData();
  },
  watch: {
    // whenever question changes, this function will run
    filters_update(new_filter) {
      this.filters = new_filter;
      this.getFetchData(new_filter)
      this.$emit('table-data', this.selectedOrders);

    },

  },
};
</script>
      