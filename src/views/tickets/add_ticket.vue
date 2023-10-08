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
        <heading pageTitle="Nouveau Embalage" />


        <div class="row p-5">
          <div class="card col-md-8">
            <div class="card-body">
              <form @submit.prevent="submitForm">

                <SelectDropdown v-if="Role!='customer'" v-model="Client" :value="formData.Client"
                  apiUrl="https://api.gestion-livraison.pro/api/customers" fieldName="Nom"
                  first_option="Selectionner un Client" label="Client" Class_Content="col-md-12 mt-4"
                  @update:value="formData.Client = $event" />

                <SelectDropdown v-model="Type" :value="formData.Type"
                  apiUrl="https://api.gestion-livraison.pro/api/reclamations/types" fieldName="Nom"
                  first_option="Selectionner le type de Ticket" label="Type de Ticket" Class_Content="col-md-12 mt-4"
                  @update:value="formData.Type = $event" />
                <input_text v-model="Sujet" label="Sujet" type="text" Class_Content="col-md-12 mt-4"
                  :value="formData.Sujet" @update:value="formData.Sujet = $event" />
                <texterea_text v-model="Contenu" label="Message" type="text" Class_Content="col-md-12 mt-4"
                  :value="formData.Contenu" @update:value="formData.Contenu = $event" />
                <button_simple type="submit" Class_Content="col-md-3 mt-4 d-flex" btn_text="Ajouter Ticket" />


              </form>

            </div>
          </div>
          <div class="col-md-4 p-5">
            <div class="my-4">
              <strong>E-mail</strong>
              <p class="mx-4">Email@gmail.com</p>
            </div>

            <div class="my-4">
              <strong class="my-3">Téléphone</strong>
              <p class="mx-4">(+212) 600-000000</p>
            </div>

            <div class="my-4">
              <strong class="my-3">Fixe</strong>
              <p class="mx-4">(+212) 500-000000</p>
            </div>
          </div>
        </div>




      </div>
    </div>
  </div>
</template>

<script>

import { ref, onMounted } from 'vue';
import { addData, getRole } from '../../composition/crud.js';

export default {

  data() {
    return {
      formData: {
        Client:"",
        Type: 0,
        Contenu: '',
        Sujet: '',
      },
      Role: getRole(),
    };
  },
  methods: {
    async submitForm() {
      await addData("https://api.gestion-livraison.pro/api/reclamation/new", this.formData);
    },
  },
}



</script>