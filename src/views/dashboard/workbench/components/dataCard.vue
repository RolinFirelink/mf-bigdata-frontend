<template>
  <Card title="数据统计" v-bind="$attrs" style="margin-top: 20px">
    <CardGrid v-for="item in items" :key="item.id" class="!md:w-1/4 !w-full">
      <div class="flex mt-2 h-10 text-secondary">
        <h2 class="ctitle">{{ item.title }}</h2>
      </div>
      <div class="flex justify-between text-secondary">
        <span>{{ item.count }}</span>
      </div>
    </CardGrid>
  </Card>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import { Card, CardGrid } from "ant-design-vue";
  import { dataItems } from "./Data";

  export default defineComponent({
    components: { Card, CardGrid },
    setup() {
      return { items: dataItems };
    },
  });
</script>

<style scoped>
  .ctitle {
    font-size: 16px;
    color: black;
  }
</style>
