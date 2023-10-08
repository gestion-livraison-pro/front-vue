<template>
    <div>
      <qrcode-reader @decode="onScanResult" @error="onScanError" />
    </div>
  </template>
  
  <script>
  import Vue from 'vue';
  import QrcodeReader from 'vue-qrcode-reader';
  
  Vue.use(QrcodeReader);
  
  export default {
    // ... component options ...
    methods: {
      onScanResult(result) {
        // Handle the scanned result here
        // For example, you can change the order status based on the scanned result
        alert(result)
      },
      onScanError(error) {
        // Handle the scan error here
        alert(error)

      },
    },
  };
  </script>
  