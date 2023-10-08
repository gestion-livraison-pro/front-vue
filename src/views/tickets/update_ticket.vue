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
          <div class="card">
            <div class="card-body">
              <form @submit.prevent="submitForm">

                <SelectDropdown v-model="Type" :value="formData.Type" apiUrl="https://api.gestion-livraison.pro/api/reclamations/types" fieldName="Nom" first_option="Selectionner le type de Ticket" label="Type de Ticket"  Class_Content="col-md-12 mt-4" @update:value="formData.Type = $event" />
                <input_text v-model="Sujet" label="Sujet" type="text" Class_Content="col-md-6 mt-4" :value="formData.Sujet" @update:value="formData.Sujet = $event" />
                <texterea_text v-model="Contenu" label="Message" type="text" Class_Content="col-md-12 mt-4" :value="formData.Contenu" @update:value="formData.Contenu = $event" />
                 <button_simple type="submit" Class_Content="col-md-3 mt-4 d-flex" btn_text="Ajouter Ticket" />


              </form>

            </div>
          </div>
        </div>




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
        Type: '',
        Contenu: '',
        Sujet: '',
      },
    };
  },
  async mounted() {
    const ticketID = this.$route.params.id; // Retrieve the customer ID from the URL
      const TicketData = await getRow(`https://api.gestion-livraison.pro/api/reclamation/${ticketID}/get`);
      this.formData = { ...TicketData }; // Populate the form with the retrieved customer data
  },
  methods: {
         async submitForm() {
      const ticketID = this.$route.params.id; // Retrieve the customer ID from the URL
      await updateData(`https://api.gestion-livraison.pro/api/reclamation/${ticketID}/update`, this.formData);
    },
  },
}



</script>