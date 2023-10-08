<script setup>
import input_text from '../../components/inputs/input.vue'
import button_simple from '../../components/buttons/simple.vue'


</script>


<template>
  <div class="main-content">
    <div class="page-content">
      <div class="container-fluid">
        <heading pageTitle="Nouveau Embalage" />


        <div class="row p-5">
          <div class="card">
            <div class="card-body">

                <input_text v-model="Titre" label="Titre d'embalage" type="text" Class_Content="col-md-12 mt-4"
                  :value="formData.Titre" @update:value="formData.Titre = $event" />
                <input_text v-model="Quantite" label="Quantite" type="number" Class_Content="col-md-12 mt-4"
                  :value="formData.Quantite" @update:value="formData.Quantite = $event" />
                <input_text v-model="Prix" label="Prix de vente" type="number" Class_Content="col-md-12 mt-4"
                  :value="formData.Prix" @update:value="formData.Prix = $event" />
               
                  <input_text v-model="Original_prix" label="Prix Original" type="number" Class_Content="col-md-12 mt-4"
                  :value="formData.Original_prix" @update:value="formData.Original_prix = $event" />
                  

                  <div class="col-md-12 mt-4">
                    <label for="">Image</label>
                    <input type="file" class="form-control" @change="handleFileUpload" accept=".jpg,.png" id="customFileInput" />
                  </div>


                <button_simple @click="submitForm" Class_Content="col-md-3 mt-4 d-flex justify-content-end"
                  btn_text="Modifier Embalage" />

            </div>
          </div>
        </div>




      </div>
    </div>
  </div>
</template>



<script>

import { ref, onMounted } from 'vue';
import { getRow, updateDataPost } from '../../composition/crud.js';

export default {

  data() {
    return {
      formData: {
        Titre: '',
        Quantite: '',
        Original_prix: '',
        Image: '',
        Prix: '',
      },
    };
  },
  async mounted() {
    const packageId = this.$route.params.id; // Retrieve the customer ID from the URL
    const packageData = await getRow(`https://api.gestion-livraison.pro/api/package/${packageId}/get`);
    this.formData = { ...packageData }; // Populate the form with the retrieved customer data
  },
  methods: {
    async submitForm() {
      const packageId = this.$route.params.id; // Retrieve the customer ID from the URL
      await updateDataPost(`https://api.gestion-livraison.pro/api/package/${packageId}/update`, this.formData);
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