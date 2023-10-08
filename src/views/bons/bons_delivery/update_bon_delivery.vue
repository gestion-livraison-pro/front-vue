<script setup>
import table_add_bon from '../../../components/tables/bon/add_bon.vue'
import heading from '../../../components/brumbs/heading.vue'
import SelectDropdown from '../../../components/inputs/select.vue';
import button_simple from '../../../components/buttons/simple.vue'

</script>

<template>
  <div class="main-content">
    <div class="page-content">
      <div class="container-fluid">
        <heading pageTitle="Nouveau Bon de Livraison" />

          <div class="row">
            <div class="col-md-8">
              <table_add_bon
  apiUrl="https://api.gestion-livraison.pro/api/bon/delivery/orders/"
  @table-data="handleTableData"
  :updateSelected="`https://api.gestion-livraison.pro/api/bon/delivery/${bonID}/get`" :filters_update="query_search" />            

</div>

            <div class="col-md-4">
              <div class="card">
                <div class="card-body">
                  <h5>Bon de livraison</h5>
                  <div class="row">

                    <SelectDropdown apiUrl="https://api.gestion-livraison.pro/api/customers?per_page=200" fieldName="Nom"
                      first_option="Selectionner un Client" label="Filtrer Par Client" Class_Content="col-md-12 mt-4"
                      v-model="filters.customer" :value="filters.customer" @update:value="filters.customer = $event; search('customer',$event)"  />

                    <SelectDropdown apiUrl="https://api.gestion-livraison.pro/api/cities/codes?per_page=200" fieldName="Nom"
                      first_option="Selectionner un Code" label="Filtrer Par Code Villes" Class_Content="col-md-12 mt-4" 
                      v-model="filters.codecity" :value="filters.codecity" @update:value="filters.codecity = $event; search('codecity',$event)" />

                    <SelectDropdown :apiUrl="`https://api.gestion-livraison.pro/api/cities${city_filter}?per_page=200`" fieldName="Nom"
                      first_option="Selectionner une Ville" label="Filtrer Par Ville" Class_Content="col-md-12 mt-4"
                      v-model="filters.city" :value="filters.city" @update:value="filters.city = $event; search('city',$event)"  />

                    <SelectDropdown :apiUrl="`https://api.gestion-livraison.pro/api/deliverymans${driver_filter}?per_page=200`" v-model="Driver"
                      :value="Driver" @update:value="Driver = $event;" fieldName="Nom"
                      first_option="Selectionner un Livreur" label="Livreur" Class_Content="col-md-12 mt-4" />



                    <div class="col-md-12 mt-4">
                      <button_simple @click="submitForm" Class_Content="col-md-12 mt-4" btn_text="Modifier Bon de livraison" />

                    </div>
                  </div>
                </div>
              </div>

              <!-- downloads  -->
              <div class="card" v-if="openDownload">
                <div class="card-body">
                  <h5>Telechergement</h5>
                  <div class="row">
                    

                    <button_simple @click="GenerateBon" Class_Content="col-md-12 mt-4" btn_text="Telecharger le bon"  icon="fas fa-download" />
                    <button_simple data-bs-toggle="modal" data-bs-target="#Tickets" Class_Content="col-md-12 mt-4" btn_text="Telecharger les E-tickets" icon="fas fa-download"  />

                   
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>

  <Tickets :ordersId="selectedOrdersIds" />

</template>

<style scoped>
.ticket {
  width: 100%;
  height: 12vh;
  padding: 2vw;
  cursor: pointer;
}

.ticket_squar {
  margin: 3px;
  border: 2px solid #555555;
}

.squar4 {
  width: 1.5vw;
  height: 3vh;
}

.squar2 {
  width: 3vw;
  height: 10vh;
}

.squar6 {
  width: 1.5vw;
  height: 3vh;
}
</style>



<script>
import { ref, onMounted } from 'vue';
import { updateData, GenerateBonPdf } from '../../../composition/crud.js';
import Tickets  from '../../../components/modals/eticket.vue'; // Import the specific component

export default {

  components: {
    table_add_bon: table_add_bon,
    heading: heading,
    SelectDropdown: SelectDropdown,
    button_simple: button_simple,
    Tickets,
  },
  data() {
    return {
      openDownload:true,

      selectedOrders: ref([]),
      selectedOrdersIds:  ref([]),

      test: ref([]),
      bonID: this.$route.params.id,

      filters: {
        customer: "",
        city: "",
        codecity: "",
      },
      Driver: "",
      newUrl: null,
      query_search: "",

      driver_filter: "?",
      city_filter: "?",
      
    };
  },
  methods: {
    //downloads bon
    async GenerateBon() {
        await GenerateBonPdf(this.bonID, "delivery", "https://api.gestion-livraison.pro/api/bon/delivery/" + this.bonID + "/download/get");
    },
    
    search(mode, $event) {
      this.query_search= this.constructApiUrlWithFilters(); // Emit the custom event with updated status
      if(mode=="codecity"){
        if($event){
            this.driver_filter="?"
            this.city_filter="?"

            this.driver_filter+="codecity="+$event
            this.city_filter+="codecity="+$event
        } 
        else{
            this.driver_filter="?"
            this.city_filter="?"
        }
      }

      if(mode=="city"){
        if($event){
          this.driver_filter="?"
          this.driver_filter+="city="+$event
        } 
        else{
          if(this.filters.codecity){
            this.driver_filter+="citycode="+this.filters.codecity
          }else{
            this.driver_filter="?"
          }
            
        }
      }
      
      window.history.pushState({}, '', this.newUrl)
    },
    constructApiUrlWithFilters() {
      const queryParams = new URLSearchParams()
      for (const key in this.filters) {
        if (this.filters[key]) {
          queryParams.append(key, this.filters[key])
        }
      }

      this.newUrl = `${window.location.pathname}?${queryParams.toString()}`

      return `?${queryParams.toString()}`
    },
    async submitForm() {
      console.log(this.selectedOrders);
      console.log(this.Driver);
      const formData = {
        deliverymanId: this.Driver,
        selectedRows: this.selectedOrders,
        colis: this.selectedOrders.length,
      };
      await updateData(`https://api.gestion-livraison.pro/api/bon/delivery/${this.bonID}/update`, formData);
    },
    handleTableData(orders) {
      // Do something with the table data received from the child component
      console.log(orders);
      this.selectedOrders = orders;
      if(orders) this.selectedOrdersIds = orders.map(item => item.id)

    }
  },
  onMounted() {
    // Listen to the selectedRows event and update selectedOrders
    this.$on('selectedOrders', (orders) => {
      this.selectedOrders = orders;
      if(orders) this.selectedOrdersIds = orders.map(item => item.id)
      console.log("orders");      
      console.log(orders);

    });
  },
}
</script>