<template>
    <form class="form-horizontal" @submit.prevent="login">

        <div class="mb-3">
            <label class="form-label" for="username">E-mail</label>
            <input type="text" v-model="email" class="form-control" id="username" placeholder="ex : Client@exeñple.com">
        </div>

        <div class="mb-3">
            <label class="form-label" for="userpassword">Mot de Passe</label>
            <input type="password" v-model="password" class="form-control" id="userpassword" placeholder="********">
        </div>

        <div class="row mt-4">
            <div class="col-6">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="customControlInline">
                    <label class="form-check-label" for="customControlInline">
                        Souviens-toi de moi
                    </label>
                </div>
            </div>
            <div class="col-6 text-end">
                <button class="btn btn-primary w-md waves-effect waves-light" type="submit" :disabled="isLoading">
                    {{ isLoading ? 'Connexion en cours...' : 'Se connecter' }}
                </button>
            </div>
        </div>

        <!--<div class="mb-0 row">
            <div class="col-12 mt-4 text-center">
                <a href="pages-recoverpw.html" class="text-muted"><i class="mdi mdi-lock"></i> Mot de passe oublié?</a>
            </div>
        </div>--->
    </form>
</template>

<script>
import axios from 'axios';
import { mapActions } from 'vuex';


export default {
    data() {
        return {
            password: "",
            email: "",
            isLoading: false,

        }
    },
    methods: {
        ...mapActions('auth', ['setUsername', 'setIsAuth']), // Map the setUsername action from the 'auth' module
        ...mapActions('permissions', ['fetchPermissions']), // Map the setUsername action from the 'auth' module
        login() {
            const formData = {
                email: this.email,
                password: this.password,
            };

            this.isLoading = true;

            axios
                .post('https://api.gestion-livraison.pro/api/login', formData)
                .then(async response => {
                    // Handle the successful registration response, e.g., show a success message or redirect to another page
                    if (response.status == 200) {
                        let token = response.data.token;
                        let username = response.data.name;

                        localStorage.setItem('token', token);
                        localStorage.setItem('username', username);

                        // Call the setUsername action to set the username in the auth module
                        this.setUsername(username);

                        // Fetch permissions first
                        await this.fetchPermissions();


                        // Use a callback function to ensure the guard is applied before navigation
                        this.$router.push({
                            name: 'dashboard', meta: {
                                requiresAuth: true,
                            },
                        })
                        this.setIsAuth(true);

                        alertify.success("connexion réussie");
                    }
                })
                .catch(error => {
                    // Handle the error, e.g., display an error message
                    console.log(error)
                    alertify.error("verifier les champs svp!!! " + error.response.data.error);
                }).finally(() => {
                    this.isLoading = false;
                });
        },


    },
}
</script>