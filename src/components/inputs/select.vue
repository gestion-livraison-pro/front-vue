<template>
  <div :class="Class_Content">
    <label v-if="label" class="form-label">{{ label }}</label>

    <select class="form-control" v-model="model" @change="handleSelection">
      <option selected value="">{{ first_option }}</option>
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
  setup(props, { emit }) {
    const options = ref([]);
    const model = ref(props.value);

    onMounted(async () => {
      fetchApi()
    });

    function handleSelection(event) {
      const selectedValue = event.target.value;
      model.value = selectedValue;
      emit('update:value', selectedValue);
    }

    async function fetchApi() {
      options.value = await fetchData(props.apiUrl);
    }

    watch(() => props.value, (newValue) => {
      model.value = newValue;
    });

    watch(() => props.apiUrl, () => {
      fetchApi()
      console.log(props.apiUrl)
    });

    return {
      options,
      model,
      handleSelection,
    };
  },
};
</script>
