<template>
    <div id="orderHistory" class="modal modal-lg fade" tabindex="-1" aria-labelledby="orderHistoryLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title mt-0" id="orderHistoryLabel">Historique de la Commande {{ orderHistory ?
                        orderHistory.Ref : '' }}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body pb-5">


                    <section id="cd-timeline" class="cd-container">

                        <div v-if="loading" class="d-flex justify-content-center py-4">
                            <span class="loader"></span>
                        </div>
                        <div v-else-if="orderHistory.length > 0">
                            <div v-for="(item, index) in orderHistory" :key="index" class="cd-timeline-block"
                                :class="{ 'timeline-right': index % 2 === 0, 'timeline-left': index % 2 !== 0 }">
                                <div class="cd-timeline-img badge" :style="{ backgroundColor: item.StatutCouleur }">
                                    <!-- Add your dynamic class here -->

                                    <span class="dynamic-text">
                                        {{ item.Statut }}
                                    </span>
                                </div>

                                <div class="cd-timeline-content text-white">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <h3 class="m-0 p-0">{{ item.Utilisateur }}</h3>
                                        <span class="text-end">{{ new Date(item.date).toISOString().split('T')[0] }}</span>
                                    </div>

                                    <p class="mb-0 text-white-50">{{ item.Note }}</p>

                                </div>
                            </div>
                        </div>
                        <div v-else class="border bg-light p-3 text-center">
                            <h6>Aucun historique lié à cette Commande</h6>
                        </div>

                    </section>






                </div>
            </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->
</template>


<style>
.cd-timeline-img.badge {
    /* Set a fixed width or max-width for the div */
    max-width: 140px;
    /* Adjust the width as needed */

    /* Ensure text doesn't wrap */
    white-space: nowrap;

    /* Hide text overflow with ellipsis */
    overflow: hidden;
    text-overflow: inherit;
    text-wrap: balance;
}

.dynamic-text {
    /* Optionally, you can set font size or other text styles */
    font-size: 16px;
    /* Adjust the font size as needed */
}
</style>
  
<script>

import { ref, onMounted, watch } from 'vue';
import { getRow, getRole } from '../../composition/crud.js';

export default {
    props: {
        orderId: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            Role: getRole(),
            orderHistory: [],

            loading: false,

        };
    },
    async mounted() {
        this.loading = true

        if (this.orderId) {
            try {
                const response = await getRow(`https://api.gestion-livraison.pro/api/order/${this.orderId}/history/get`);
                this.orderHistory = response;
            } catch (error) {
                console.error("Error fetching order details:", error);
            }
        }
        this.loading = false

    },
    watch: {
        async orderId(newOrderId) {
            
            if (newOrderId) {
                
                try {
                    this.loading = true
                    const response = await getRow(`https://api.gestion-livraison.pro/api/order/${newOrderId}/history/get`);
                    this.orderHistory = response;
                    this.loading = false
                } catch (error) {
                    console.error("Error fetching order details:", error);
                }
            }
            

        }
    }
};


</script>