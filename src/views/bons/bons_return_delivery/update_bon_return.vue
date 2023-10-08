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

        <form @submit.prevent="submitForm">
          <div class="row">
            <div class="col-md-8">
              <table_add_bon
  apiUrl="https://api.gestion-livraison.pro/api/bon/return/delivery/orders"
  @table-data="handleTableData"
  :updateSelected="`https://api.gestion-livraison.pro/api/bon/return/${bonID}/get`"  :filters_update="query_search"
/>            </div>

            <div class="col-md-4">
              <div class="card">
                <div class="card-body">
                  <h5>Bon de Retour</h5>
                  <div class="row">

                    <SelectDropdown :apiUrl="`https://api.gestion-livraison.pro/api/deliverymans?per_page=200`" v-model="filters.driver"
                      :value="filters.driver" @update:value="filters.driver = $event; search('driver',$event)" fieldName="Nom"
                      first_option="Selectionner un Livreur" label="Livreur" Class_Content="col-md-12 mt-4" />


                    <div class="col-md-12 mt-4">
                      <button_simple type="submit" Class_Content="col-md-12 mt-4" btn_text="Modifier Bon de livraison" />

                    </div>
                  </div>
                </div>
              </div>

              <!-- downloads  -->
              <div class="card" v-if="false">
                <div class="card-body">
                  <h5>Telechergement</h5>
                  <div class="row">

                    <button_simple type="submit" Class_Content="col-md-12 mt-4" btn_text="Telecharger le bon" />


                    <div class="row">
                      <!-- 1/2  -->
                      <div class="col-3">
                        <div
                          class="ticket waves-effect bg-light d-flex align-items-center justify-content-center flex-column shadow border mt-4">
                          <div class="ticket_squar squar2"></div>
                          <div class="ticket_squar squar2"></div>
                        </div>
                      </div>
                      <!-- 1/4  -->
                      <div class="col-3">
                        <div
                          class="ticket waves-effect bg-light d-flex align-items-center justify-content-center flex-column shadow border mt-4">
                          <div class="d-flex flex-row">
                            <div class="">
                              <div class="ticket_squar squar4"></div>
                            </div>
                            <div class="">
                              <div class="ticket_squar squar4"></div>
                            </div>
                          </div>
                          <div class="d-flex flex-row">
                            <div class="">
                              <div class="ticket_squar squar4"></div>
                            </div>
                            <div class="">
                              <div class="ticket_squar squar4"></div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <!-- 1/6  -->
                      <div class="col-3">
                        <div
                          class="ticket waves-effect bg-light d-flex align-items-center justify-content-center flex-column shadow border mt-4">
                          <div class="d-flex flex-row">
                            <div class="">
                              <div class="ticket_squar squar6"></div>
                            </div>
                            <div class="">
                              <div class="ticket_squar squar6"></div>
                            </div>
                          </div>
                          <div class="d-flex flex-row">
                            <div class="">
                              <div class="ticket_squar squar6"></div>
                            </div>
                            <div class="">
                              <div class="ticket_squar squar6"></div>
                            </div>
                          </div>
                          <div class="d-flex flex-row">
                            <div class="">
                              <div class="ticket_squar squar6"></div>
                            </div>
                            <div class="">
                              <div class="ticket_squar squar6"></div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <!-- 10x10  -->
                      <div class="col-3">
                        <div
                          class="ticket waves-effect bg-light d-flex align-items-center justify-content-center flex-column shadow border mt-4">
                          <div class="ticket_squar squar6"></div>
                          <div class="ticket_squar squar6"></div>
                          <div class="ticket_squar squar6"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
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
import { updateData } from '../../../composition/crud.js';

export default {

  components: {
    table_add_bon: table_add_bon,
    heading: heading,
    SelectDropdown: SelectDropdown,
    button_simple: button_simple,
  },
  data() {
    return {
      selectedOrders: ref([]),
      test: ref([]),
      bonID: this.$route.params.id,

      filters: {
        driver: "",
      },

      newUrl: null,
      query_search: "",

    };
  },
  methods: {
    search(mode, $event) {
      this.query_search = this.constructApiUrlWithFilters(); // Emit the custom event with updated status
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
      console.log(this.filters.driver);
      const formData = {
        CustomerId: this.filters.driver,
        selectedRows: this.selectedOrders,
        colis: this.selectedOrders.length,
      };
      await updateData(`https://api.gestion-livraison.pro/api/bon/${this.bonID}/delivery/return/update`, formData);
    },
    handleTableData(orders) {
      // Do something with the table data received from the child component
      console.log(orders);
      this.selectedOrders = orders;

    }
  },
  onMounted() {
    // Listen to the selectedRows event and update selectedOrders
    this.$on('selectedOrders', (orders) => {
      this.selectedOrders = orders;
      console.log("orders");      
      console.log(orders);

    });
  },
}
</script>