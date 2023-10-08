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
        <form @submit.prevent="submitForm" enctype="multipart/form-data">

          <div class="row">
            <div class="col-md-8">
              <div class="card">
                <div class="card-body">
                  <h5>Livreur Information</h5>
                  <div class="row">

                    <input_text v-model="Nom" label="Nom Complete" type="text" Class_Content="col-md-12 mt-4"
                      :value="formData.Nom" @update:value="formData.Nom = $event" />

                    <input_text v-model="Téléphone" label="Telephone" type="text" Class_Content="col-md-6 mt-4"
                      :value="formData.Téléphone" @update:value="formData.Téléphone = $event" />

                    <input_text v-model="Email" label="E-mail" type="email" Class_Content="col-md-6 mt-4"
                      :value="formData.Email" @update:value="formData.Email = $event" />

                    <input_text v-model="Adresse" label="Adresse" type="text" Class_Content="col-md-12 mt-4"
                      :value="formData.Adresse" @update:value="formData.Adresse = $event" />

                    <input_text v-model="MotdePasse" label="Mot de Passe" type="text" Class_Content="col-md-6 mt-4"
                      :value="formData.MotdePasse" @update:value="formData.MotdePasse = $event" />

                    <input_text v-model="confirmMotdePasse" label="Confirmer Mot de Passe" type="text"
                      Class_Content="col-md-6 mt-4" :value="formData.confirmMotdePasse"
                      @update:value="formData.confirmMotdePasse = $event" />

                    <input_text v-model="ICE" label="ICE" type="text" Class_Content="col-md-12 mt-4" :value="formData.ICE"
                      @update:value="formData.ICE = $event" />

                 <!--   <input_text label="Carte national RECTO" type="file" Class_Content="col-md-12 mt-4" @input="onFileChange('CinR', $event)" />

                    <input_text label="Carte national VERSO" type="file" Class_Content="col-md-12 mt-4"   @input="onFileChange('CinV', $event)" /> -->

                    <div class="col-md-12 mt-4">
                      <label for="">Carte national VERSO</label>
                      <input type="file" name="CinV" class="form-control" @input="onFileChange('CinV', $event)" >
                    </div>

                    <div class="col-md-12 mt-4">
                      <label for="">Carte national RECTO</label>
                      <input type="file" name="CinR" class="form-control" @input="onFileChange('CinR', $event)" >
                    </div>
                    


                  </div>

                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card">
                <div class="card-body">
                  <h5>Livraison Information</h5>
                  <div class="row">

                    <SelectDropdown v-model="Ville" :value="formData.Ville"
                      apiUrl="https://api.gestion-livraison.pro/api/cities" fieldName="Nom"
                      first_option="Selectionner une Ville" label="Ville" Class_Content="col-md-12 mt-4"
                      @update:value="formData.Ville = $event" />

                    <SelectDropdown v-model="Véhicule" :value="formData.Véhicule"
                      apiUrl="https://api.gestion-livraison.pro/api/cars" fieldName="Nom"
                      first_option="Selectionner le type de Véhicule" label="Véhicule Type" Class_Content="col-md-12 mt-4"
                      @update:value="formData.Véhicule = $event" />


                      <div class="col-md-12 mt-4">
                      <label for="">Image de profile</label>
                      <input type="file" class="form-control" name="ImgProfile" @input="onFileChange('ImgProfile', $event)" >
                    </div>



                    <button_simple type="submit" Class_Content="col-md-12 mt-4" btn_text="Ajouter Livreur" />

                   

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
import { addData, updateData } from '../../composition/crud.js';

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
        CinR: '',
        CinV: '',
        ImgProfile: '',

      },
    };
  },
  methods: {
    async submitForm() {

       // Create a FormData instance
       const form = new FormData();
      
      // Append all form fields to FormData
      for (const key in this.formData) {
        form.append(key, this.formData[key]);
      }
  
      await addData("https://api.gestion-livraison.pro/api/deliveryman/new", this.formData);
    },
    onFileChange(field, event) {
      // Update the formData[field] with the selected file
      this.formData[field] = event.target.files[0];
      console.log(field)
      console.log(this.formData[field])
    },
  },
}
</script>
