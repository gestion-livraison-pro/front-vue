<template>
    <div :class="Class_Content">
      <label class="form-label">{{ label }}</label>
      <textarea class="form-control"  :cols="Cols" :rows="rows" :value="value" :placeholder="placeholder" @input="$emit('update:value', $event.target.value)"></textarea>
      <span v-if="error" class="error">{{ error }}</span>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      Class_Content:String,
      Cols:Number,
      Rows:Number,
      label: String,
      value: [String, Number],
      type: {
        type: String,
        default: 'text'
      },
      placeholder: String,
      error: String
    }
  };
  </script>