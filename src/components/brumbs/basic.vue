<template>
  <div class="page-title-box">
    <div class="row align-items-center">
      <div class="col-md-8">
        <h6 class="page-title">{{ pageTitle }}</h6>
        <p>{{ description }}</p>
      </div>
      <div class="col-md-4"  v-if="requiredModule" >
        <div class="float-end d-none d-md-block" v-if="checkModule(requiredModule)">
          <div class="dropdown">
            <router-link :to="buttonLink" class="btn btn-primary btn-md">{{ buttonText }}</router-link>
          </div>
        </div>
      </div>
      <div class="col-md-4"  v-else-if="buttonLink" >
        <div class="float-end d-none d-md-block">
          <div class="dropdown">
            <router-link :to="buttonLink" class="btn btn-primary btn-md">{{ buttonText }}</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { checkPermission } from '../../composition/crud.js';

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
    requiredModule: {
      type: String,
    },
    description: {
      type: String
    }
  },
  methods: {
    checkModule(module) {
      const response =  checkPermission(module);
      console.log(response);
      return response;
    },
  },
};
</script>