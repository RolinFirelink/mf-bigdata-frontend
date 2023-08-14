<template>
  <Select :options=""></Select>
  <Select :options=""></Select>
  <Select :options=""></Select>
  <Select :options=""></Select>
  <Select :options=""></Select>
</template>
<script lang="ts">
import { onMounted, ref } from "vue";
import { Select } from "ant-design-vue";
import { listRegionByPid } from "/@/api/sys/Region";
  export defuault{
  setup(){
    const country = ref("");
    const province = ref("");
    const city = ref("");
    const region = ref("")
    const street = ref("");

    return {
      country,
      province,
      city,
      region,
      street
    }
  }
}
</script>
<style lang="less" scoped></style>
