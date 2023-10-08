<script setup>
import login_form from '../../components/auth//login/login_form.vue'
</script>

<template>
    <div class="account-pages pt-5">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-8 col-lg-5 col-xl-4">
                    <a href="/" class="d-flex justify-content-center my-4">
                        <img src="https://api.gestion-livraison.pro/public/images/logo-dark-2.png" alt="" height="100"
                            class="auth-logo logo-dark">
                        <img src="https://api.gestion-livraison.pro/public/images/logo-dark2.png" alt="" height="100"
                            class="auth-logo logo-light">
                    </a>
                    <div class="card">
                        <div class="card-body">

                            <div class="d-flex p-3">
                                <div class="text-center">
                                    <h4 class="font-size-18 text-center">Connectez-vous !</h4>
                                </div>
                            </div>
                            <div class="p-3">
                                <login_form />
                            </div>

                        </div>
                    </div>


                </div>
            </div>
        </div>
    </div>
</template>