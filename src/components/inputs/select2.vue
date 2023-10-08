<template>
  <div :class="Class_Content">
    <label class="form-label">{{ label }}</label>

    <select
      v-if="!multi"
      class="form-control js-example-basic-single"
      ref="selectElement"
      :value="model"
    >
      <option value="" selected>{{ first_option }}</option>
      <option v-for="option in options" :value="option.id" :key="option.id">
        {{ option[fieldName] }}
      </option>
    </select>

    <select
      v-else
      class="form-control js-example-basic-single"
      ref="selectElement"
      multiple="multiple"
      :value="model"
      @input="handleSelection"
    >
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
    multi: Boolean,
    value: {
      type: [String, Number, Array],
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
      model: this.multi ? [] : '',
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
      const selectedValues = Array.from(this.$refs.selectElement.selectedOptions, option => option.value);
      this.model = this.multi ? selectedValues : selectedValues[0]; // Use the first selected value if not multi
      this.$emit('update:value', this.model); // Emit the selected values as an array
      console.log(this.model  )
    },
  },
  watch: {
    apiUrl() {
      this.fetchDataFromApi();
    },
    value(newValue) {
      this.model = this.multi ? newValue : newValue[0]; // Use the first value if not multi
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