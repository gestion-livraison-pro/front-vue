<template>
    <form @submit.prevent="submitForm" >
    <div class="row">
        <div class="col-md-8">
            <div class="card">
                <div class="card-body">
                    <h5>Client Information</h5>
                    <div class="row">
                        <div class="col-md-12 mt-4">
                            <label for="validationCustom01" class="form-label">Nom Complete </label>
                            <input type="text" class="form-control" id="validationCustom01" placeholder="Mark"  v-model="formData.name"  />
                            <div class="valid-feedback">Looks good!</div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-6 mt-4">
                            <label for="validationCustom01" class="form-label">Telephone</label>
                            <input type="text" class="form-control" id="validationCustom01" placeholder="Mark" v-model="formData.phone" />
                            <div class="valid-feedback">Looks good!</div>
                        </div>

                        <div class="col-md-6 mt-4">
                            <label for="validationCustom01" class="form-label">E-mail</label>
                            <input type="text" class="form-control" id="validationCustom01" placeholder="Mark"  v-model="formData.email"/>
                            <div class="valid-feedback">Looks good!</div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-12 mt-4">
                            <label for="validationCustom01" class="form-label">Adresse </label>
                            <input type="text" class="form-control" id="validationCustom01" placeholder="Mark"  v-model="formData.adress"  />
                            <div class="valid-feedback">Looks good!</div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-6 mt-4">
                            <label for="validationCustom01" class="form-label">Mot de Passe</label>
                            <input type="text" class="form-control" id="validationCustom01" placeholder="Mark"  v-model="formData.password"/>
                            <div class="valid-feedback">Looks good!</div>
                        </div>

                        <div class="col-md-6 mt-4">
                            <label for="validationCustom01" class="form-label">Confirmer Mot de Passe</label>
                            <input type="text" class="form-control" id="validationCustom01" placeholder="Mark"  v-model="formData.confirmpassword"/>
                            <div class="valid-feedback">Looks good!</div>
                        </div>

                        <div class="col-md-12 mt-4">
                            <label for="validationCustom01" class="form-label">Note</label>
                            <textarea class="form-control" name="" id="validationCustom01" cols="30" rows="7" v-model="formData.note"></textarea>
                            <div class="valid-feedback">Looks good!</div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card">
                <div class="card-body">
                    <h5>Boutique Information</h5>
                    <div class="row">
                        <div class="col-md-12 mt-4">
                            <label for="validationCustom01" class="form-label">Nom de Boutique</label>
                            <input type="text" class="form-control" id="validationCustom01" placeholder="Mark"  v-model="formData.company_name"/>
                            <div class="valid-feedback">Looks good!</div>
                        </div>

                        <div class="col-md-12 mt-4">
                                <label for="validationCustom01" class="form-label">ICE</label>
                                <input type="text" class="form-control" id="validationCustom01" placeholder="Mark" v-model="formData.Ice" />
                                <div class="valid-feedback">Looks good!</div>
                        </div>

                        <div class="col-md-12 mt-4">
                                <label for="validationCustom01" class="form-label">IF</label>
                                <input type="text" class="form-control" id="validationCustom01" placeholder="Mark" v-model="formData.If" />
                                <div class="valid-feedback">Looks good!</div>
                        </div>

                        <div class="col-md-12 mt-4">
                                <label for="validationCustom01" class="form-label">Boutique LOGO</label>
                                <input type="file" class="form-control" id="validationCustom01" placeholder="Mark"  />
                                <div class="valid-feedback">Looks good!</div>
                        </div>

                        <div class="col-md-12 mt-4">
                                <button type="submit" class="btn btn-primary w-100">Ajouter Client</button>
                        </div>
                    </div>
                    


                </div>
            </div>
        </div>
    </div>
    </form>
</template>


<script>
import axios from "axios";
    export default{
        data() {
        return {
        formData: {
            name: '',
            phone: '',
            email: '',
            adress: '',
            password: '',
            Ice: '',
            IF: '',
            company_name: '',
            note: '',
        },
        };
    },
  methods: {
    async submitForm() {
      try {
        const response = await axios.post('http://localhost:8000/api/customers/new', this.formData);
        
        console.log(response.data); // Handle the API response as needed
        alertify.success(response.data.success);

      } catch (error) {
        console.error(error);
        alertify.error("verifier les champs svp!!!");
      }
    },
  },
    }
</script>
















