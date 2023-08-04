<template>
  <PageWrapper>
    <template #headerContent> <WorkbenchHeader /> </template>
    <div class="lg:flex">
      <div class="lg:w-10/10 w-full !mr-4 enter-y">
        <DataCard :loading="loading" class="enter-y" />
        <SaleRadar :loading="loading" class="enter-y" />
        <CloudMap class="!my-4 enter-y" />
      </div>
    </div>
  </PageWrapper>
</template>
<script lang="ts" setup>
  import { ref } from "vue";
  import { PageWrapper } from "/@/components/general/Page";
  import WorkbenchHeader from "./components/WorkbenchHeader.vue";
  import DataCard from "./components/dataCard.vue";
  import CloudMap from "./components/CloudMap.vue";
  import SaleRadar from "./components/SaleRadar.vue";
  const loading = ref(true);

  setTimeout(() => {
    loading.value = false;
  }, 1500);
</script>
