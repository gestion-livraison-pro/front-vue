<script setup>
import input_text from '../../components/inputs/input.vue'
import texterea_text from '../../components/inputs/texterea.vue'
import button_simple from '../../components/buttons/simple.vue'
import SelectDropdown from '../../components/inputs/select.vue';



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
                  <h5>Utilisateur Information</h5>
                  <div class="row">

                    <input_text v-model="Nom" label="Nom Complete" type="text" Class_Content="col-md-12 mt-4" :value="formData.Nom" @update:value="formData.Nom = $event" />

                    <input_text v-model="Téléphone" label="Telephone" type="text" Class_Content="col-md-6 mt-4" :value="formData.Téléphone" @update:value="formData.Téléphone = $event" />

                    <input_text v-model="Email" label="E-mail" type="email" Class_Content="col-md-6 mt-4" :value="formData.Email" @update:value="formData.Email = $event" />

                    <input_text v-model="Adresse" label="Adresse" type="text" Class_Content="col-md-12 mt-4" :value="formData.Adresse" @update:value="formData.Adresse = $event" />
                   
                    <input_text v-model="MotdePasse" label="Mot de Passe" type="text" Class_Content="col-md-6 mt-4" :value="formData.MotdePasse" @update:value="formData.MotdePasse = $event" />

                    <input_text v-model="confirmMotdePasse" label="Confirmer Mot de Passe" type="text" Class_Content="col-md-6 mt-4" :value="formData.confirmMotdePasse" @update:value="formData.confirmMotdePasse = $event" />
                                     


               
                  </div>

                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card">
                <div class="card-body">
                  <div class="row">
                   
                    <input_text  label="Image de profile" type="file" Class_Content="col-md-12 mt-4" />

                    <SelectDropdown v-model="formData.Role" :value="formData.Role" apiUrl="https://api.gestion-livraison.pro/api/roles" fieldName="Nom" first_option="Selectionner un Role" label="Role" Class_Content="col-md-12 mt-4" @update:value="formData.Role = $event"   />

                    <button_simple type="submit" Class_Content="col-md-12 mt-4" btn_text="Ajouter Utilisateur" />
                    
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
import { getRow, updateData } from '../../composition/crud.js';

export default {

  data() {
    return {
      formData: {
        Nom: '',
        Téléphone: '',
        Email: '',
        Adresse: '',
        MotdePasse: '',
        Role: '',
      },
    };
  },
  async mounted() {
    const user_id = this.$route.params.id; // Retrieve the customer ID from the URL
      const customerData = await getRow(`https://api.gestion-livraison.pro/api/user/${user_id}/get`);
      this.formData = { ...customerData }; // Populate the form with the retrieved customer data
  },
  methods: {
         async submitForm() {
      const user_id = this.$route.params.id; // Retrieve the customer ID from the URL
      await updateData(`https://api.gestion-livraison.pro/api/user/${user_id}/update`, this.formData);
    },
  },
}
</script>

