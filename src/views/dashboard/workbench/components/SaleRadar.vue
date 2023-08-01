<template>
  <Card title="供销统计" :loading="loading" style="margin-top: 20px">
    <div class="flex">
      <div :style="{ width, height }">
        <SaleEchart />
      </div>
      <div :style="{ width, height }">
        <SupplyEchart />
      </div>
      <div ref="chartRef" :style="{ width, height }"></div>
    </div>
  </Card>
</template>
<script lang="ts" setup>
  import { Ref, ref, watch } from "vue";
  import { Card } from "ant-design-vue";
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
