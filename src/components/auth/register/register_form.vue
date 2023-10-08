<template>
    <form class="form-horizontal" @submit.prevent="register">

        <div class="mb-3">
            <label class="form-label" for="username">Name</label>
            <input type="text" v-model="name" class="form-control" id="username" placeholder="Enter username">
        </div>

        <div class="mb-3">
            <label class="form-label" for="username">E-mail</label>
            <input type="email" v-model="email" class="form-control" id="username" placeholder="Enter username">
        </div>

        <div class="mb-3">
            <label class="form-label" for="userpassword">Password</label>
            <input type="password" v-model="password" class="form-control" id="userpassword" placeholder="Enter password">
        </div>

        <div class="row mt-4">
            <div class="col-sm-6">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="customControlInline">
                    <label class="form-check-label" for="customControlInline">
                        Remember me
                    </label>
                </div>
            </div>
            <div class="col-sm-6 text-end">
                <button class="btn btn-primary w-md waves-effect waves-light" type="submit">Log In</button>
            </div>
        </div>

        <div class="mb-0 row">
            <div class="col-12 mt-4 text-center">
                <a href="pages-recoverpw.html" class="text-muted"><i class="mdi mdi-lock"></i> Forgot your password?</a>
            </div>
        </div>
    </form>
</template>

<script>
  import axios, { Axios } from 'axios';
  import { mapActions } from 'vuex';


 //axios.defaults.withCredentials = true;
/*
 const get_csrf_cros = async () => {
  try {
    const response = await axios.get("https://api.gestion-livraison.pro/sanctum/csrf-cookie");
    console.log("CSRF cookie received");
    console.log("Response code:", response.status);
    // Additional code here
  } catch (error) {
    console.error("Error while getting CSRF cookie", error);
  }
};

get_csrf_cros();
*/

export default {
    data() {
        return {
            password: "",
            email: "",
            name: ""

        }
    },
    methods: {
        ...mapActions('auth', ['setUsername',"R_order_status"]), // Map the setUsername action from the 'auth' module
        register() {

            const formData = {
                email: this.email,
                password: this.password,
                name: this.name,

            };

            axios
                .post('https://api.gestion-livraison.pro/api/customer/register', formData)
                .then(response => {
                       // Handle the successful registration response, e.g., show a success message or redirect to another page
                       console.log(response.data.token+response.data.role_id+response.data.name+response.status);
                        let token=response.data.token;
                        let username=response.data.name;
                        let R_order_status=response.data.R_order_status;

                        localStorage.setItem('token',token );
                        localStorage.setItem('username',username );
                        localStorage.setItem('R_order_status',R_order_status );

                       // Call the setUsername action to set the username in the auth module
                        this.setUsername(username);
                        this.setR_order_status(R_order_status);

                        alertify.success("success "+response.status);
                        this.$router.push('/dashboard');
                })
                .catch(error => {
                    // Handle the error, e.g., display an error message
                    if (error.response) {
                        alertify.error("verifier les champs svp!!! "+error.response.data.message);
                        console.log(error.response.data)

                    }

                });
        },

    },
}
</script>