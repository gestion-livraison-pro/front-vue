<template>
    <div id="Tickets" class="modal modal-lg fade" tabindex="-1" aria-labelledby="TicketsLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title mt-0" id="TicketsLabel">{{ orderDetails ? orderDetails.Ref : '' }}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row d-flex align-items-center justify-content-around">
                        <div class="col-md-3 col-6 d-flex align-items-center flex-column">
                            <div class="card ticket_parent" @click="Generate(2)">
                                <div class="card-body border ">
                                    <div class="row">
                                        <div class="col-12 ticket_squar2"></div>
                                        <div class="col-12 ticket_squar2"></div>
                                    </div>
                                </div>
                            </div>
                            <span class="text-center">1/2</span>
                        </div>
                        <div class="col-md-3 col-6 d-flex align-items-center flex-column">
                            <div class="card ticket_parent" @click="Generate(41)">
                                <div class="card-body border">
                                    <div class="row">
                                        <div class="col-6 ticket_squar4"></div>
                                        <div class="col-6 ticket_squar4"></div>
                                        <div class="col-6 ticket_squar4"></div>
                                        <div class="col-6 ticket_squar4"></div>
                                    </div>
                                </div>
                            </div>
                            <span class="text-center">1/4 Vertical</span>
                        </div>
                        <div class="col-md-3 col-6 d-flex align-items-center flex-column">
                            <div class="card ticket_parent" @click="Generate(42)">
                                <div class="card-body border">
                                    <div class="row">
                                        <div class="col-6 ticket_squar4"></div>
                                        <div class="col-6 ticket_squar4"></div>
                                        <div class="col-6 ticket_squar4"></div>
                                        <div class="col-6 ticket_squar4"></div>
                                    </div>
                                </div>
                            </div>
                            <span class="text-center">1/4 Horizontal</span>
                        </div>
                        <div class="col-md-3 col-6 d-flex align-items-center flex-column">
                            <div class="card ticket_parent" @click="Generate(6)">
                                <div class="card-body border">
                                    <div class="row">
                                        <div class="col-6 ticket_squar6"></div>
                                        <div class="col-6 ticket_squar6"></div>
                                        <div class="col-6 ticket_squar6"></div>
                                        <div class="col-6 ticket_squar6"></div>
                                        <div class="col-6 ticket_squar6"></div>
                                        <div class="col-6 ticket_squar6"></div>
                                    </div>

                                </div>
                            </div>
                            <span class="text-center">1/6</span>

                        </div>

                    </div>
                </div>
            </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->
</template>
  
<script>

import { ref, onMounted, defineProps, watch } from 'vue'
import { generateTicketsPdf_2,generateTicketsPdf_41, generateTicketsPdf_42, generateTicketsPdf_6 } from '../../composition/crud.js'

export default {
    props:{
        ordersId:{
            type:Object,
        }
    },
    data() {
        return {
            orderDetails: null,
            selectedTicketType: '', // To store the selected ticket type
        };
    },
    methods: {
        selectTicketType(type) {
            this.selectedTicketType = type;
        },
        async Generate(type) {
            if(type==2) await generateTicketsPdf_2(this.ordersId)
            else if(type==41) await generateTicketsPdf_41(this.ordersId)
            else if(type==42) await generateTicketsPdf_42(this.ordersId)
            else if(type==6) await generateTicketsPdf_6(this.ordersId)
        },
    },
    watch: {
        "props.ordersId": async function (newOrderId) {
            console.log("newOrderId1" + newOrderId);
            if (newOrderId) {
                console.log(newOrderId);
                this.OrderID = newOrderId;
            }
        },
    },
};
</script>
  
<style scoped>
/* Add your custom CSS styles here */
.ticket-type-selection {
    margin-bottom: 20px;
}

.card {
    cursor: pointer;
}

.card-title {
    font-size: 1.25rem;
}

.card-text {
    font-size: 1rem;
}

.ticket_parent {
    height: 170px;
    width: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    border-radius: 10%;
    text-align: center;
}

.ticket_squar2 {
    height: 55px;
    width: 90px;
    border: 1px solid gray;
    margin: 4px;
}

.ticket_squar1 {
    height: 40px;
    width: 40px;
    border: 1px solid gray;
}

.ticket_squar6 {
    height: 40px;
    width: 40px;
    border: 1px solid gray;
    margin: 4px;
}

.ticket_squar4 {
    height: 60px;
    width: 40px;
    border: 1px solid gray;
    margin: 4px;
}
</style>
  