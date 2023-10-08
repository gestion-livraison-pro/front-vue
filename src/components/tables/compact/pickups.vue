

<template>
    <div v-if="data.length > 0" class="table-responsive">
        <table class="table table-bordered">
            <thead class="bg-light">
                <tr>
                    <th>Ref</th>
                    <th>Client</th>
                    <th>Quantite</th>
                    <th>Type</th>
                    <th v-if="Role != 'customer' && Role != 'deliveryman'">Trait</th>
                    <th>Date</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in data" :key="item.id">
                    <td><span class="header_side">Ref : </span><a @click="openInfoModal(item)" href="" data-bs-toggle="modal">{{ item.Ref }}</a></td>
                    <td><span class="header_side">Client : </span> {{ item.Client }}</td>
                    <td><span class="header_side">Quantite : </span> {{ item.nbrColis }}</td>
                    <td><span class="header_side">Type : </span> {{ item.Colis ? "Colis" : "Stock" }}</td>
                    <td v-if="Role != 'customer' && Role != 'deliveryman'"><span class="header_side">Client : </span>  <checkd v-model="formData.Valid" :value="formData.Valid" Class_Content=""
                            :id_check="`Ram-${item.Ref}`" :is_checked="item.Valid" :checked="item.Valid === 1"
                            @update:value="formData.Valid = $event" @change="toggleValid(item)" />
                    </td>
                    <td v-else>
                        <span class="header_side">Type : </span> 
                        <div :class="`badge badge-success ${item.Valid === 1 ? 'bg-success ' : 'bg-danger '}`">{{ item.Valid === 1 ? "Oui" : "Non" }}</div>
                    </td>
                    <td><span class="header_side">Date : </span> {{ new Date(item.Date).toLocaleString() }}</td>

                    <td class="table_actions">
                        <div class="d-flex align-items-center order-actions">
                            <button type="button" class="btn bg-light btn-sm waves-effect mx-1"
                                @click="openUpdateModal(item)"><i class="fas fa-pencil-alt"></i></button>
                            <button type="button" class="btn bg-light btn-sm waves-effect mx-1"
                                @click="delete_row_id = item.id;" data-bs-toggle="modal" data-bs-target="#DeleteRow"> <i
                                    class="fas fa-trash-alt"></i></button>
                        </div>
                    </td>
                </tr>
    </tbody>
    </table>



    <!-- Pagination -->

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


    <div id="modalUpdate" class="modal fade" tabindex="-1" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title mt-0" id="myModalLabel">Modifier ramassage</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">

                    <div class="row mt-4">
                        <div class="col-md-6 text-center">
                            <div class="row mt-4 mx-1 ">
                                Ramassage Colis
                                <checkd v-model="formData.Colis" :value="formData.Colis" id_check="is_colis"
                                    Class_Content="col-md-1 mb-1 mb-sm-0 mx-1" :is_checked="formData.Colis"
                                    :checked="formData.Colis === 1" @update:value="formData.Colis = $event;" />
                            </div>
                        </div>
                        <div class="col-md-6 text-center">
                            <div class="row mt-4 mx-1 ">
                                Ramassage Stock
                                <checkd v-model="formData.Stock" :value="formData.Stock" id_check="is_Stock"
                                    Class_Content="col-md-1 mb-1 mb-sm-0 mx-1" :is_checked="formData.Stock"
                                    :checked="formData.Stock === 1" @update:value="formData.Stock = $event;" />
                            </div>
                        </div>
                    </div>

                    <SelectDropdown v-if="Role != 'customer'" v-model="formData.ClientID" :value="formData.ClientID"
                        apiUrl="https://api.gestion-livraison.pro/api/customers" fieldName="Nom"
                        first_option="Selectionner le Client" label="Client" Class_Content="col-md-12 mt-4"
                        @update:value="formData.ClientID = $event" />

                    <div class="row">
                        <input_text v-model="formData.Nom" label="Nom" type="text" Class_Content="col-md-6 mt-4"
                            :value="formData.Nom" @update:value="formData.Nom = $event" />

                        <input_text v-model="formData.Téléphone" label="Téléphone" type="text" Class_Content="col-md-6 mt-4"
                            :value="formData.Téléphone" @update:value="formData.Téléphone = $event" />
                    </div>


                    <input_text v-model="formData.Ville" label="Ville" type="text" Class_Content="col-md-12 mt-4"
                        :value="formData.Ville" @update:value="formData.Ville = $event" />

                    <input_text v-model="formData.Adresse" label="Adresse" type="text" Class_Content="col-md-12 mt-4"
                        :value="formData.Adresse" @update:value="formData.Adresse = $event" />

                    <!----start filtrage-->
                    <!----pickup colis-->
                    <input_text v-if="formData.nbrColis" v-model="formData.nbrColis" label="Nombre des Colis" type="text"
                        Class_Content="col-md-12 mt-4" :value="formData.nbrColis"
                        @update:value="formData.nbrColis = $event" />
                    <!----pickup stock-->
                    <div v-if="formData.Stock" class="si_stock">

                        <div class="row p-3 border-bottom">
                            <div v-for="selected_product in formData.cartItems" :key="selected_product.id"
                                class="col-md-12">
                                <div class="card">
                                    <div class="row">
                                        <div class="col-4 d-flex flex-row">
                                            <img class="img-fluid" src="https://via.placeholder.com/300"
                                                alt="Card image cap">

                                        </div>
                                        <ul class="list-group list-group-flush col-8">
                                            <li class="list-group-item">
                                                <div class="d-flex flex-row justify-content-between align-items-center">
                                                    <div class="d-flex flex-row">
                                                        <strong class="">{{ selected_product.Titre }}</strong>
                                                        <span class="badge bg-success mx-3">{{
                                                            selected_product.Quantite }}</span>
                                                    </div>

                                                    <button class="btn btn-danger m-0 0-0"
                                                        @click="removeFromCart(selected_product.id)"> <i
                                                            class="fas fa-times"></i></button>
                                                </div>
                                            </li>
                                            <li class="list-group-item">
                                                <input_text v-model="selected_product.qte" type="number"
                                                    Class_Content="col-md-12 d-flex flex-row align-items-center justify-content-between"
                                                    :value="selected_product.qte"
                                                    @update:value="selected_product.qte = $event" />
                                            </li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div class="row d-flex align-items-center mt-4">
                            <h5 for="validationCustom01" class="form-label">Selectionner un Produit</h5>
                            <div class="col-md-12 mt-3">
                                <input type="text" class="form-control" id="validationCustom01" placeholder="Mark"
                                    v-model="searchInput" />
                            </div>
                        </div>

                        <div v-if="products.length">


                            <div class="row p-3">

                                <div v-for="product in filteredProducts" :key="product.id" class="col-md-12">
                                    <div class="card">
                                        <div class="row">
                                            <div class="col-2 d-flex flex-row">
                                                <img class="img-fluid" src="https://via.placeholder.com/300"
                                                    alt="Card image cap">

                                            </div>
                                            <ul class="list-group list-group-flush col-10">
                                                <li class="list-group-item">
                                                    <div class="d-flex flex-row justify-content-between align-items-center">
                                                        <div class="d-flex flex-row">
                                                            <strong class="">{{ product.Titre }}</strong>
                                                            <span class="badge bg-success mx-3">{{ product.Quantite
                                                            }}</span>
                                                        </div>
                                                        <div>
                                                            <button class="btn btn-primary w-100"
                                                                @click="addToCart(product)">
                                                                <i class="fas fa-plus"></i></button>
                                                        </div>

                                                    </div>
                                                </li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="p-3 bg-light mt-4" v-else>
                            <p>aucun resultat</p>
                        </div>
                    </div>

                    <!----end pickup stock-->


                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary waves-effect waves-light"
                        data-bs-dismiss="modal">Fermer</button>
                    <button @click="submitFormUpdate" class="btn btn-primary waves-effect waves-light">Modifier</button>
                </div>
            </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->



    <!-- Add city -->
    <div id="modalAdd" class="modal fade" tabindex="-1" aria-labelledby="modalAdd" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title mt-0" id="modalAdd">Nouvelle Demande</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">

                    <div class="row mt-4">
                        <div class="col-md-6 text-center">
                            <div class="row mt-4 mx-1 ">
                                Ramassage Colis
                                <checkd v-model="Colis" :value="formData.Colis" id_check="is_colis"
                                    Class_Content="col-md-1 mb-1 mb-sm-0 mx-1" :is_checked="formData.Colis"
                                    :checked="formData.Colis === 1"
                                    @update:value="formData.Colis = $event; formData.Stock = !formData.Colis" />
                            </div>
                        </div>
                        <div class="col-md-6 text-center">
                            <div class="row mt-4 mx-1 ">
                                Ramassage Stock
                                <checkd v-model="Stock" :value="formData.Stock" id_check="Ram-stock"
                                    Class_Content="col-md-1 mb-1 mb-sm-0 mx-1" :is_checked="formData.Stock"
                                    :checked="formData.Stock === 1"
                                    @update:value="formData.Stock = $event; formData.Colis = !formData.Stock" />
                            </div>
                        </div>
                    </div>

                    <SelectDropdown v-if="Role != 'customer'" v-model="ClientID" :value="formData.ClientID"
                        apiUrl="https://api.gestion-livraison.pro/api/customers" fieldName="Nom"
                        first_option="Selectionner le Client" label="Client" Class_Content="col-md-12 mt-4"
                        @update:value="formData.ClientID = $event" />

                    <div class="row">
                        <input_text v-model="formData.Nom" label="Nom" type="text" Class_Content="col-md-6 mt-4"
                            :value="formData.Nom" @update:value="formData.Nom = $event" />

                        <input_text v-model="formData.Téléphone" label="Téléphone" type="text" Class_Content="col-md-6 mt-4"
                            :value="formData.Téléphone" @update:value="formData.Téléphone = $event" />
                    </div>

                    <input_text v-model="formData.Ville" label="Ville" type="text" Class_Content="col-md-12 mt-4"
                        :value="formData.Ville" @update:value="formData.Ville = $event" />

                    <input_text v-model="formData.Adresse" label="Adresse" type="text" Class_Content="col-md-12 mt-4"
                        :value="formData.Adresse" @update:value="formData.Adresse = $event" />

                    <!----start filtrage-->
                    <!----pickup colis-->
                    <input_text v-if="formData.Colis" v-model="formData.nbrColis" label="Nombre des Colis" type="text"
                        Class_Content="col-md-12 mt-4" :value="formData.nbrColis"
                        @update:value="formData.nbrColis = $event" />
                    <!----pickup stock-->
                    <div v-if="formData.Stock" class="si_stock">

                        <div class="row p-3 border-bottom">
                            <div v-for="selected_product in formData.cartItems" :key="selected_product.id"
                                class="col-md-12">
                                <div class="card">
                                    <div class="row">
                                        <div class="col-4 d-flex flex-row">
                                            <img class="img-fluid" src="https://via.placeholder.com/300"
                                                alt="Card image cap">

                                        </div>
                                        <ul class="list-group list-group-flush col-8">
                                            <li class="list-group-item">
                                                <div class="d-flex flex-row justify-content-between align-items-center">
                                                    <div class="d-flex flex-row">
                                                        <strong class="">{{ selected_product.Titre }}</strong>
                                                        <span class="badge bg-success mx-3">{{
                                                            selected_product.Quantite }}</span>
                                                    </div>

                                                    <button class="btn btn-danger m-0 0-0"
                                                        @click="removeFromCart(selected_product.id)"> <i
                                                            class="fas fa-times"></i></button>
                                                </div>
                                            </li>
                                            <li class="list-group-item">
                                                <input_text v-model="selected_product.qte" type="number"
                                                    Class_Content="col-md-12 d-flex flex-row align-items-center justify-content-between"
                                                    :value="selected_product.qte"
                                                    @update:value="selected_product.qte = $event" />
                                            </li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div class="row d-flex align-items-center mt-4">
                            <strong for="validationCustom01" class="form-label">Selectionner un Produit</strong>
                            <div class="col-md-12 mt-3">
                                <input type="text" class="form-control" id="validationCustom01" placeholder="Produit..."
                                    v-model="searchInput" />
                            </div>
                        </div>

                        <div v-if="products.length">


                            <div class="row p-3">

                                <div v-for="product in filteredProducts" :key="product.id">
                                    <div class="card">
                                        <div class="row">
                                            <div class="col-2 d-flex flex-row">
                                                <img class="img-fluid" src="https://via.placeholder.com/300"
                                                    alt="Card image cap">

                                            </div>
                                            <ul class="list-group list-group-flush col-10">
                                                <li class="list-group-item">
                                                    <div class="d-flex flex-row justify-content-between align-items-center">
                                                        <div class="d-flex flex-row">
                                                            <strong class="">{{ product.Titre }}</strong>
                                                            <span class="badge bg-success mx-3">{{ product.Quantite
                                                            }}</span>
                                                        </div>
                                                        <div>
                                                            <button class="btn btn-primary w-100"
                                                                @click="addToCart(product)">
                                                                <i class="fas fa-plus"></i></button>
                                                        </div>

                                                    </div>
                                                </li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>

                            </div>

                        </div>
                        <div class="p-3 bg-light mt-4" v-else>
                            <p>aucun resultat</p>
                        </div>
                    </div>

                    <!----end pickup stock-->


                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary waves-effect waves-light"
                        data-bs-dismiss="modal">Fermer</button>
                    <button type="submit" class="btn btn-primary waves-effect waves-light"
                        @click="submitFormAdd">Ajouter</button>
                </div>
            </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->



    <!-- pickup info -->

    <div id="PickupInfo" class="modal modal-lg fade" tabindex="-1" aria-labelledby="PickupInfolabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title mt-0" id="PickupInfolabel">Ramassage {{ formData.Ref }}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">

                    <div class="mb-3">
                        <div class="row">
                            <div class="col-6 p-3 border">
                                <h6>Nom </h6>
                                <p class="mx-4">{{ formData ? formData.Nom : '' }}</p>
                            </div>
                            <div class="col-6 p-3 border">
                                <h6>Téléphone </h6>
                                <p class="mx-4">{{ formData ? formData.Téléphone : '' }}</p>
                            </div>
                            <div class="col-6 p-3 border">
                                <h6>Quantite </h6>
                                <p class="mx-4">{{ formData ? formData.nbrColis : '' }}</p>
                            </div>
                            <div class="col-6 p-3 border">
                                <h6>Ville </h6>
                                <p class="mx-4">{{ formData ? formData.Ville : '' }}</p>
                            </div>
                            <div class="col-md-12 p-3 border align-text-bottom">
                                <h6>Adresse </h6>
                                <p class="mx-4">{{ formData ? formData.Adresse : '' }}</p>
                            </div>

                        </div>
                    </div>



                    <div class="my-3" v-if="formData && formData.cartItems">
                        <h5>Produits</h5>

                        <div class="row" v-for="prod in formData.cartItems" :key="prod.id">
                            <div>
                                <div class="card p-3" style="box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;">
                                    <div class="row">
                                        <div class="col-md-1 col-2 d-flex flex-row"><img class="rounded-5 avatar-sm"
                                                :src="prod.Image ?? 'https://via.placeholder.com/300'" alt="Card image cap">
                                        </div>
                                        <div class="col-10 d-flex align-items-center justify-content-between flex-row">
                                            <div class="d-flex flex-row text-start col-6 mx-1">
                                                <strong class="">{{ prod ? prod.Titre : '' }} x {{ prod ? prod.qte : ''
                                                }}</strong>
                                            </div>
                                            <div class="d-flex align-items-end col-5">
                                                <span>Type : {{ prod ? prod.Type : '' }}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>




                <div class="">
                    <a :href="'tel:' + (formData ? formData.Téléphone : '')"
                        class="btn btn-success waves-effect waves-light col-4"><i class="fas fa-2x fa-phone-alt"></i></a>
                    <a :href="'sms:' + (formData ? formData.Téléphone : '') + '?body=Bonjour'"
                        class="btn btn-primary waves-effect waves-light col-4"><i class="far fa-2x fa-envelope"></i></a>
                    <a :href="'https://wa.me/' + (formData ? formData.Téléphone : '')" target="__blank"
                        class="btn btn-primary waves-effect waves-light col-4 btn-whatsapp"><i
                            class="fab fa-2x fa-whatsapp"></i></a>
                </div>
            </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->





    <Supprimer :apiUrl="`https://api.gestion-livraison.pro/api/pickup/${delete_row_id}/delete`"
        @deleted-id="deletedRow = $event" />
</template>
  
  
  
  
  

  
<style scoped>
.table-responsive {
    overflow-x: auto;
}

table span.header_side {
    display: none;
}

thead th {
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
import { fetchDataPagination, fetchData, updateData, addData, getRole, checkPermission } from '../../../composition/crud.js';

import input_text from '../../inputs/input.vue'
import button_simple from '../../buttons/simple.vue'
import SelectDropdown from '../../inputs/select.vue';
import checkd from '../../../components/inputs/check.vue';

import Supprimer from '../../../components/popups/delete.vue';


export default {
    components: {
        input_text,
        button_simple,
        SelectDropdown,
        checkd,

        Supprimer,
    },

    data() {
        return {
            pagination: [],
            filters: "",
            pagination_filters: "",
            per_page: 10,
            page: 1,

            formData: {
                Nom: '',
                Ville: '',
                Adresse: '',
                nbrColis: '',
                Colis: 1,
                Stock: 0,
                id: null,
                cartItems: [],
                ClientID: "",
                Valid: "",
                Téléphone: "",
            },
            isEditMode: false, // Initially, the modal is in "add" mode
            data: [],
            tableFields: [],
            module: [],
            products: [],
            searchInput: "",
            Role: getRole(),
            delete_row_id: "",
            deletedRow: "",

            loading: false,

        };
    },
    props: {
        apiUrl: {
            type: String,
            required: true
        },
        Module: {
            type: String,
            required: true
        },
        filters_update: {
            type: String,
            required: true,
        }
    },
    methods: {
        checkModule(module) {
            const response = checkPermission(module);
            console.log(response);
            return response;
        },
        async toggleValid(item) {
            item.Valid = item.Valid === 1 ? 0 : 1;
            await updateData(`https://api.gestion-livraison.pro/api/pickup/${item.id}/valid/update`, { Valid: item.Valid });
        },
        async submitFormUpdate() {
            console.log(this.formData)
            const RamId = this.formData.id; // Retrieve the customer ID from the URL
            const return_data = await updateData(`https://api.gestion-livraison.pro/api/pickup/${RamId}/update`, this.formData);

            if (return_data.data) {

                this.formData = {
                    Nom: '',
                    Ville: '',
                    Adresse: '',
                    nbrColis: '',
                    Colis: 1,
                    Stock: 0,
                    id: '',
                    cartItems: [],
                    ClientID: "",
                    Valid: "",
                    Téléphone: "",
                };

                $('#modalUpdate').modal('hide');
            }

            //update table
            const existingRowIndex = this.data.findIndex((item) => item.id === return_data.data.id);
            if (existingRowIndex !== -1) {
                // Update the existing row
                this.data[existingRowIndex] = { ...this.data[existingRowIndex], ...return_data.data };
            }

        },
        async openUpdateModal(RamData) {
            this.formData = { ...RamData };;
            console.log(RamData)
            console.log(this.formData)

            if (RamData.Stock) {
                const response = await fetchData(`https://api.gestion-livraison.pro/api/pickup/${RamData.id}/stock/products/get`);
                this.formData.cartItems = { ...response };
                console.log(response)
            }

            $('#modalUpdate').modal('show');
            // Show the modal using JavaScript if you are using Bootstrap
            // Example: $('#modal').modal('show');
        },
        async openInfoModal(RamData) {
            console.log(RamData.Adresse)
            console.log("RamData")
            console.log(RamData)
            console.log(this.formData)

            this.formData = { ...RamData };
            if (RamData.Stock) {
                const response = await fetchData(`https://api.gestion-livraison.pro/api/pickup/${RamData.id}/stock/products/get`);
                this.formData.cartItems = { ...response };
                console.log(response)
            }

            $('#PickupInfo').modal('show');
            // Show the modal using JavaScript if you are using Bootstrap
            // Example: $('#modal').modal('show');
        },
        async clearFormData() {

            this.formData = {
                Nom: '',
                Ville: '',
                Adresse: '',
                nbrColis: '',
                Colis: 1,
                Stock: 0,
                id: '',
                cartItems: [],
                ClientID: "",
                Valid: "",
                Téléphone: "",
            };

            // Show the modal using JavaScript if you are using Bootstrap
            // Example: $('#modal').modal('show');
        },
        async submitFormAdd() {
            console.log("dta to add")
            console.log(this.formData)
            const res = await addData("https://api.gestion-livraison.pro/api/pickup/new", this.formData);

            if (res.data) {
                this.formData = {
                    Nom: '',
                    Ville: '',
                    Adresse: '',
                    nbrColis: '',
                    Colis: 1,
                    Stock: 0,
                    id: '',
                    cartItems: [],
                    ClientID: "",
                    Valid: "",
                    Téléphone: "",
                };

                $('#modalAdd').modal('hide');

                //update table
                this.data.push(res.data);

            }



        },
        async getFetchData(filters = null) {
            this.loading = true

            let response = await fetchDataPagination(this.apiUrl + filters);
            this.data = response.data
            this.pagination = response.pagination

            if (this.data.length > 0) {
                this.tableFields = Object.keys(response.data[0]);
            }

            this.loading = false
        },



        addToCart(product) {
            const isInCart = this.formData.cartItems.some((item) => item.id === product.id);

            if (!isInCart) {
                product.qte = 1;
                this.formData.cartItems.push(product);
            } else alertify.error("le produit est deja selectionne");

        },

        removeFromCart(productId) {
            const index = this.formData.cartItems.findIndex((item) => item.id === productId);
            if (index !== -1) {
                this.formData.cartItems.splice(index, 1);
            }
        },
        searchProductFilter() {
            console.log(this.searchInput)
            const searchTerm = this.searchInput.toLowerCase().trim();
            console.log(searchTerm);
            if (searchTerm === '') return this.products;
            return this.products.filter((product) => {
                console.log(product.Titre)
                return product.Titre.toLowerCase().includes(searchTerm);

            })
        },


    },

    computed: {
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
        filteredProducts() {
            const searchTerm = this.searchInput.toLowerCase().trim();
            const customerIdFilter = this.formData.ClientID || ''; // Use an empty string if customerId is not defined

            if (getRole() == "customer") {
                if (searchTerm) return !searchTerm || product.Titre.toLowerCase().includes(searchTerm);
                else return this.products
            }
            else if (customerIdFilter && customerIdFilter !== '') {
                console.log("yes cond " + customerIdFilter)

                // Apply both search term and customer_id filter
                return this.products.filter((product) => {
                    if (searchTerm) {
                        if (product.customer_id == customerIdFilter && product.Titre.toLowerCase().includes(searchTerm)) return product
                    } else if (product.customer_id == customerIdFilter) return product

                });
            }
        }
    },

    async mounted() {
        this.getFetchData("");
        this.products = await fetchData('https://api.gestion-livraison.pro/api/products');
        console.log(this.products)


        var vueInstance = this;

        $('#modalAdd').on('shown.bs.modal', function () {
            // Call the Vue component method using the reference
            vueInstance.clearFormData();
        });

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
  