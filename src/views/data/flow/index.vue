<!-- 父项目 -->
<template>
  <iframe
    width="100%"
    height="100%"
    style="border: 0"
    :src="iframeSrc"
    ref="iframeRef"
    id="iframeRef"
    @load="onIfreamLoaded"
  ></iframe>
</template>
<script setup>
  import { ref } from "vue";
  const url = "http://49.234.45.35:8088";
  let iframeSrc = ref(url);
</script>
