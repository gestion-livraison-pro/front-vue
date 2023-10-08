<template>
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
                        <h5>{{ data.WillPay }}</h5>
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
                <div class="col-8 box_right text-end d-flex flex-column align-items-end justify-content-center">
                    <div class="box_title">
                        <p>Factures Paye</p>
                    </div>
                    <div class="box_number">
                        <h5>{{ data.Paid }}</h5>
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


export default {

    data() {
        return {
            data: [],
        }
    },
    async mounted() {

        const response = await fetchData("https://api.gestion-livraison.pro/api/dashboard/driver/invoice/get");
        this.data=response
        console.log(response)


    },



}

</script>