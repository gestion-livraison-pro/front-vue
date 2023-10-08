<template>
    <div v-if="data.length > 0" class="table-responsive">
        <table class="table table-bordered">
            <thead class="bg-light">
                <tr>
                    <th>Ref</th>
                    <th>Montant</th>
                    <th v-if="Role != 'deliveryman'">Livreur</th>
                    <th>Colis</th>
                    <th>Cloturé</th>
                    <th>Versé</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in data" :key="item.id">
                    <td><span class="header_side">Ref : </span> <a @click="GenerateInvoice(item.id)" href=""
                            data-bs-toggle="modal">{{ item.Ref }}</a></td>
                    <td><span class="header_side">Montant : </span> {{ item.Montant }}</td>
                    <td v-if="Role != 'deliveryman'"><span class="header_side">Livreur : </span> {{ item.Livreur }}</td>
                    <td><span class="header_side">Colis : </span> {{ item.Colis }}</td>
                    <td><span class="header_side">Cloturé : </span>
                        <checkd v-if="checkModule(requiredModule_Cloturé) && Role != 'deliveryman'" v-model="close.Cloturé"
                            :value="close.Cloturé" Class_Content="col-md-1 mb-1 mb-sm-0" :id_check="`cl-${item.Ref}`"
                            :is_checked="item.Cloturé" :checked="item.Cloturé === 1"
                            @update:value="formData.Cloturé = $event" @change="toggleCloture(item)" />

                        <checkd v-else-if="checkModule(requiredModule_Cloturé) && !item.Cloturé" v-model="close.Cloturé"
                            :value="close.Cloturé" Class_Content="col-md-1 mb-1 mb-sm-0" :id_check="`cl-${item.Ref}`"
                            :is_checked="item.Cloturé" :checked="item.Cloturé === 1"
                            @update:value="formData.Cloturé = $event" @change="toggleCloture(item)" />

                        <div v-else :class="`badge ${item.Cloturé === 1 ? 'bg-success ' : 'bg-danger '}`">{{ item.Cloturé
                            === 1 ?
                            "Oui" : "Non" }}</div>
                    </td>
                    <td><span class="header_side">Versé : </span>
                        <checkd v-if="checkModule(requiredModule_Versé)" v-model="paid.Versé" :value="paid.Versé"
                            Class_Content="col-md-1 mb-1 mb-sm-0" :id_check="`pd-${item.Ref}`" :is_checked="item.Versé"
                            :checked="item.Versé === 1" @update:value="formData.Versé = $event"
                            @change="togglepaid(item)" />

                        <div v-else :class="`badge badge-success ${item.Versé === 1 ? 'bg-success ' : 'bg-danger '}`">{{
                            item.Versé ===
                            1 ?
                            "Oui" : "Non" }}</div>
                    </td>


                    <td class="table_actions">
                        <div class="d-flex align-items-center order-actions">
                            <button @click="GenerateInvoice(item.id)" type="button"
                                class="btn bg-light btn-sm waves-effect mx-1"><i class="fas fa-file-invoice"></i></button>
                            <button v-if="Role!='deliveryman'" type="button" class="btn bg-light btn-sm waves-effect mx-1"><i
                                    class="fas fa-pencil-alt"></i></button>
                            <button v-if="Role!='deliveryman'" type="button" class="btn bg-light btn-sm waves-effect mx-1"
                                @click="delete_row_id = item.id;" data-bs-toggle="modal" data-bs-target="#DeleteRow"><i
                                    class="fas fa-trash-alt "></i></button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>

        <!-- Pagination -->
        <div class="row d-flex justify-content-between align-items-center ">
            <div class="col-md-1">
                <select class="form-control" v-model="per_page" @change="pageCount">
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                    <option value="200">200</option>
                    <option value="500">500</option>
                    <option value="1000">1000</option>
                </select>

            </div>

            <nav class="col-md-6 d-flex justify-content-end align-items-center">
                <ul class="pagination  d-flex align-items-end">
                    <li class="page-item" v-if="pagination.current_page > 1">
                        <a class="page-link" href="#" @click="loadPage(pagination.current_page - 1)">Précédent</a>
                    </li>

                    <li class="page-item" v-for="page in pagination.last_page" :key="page"
                        :class="{ 'active': page === pagination.current_page }">
                        <a class="page-link" href="#" @click="loadPage(page)">{{ page }}</a>
                    </li>

                    <li class="page-item" v-if="pagination.current_page < pagination.last_page">
                        <a class="page-link" href="#" @click="loadPage(pagination.current_page + 1)">Suivant</a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>

    <div v-else-if="loading" class="d-flex justify-content-center py-4 bg-light">
        <span class="loader"></span>
    </div>

    <div v-else class="p-3 text-center bg-light">
        <p>no-data</p>
    </div>

    <Supprimer :apiUrl="`https://api.gestion-livraison.pro/api/delivery/invoice/${delete_row_id}/delete`"
        @deleted-id="deletedRow = $event" />

    <div class="mx-2 m-3 pb-3 pt-3"></div>
</template>
  
  
  
  
    
<style scoped>
.table-responsive {
  overflow-x: auto;
}

table span.header_side {
  display: none;
}

thead th{
  font-weight: bolder;
}

@media (max-width: 768px) {
  .table-responsive table {
    width: 100%;
  }

  .table-responsive thead {
    display: none;
    /* Hide headers in mobile */
  }

  .table-responsive tbody tr {
    display: block;
    margin-bottom: 10px;
    border: 1px solid #ddd;
    padding: 10px;
  }

  .table-responsive tbody td {
    display: flex;
    justify-content: space-between;
  }



  .table_actions {
    display: flex;
    justify-content: center !important;
    ;
  }

  table span.header_side {
    display: block;
  }
}



</style>
  
  


  
<script>
import { ref, onMounted } from 'vue';
import { fetchDataPagination, updateData, checkPermission, getRole, GenerateDeliveryInvoicePdf } from '../../composition/crud.js';
import checkd from '../../components/inputs/check.vue';
import Supprimer from '../../components/popups/delete.vue';


export default {
    components: {
        checkd,
        Supprimer
    },
    props: {
        apiUrl: {
            type: String,
            required: true
        },
        requiredModule_Cloturé: {
            type: String,
        },
        requiredModule_Versé: {
            type: String,
        },
        filters_update: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            pagination: [],
            filters: "",
            pagination_filters: "",
            per_page: 10,
            page: 1,

            data: [],
            close: {
                Cloturé: '',
            },
            paid: {
                Versé: '',
            },
            Role: getRole(),

            delete_row_id: "",
            deletedRow: "",

            loading: false,

        };
    },
    mounted() {
        this.getFetchData("")
    },
    methods: {
        loadPage(nbr) {
            this.page = nbr
            let query
            if (this.filters) {
                query = this.filters + "&page=" + this.page + "&per_page=" + this.per_page
            } else {
                query = "?page=" + this.page + "&per_page=" + this.per_page
            }
            this.getFetchData(query)
        },
        pageCount() {
            let query
            if (this.filters) {
                query = this.filters + "&page=" + this.page + "&per_page=" + this.per_page
            } else {
                query = "?page=" + this.page + "&per_page=" + this.per_page
            }
            this.getFetchData(query)
            console.log(query)
        },
        async toggleCloture(item) {
            item.Cloturé = item.Cloturé === 1 ? 0 : 1;
            await updateData(`https://api.gestion-livraison.pro/api/delivery/invoice/${item.id}/close/update`, { Cloturé: item.Cloturé });
        },
        async togglepaid(item) {
            item.Versé = item.Versé === 1 ? 0 : 1;
            await updateData(`https://api.gestion-livraison.pro/api/delivery/invoice/${item.id}/paid/update`, { Versé: item.Versé });
        },
        checkModule(module) {
            const response = checkPermission(module);
            console.log(response);
            return response;
        },
        async getFetchData(filters) {
            this.loading = true
            const response = await fetchDataPagination(this.apiUrl + filters);
            this.data = response.data;
            this.pagination = response.pagination;
            this.loading = false

        },

        //downloads
        async GenerateInvoice(InvoiceID) {
            await GenerateDeliveryInvoicePdf(InvoiceID);
        },
    },
    watch: {
        // whenever question changes, this function will run
        filters_update(new_filter) {
            this.page = 1
            this.filters = new_filter;
            this.getFetchData(new_filter)
        },
        deletedRow(deletedId) {
            //update table
            const index = this.data.findIndex((item) => item.id === parseInt(deletedId));
            if (index !== -1) {
                this.data.splice(index, 1);
            }
        },
    },
}
</script>
  

