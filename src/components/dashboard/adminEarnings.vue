<template>
    <div class="row">
        <div class="card w-100 d-flex align-items-center" style="background: linear-gradient(to right, #0d3348, #0A2635)">
            <div class="card-body d-flex align-items-center justify-content-center text-light text-center">
                <h6>REVENUE</h6>
            </div>
        </div>
    </div>
    <div class="mb-3">
        <filters placeholder="Rechercher par Motcle" @filter-updated="lien_filter = $event"
            filters_fields="customer,driver,city,date" />
    </div>
    <div class="card">
        <div class="card-body">
            <div class="row">

                <div class="mt-3 col-md-3">
                    <div class="card px-2" style="box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;">
                        <div class="row p-3 d-flex justify-content-between align-items-center">
                            <div class="col-4 box_icon d-flex align-items-center justify-content-center"
                                style="background-color: rgb(234, 183, 16); color: #ffffff; border-radius: 50%; height: 60px; width: 60px;">
                                <i class="fas fa-exclamation fa-2x"></i>
                            </div>
                            <div class="col-8 box_right text-end d-flex flex-column align-items-end justify-content-center">
                                <div class="box_title">
                                    <p>Livreur Factures Non Paye</p>
                                </div>
                                <div class="box_number">
                                    <h5>{{ LivreurNonPaye }}</h5>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                <div class="mt-3 col-md-3">
                    <div class="card px-2" style="box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;">
                        <div class="row p-3 d-flex justify-content-between align-items-center">
                            <div class="col-4 box_icon d-flex align-items-center justify-content-center"
                                style="background-color: rgb(33, 163, 1); color: #ffffff; border-radius: 50%; height: 60px; width: 60px;">
                                <i class="fas fa-check fa-2x"></i>
                            </div>
                            <div class="col-8 box_right text-end d-flex flex-column align-items-end justify-content-center">
                                <div class="box_title">
                                    <p>Livreur Factures Paye</p>
                                </div>
                                <div class="box_number">
                                    <h5>{{ LivreurPaye }}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="mt-3 col-md-3">
                    <div class="card px-2" style="box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;">
                        <div class="row p-3 d-flex justify-content-between align-items-center">
                            <div class="col-4 box_icon d-flex align-items-center justify-content-center"
                                style="background-color: rgb(234, 183, 16); color: #ffffff; border-radius: 50%; height: 60px; width: 60px;">
                                <i class="fas fa-exclamation fa-2x"></i>
                            </div>
                            <div class="col-8 box_right text-end d-flex flex-column align-items-end justify-content-center">
                                <div class="box_title">
                                    <p>Client Factures Non Paye</p>
                                </div>
                                <div class="box_number">
                                    <h5>{{ ClientNonPaye }}</h5>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="mt-3 col-md-3">
                    <div class="card  px-2" style="box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;">
                        <div class="row p-3 d-flex justify-content-between align-items-center">
                            <div class="col-4 box_icon d-flex align-items-center justify-content-center"
                                style="background-color: rgb(33, 163, 1); color: #ffffff; border-radius: 50%; height: 60px; width: 60px;">
                                <i class="fas fa-check fa-2x"></i>
                            </div>
                            <div class="col-8 box_right text-end d-flex flex-column align-items-end justify-content-center">
                                <div class="box_title">
                                    <p>Client Factures Paye</p>
                                </div>
                                <div class="box_number">
                                    <h5>{{ ClientPaye }}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div class="row">

                <div class="mt-3 col-md-3">
                    <div class="card px-2" style="box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;">
                        <div class="row p-3 d-flex justify-content-between align-items-center">
                            <div class="col-4 box_icon d-flex align-items-center justify-content-center"
                                style="background-color: rgb(0, 98, 18); color: #ffffff; border-radius: 50%; height: 60px; width: 60px;">
                                <i class="fas fa-file-invoice-dollar fa-2x"></i>
                            </div>
                            <div class="col-8 box_right text-end d-flex flex-column align-items-end justify-content-center">
                                <div class="box_title">
                                    <p>Chiffre d'affaire</p>
                                </div>
                                <div class="box_number">
                                    <h5>{{ TotalAmount }}</h5>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="mt-3 col-md-3">
                    <div class="card px-2" style="box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;">
                        <div class="row p-3 d-flex justify-content-between align-items-center">
                            <div class="col-4 box_icon d-flex align-items-center justify-content-center"
                                style="background-color: rgb(0, 98, 18); color: #ffffff; border-radius: 50%; height: 60px; width: 60px;">
                                <i class="fas fa-funnel-dollar fa-2x"></i>
                            </div>
                            <div class="col-8 box_right text-end d-flex flex-column align-items-end justify-content-center">
                                <div class="box_title">
                                    <p>Revenue</p>
                                </div>
                                <div class="box_number">
                                    <h5>{{ Revenue }}</h5>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div class="mt-3 col-md-3">
                    <div class="card px-2" style="box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;">
                        <div class="row p-3 d-flex justify-content-between align-items-center">
                            <div class="col-4 box_icon d-flex align-items-center justify-content-center"
                                style="background-color: #d10a00; color: #ffffff; border-radius: 50%; height: 60px; width: 60px;">
                                <i class="fas fas fa-sign-out-alt fa-2x"></i>
                            </div>
                            <div class="col-8 box_right text-end d-flex flex-column align-items-end justify-content-center">
                                <div class="box_title">
                                    <p>Expenses</p>
                                </div>
                                <div class="box_number">
                                    <h5>{{ Expenses }}</h5>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="mt-3 col-md-3">
                    <div class="card px-2" style="box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;">
                        <div class="row p-3 d-flex justify-content-between align-items-center">
                            <div class="col-4 box_icon d-flex align-items-center justify-content-center"
                                style="background-color: #0A2635; color: #ffffff; border-radius: 50%; height: 60px; width: 60px;">
                                <i class="fas fa-wallet fa-2x"></i>
                            </div>
                            <div class="col-8 box_right text-end d-flex flex-column align-items-end justify-content-center">
                                <div class="box_title">
                                    <p>Net Profit</p>
                                </div>
                                <div class="box_number">
                                    <h5>{{ Profit }}</h5>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>





            <!-----charts -->

            <div class="row">

                <div class="col-md-4">
                    <div class="card">
                        <div v-if="hasChart" class="card-body">
                            <apexchart type="donut" :options="chartOptionsPie" :series="seriesPie" height="350" />
                        </div>
                    </div>
                </div>
                <div class="col-md-8">
                    <div class="card">
                        <div class="card-body" v-if="hasChart">
                            <apexchart type="bar" :options="chartOptions" :series="series" height="350" />
                        </div>
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

import filters from '../filters/search.vue'


export default {
    components: {
        apexchart: VueApexCharts,
        filters,
    },
    data() {
        return {

            ClientNonPaye: 0 + " DH",
            ClientPaye: 0 + " DH",
            Expenses: 0 + " DH",
            LivreurNonPaye: 0 + " DH",
            LivreurPaye: 0 + " DH",
            Profit: 0 + " DH",
            TotalAmount: 0 + " DH",
            Revenue: 0 + " DH",
            Chart: [],


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
                        text: 'Net Revenue'
                    }
                },
                fill: {
                    opacity: 1
                },
                tooltip: {
                    y: {
                        formatter: function (val) {
                            return "" + val + " DH"
                        }
                    }
                },
                colors: ['rgb(33, 163, 1)', '#FF5733'], // Change colors here


            },


            //chart pie
            seriesPie: [],
            chartOptionsPie: {
                chart: {
                    width: 100,
                    type: 'donut',
                    height: 100, // Adjust this value to a positive number
                },
                labels: ['Revenue', 'Expenses'],
                formatter: function (val, opts) {
                    const percentage = opts.w.config.seriesPie[opts.seriesIndex];
                    return percentage.toFixed(2) + '%'; // Format to two decimal places
                },
                colors: ['rgb(33, 163, 1)', '#FF5733', '#5733FF'], // Change colors here

            },

            Role: getRole(),
        };
    },
    async mounted() {
        this.getFetchData("")
    },
    methods: {
        async getFetchData(filters = "") {
            try {
                const response = await fetchData("https://api.gestion-livraison.pro/api/dashboard/admin/earnings/get" + filters);
                console.log(response);




                // Check if the response contains the expected properties
                if (response && response.Chart) {

                    this.Profit = response.Profit
                    this.ClientNonPaye = response.ClientNonPaye
                    this.ClientPaye = response.ClientPaye
                    this.Expenses = response.Expenses
                    this.LivreurNonPaye = response.LivreurNonPaye
                    this.LivreurPaye = response.LivreurPaye
                    this.TotalAmount = response.TotalAmount
                    this.Revenue = response.Revenue
                    this.Chart = response.Chart

                    this.series = [
                        {
                            name: 'Net Revenue',
                            data: response.Chart.map(item => item.profit),
                        },
                        {
                            name: 'Net Revenue',
                            data: response.Chart.map(item => item.expenses),
                        },
                    ];

                    this.chartOptions.xaxis.categories = response.Chart.map(item => item.date);

                    this.seriesPie = [response.Pie[0], response.Pie[1]]

                    this.hasChart = true

                    console.log(this.hasChart)
                    console.log(this.chartOptions.xaxis.categories)
                    console.log(this.series)

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
            