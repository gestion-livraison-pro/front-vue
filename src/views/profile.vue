<script setup>
import input_text from '../components/inputs/input.vue'
import texterea_text from '../components/inputs/texterea.vue'
import button_simple from '../components/buttons/simple.vue'


</script>

<template>
    <div class="main-content">
        <div class="page-content">
            <div class="container-fluid">
                <form  enctype="multipart/form-data" method="post"  @submit.prevent="submitForm">
                    <div class="row">
                        <div class="col-md-8">
                            <div class="card">
                                <div class="card-body">
                                    <h5>Utilisateur Information</h5>
                                    <div class="row">

                                        <input_text v-model="Nom" label="Nom Complete" type="text"
                                            Class_Content="col-md-6 mt-4" :value="formData.Nom"
                                            @update:value="formData.Nom = $event" />

                                        <input_text v-model="Téléphone" label="Telephone" type="text"
                                            Class_Content="col-md-6 mt-4" :value="formData.Téléphone"
                                            @update:value="formData.Téléphone = $event" />

                                        <input_text v-model="Adresse" label="Adresse" type="text"
                                            Class_Content="col-md-12 mt-4" :value="formData.Adresse"
                                            @update:value="formData.Adresse = $event" />

                                        <input_text v-if="Role === 'customer'" v-model="Message" label="Message de Ticket"
                                            type="text" Class_Content="col-md-12 mt-4" :value="formData.Message"
                                            @update:value="formData.Message = $event" />

                                        <input_text v-if="Role === 'customer'" v-model="Téléphone_Service"
                                            label="Téléphone du service client" type="text" Class_Content="col-md-12 mt-4"
                                            :value="formData.Téléphone_Service"
                                            @update:value="formData.Téléphone_Service = $event" />


                                    </div>

                                </div>
                            </div>

                            <div class="card">
                                <div class="card-body">
                                    <div class="row">
                                        <input_text v-model="old_MotdePasse" label="Mot de Passe actuel" type="password"
                                            Class_Content="col-md-12 mt-4" :value="formData.old_MotdePasse"
                                            @update:value="formData.old_MotdePasse = $event" />

                                        <input_text v-model="MotdePasse" label="Mot de Passe" type="password"
                                            Class_Content="col-md-6 mt-4" :value="formData.MotdePasse"
                                            @update:value="formData.MotdePasse = $event" />

                                        <input_text v-model="confirmMotdePasse" label="Confirmer Mot de Passe"
                                            type="password" Class_Content="col-md-6 mt-4"
                                            :value="formData.confirmMotdePasse"
                                            @update:value="formData.confirmMotdePasse = $event" />
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">

                            <!---<div v-bind:hidden="1" class="card">
                                <div class="card-body d-flex justify-content-center align-items-center flex-column text-center">
                                    <div class="custom-file-upload">
                                        <label class="custom-file-label">
                                            <img src="/src/assets/images/profile.png" width="100" alt="">
                                        </label>
                                        <input type="file" class="custom-file-input" @change="handleFileUpload"
                                            accept=".xlsx" id="customFileInput" />
                                    </div>
                                      <div class="mt-3">
                                        <strong>Image de Profile</strong>
                                        <p>clicker sur l'image pour changer l'image</p>
                                      </div>
                                </div>
                            </div>-->

                            <div class="card">
                                <div class="card-body">
                                    <div class="row">

                                        <input_text v-if="Role === 'customer'" v-model="Nom_Societe" label="Nom de Boutique"
                                            type="text" Class_Content="col-md-12 mt-4" :value="formData.Nom_Societe"
                                            @update:value="formData.Nom_Societe = $event" />

                                        <div v-if="Role === 'customer'" class="col-md-12 mt-4">
                                            <label for="">Boutique Logo</label>
                                            <input type="file" class="form-control" @change="handleFileUpload_customer" accept=".jpg,.png"
                                                id="customFileInput" />
                                        </div>

                                        <div class="col-md-12 mt-4">
                                            <label for="">Image de Profile</label>
                                            <input type="file" class="form-control" @change="handleFileUpload" accept=".jpg,.png"
                                                id="customFileInput" />

                                        </div>

                                        <button_simple  type="submit" Class_Content="col-md-12 mt-4"
                                            btn_text="Modifier" />

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
/*
.custom-file-upload {
    position: relative;
    cursor: pointer;
    overflow: hidden;
}

.custom-file-label {
    width: 200px;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px;
    border: 2px dashed #3498db;
    border-radius: 50%;
    color: #3498db;
    background-color: #f7f9fb;
    transition: border-color 0.3s ease;
}

.custom-file-input {
    position: absolute;
    top: 0;
    left: 0;
    width: 200%;
    height: 200%;
    opacity: 0;
    cursor: pointer;
}

.custom-file-label:hover {
    border: 2px dashed #2ecc71;
    color: #2ecc71;
}

*/
</style>


<script>
import { ref, onMounted } from 'vue';
import { getRow, updateDataPost, getRole, fetchData } from '../composition/crud.js';
import { mapActions } from 'vuex';

export default {
    data() {
        return {
            formData: {
                Nom: '',
                Téléphone: '',
                Message: '',
                Adresse: '',
                Nom_Societe: '',
                Profile_img: '',
                old_MotdePasse: '',
                MotdePasse: '',
                confirmMotdePasse: '',
                Téléphone_Service: '',
                Logo:'',
            },
            Role: getRole(),
        };
    },
    async mounted() {
        const customerData = await getRow(`https://api.gestion-livraison.pro/api/profile/get`);
        this.formData = { ...customerData }; // Populate the form with the retrieved customer data
        console.log(customerData)
    },
    methods: {
        ...mapActions('auth', ['setUsername','setProfileimg']), // Map the setUsername action from the 'auth' module

        async submitForm() {
           
            const response = await updateDataPost(`https://api.gestion-livraison.pro/api/profile/update`, this.formData);

            this.setUsername(response.data.name);
            this.setProfileimg("https://api.gestion-livraison.pro/"+response.data.profile_img);

            console.log(store.state.username)
            console.log(store.state.profileimg)


        },
        handleFileUpload(event) {
            const file = event.target.files[0];
            this.formData.Profile_img = file;
            console.log(this.formData.Profile_img)
            console.log(event.target.files[0])

        },
        handleFileUpload_customer(event) {
            const file = event.target.files[0];
            this.formData.Logo = file;
            console.log(this.formData.Logo)
            console.log(event.target.files[0])

        },
    },

};
</script>
