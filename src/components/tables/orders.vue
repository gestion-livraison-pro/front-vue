<template>
  <div class="row mb-3">
    <input_text v-model="filters.text" type="text" Class_Content="col-md mb-3" :value="filters.text"
      @update:value="filters.text = $event" placeholder="Recherche" />

    <input_text v-model="filters.date" type="date" Class_Content="col-md mb-3" :value="filters.date"
      @update:value="filters.date = $event" placeholder="Date" />

    <SelectDropdown v-if="Role != 'customer' && Role != 'deliveryman'" v-model="filters.livreur" :value="filters.livreur"
      apiUrl="https://api.gestion-livraison.pro/api/deliverymans?per_page=200" fieldName="Nom"
      first_option="Tous les Livreurs" Class_Content="col-md mb-3" @update:value="filters.livreur = $event" />

    <SelectDropdown v-if="Role != 'customer' && Role != 'deliveryman'" v-model="filters.client" :value="filters.client"
      apiUrl="https://api.gestion-livraison.pro/api/customers?per_page=200" fieldName="Nom"
      first_option="Tous les Clients" Class_Content="col-md mb-3" @update:value="filters.client = $event" />

    <SelectDropdown v-model="filters.status" :value="filters.status" :multiple="true"
      apiUrl="https://api.gestion-livraison.pro/api/order/status?per_page=200" fieldName="Nom"
      first_option="Tous les Statutes" Class_Content="col-md mb-3" @update:value="filters.status = $event"  />

    <button_simple @click="filter" type="submit" Class_Content="col-md-2 mb-3" btn_text="Filtrer" />
  </div>

  <button_simple v-if="ticketOrderIDS.length" data-bs-toggle="modal" data-bs-target="#Tickets" @click="GenerateTicket" Class_Content="my-2 col-md-1"
    btn_text="E-Ticket" icon="fas fa-download" />


  <div v-if="data.length > 0" class="table-responsive" >
    <table class="table table-bordered">
      <thead class="bg-light">
        <tr>
          <th><input type="checkbox" class="form-check-input" @change="selectAllOrders" /></th>
          <th>Ref</th>
          <th>Montant</th>
          <th v-if="Role != 'customer' && Role != 'deliveryman'">Client</th>
          <th>Statut</th>
          <th>Ville</th>
          <th v-if="Role === 'deliveryman'">Adresse</th>
          <th v-if="Role != 'customer' && Role != 'deliveryman'">Livreur</th>
          <th v-if="Role != 'deliveryman'">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in data" :key="item.id">
          <td><input type="checkbox" class="form-check-input" @change="selectOrder(item.id, $event)" /></td>
          <td><span class="header_side">Ref : </span> <a href="" class="mx-md-0 mx-4" @click="showOrderDetails(item.id)" data-bs-toggle="modal" data-bs-target="#orderInfo">{{ item.Ref }}</a></td>
          <td><span class="header_side">Montant : </span> {{ item.Montant }} DH</td>
          <td v-if="item.Client"><span class="header_side">Client : </span> {{ item.Client }}</td>
          <td><span class="header_side">Statut : </span> <a href="#"
              @click="changeOrderStatus(item.id, item.Ref, item.Statut, item.StatutCouleur, item.StatutId)"
              data-bs-toggle="modal" :data-bs-target="item.StatutId != 7 ? '#orderStatus' : ''" class="badge p-2"
              :style="{ backgroundColor: item.StatutCouleur }">{{ item.Statut }}</a></td>
          <td><span class="header_side">Ville : </span> {{ item.Ville }}</td>
          <td v-if="Role === 'deliveryman'"><span class="header_side">Adresse : </span> {{ item.Adresse }}</td>
          <td v-if="Role != 'customer' && Role != 'deliveryman'">Livreur {{ item.Livreur }}</td>
          <td v-if="Role != 'deliveryman'" class="table_actions">
            <div class="d-flex align-items-center order-actions">
              <button ype="button" class="btn btn-light btn-sm waves-effect  mx-1" @click="GenerateOneTicket(item.id)"
                  data-bs-toggle="modal" data-bs-target="#Tickets"> <i class="fas fa-file-download"></i></button>   
              
              <button @click="showOrderHistory(item.id)" data-bs-toggle="modal" data-bs-target="#orderHistory"
                type="button" class="btn btn-light btn-sm waves-effect mx-1">
                <i class="fas fa-history"></i>
              </button>
              <button @click="newConversation(item.id)" type="button" class="btn btn-light btn-sm waves-effect  mx-1">
                <i class="far fa-envelope"></i>
              </button>
              <router-link v-if="Role=='Admin' || item.StatutId===4 || item.StatutId===5 || item.StatutId===6 || item.StatutId===27" 
               :to="`/${Module}/${item.id}/update`" class="btn btn-light btn-sm waves-effect  mx-1">
                <i class="fas fa-pencil-alt"></i>
              </router-link>
                  <button v-if="Role=='Admin' || item.StatutId===4 || item.StatutId===5 || item.StatutId===6 || item.StatutId===27" type="button" class="btn btn-light btn-sm waves-effect  mx-1" @click="delete_row_id = item.id;"
                  data-bs-toggle="modal" data-bs-target="#DeleteRow"><i class="fas fa-trash-alt"></i></button>   
            </div>
          </td>


        </tr>
      </tbody>
    </table>



    <!-- Pagination -->
    <div class="row d-flex justify-content-between align-items-center ">
      <div class="col-md-1">
        <select class="form-control" v-model="filters.per_page" @change="pageCount">
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




  <div v-else-if="loading" class="d-flex justify-content-center py-4 bg-light">
    <span class="loader"></span>
  </div>

  <div v-else class="p-3 text-center bg-light">
    <p>no-data</p>
  </div>

  <div class="mx-2 m-3 pb-3 pt-3"></div>

  <order_status @status-updated="updateStatusInTable" :orderId="OrderId" :orderref="OrderRef"
    :old_status="OrderStatusName" :old_status_color="OrderStatusColor" :old_status_id="OrderStatusId" />

  <Supprimer :apiUrl="`https://api.gestion-livraison.pro/api/order/${delete_row_id}/delete`"
    @deleted-id="deletedRow = $event" />
</template>


<style scoped>

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
import order_status from '../../components/modals/order_status.vue'
import input_text from '../../components/inputs/input.vue'
import SelectDropdown from '../../components/inputs/select.vue'
import button_simple from '../../components/buttons/simple.vue'
import Supprimer from '../../components/popups/delete.vue'
import { ref, onMounted, computed, watch, defineProps } from 'vue'
import { fetchData, addData, getRole, fetchDataPagination } from '../../composition/crud.js'
import { useRoute } from 'vue-router'

export default {
  components: {
    order_status,
    input_text,
    SelectDropdown,
    button_simple,
    Supprimer,
  },
  props: ['apiUrl', 'Module','filters_update'],
  data() {
    return {
      delete_row_id: "",
      deletedRow: "",
      Role: getRole(),
      formData: {
        Type: 0,
        Contenu: '',
        Sujet: ''
      },
      ticketOrderIDS: [],
      isCkeckAll: false,
      windowWidth: window.innerWidth, // Store the window width in data
      filters: {
        date: '',
        status: '',
        client: '',
        livreur: '',
        text: '',
        per_page: 10,
        page: '',
        pagination_filters: '',
      },
      loading: false,
      data: [],
      pagination: [],
      tableFields: [],
      OrderRef: null,
      OrderStatusName: null,
      OrderStatusColor: null,
      OrderStatusId: null,
      OrderId: null,

    }
  },
  computed: {
    apiUrlWithFilters() {
      const queryParams = new URLSearchParams()
      for (const key in this.filters) {
        if (this.filters[key]) {
          queryParams.append(key, this.filters[key])
        }
      }
      return `${this.apiUrl}?${queryParams.toString()}`
    },
    isMobile() {
      return this.windowWidth
    },
  },
  watch: {
    'route.params.status_id'(newStatusId) {
      this.filters.status = newStatusId || ''
      this.displayData()
    },
    windowWidth: 'displayData',
     // whenever question changes, this function will run
     filters_update(new_filter) {
            this.page = 1
            this.filters = new_filter;
            this.displayData(new_filter)
      },
  },
  created() {
    this.parseUrlFilters()
    this.displayData()
  },
  methods: {
    async displayData(filters_params='') {
      this.loading = true
      const response = await fetchDataPagination(this.apiUrl + filters_params)
      console.log(response)
      this.data = response.data
      this.pagination = response.pagination
      this.loading = false
    },
    async newConversation(cmdID) {
      const newConv = {
        CommandeID: cmdID
      }
      await addData('https://api.gestion-livraison.pro/api/conversation/new', newConv)
      this.$router.push('/messages')
    },
    async selectAllOrders() {
      const checkboxes = document.querySelectorAll('input[type="checkbox"]')
      var check = true
      if (this.isCkeckAll === true) {
        check = false
        this.isCkeckAll = false
      } else this.isCkeckAll = true
      for (const checkbox of checkboxes) {
        checkbox.checked = check
        const event = new Event('change')
        checkbox.dispatchEvent(event)
      }
    },
    async selectOrder(cmdID, event) {
      const id = cmdID
      const checked = event.target.checked
      if (checked) {
        this.ticketOrderIDS.push(cmdID)
      } else {
        this.ticketOrderIDS = this.ticketOrderIDS.filter((item) => item !== id)
      }
    },
    async GenerateTicket() {
      this.$emit('TicketsordersId', this.ticketOrderIDS)
      this.ticketOrderIDS = []
      const checkboxes = document.querySelectorAll('input[type="checkbox"]')
      for (const checkbox of checkboxes) {
        checkbox.checked = false
      }
    },
    async GenerateOneTicket(cmdID) {
      this.ticketOrderIDS.push(cmdID)
      this.GenerateTicket()
    },
    async updateStatusInTable(response) {
      this.data = this.data.map((order) => (order.id === response.id ? response : order))
      this.OrderId = null
    },
    filter() {
      this.filters.page = 1
      const queryParams = new URLSearchParams()
      for (const key in this.filters) {
        if (this.filters[key]) {
          queryParams.append(key, this.filters[key])
        }
      }
      const newUrl = `${window.location.pathname}?${queryParams.toString()}`
      window.history.pushState({}, '', newUrl)
      this.displayData()
    },
    parseUrlFilters() {
      const urlParams = new URLSearchParams(window.location.search)
      for (const key of urlParams.keys()) {
        if (this.filters[key] !== undefined) {
          this.filters[key] = urlParams.get(key)
        }
      }
    },
    loadPage(nbr) {
      this.filters.page = nbr
      this.displayData()
    },
    pageCount() {
      this.displayData()
    },
    showOrderDetails(orderId) {
      this.$emit('show-order-details', orderId)
    },
    showOrderHistory(orderId) {
      this.$emit('show-order-history', orderId)
    },
    changeOrderStatus(id, ref, name, color, StatusId) {
      this.OrderRef = ref
      this.OrderStatusName = name
      this.OrderStatusColor = color
      this.OrderStatusId = StatusId
      this.OrderId = id
    },
  },
}
</script>
