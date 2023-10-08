<template>
    <div class="row">
        <div class="card w-100 d-flex align-items-center" style="background: linear-gradient(to right, #0d3348, #0A2635)">
            <div class="card-body d-flex align-items-center justify-content-center text-light text-center">
                <h6>TAUX DE LIVRAISON</h6>
            </div>
        </div>
    </div>
    <div>
        <div class="mb-3">
            <filters placeholder="Rechercher par Motcle" @filter-updated="lien_filter = $event"
                filters_fields="customer,driver,city,date" />
        </div>

        <div class="row">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-body" v-if="hasChart">
                        <apexchart type="bar" :options="chartOptions" :series="series" height="350" />
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card">
                    <div class="card-body">
                        <apexchart type="pie" :options="chartOptionsPie" :series="seriesPie" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>




<script>
import { ref, onMounted } from 'vue';
import { fetchData, getRole } from '../../composition/crud.js';
import VueApexCharts from 'vue3-apexcharts';

import filters from '../../components/filters/search.vue'


export default {
    components: {
        apexchart: VueApexCharts,
        filters,
    },
    data() {
        return {
            filters: "",
            lien_filter: "",
            hasChart: false,
            series: [],
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
                xaxis: { categories: ref([]) }, // Define xaxis here
                yaxis: {
                    title: {
                        text: 'Commandes'
                    }
                },
                fill: {
                    opacity: 1
                },
                tooltip: {
                    y: {
                        formatter: function (val) {
                            return "" + val + " Commandes"
                        }
                    }
                },
                colors: ['#33FF57', '#FF5733', '#5733FF'], // Change colors here

            },

            //chart pie
            seriesPie: [],
            chartOptionsPie: {
                chart: {
                    width: 100,
                    type: 'pie',
                    height: 100, // Adjust this value to a positive number
                },
                labels: ['Livre', 'Retourne', 'En cours'],
                formatter: function (val, opts) {
                    const percentage = opts.w.config.seriesPie[opts.seriesIndex];
                    return percentage.toFixed(2) + '%'; // Format to two decimal places
                },
                colors: ['#33FF57', '#FF5733', '#5733FF'], // Change colors here

            },


            Role: getRole(),
        };
    },
    async mounted() {
        this.getFetchData("")
    },
    methods: {
       async getFetchData(filters="") {
            try {
                const response = await fetchData("https://api.gestion-livraison.pro/api/dashboard/taux/delivery/get"+filters);
                console.log(response);

                // Check if the response contains the expected properties
                if (response && response.barChart && response.pieChart) {
                    // Update the bar chart data
                    this.series = [
                        {
                            name: 'Livre',
                            data: response.barChart.Livre,
                        },
                        {
                            name: 'Retourne',
                            data: response.barChart.Retourne,
                        },
                        {
                            name: 'En Cours',
                            data: response.barChart.EnCours,
                        },
                    ];

                    // this.chartOptions.xaxis.categories = response.barChart.dates;
                    this.chartOptions.xaxis.categories = response.barChart.dates;
                    console.log("this.chartOptions.xaxis.categories")
                    console.log(this.chartOptions.xaxis.categories)


                    this.seriesPie = response.pieChart.data;
                    console.log("seriesPie taux")
                    console.log(response.pieChart.data)

                    if(this.chartOptions.xaxis.categories){
                        this.hasChart = true
                    }
                    
                    console.log(this.hasChart)

                } else {
                    console.error("Invalid response format: ", response);
                }
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        }
    },
    watch: {
        // whenever question changes, this function will run
        lien_filter(new_filter) {
            this.filters = new_filter;
            this.getFetchData(new_filter)
        }
    },
}
</script>
            