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
                  <h5>Livreur Information</h5>
                  <div class="row">

                    <input_text v-model="Nom" label="Nom " type="text" Class_Content="col-md-12 mt-4" :value="formData.Nom" @update:value="formData.Nom = $event" />

                    <input_text v-model="Téléphone" label="Telephone" type="text" Class_Content="col-md-6 mt-4" :value="formData.Téléphone" @update:value="formData.Téléphone = $event" />

                    <input_text v-model="Email" label="E-mail" type="email" Class_Content="col-md-6 mt-4" :value="formData.Email" @update:value="formData.Email = $event" />

                    <input_text v-model="Adresse" label="Adresse" type="text" Class_Content="col-md-12 mt-4" :value="formData.Adresse" @update:value="formData.Adresse = $event" />
                   
                    <input_text v-model="MotdePasse" label="Mot de Passe" type="text" Class_Content="col-md-6 mt-4" :value="formData.MotdePasse" @update:value="formData.MotdePasse = $event" />

                    <input_text v-model="confirmMotdePasse" label="Confirmer Mot de Passe" type="text" Class_Content="col-md-6 mt-4" :value="formData.confirmMotdePasse" @update:value="formData.confirmMotdePasse = $event" />
                                     
                    <input_text v-model="ICE" label="ICE" type="text" Class_Content="col-md-12 mt-4" :value="formData.ICE" @update:value="formData.ICE = $event" />

                    <input_text v-model="CinR"  label="Carte national RECTO" type="file" Class_Content="col-md-12 mt-4" :value="formData.CinR" @update:value="formData.CinR = $event" />

                    <input_text  v-model="CinV"  label="Carte national VERSO" type="file" Class_Content="col-md-12 mt-4" :value="formData.CinV" @update:value="formData.CinV = $event" />

               
                  </div>

                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card">
                <div class="card-body">
                  <h5>Livraison Information</h5>
                  <div class="row">
                   
                    <SelectDropdown  v-model="formData.Ville" :value="formData.Ville" apiUrl="https://api.gestion-livraison.pro/api/cities" fieldName="Nom" first_option="Selectionner une Ville" label="Ville" Class_Content="col-md-12 mt-4" @update:value="formData.Ville = $event"  />

                    <SelectDropdown v-model="formData.Véhicule" :value="formData.Véhicule" apiUrl="https://api.gestion-livraison.pro/api/cars" fieldName="Nom" first_option="Selectionner le type de Véhicule" label="Véhicule Type"  Class_Content="col-md-12 mt-4" @update:value="formData.Véhicule = $event" />



                    <input_text v-model="ImgProfile" label="Image de profile" type="file" Class_Content="col-md-12 mt-4" :value="formData.ImgProfile" @update:value="formData.ImgProfile = $event" />

                    <button_simple type="submit" Class_Content="col-md-12 mt-4" btn_text="Modifier Livreur" />
                    
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
        ICE: "",
        ifs: "",
        Ville: '',
        Véhicule: '',
        ImgProfile: '',
        CinR: '',
        CinV: ''
      },
    };
  },
  async mounted() {
    const deliveryman_id = this.$route.params.id; // Retrieve the customer ID from the URL
      const customerData = await getRow(`https://api.gestion-livraison.pro/api/deliveryman/${deliveryman_id}/get`);
      this.formData = { ...customerData }; // Populate the form with the retrieved customer data
  },
  methods: {
         async submitForm() {
      const deliveryman_id = this.$route.params.id; // Retrieve the customer ID from the URL
      await updateData(`https://api.gestion-livraison.pro/api/deliveryman/${deliveryman_id}/update`, this.formData);
    },
  },
}
</script>



