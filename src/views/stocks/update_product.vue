<script setup>
import input_text from '../../components/inputs/input.vue'
import button_simple from '../../components/buttons/simple.vue'
import SelectDropdown from '../../components/inputs/select.vue';
import checkd from '../../components/inputs/check.vue';
import Embalages_Radio from '../../components/boxs/radio_embalages.vue'



</script>

<template>
    <div class="main-content">
        <div class="page-content">
            <div class="container-fluid">
                <form @submit.prevent="submitForm">

                    <div class="row">
                        <div class="col-md-8">
                            <div class="card">
                                <div class="card-body">
                                    <h5>Produit Infos</h5>
                                    <div class="row">

                                        <input_text v-model="Titre" label="Titre du Produit" type="text"
                                            Class_Content="col-md-12 mt-4" :value="formData.Titre"
                                            @update:value="formData.Titre = $event" />

                                        <input_text v-model="Poid" label="Poid du produit" type="text"
                                            Class_Content="col-md-12 mt-4" :value="formData.Poid"
                                            @update:value="formData.Poid = $event" />

                                        <input_text v-if="Role != 'customer'" v-model="Qte" label="Quantité du produit"
                                            type="text" Class_Content="col-md-12 mt-4" :value="formData.Qte"
                                            @update:value="formData.Qte = $event" />

                                   

                                        <div class="col-md-12 mt-4">
                                            <label for="">Image</label>
                                            <input type="file" class="form-control" @change="handleFileUpload" accept=".jpg,.png" id="customFileInput" />
                                        </div>

                                    </div>

                                </div>
                            </div>

                            <div class="card">
                                <div class="card-body">
                                    <h5>Embalage</h5>
                                    <div class="row my-4 mx-1 ">
                                        besoin d'un Embalage
                                        <checkd v-model="formData.si_Embalage" :value="formData.si_Embalage"
                                            id_check="embalage_product" Class_Content="col-md-1 mb-1 mb-sm-0"
                                            :is_checked="formData.si_Embalage" :checked="formData.si_Embalage === 1"
                                            @update:value="formData.si_Embalage = $event" />
                                    </div>


                                    <div v-if="formData.si_Embalage === 1" class="row d-flex justify-content-center">

                                        <Embalages_Radio v-model="formData.EmbalageID"
                                            apiUrl="https://api.gestion-livraison.pro/api/packages"
                                            :value="formData.EmbalageID" @update:value="formData.EmbalageID = $event" :selected_package="EmbalageID" />

                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card">
                                <div class="card-body">
                                    <h5>Produit Type</h5>
                                    <div class="row">

                                        <SelectDropdown v-model="CategorieID" :value="formData.CategorieID"
                                            apiUrl="https://api.gestion-livraison.pro/api/product/categories"
                                            fieldName="Nom" first_option="Selectionner une Categorie" label="Categorie"
                                            Class_Content="col-md-12 mt-4" @update:value="formData.CategorieID = $event" />

                                        <SelectDropdown v-model="TypeID" :value="formData.TypeID"
                                            apiUrl="https://api.gestion-livraison.pro/api/product/types" fieldName="Nom"
                                            first_option="Selectionner le Type" label="Type" Class_Content="col-md-12 mt-4"
                                            @update:value="formData.TypeID = $event" />

                                        <SelectDropdown v-if="Role != 'customer'" v-model="ClientID"
                                            :value="formData.ClientID"
                                            apiUrl="https://api.gestion-livraison.pro/api/customers" fieldName="Nom"
                                            first_option="Selectionner le Client" label="Client"
                                            Class_Content="col-md-12 mt-4" @update:value="formData.ClientID = $event" />



                                        <button_simple type="submit" Class_Content="col-md-12 mt-4"
                                            btn_text="Modifier Produit" />

                                    </div>



                                </div>
                            </div>
                        </div>
                    </div>
                </form>




            </div>
        </div>
    </div>
</template>



<style scoped>
  img{
    width: 100%;
    height: 300px;
    object-fit: cover;
  }
</style>
  

<script>
import { ref, onMounted } from 'vue';
import { getRole, getRow, updateDataPost } from '../../composition/crud.js';

export default {

    data() {
        return {
            Role: getRole(),
            formData: {
                Titre: '',
                Poid: '',
                Image: '',
                EmbalageID: '',
                ClientID: '',
                si_Embalage: 1,
                CategorieID: "",
                TypeID: "",
                Qte: 0,
            },
            Packages: [],
        };
    },
    async mounted() {
        const productID = this.$route.params.id; // Retrieve the customer ID from the URL
        const ProductData = await getRow(`https://api.gestion-livraison.pro/api/product/${productID}/get`);
        this.formData = { ...ProductData }; // Populate the form with the retrieved customer data
    },
    methods: {
        async submitForm() {
            const productID = this.$route.params.id; // Retrieve the customer ID from the URL
            if (!this.formData.si_Embalage) this.formData.EmbalageID = null;
            await updateDataPost(`https://api.gestion-livraison.pro/api/product/${productID}/update`, this.formData);
        },
        handleFileUpload(event) {
            const file = event.target.files[0];
            this.formData.Image = file;
            console.log(this.formData.Image)
            console.log(event.target.files[0])

        },
    },
}
</script>
