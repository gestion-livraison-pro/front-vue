<template>
    <div v-if="filters_fields" class="row">
        <div v-if="checkFilter('search')" class="col-md">
            <input type="text" class="form-control mb-2 mb-sm-0" :placeholder="placeholder" v-model="filters.keyword">
        </div>

        <SelectDropdown v-if="checkFilter('role') && Role != 'customer' && Role != 'deliveryman'" v-model="filters.role"
            :value="filters.role" apiUrl="https://api.gestion-livraison.pro/api/roles?per_page=200" fieldName="Nom"
            first_option="Tous les Roles" Class_Content="col-md" @update:value="filters.role = $event" />

        <SelectDropdown v-if="checkFilter('customer') && Role != 'customer' && Role != 'deliveryman'" v-model="filters.customer"
            :value="filters.customer" apiUrl="https://api.gestion-livraison.pro/api/customers?per_page=200" fieldName="Nom"
            first_option="Toutes les Clients" Class_Content="col-md" @update:value="filters.customer = $event" />

        <SelectDropdown v-if="checkFilter('driver') && Role != 'customer' && Role != 'deliveryman'" v-model="filters.driver"
            :value="filters.driver" apiUrl="https://api.gestion-livraison.pro/api/deliverymans?per_page=200" fieldName="Nom"
            first_option="Toutes les Livreurs" Class_Content="col-md" @update:value="filters.driver = $event" />

        <SelectDropdown v-if="checkFilter('city')" v-model="filters.city" :value="filters.city"
            apiUrl="https://api.gestion-livraison.pro/api/cities?per_page=200" fieldName="Nom"
            first_option="Tous les Villes" Class_Content="col-md" @update:value="filters.city = $event" />

        <!---start product filters -->
        <SelectDropdown v-if="checkFilter('productCategory')" v-model="filters.productCategory"
            :value="filters.productCategory" apiUrl="https://api.gestion-livraison.pro/api/product/categories?per_page=200"
            fieldName="Nom" first_option="Tous les Categories" Class_Content="col-md"
            @update:value="filters.productCategory = $event" />

        <SelectDropdown v-if="checkFilter('productType')" v-model="filters.productType" :value="filters.productType"
            apiUrl="https://api.gestion-livraison.pro/api/product/types?per_page=200" fieldName="Nom"
            first_option="Tous les Types" Class_Content="col-md" @update:value="filters.productType = $event" />
        <!---end product filters -->

        <!---start ticket filters -->
        <SelectDropdown v-if="checkFilter('ticketStatus')" v-model="filters.ticketStatus" :value="filters.ticketStatus"
            apiUrl="https://api.gestion-livraison.pro/api/reclamations/status?per_page=200" fieldName="Nom"
            first_option="Tous les Statuses" Class_Content="col-md" @update:value="filters.ticketStatus = $event" />

        <SelectDropdown v-if="checkFilter('ticketType')" v-model="filters.ticketType" :value="filters.ticketType"
            apiUrl="https://api.gestion-livraison.pro/api/reclamations/types?per_page=200" fieldName="Nom"
            first_option="Tous les Types" Class_Content="col-md" @update:value="filters.ticketType = $event" />
        <!---end ticket filters -->

        <!---start order phase status -->
        <SelectDropdown v-if="checkFilter('orderStatusPhase')" v-model="filters.orderStatusPhase"
            :value="filters.orderStatusPhase" apiUrl="https://api.gestion-livraison.pro/api/order/phases?per_page=200"
            fieldName="Nom" first_option="Tous les Types" Class_Content="col-md"
            @update:value="filters.orderStatusPhase = $event" />
        <!---end order phase status -->

        <!---start order status -->
        <SelectDropdown v-if="checkFilter('orderStatus')" v-model="filters.orderStatus" :value="filters.orderStatus" :multi="true"
            apiUrl="https://api.gestion-livraison.pro/api/order/status?per_page=200" fieldName="Nom"
            first_option="Tous les Statutes" Class_Content="col-md mb-3" @update:value="filters.orderStatus = $event" />
        <!---end order status -->



        <VueDatePicker v-if="checkFilter('date')" class="col-md" v-model="date" range :preset-dates="presetDates"
            format="MM/dd/yyyy">
            <template #preset-date-range-button="{ label, value, presetDate }">
                <span role="button" :tabindex="0" @click="presetDate(value)" @keyup.enter.prevent="presetDate(value)"
                    @keyup.space.prevent="presetDate(value)">
                    {{ label }}
                </span>
            </template>
        </VueDatePicker>

        <div class="col-md-1">
            <button class="btn btn-primary w-100" @click="search"><i class="fas fa-search"></i></button>
        </div>
    </div>
</template>


<script>

import { ref } from 'vue';
import SelectDropdown from '../../components/inputs/select2.vue';

import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

import '/src/assets/libs/bootstrap-datepicker/js/bootstrap-datepicker.min.js';
import '/src/assets/libs/spectrum-colorpicker2/spectrum.min.js';


import '/src/assets/libs/bootstrap-datepicker/css/bootstrap-datepicker.min.css';
import '/src/assets/libs/spectrum-colorpicker2/spectrum.min.css';


import { endOfMonth, endOfYear, startOfMonth, startOfYear, subMonths } from 'date-fns';
import { getRole } from '../../composition/crud';


export default {
    components: {
        VueDatePicker,
        SelectDropdown,
    },
    props: {
        placeholder: {
            type: String,
            required: true,
        },
        filters_fields: {
            type: String, // Define the type for filters_fields
            default: null // Provide a default value or remove this line if not needed
        },
    },
    data() {
        return {
            Role: getRole(),
            filters: {
                keyword: "",
                role: "",
                customer: "",
                driver: "",
                city: "",
                dateEnd: "",
                dateStart: "",
                productType: "",
                productCategory: "",
                ticketStatus: "",
                ticketType: "",
                orderStatusPhase: "",
                orderStatus: [],
            },
            date: "",
            newUrl: null,
            presetDates: [
                { label: "Aujourd'hui", value: [new Date(), new Date()] },
                { label: 'Ce mois-ci', value: [startOfMonth(new Date()), endOfMonth(new Date())] },
                {
                    label: 'Le dernier mois ',
                    value: [startOfMonth(subMonths(new Date(), 1)), endOfMonth(subMonths(new Date(), 1))],
                },
                { label: 'Cette année', value: [startOfYear(new Date()), endOfYear(new Date())] },
            ]

        }
    },
    methods: {
        search() {
            if (this.date && this.date.length === 2) {
                const [startDate, endDate] = this.date;

                if (startDate instanceof Date && endDate instanceof Date) {
                    // Format the start and end dates to 'YYYY-MM-DD' format
                    const formattedStartDate = `${startDate.getFullYear()}-${String(startDate.getMonth() + 1).padStart(2, '0')}-${String(startDate.getDate()).padStart(2, '0')}`;
                    const formattedEndDate = `${endDate.getFullYear()}-${String(endDate.getMonth() + 1).padStart(2, '0')}-${String(endDate.getDate()).padStart(2, '0')}`;

                    // Update the filters with the formatted dates
                    this.filters.dateStart = formattedStartDate;
                    this.filters.dateEnd = formattedEndDate;
                }
            }

            this.$emit('filter-updated', this.constructApiUrlWithFilters()); // Emit the custom event with updated status
            window.history.pushState({}, '', this.newUrl)

        },
        constructApiUrlWithFilters() {
            console.log(this.filters)
            const queryParams = new URLSearchParams()
            for (const key in this.filters) {
                if (this.filters[key]) {
                    queryParams.append(key, this.filters[key])
                }
            }

            this.newUrl = `${window.location.pathname}?${queryParams.toString()}`

            return `?${queryParams.toString()}`
        },
        // Parse URL to set filter parameters
        parseUrlFilters() {
            const urlParams = new URLSearchParams(window.location.search)
            for (const key of urlParams.keys()) {
                if (this.filters[key] !== undefined) {
                    this.filters[key] = urlParams.get(key)
                }
            }
        },
        checkFilter(filter) {
            return this.filters_fields.split(',').map(filter => filter.trim()).includes(filter);
        },
    },
    mounted() {
        this.parseUrlFilters();
    }
}
</script>