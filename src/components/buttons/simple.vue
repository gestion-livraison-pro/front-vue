<template>
    <div :class="Class_Content">
        <button class="btn btn-primary w-100"><i v-if="icon" :class="icon"></i> {{ btn_text }}</button>
    </div>
</template>
  
<script>
export default {
    props: {
        Class_Content: String,
        btn_text: String,
        icon: String
    }
};
</script>