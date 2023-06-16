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
  const url = "http://49.234.45.35:3000";
  // const url = "http://localhost:3000";
  import { useUserStore } from "/@/store/modules/User";
  //注册ref动态数据绑定 onMounted 等于vue2 mounted生命周期
  import { getCurrentInstance, ref } from "vue";
  const { proxy } = getCurrentInstance();
  const userStore = useUserStore();
  const token = userStore.getToken;
  let iframeSrc = ref(url + "/#/project/items");
  const onIfreamLoaded = () => {
    const iframeWindows = proxy.$refs.iframeRef.contentWindow;
    const message = token;
    console.log("发送");
    setTimeout(() => {
      iframeWindows.postMessage(message, url);
    }, 1000);
  };
</script>
