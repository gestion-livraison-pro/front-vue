<template>
  <div class="page-title-box">
      <div class="row align-items-center">
          <div class="col-md-8">
              <h6 class="page-title">{{ pageTitle }}</h6>
          </div>
          <div class="col-md-4">
              <div class="float-end d-none d-md-block">
                      <router-link :to="buttonLink" class="btn btn-primary btn-md mx-2">{{ buttonText }}</router-link>
                      <router-link :to="buttonLink2" class="btn btn-primary btn-md mx-2">{{ buttonText2 }}</router-link>

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
  buttonText: {
    type: String,
    required: true,
  },
  buttonLink: {
    type: String,
    required: true,
  },
  buttonText2: {
    type: String,
    required: true,
  },
  buttonLink2: {
    type: String,
    required: true,
  },
},
};
</script>