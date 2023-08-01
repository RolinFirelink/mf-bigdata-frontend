<template>
  <PageWrapper>
    <template #headerContent> <WorkbenchHeader /> </template>
    <div class="lg:flex">
      <div class="lg w-10/10 w-full enter-y">
        <SaleRadar :loading="loading" class="enter-y" />
      </div>
    </div>
  </PageWrapper>
</template>
<script lang="ts" setup>
  import { ref } from "vue";
  // import { Card } from "ant-design-vue";
  import { PageWrapper } from "/@/components/general/Page";
  import WorkbenchHeader from "./components/WorkbenchHeader.vue";
  // import ProjectCard from "./components/ProjectCard.vue";
  // import EchartsCard from "./components/EchartsCard.vue";
  // import QuickNav from "./components/QuickNav.vue";
  // import DynamicInfo from "./components/DynamicInfo.vue";
  import SaleRadar from "./components/SaleRadar.vue";

  const loading = ref(true);

  setTimeout(() => {
    loading.value = false;
  }, 1500);
</script>
