<template>
    <div class="page-title-box">
        <div class="row align-items-center">
            <div class="col-md-8">
                <h6 class="page-title">{{ pageTitle }}</h6>
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
  },
};
</script>