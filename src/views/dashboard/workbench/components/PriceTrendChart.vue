<template>
  <div class="content" style="width: 100%">
    <Select
      @change="selectProduct"
      :value="flag"
      style="
        color: black;
        border: 1px solid black;
        border-radius: 5px;
        width: 80%;
        margin-left: 10%;
      "
    >
      <Option v-for="item in productList" :value="item.value" :key="item.value">{{
        item.name
      }}</Option>
    </Select>
    <div id="charts" ref="charts" style="width: 300%; height: 250px; margin: 0 auto"> </div>
  </div>
</template>

<script lang="ts">
  import { ref, onMounted } from "vue";
  import { ECharts, EChartsOption, init } from "echarts";
  import { getProductPriceTrend } from "/@/api/price/ProductPrice";
  import { ProductPriceTrend } from "/@/api/price/model/ProductPriceModel";
  export default {
    setup() {
      const productList = ref([
        { name: "柑橘", value: 2 },
        { name: "兰花", value: 3 },
        { name: "金鲳鱼", value: 8 },
        { name: "菜心", value: 5 },
        { name: "肉鸡", value: 1 },
        { name: "对虾", value: 4 },
      ]);
      const startTime = ref("");
      const endTime = ref("");
      const flag = ref(2);
      let unit = "元/斤";
      let data: Array<ProductPriceTrend> = [];

      onMounted(() => {
        initCharts();
        load();
      });
      //请求数据
      const load = async () => {
        const productMap = new Map();
        productMap.set(1, { unit: "元/斤" });
        productMap.set(2, { unit: "元/斤" });
        productMap.set(3, { unit: "元/株" });
        productMap.set(4, { unit: "元/斤" });
        productMap.set(5, { unit: "元/斤" });
        productMap.set(8, { unit: "元/斤" });
        unit = productMap.get(Number(flag.value)).unit;
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
              avgPrice: item.avgPrice,
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
      const selectProduct = (event) => {
        flag.value = event.target.value;
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
                  unit +
                  "</div>";
              });
              return tooltip;
            },
          },
          grid: {
            borderWidth: 0,
            bottom: 90,
            top: 40,
          },
          legend: {
            textStyle: {
              color: "#000",
              fontSize: 14,
            },
            data: ["最高价格", "平均价格", "最低价格"],
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
                fontSize: 14,
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
                fontSize: 14,
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
                    symbolSize: 40,
                  },
                ],
              },
              data: data.map((item) => {
                return item.maxPrice;
              }),
            },
            {
              name: "平均价格",
              type: "line",
              symbol: "circle",
              itemStyle: {
                color: "blue",
              },
              //标记最值
              markPoint: {
                label: {},
                data: [
                  {
                    type: "max",
                    name: "最大值",
                    symbolSize: 40,
                  },
                  {
                    type: "min",
                    name: "最小值",
                    symbolSize: 40,
                  },
                ],
              },
              data: data.map((item) => {
                return item.avgPrice.toFixed(2);
              }),
            },
            {
              name: "最低价格",
              type: "line",
              symbol: "line",
              itemStyle: {
                color: "green",
              },
              markPoint: {
                label: {},
                data: [
                  {
                    type: "min",
                    name: "最小值",
                    symbolSize: 40,
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

        window.addEventListener("resize", function () {
          charts.resize();
        });
      }
      return { flag, productList, selectProduct };
    },
  };
</script>

<style scoped></style>
