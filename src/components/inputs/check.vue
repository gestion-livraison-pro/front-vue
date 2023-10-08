<template>
    <div :class="Class_Content">
        <input v-model="model" class="form-check form-switch" type="checkbox" :id="id_check" switch="primary" :checked="is_checked === 1 || is_checked === true" @change="handleCheckboxChange">
        <label class="form-label" :for="id_check" data-on-label="Oui" data-off-label="Non"></label>
    </div>
</template>

<script>
export default {
  props: {
      Class_Content:String,
      id_check: String,
    value: [String, Number],
    is_checked: String,
    error: String
  },
  emits: ['update:value'],
  methods: {
    handleCheckboxChange(event) {
      const newValue = event.target.checked ? 1 : 0;
      this.$emit('update:value', newValue);
      this.$emit('update:is_checked', event.target.checked);

    }
  }
};
</script>