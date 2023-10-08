<template>
    <div class="page-title-box">
        <div class="row align-items-center">
            <div class="col-md-8">
                <h6 class="page-title">{{ pageTitle }}</h6>
            </div>
            <div class="col-md-4">
                <div class="float-end d-none d-md-block">
                        <button type="button" class="btn btn-primary waves-effect waves-light btn-md mx-2" :data-bs-toggle="toggle" :data-bs-target="target">{{ modalText }}</button>
                        <router-link v-if="buttonText" :to="buttonLink" class="btn btn-primary btn-md mx-2">{{ buttonText }}</router-link>

  
                </div>
            </div>
        </div>
    </div>
  </template>
  
  
  <script>
  export default {
  props: {
    pageTitle: {
      type: String,
      required: true,
    },
    target: {
      type: String,
      required: true,
    },
    toggle: {
      type: String,
      required: true,
    },
    modalText: {
      type: String,
      required: true,
    },
    buttonText: {
      type: String,
      required: true,
    },
    buttonLink: {
      type: String,
      required: true,
    },
   
  },
  };
  </script>