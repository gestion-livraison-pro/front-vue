<script setup>
import input_text from '../../components/inputs/input.vue'
import texterea_text from '../../components/inputs/texterea.vue'
import button_simple from '../../components/buttons/simple.vue'


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
                  <h5>Client Information</h5>
                  <div class="row">

                    <input_text v-model="Nom" label="Nom Complete" type="text" Class_Content="col-md-12 mt-4" :value="formData.Nom" @update:value="formData.Nom = $event" />

                    <input_text v-model="Téléphone" label="Telephone" type="text" Class_Content="col-md-6 mt-4" :value="formData.Téléphone" @update:value="formData.Téléphone = $event" />

                    <input_text v-model="Email" label="E-mail" type="text" Class_Content="col-md-6 mt-4" :value="formData.Email" @update:value="formData.Email = $event" />

                    <input_text v-model="Adresse" label="Adresse" type="text" Class_Content="col-md-12 mt-4" :value="formData.Adresse" @update:value="formData.Adresse = $event" />
                   
                    <input_text v-model="MotdePasse" label="Mot de Passe" type="text" Class_Content="col-md-6 mt-4" :value="formData.MotdePasse" @update:value="formData.MotdePasse = $event" />

                    <input_text v-model="confirmpassword" label="Confirmer Mot de Passe" type="text" Class_Content="col-md-6 mt-4" :value="formData.confirmpassword" @update:value="formData.confirmpassword = $event" />
                 
                    <texterea_text v-model="Note" label="Note" type="text" Class_Content="col-md-12 mt-4" :value="formData.Note" @update:value="formData.Note = $event" />
                

               
                  </div>

                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card">
                <div class="card-body">
                  <h5>Boutique Information</h5>
                  <div class="row">
                   
                    <input_text v-model="Nom_Societe" label="Nom de Boutique" type="text" Class_Content="col-md-12 mt-4" :value="formData.Nom_Societe" @update:value="formData.Nom_Societe = $event" />

                    <input_text v-model="ICE" label="ICE" type="text" Class_Content="col-md-12 mt-4" :value="formData.ICE" @update:value="formData.ICE = $event" />

                    <input_text v-model="IF" label="IF" type="text" Class_Content="col-md-12 mt-4" :value="formData.IF" @update:value="formData.IF = $event" />

                    <input_text  label="Boutique LOGO" type="file" Class_Content="col-md-12 mt-4" />

                    <button_simple type="submit" Class_Content="col-md-12 mt-4" btn_text="Ajouter Client" />
                    
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


<script>

import { ref, onMounted } from 'vue';
import { addData,updateData } from '../../composition/crud.js';

export default {

  data() {
    return {
      formData: {
        Nom: '',
        Téléphone: '',
        Email: '',
        Adresse: '',
        MotdePasse: '',
        ICE: '',
        IF: '',
        Nom_Societe: '',
        Logo: '',
        Note: '',
      },
    };
  },
  methods: {
    async submitForm() {
        await addData("https://api.gestion-livraison.pro/api/customer/new",this.formData);
    },
  },
}



</script>

