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

    <div class="row">
        <div class="col-md-6">
            <div class="card">
                <div class="card-body">

                    <div class="row">

                        <div class="mt-3 col-md-6">
                            <div class="card px-2" style="box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;">
                                <div class="row p-3 d-flex justify-content-between align-items-center">
                                    <div class="col-4 box_icon d-flex align-items-center justify-content-center"
                                        style="background-color: rgb(234, 183, 16); color: #ffffff; border-radius: 50%; height: 60px; width: 60px;">
                                        <i class="fas fa-exclamation fa-2x"></i>
                                    </div>
                                    <div class="col-8 box_right text-end d-flex flex-column align-items-end justify-content-center">
                                        <div class="box_title">
                                            <p>Factures Non Paye</p>
                                        </div>
                                        <div class="box_number">
                                            <h5>{{ nonPay }}</h5>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div class="mt-3 col-md-6">
                            <div class="card px-2" style="box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;">
                                <div class="row p-3 d-flex justify-content-between align-items-center">
                                    <div class="col-4 box_icon d-flex align-items-center justify-content-center"
                                        style="background-color: rgb(33, 163, 1); color: #ffffff; border-radius: 50%; height: 60px; width: 60px;">
                                        <i class="fas fa-check fa-2x"></i>
                                    </div>
                                    <div
                                        class="col-8 box_right text-end d-flex flex-column align-items-end justify-content-center">
                                        <div class="box_title">
                                            <p>Factures Paye</p>
                                        </div>
                                        <div class="box_number">
                                            <h5>{{ Paye }}</h5>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div class="mt-3 col-md-6">
                            <div class="card px-2" style="box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;">
                                <div class="row p-3 d-flex justify-content-between align-items-center">
                                    <div class="col-4 box_icon d-flex align-items-center justify-content-center"
                                        style="background-color: rgb(0, 98, 18); color: #ffffff; border-radius: 50%; height: 60px; width: 60px;">
                                        <i class="fas fa-file-invoice-dollar fa-2x"></i>
                                    </div>
                                    <div
                                        class="col-8 box_right text-end d-flex flex-column align-items-end justify-content-center">
                                        <div class="box_title">
                                            <p>Chiffre d'affaire</p>
                                        </div>
                                        <div class="box_number">
                                            <h5>{{ Amount }}</h5>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="mt-3 col-md-6">
                            <div class="card px-2" style="box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;">
                                <div class="row p-3 d-flex justify-content-between align-items-center">
                                    <div class="col-4 box_icon d-flex align-items-center justify-content-center"
                                        style="background-color: #0A2635; color: #ffffff; border-radius: 50%; height: 60px; width: 60px;">
                                        <i class="fas fa-wallet fa-2x"></i>
                                    </div>
                                    <div
                                        class="col-8 box_right text-end d-flex flex-column align-items-end justify-content-center">
                                        <div class="box_title">
                                            <p>Net Revenue</p>
                                        </div>
                                        <div class="box_number">
                                            <h5>{{ Profit }}</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <div class="card">
                <div class="card-body" v-if="hasChart">
                    <apexchart type="bar" :options="chartOptions" :series="series" height="280" />
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

            nonPay: 0 + " DH",
            Paye: 0 + " DH",
            Amount: 0 + " DH",
            Profit: 0 + " DH",


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
                colors: ['rgb(33, 163, 1)'], // Change colors here


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
        async getFetchData(filters = "") {
            try {
                const response = await fetchData("https://api.gestion-livraison.pro/api/dashboard/customer/earnings/get" + filters);
                console.log(response);




                // Check if the response contains the expected properties
                if (response && response.chart) {

                    this.nonPay = response.nonPaye
                    this.Paye = response.Paye
                    this.Amount = response.totalAmount
                    this.Profit = response.profit

                    this.series = [
                        {
                            name: 'Net Revenue',
                            data: response.chart.map(item => item.amount),
                        },
                    ];

                    this.chartOptions.xaxis.categories = response.chart.map(item => item.date);


                    this.hasChart = true



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
            