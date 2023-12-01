<template>
  <Card title="数据统计" v-bind="$attrs" style="margin-top: 20px">
    <CardGrid v-for="(item, index) in datas" :key="index" class="!md:w-1/3 !w-full">
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
  import { defineComponent, onMounted, ref } from "vue";
  import { Card, CardGrid } from "ant-design-vue";
  import { getStatisticsInfo } from "/@/api/statistics/statistics";
  export default defineComponent({
    components: { Card, CardGrid },
    setup() {
      const datas: any = ref([]);
      onMounted(() => {
        load();
      });
      async function load() {
        const data = await getStatisticsInfo();
        datas.value = data;
      }
      return { datas };
    },
  });
</script>

<style scoped>
  .ctitle {
    font-size: 16px;
    color: black;
  }
</style>
