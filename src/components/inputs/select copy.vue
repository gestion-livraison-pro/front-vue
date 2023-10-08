<template>
  <div :class="Class_Content">
    <label class="form-label">{{ label }}</label>

    <select class="form-control js-example-basic-single" ref="selectElement">
      <option value="" selected>{{ first_option }}</option>
      <option v-for="option in options" :value="option.id" :key="option.id">
        {{ option[fieldName] }}
      </option>
    </select>

    <span v-if="error" class="error">{{ error }}</span>
  </div>
</template>

<script>
import { ref, onMounted, watch } from 'vue';
import { fetchData } from '../../composition/crud.js';

export default {
  props: {
    first_option: String,
    Class_Content: String,
    label: String,
    value: {
      type: [String, Number],
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
      model: this.value,
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
      const selectedValue = this.$refs.selectElement.value;
      this.model = selectedValue;
      this.$emit('update:value', selectedValue);
    },
  },
  watch: {
    apiUrl() {
      this.fetchDataFromApi();
    },
    value(newValue) {
      this.model = newValue;
    },
  },
  mounted() {
    this.fetchDataFromApi();

    // Initialize Select2 after the component is mounted
    $(this.$refs.selectElement).select2();

    // Watch for changes in the Select2 value and call handleSelection when an option is selected
    $(this.$refs.selectElement).on('change', this.handleSelection);
  },
};
</script>
