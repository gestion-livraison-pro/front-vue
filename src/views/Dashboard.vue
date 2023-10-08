

<template>
  <div class="main-content">
    <div class="page-content">
      <div class="container-fluid">



        <!------notes-->
        <div v-for="nt in Notes" :key="nt.id">
          <div :class="`alert alert-${nt.Type} bg-${nt.Type} border-${nt.Type} alert-dismissible  text-white`" role="alert`">
            <strong>{{ nt.Message }}</strong> 
            <button type="button" class="btn-close " data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
        </div>


        <!----livreur only-->
        <invoice v-if="Role == 'deliveryman'" />

        <div class="row">
          <div v-for="box in filteredOrdersStatus" :key="box.Nom" class="col-xl-3 col-md-3">
            <div v-if="box.Menu === 1" class="card mini-stats " @click=" this.$router.push('/orders/status/' + box.id)"
              style="cursor: pointer;">
              <div class="p-3" :style="{ backgroundColor: box.Couleur }">
                <div class="mb-4 text-center text-light">
                  <h5>{{ box.Nom }}</h5>
                </div>
              </div>
              <div class="mx-3">
                <div class="card mb-0 border p-3 mini-stats-desc text-center">
                  <div class>
                    <h4 class="mt-0">{{ box.Count }}</h4>
                  </div>
                  <p class="text-muted mb-0">Commandes</p>
                </div>
              </div>
            </div>
          </div>
        </div>


        <!----Taux de livraison-->
        <taux />


        <!----Earnings-->
        <earnings v-if="Role == 'customer'" />

        <!----Earnings-->
        <driverEarnings v-if="Role == 'deliveryman'" />


        <!---- Admine Ernings-->
        <Adminearnings v-if="Role == 'Admin'" />






      </div>
    </div>
  </div>
</template>




<script>
import { ref, onMounted } from 'vue';
import { fetchData, getRole } from '../composition/crud.js';
import { mapActions } from 'vuex';
import VueApexCharts from 'vue3-apexcharts';

import invoice from '../components/dashboard/invoice.vue';
import taux from '../components/dashboard/taux.vue';
import Adminearnings from '../components/dashboard/adminEarnings.vue';
import earnings from '../components/dashboard/earnings.vue';
import driverEarnings from '../components/dashboard/driverEarnings.vue';

import store from '../stores/index'; // Import your store.js file


export default {
  components: {
    apexchart: VueApexCharts,
    invoice,
    taux,
    earnings,
    Adminearnings,
    driverEarnings

  },
  data() {
    return {
      OrdersStatus: [],

      series: [{
        name: 'Net Profit',
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
      }, {
        name: 'Revenue',
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
      }, {
        name: 'Free Cash Flow',
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
      }],
      chartOptions: {
        chart: {
          type: 'bar',
          height: 350
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '55%',
            endingShape: 'rounded'
          },
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 2,
          colors: ['transparent']
        },
        xaxis: {
          categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
        },
        yaxis: {
          title: {
            text: '$ (thousands)'
          }
        },
        fill: {
          opacity: 1
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return "$ " + val + " thousands"
            }
          }
        }
      },


      series_pie: [44, 55, 13, 43, 22],
      chartOptions: {
        chart: {
          width: 380,
          type: 'pie',
        },
        labels: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      },



      formData: {
        Nom: '',
        Téléphone: '',
        Email: '',
        Adresse: '',
        MotdePasse: '',
        Role: '',
      },
      Role: getRole(),
      Notes: [],
    };
  },
  async mounted() {
    const response = store.state.permissions.permissions
    this.OrdersStatus = response.OrderStatus

    this.Notes = response.Notes
  },
  methods: {
    ...mapActions('permissions', ['setPermissionsLoaded']), // Map the setUsername action from the 'auth' module
  },
  computed: {
    filteredOrdersStatus() {
      // Filter the OrdersStatus array based on your condition
      return this.OrdersStatus.filter((box) => box.Menu === 1);
    },
  }
}
</script>
            