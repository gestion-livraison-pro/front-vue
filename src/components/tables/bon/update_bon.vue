<template>
    <!-- Orders table -->
    <div class="card">
        <div class="card-body">
            <h5>Selectionner les Commandes</h5>

            <div class="custom_table shadow-sm mt-4">
                <div class="custom_table_header p-3 bg--dark radius-top shadow-sm border bg-light">
                    <div class="row w-100 m-0 d-flex justify-content-between">
                        <div class="col-md-2 bold d-none d-md-inline text-weight-bold" v-for="field in tableFields"
                            :key="field">{{ field }}</div>
                        <div class="col-md-2 bold d-none d-md-inline">
                            <button type="button" class="btn bg-primary text-light btn-sm waves-effect mx-1"
                                @click="moveAllToSelectedOrders()">
                                <i class="fas fa-plus"></i>
                            </button>
                        </div>
                        <div class="col-md-2 bold d-md-none d-sm-inline">Clients</div>
                    </div>

                </div>


                <div class="custom_table_body">

                    <div v-for="item in orders" :key="item.id"
                        class="row mb-3 mb-sm-0 m-0 p-3 shadow border d-flex justify-content-between">

                        <div class="ctb_item col-md-2 mb-2 mb-sm-0" v-for="field in tableFields" :key="field">{{
                            item[field] }}</div>

                        <!-- Action -->
                        <div class="ctb_item col-md-1 mb-1 mb-sm-0">
                            <div class="d-flex order-actions">
                                <button type="button" class="btn bg-primary text-light btn-sm waves-effect mx-1"
                                    @click="moveToSelectedOrders(item)">
                                    <i class="fas fa-plus"></i>
                                </button>
                            </div>
                        </div>
                    </div>




                </div>
            </div>
        </div>
    </div>

    <!-- Selected orders table -->
    <div class="card">
        <div class="card-body">
            <h5>Les Commandes Sélectionnées</h5>

            <div class="custom_table shadow-sm mt-4">
                <div class="custom_table_header p-3 bg--dark radius-top shadow-sm border bg-light">
                    <div class="row w-100 m-0 d-flex justify-content-between">
                        <div class="col-md-2 bold d-none d-md-inline text-weight-bold" v-for="field in tableFields"
                            :key="field">{{ field }}</div>
                        <div class="col-md-2 bold d-none d-md-inline">Action</div>
                        <div class="col-md-2 bold d-md-none d-sm-inline">Clients</div>
                    </div>
                </div>


                <div class="custom_table_body">

                    <div v-for="selectedOrder in selectedOrders" :key="selectedOrder.id"
                        class="row mb-3 mb-sm-0 m-0 p-3 shadow border d-flex justify-content-between">

                        <div class="ctb_item col-md-2 mb-2 mb-sm-0" v-for="field in tableFields" :key="field">{{
                            selectedOrder[field] }}</div>

                        <!-- Action -->
                        <div class="ctb_item col-md-1 mb-1 mb-sm-0">
                            <div class="d-flex order-actions">
                                <button type="button" class="btn bg-danger text-light btn-sm waves-effect mx-1"
                                    @click="removeFromSelectedOrders(selectedOrder)">
                                    <i class="fas fa-times"></i>
                                </button>
                            </div>
                        </div>
                    </div>




                </div>

            </div>
        </div>
    </div>


</template>
  
<script>
import { ref, onMounted } from 'vue';
import { fetchData, getRow } from '../../../composition/crud.js';

export default {
    props: {
        apiUrl: {
            type: String,
            required: true
        },
        tableX: {
            type: Array,
            required: true
        },
        updateSelected: {
            type: Array,
        },
        filters_update: {
            type: String,
        }

    },
    data() {
        return {
            orders: [], // The list of orders
            selectedOrders: [], // The list of selected orders
            updateSelected: [],
            selectedOrderIdTickets: [],
        };
    },
    setup(props) {
        const orders = ref([]);
        const tableFields = ref([]);
        const selectedOrders = ref([]);

        onMounted(async () => {
            if (props.updateSelected) {
                const UpSelect = await getRow(props.updateSelected);
                this.selectedOrders = { ...UpSelect }; // Populate the form with the retrieved customer data
            }
            const response = await fetchData(props.apiUrl);
            orders.value = response;

            if (response.length > 0) {
                console.log(orders.value);
                tableFields.value = Object.keys(response[0]);
            }
        });

        return {
            orders,
            tableFields,
            selectedOrders
        };
    },
    methods: {
        moveToSelectedOrders(order) {
            // Move the selected order from the orders list to the selectedOrders list
            const index = this.orders.indexOf(order);
            if (index > -1) {
                this.orders.splice(index, 1);
                this.selectedOrders.push(order);
                console.log(this.selectedOrders);
            }
            this.$emit('table-data', this.selectedOrders);
        },

        moveAllToSelectedOrders() {
            this.selectedOrders = this.selectedOrders.concat(this.orders);
            this.orders = [];
            this.$emit('selectedOrders', this.selectedOrders);

        },

        removeFromSelectedOrders(order) {
            // Remove the order from the selectedOrders list
            const index = this.selectedOrders.indexOf(order);
            if (index > -1) {
                this.selectedOrders.splice(index, 1);
                this.orders.push(order);
            }
            this.$emit('table-data', this.selectedOrders);
        },
        getSelectedOrders() {
            // Return the selected orders
            return this.selectedOrders;
        },
    }, mounted() {
        this.getFetchData();
        // Emit the selectedRows event when rows are selected
        this.$emit('selectedOrders', this.selectedOrders);
    },
    watch: {
        // whenever question changes, this function will run
        filters_update(new_filter) {
            this.filters = new_filter;
            this.getFetchData(new_filter)
            this.$emit('selectedOrders', this.selectedOrders);

        },

    },
};
</script>
  