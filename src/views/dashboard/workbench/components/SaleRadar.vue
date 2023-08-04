<template>
  <Card title="供销统计" v-bind="$attrs" :loading="loading" style="margin-top: 20px">
    <CardGrid class="!md:w-1/3 !w-full">
      <div :style="{ width, height }" class="flex mt-2 h-10 text-secondary space-between">
        <SaleEchart />
      </div>
    </CardGrid>
    <CardGrid class="!md:w-1/3 !w-full">
      <div :style="{ width, height }" class="flex mt-2 h-10 text-secondary space-between">
        <SupplyEchart />
      </div>
    </CardGrid>
    <CardGrid class="!md:w-1/3 !w-full">
      <div ref="chartRef" :style="{ width, height }" class="flex mt-2 h-10 space-between"></div>
    </CardGrid>
  </Card>
</template>
<script lang="ts" setup>
  import { Ref, ref, watch } from "vue";
  import { Card, CardGrid } from "ant-design-vue";
  import { useECharts } from "/@/hooks/web/UseECharts";
  import SaleEchart from "./SaleEchart.vue";
  import SupplyEchart from "./SupplyEchart.vue";

  const props = defineProps({
    loading: Boolean,
    width: {
      type: String as PropType<string>,
      default: "33.3%",
    },
    height: {
      type: String as PropType<string>,
      default: "350px",
    },
  });

  const chartRef = ref<HTMLDivElement | null>(null);
  const { setOptions } = useECharts(chartRef as Ref<HTMLDivElement>);
  watch(
    () => props.loading,
    () => {
      if (props.loading) {
        return;
      }
      setOptions({
        title: {
          show: true,
          text: "销售热度top5城市",
        },
        legend: {
          bottom: 0,
          data: ["销售热度"],
        },
        tooltip: {},
        radar: {
          radius: "60%",
          splitNumber: 8,
          indicator: [
            {
              name: "广州",
            },
            {
              name: "北京",
            },
            {
              name: "上海",
            },
            {
              name: "长沙",
            },
            {
              name: "深圳",
            },
            {
              name: "天津",
            },
          ],
        },
        series: [
          {
            type: "radar",
            symbolSize: 0,
            areaStyle: {
              shadowBlur: 0,
              shadowColor: "rgba(0,0,0,.2)",
              shadowOffsetX: 0,
              shadowOffsetY: 10,
              opacity: 1,
            },
            data: [
              {
                value: [70, 75, 70, 76, 20, 85],
                name: "销售热度",
                itemStyle: {
                  color: "#67e0e3",
                },
              },
            ],
          },
        ],
      });
    },
    { immediate: true },
  );
</script>
