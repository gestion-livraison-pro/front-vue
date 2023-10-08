<template>
  <div :class="Class_Content">
    <label class="form-label">{{ label }}</label>

    <select class="form-control js-example-basic-multiple" ref="selectElement" multiple>
      <option value="" selected>{{ first_option }}</option>
      <option v-for="option in options" :value="option.id" :key="option.id">
        {{ option[fieldName] }}
      </option>
    </select>

    <span v-if="error" class="error">{{ error }}</span>
  </div>
</template>

<style>
.select2{
  width: 100%!IMPORTANT;
}

.select2-container {
    box-sizing: border-box;
    display: inline-block;
    margin: 0;
    position: relative;
    vertical-align: middle;
}

</style>

<script>
import { ref, onMounted, watch } from 'vue';
import { fetchData } from '../../composition/crud.js';

export default {
  props: {
    first_option: String,
    Class_Content: String,
    label: String,
    value: {
      type: [Array, String, Number],
      required: true
    },
    error: String,
    apiUrl: {
      type: String,
      required: true
    },
    fieldName: {
      type: String,
      required: true
    },
  },
  emits: ['update:value'],
  data() {
    return {
      options: [],
      model: Array.isArray(this.value) ? [...this.value] : [this.value], // Ensure model is an array
    };
  },
  methods: {
    async fetchDataFromApi() {
      if (this.apiUrl) {
        this.options = await fetchData(this.apiUrl);
        console.log(this.options);
      }
    },
    handleSelection() {
      const selectedValues = $(this.$refs.selectElement).val();
      this.model = selectedValues;
      this.$emit('update:value', selectedValues);
    },
  },
  watch: {
    apiUrl() {
      this.fetchDataFromApi();
    },
    value(newValue) {
      this.model = Array.isArray(newValue) ? [...newValue] : [newValue];
    },
  },
  mounted() {
    this.fetchDataFromApi();

    // Initialize Select2 with multiple selections
    $(this.$refs.selectElement).select2();

    // Watch for changes in the Select2 value and call handleSelection when selections change
    $(this.$refs.selectElement).on('change', this.handleSelection);
  },
};
</script>
