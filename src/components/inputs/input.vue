<template>
    <div :class="Class_Content">
      <label v-if="label" class="form-label">{{ label }}</label>
      <input class="form-control" :value="value" :type="type" :placeholder="placeholder" @input="$emit('update:value', $event.target.value)" />
      <span v-if="error" class="error">{{ error }}</span>
    </div>
  </template>
  
  <script>
  export default {
    props: {
        Class_Content:String,
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