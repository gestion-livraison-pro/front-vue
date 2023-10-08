<script setup>
import register_form from '../../components/auth/register/register_form.vue'
</script>

<template>
     <div class="account-pages mt-5 pt-5">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-8 col-lg-5 col-xl-4">
                        <a href="/" class="d-flex justify-content-center my-4">
                        <img src="https://onzmedia.com/assets/images/new/logo/logo1.svg" alt="" height="40"
                            class="auth-logo logo-dark">
                        <img src="https://onzmedia.com/assets/images/new/logo/logo1.svg" alt="" height="40"
                            class="auth-logo logo-light">
                    </a>
                        <div class="card">
                            <div class="card-body">
                                
                                <div class="d-flex p-3">
                                    <div>
                                        
                                    </div>
                                    <div class="ms-auto text-end">
                                        <h4 class="font-size-18">Register</h4>
                                        <p class="text-muted mb-0">Register</p>
                                    </div>
                                </div>
                                <div class="p-3">
                                    <register_form />
                                </div>
    
                            </div>
                        </div>
                      
    
                    </div>
                </div>
            </div>
        </div>
</template>