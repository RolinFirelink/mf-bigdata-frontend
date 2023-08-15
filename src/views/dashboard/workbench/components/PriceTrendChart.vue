<template>
  <div class="content">
    <div id="charts" ref="charts" style="width: 350px; height: 250px"> </div>
  </div>
</template>

<script lang="ts">
  import { ref, onMounted } from "vue";
  import { ECharts, EChartsOption, init } from "echarts";
  import { getProductPriceTrend } from "/@/api/price/ProductPrice";
  import { ProductPriceTrend } from "/@/api/price/model/ProductPriceModel";
  export default {
    setup() {
      const startTime = ref("");
      const endTime = ref("");
      const flag = ref(1);
      const unit = ref("元/斤");
      let data: Array<ProductPriceTrend> = [];

      onMounted(() => {
        initCharts();
        load();
      });
      //请求数据
      const load = async () => {
        const res = await getProductPriceTrend({
          flag: flag.value,
          startTime: startTime.value,
          endTime: endTime.value,
        });
        if (res) {
          //提取响应中需要的数据
          data = res.map((item) => {
            return {
              time: item.time.slice(-5),
              maxPrice: item.maxPrice,
              minPrice: item.minPrice,
            };
          });
          //把日期字符串转化为日期对象按照时间顺序排
          data.sort((a, b) => {
            const [monthA, dayA] = a.time.split("-");
            const [monthB, dayB] = b.time.split("-");
            const dateA: Date = new Date(
              new Date().getFullYear(),
              parseInt(monthA) - 1,
              parseInt(dayA),
            );
            const dateB: Date = new Date(
              new Date().getFullYear(),
              parseInt(monthB) - 1,
              parseInt(dayB),
            );
            return dateA.getTime() - dateB.getTime();
          });
          initCharts();
        }
      };
      const timeChange = (startDate, endDate) => {
        startTime.value = startDate;
        endTime.value = endDate;
        load();
      };
      function initCharts() {
        const charEle = document.getElementById("charts") as HTMLElement;
        const charts: ECharts = init(charEle);
        const option: EChartsOption = {
          tooltip: {
            trigger: "axis",
            formatter: function (params) {
              let tooltip =
                '<div style=" font-weight: bold; display: inline-block;">' +
                params[0].name +
                "</div><br/>";
              params.forEach((param) => {
                tooltip +=
                  '<div style="display:flex;align-items:center; margin-top: 5px;">' +
                  '<span style="background-color:' +
                  param.color +
                  ';width:8px;height:8px;border-radius:50%;margin-right:5px;"></span>' +
                  "<span>" +
                  param.seriesName +
                  "：" +
                  "</span>" +
                  '<span style="font-weight: bold;">' +
                  param.value +
                  "</span>" +
                  unit.value +
                  "</div>";
              });
              return tooltip;
            },
          },
          grid: {
            borderWidth: 0,
            bottom: 95,
          },
          legend: {
            textStyle: {
              color: "#000",
              fontSize: 16,
            },
            data: ["最高价格", "最低价格"],
          },
          xAxis: [
            {
              type: "category",
              axisLine: {
                lineStyle: {
                  color: "rgba(204,187,225,0.5)",
                },
              },
              axisLabel: {
                color: "#000",
                fontSize: 16,
              },
              splitLine: {
                show: false,
              },
              axisTick: {
                show: false,
              },
              data: data.map((item) => {
                return item.time;
              }),
            },
          ],
          yAxis: [
            {
              type: "value",
              splitLine: {
                show: true,
              },
              axisLabel: {
                interval: 0,
                color: "#000",
                fontSize: 16,
              },
              axisLine: {
                show: false,
                lineStyle: {
                  color: "#000",
                  width: 1,
                },
              },
            },
          ],
          series: [
            {
              name: "最高价格",
              type: "line",
              symbolSize: 10,
              symbol: "circle",
              itemStyle: {
                color: "red",
              },
              //标记最值
              markPoint: {
                label: {},
                data: [
                  {
                    type: "max",
                    name: "最大值",
                  },
                  {
                    type: "min",
                    name: "最小值",
                  },
                ],
              },
              data: data.map((item) => {
                return item.maxPrice;
              }),
            },
            {
              name: "最低价格",
              type: "line",
              symbolSize: 10,
              symbol: "circle",
              itemStyle: {
                color: "red",
              },
              markPoint: {
                label: {},
                data: [
                  {
                    type: "max",
                    name: "最大值",
                  },
                  {
                    type: "min",
                    name: "最小值",
                  },
                ],
              },
              data: data.map((item) => {
                return item.minPrice;
              }),
            },
          ],
        };
        charts.setOption(option);
      }
    },
  };
</script>

<style scoped></style>
