<script setup>
import heading from '../../components/brumbs/heading.vue'
import input_text from '../../components/inputs/input.vue'
import texterea_text from '../../components/inputs/texterea.vue'
import button_simple from '../../components/buttons/simple.vue'
import SelectDropdown from '../../components/inputs/select.vue';

</script>

<template>
    <div class="main-content">
        <div class="page-content">
            <div class="container-fluid">

                <heading pageTitle="Nouveau Expense"/>


                <div class="card">
                    <div class="card-body">

                        <form @submit.prevent="submitForm">

                            <SelectDropdown v-model="Type" :value="formData.Type"
                                apiUrl="https://api.gestion-livraison.pro/api/expenses/types" fieldName="Nom"
                                first_option="Selectionner le Type" label="Type" Class_Content="col-md-12 mt-4"
                                @update:value="formData.Type = $event" />

                            <input_text v-model="Montant" label="Montant" type="text" Class_Content="col-md-12 mt-4"
                                :value="formData.Montant" @update:value="formData.Montant = $event" />

                            <input_text v-model="Commentaire" label="Commentaire" type="text" Class_Content="col-md-12 mt-4"
                                :value="formData.Commentaire" @update:value="formData.Commentaire = $event" />

                            <button_simple type="submit" Class_Content="col-md-12 mt-4 d-flex" btn_text="Ajouter Expense" />

                        </form>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>



import { ref, onMounted } from 'vue';
import { addData } from '../../composition/crud.js';

export default {

  data() {
    return {
      formData: {
        Commentaire: '',
        Montant: '',
        Type: '',
      },
    };
  },
  methods: {
    async submitForm() {
        await addData("https://api.gestion-livraison.pro/api/expense/new",this.formData);
        this.formData = {
        Commentaire: '',
        Montant: '',
        Type: ''
      };
    },
     
  },
  
}




</script>