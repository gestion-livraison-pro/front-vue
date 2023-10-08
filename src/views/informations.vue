<script setup>
import input_text from '../components/inputs/input.vue'
import texterea_text from '../components/inputs/texterea.vue'
import button_simple from '../components/buttons/simple.vue'


</script>

<template>
    <div class="main-content">
        <div class="page-content">
            <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="card">
                                <div class="card-body">
                                    <h5>Information</h5>
                                    <div class="row">

                                        <input_text v-model="Nom" label="Nom" type="text"
                                            Class_Content="col-md-6 mt-4" :value="formData.Nom"
                                            @update:value="formData.Nom = $event" />

                                            <input_text v-model="Téléphone" label="Téléphone" type="text"
                                            Class_Content="col-md-6 mt-4" :value="formData.Téléphone"
                                            @update:value="formData.Téléphone = $event" />

                                        <input_text v-model="Adresse" label="Adresse" type="text"
                                            Class_Content="col-md-12 mt-4" :value="formData.Adresse"
                                            @update:value="formData.Adresse = $event" />

                                        <input_text v-model="ICE" label="ICE" type="text"
                                            Class_Content="col-md-12 mt-4" :value="formData.ICE"
                                            @update:value="formData.ICE = $event" />

                                        <input_text v-model="IF" label="IF" type="text"
                                            Class_Content="col-md-12 mt-4" :value="formData.IF"
                                            @update:value="formData.IF = $event" />
                                    

                                            <div  class="col-md-12 mt-4">
                                                <label for="">Logo</label>
                                                <input type="file" class="form-control" @change="handleFileUpload"
                                                accept=".jp" id="customFileInput" />
                                            </div>

                                        <button_simple @click="submitForm" type="submit" Class_Content="col-md-12 mt-4"
                                            btn_text="Modifier" />


                                    </div>

                                </div>
                            </div>

                          
                        </div>
                       
                    </div>
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
import { getRow, updateData, getRole, fetchData } from '../composition/crud.js';

export default {
    data() {
        return {
            formData: {
                Nom: '',
                Téléphone: '',
                ICE: '',
                IF: '',
                Adresse: '',
                Logo: '',
         
            },
            Role: getRole(),
        };
    },
    async mounted() {
        const customerData = await getRow(`https://api.gestion-livraison.pro/api/company/get`);
        this.formData = { ...customerData }; // Populate the form with the retrieved customer data
        console.log(customerData)
    },
    methods: {
        async submitForm() {
            const customerId = this.$route.params.id; // Retrieve the customer ID from the URL
            await updateData(`https://api.gestion-livraison.pro/api/company/update`, this.formData);
        },
    },
};
</script>
