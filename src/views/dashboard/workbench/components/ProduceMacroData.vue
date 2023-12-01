<template>
  <div class="content">
    <Select
      @change="selectProduct"
      :value="flag"
      style="
        color: black;
        border: 1px solid black;
        border-radius: 5px;
        width: 30%;
        margin-left: 10%;
      "
    >
      <Option v-for="item in productList" :value="item.value" :key="item.value">{{
        item.name
      }}</Option>
    </Select>
    <div id="produceCharts" ref="charts" style="width: 700%; height: 260px"></div>
  </div>
</template>

<script lang="ts">
  import { onMounted, ref } from "vue";
  import { ECharts, EChartsOption, init } from "echarts";
  import { getScaleOfProduction } from "/@/api/statistics/ProductionData";
  import * as echarts from "echarts";
  export default {
    setup() {
      let xData: any = ["增城", "连州"];
      let yData: any = [12, 6];
      let yData2: any = [6, 10.3];
      const productList = ref([
        { name: "柑橘", value: 2 },
        { name: "兰花", value: 3 },
        { name: "金鲳鱼", value: 8 },
        { name: "菜心", value: 5 },
        { name: "肉鸡", value: 1 },
        { name: "对虾", value: 4 },
      ]);
      let value1: any = { name: "生产规模", unit: "万亩" };
      let value2: any = { name: "产量", unit: "万吨" };
      const productMap = new Map();
      productMap.set(1, {
        value1: { column: "value", name: "出栏量", unit: "万只" },
        value2: { column: "value2", name: "存栏量", unit: "万只" },
      });
      productMap.set(2, {
        value1: { column: "area", name: "生产规模", unit: "万亩" },
        value2: { column: "value", name: "产量", unit: "万吨" },
      });
      productMap.set(3, {
        value1: { column: "area", name: "生产规模", unit: "万亩" },
        value2: { column: "value", name: "产量", unit: "万株" },
      });
      productMap.set(4, {
        value1: { column: "area", name: "养殖面积", unit: "万亩" },
        value2: { column: "value", name: "产量", unit: "万株" },
      });
      productMap.set(5, {
        value1: { column: "area", name: "生产规模", unit: "万亩" },
        value2: { column: "value", name: "产量", unit: "万吨" },
      });
      productMap.set(8, {
        value1: { column: "value", name: "产量", unit: "万吨" },
        value2: { column: "money", name: "年产值", unit: "亿元" },
      });
      onMounted(() => {
        load();
      });
      const initCharts = () => {
        const charEle = document.getElementById("produceCharts") as HTMLElement;
        const charts: ECharts = init(charEle);
        const option: EChartsOption = {
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "shadow",
            },
          },
          legend: [
            {
              top: "0",
              left: "20%",
              textStyle: {
                color: "black",
                fontSize: 15,
                fontFamily: "微软雅黑",
              },
              itemWidth: 15,
              itemHeight: 15,
              data: [
                {
                  name: value1.name,
                  icon: "rect",
                },
              ],
            },
            {
              data: [
                {
                  name: value2.name,
                },
              ],
              itemWidth: 20,
              itemHeight: 10,
              top: "0",
              left: "60%",
              textStyle: {
                color: "black",
                fontSize: 15,
              },
            },
          ],
          grid: {
            top: "45",
            left: "70",
            bottom: "90",
            right: "70",
          },

          xAxis: {
            type: "category",
            axisLabel: {
              color: "black",
              interval: 0,
              fontSize: 14,
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: "black",
              },
            },
            axisTick: {
              show: false,
            },
            splitLine: {
              show: false,
              lineStyle: {
                color: "#FFB300",
                type: "dotted",
              },
            },
            data: xData,
          },
          yAxis: [
            {
              type: "value",
              name: value1.unit,
              min: 0,
              nameTextStyle: {
                color: "black",
                fontSize: 14,
              },
              axisLine: {
                lineStyle: {
                  color: "#0a3e98",
                },
              },
              axisTick: {
                show: false,
              },
              splitLine: {
                show: true,
                lineStyle: {
                  color: "#0a3e98",
                  type: "dotted",
                },
              },
              axisLabel: {
                formatter: "{value}",
                fontSize: "16",
              },
            },
            {
              type: "value",
              name: value2.unit,
              min: 0,
              nameTextStyle: {
                color: "red",
                fontSize: 14,
              },
              axisLine: {
                lineStyle: {
                  color: "#0a3e98",
                },
              },
              axisTick: {
                show: false,
              },
              splitLine: {
                show: true,
                lineStyle: {
                  color: "#0a3e98",
                  type: "dotted",
                },
              },
              axisLabel: {
                formatter: "{value}",
                fontSize: "16",
                color: "red",
              },
            },
          ],
          series: [
            {
              name: value1.name,
              type: "pictorialBar",
              symbolSize: [20, 10],
              symbolOffset: [0, -6],
              symbolPosition: "end",
              z: 12,
              tooltip: {
                show: false,
              },
              color: "red",
              data: yData,
            },
            {
              name: value1.name,
              type: "pictorialBar",
              symbolSize: [20, 10],
              symbolOffset: [0, 7],
              z: 12,
              tooltip: {
                show: false,
              },
              color: "black",
              data: yData,
            },
            {
              name: value1.name,
              type: "bar",
              barWidth: "20",
              barGap: "10%",
              itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 0.7, [
                  {
                    offset: 0,
                    color: "blue",
                  },
                  {
                    offset: 1,
                    color: "black",
                  },
                ]),
                opacity: 1,
              },
              data: yData,
            },
            {
              name: value2.name,
              type: "line",
              yAxisIndex: 1,
              symbol: "circle", // 默认是空心圆（中间是白色的），改成实心圆
              lineStyle: {
                width: 3,
                color: "yellow",
              },
              itemStyle: {
                color: "#FFB300",
                borderColor: "#FF8300",
                borderWidth: 2,
              },
              symbolSize: 8, //设定实心点的大小
              areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "#29a5d530",
                  },
                  {
                    offset: 0.6,
                    color: "#29a5d520",
                  },
                  {
                    offset: 1,
                    color: "#29a5d510",
                  },
                ]),
              },
              data: yData2,
            },
          ],
        };
        charts.setOption(option);
        window.addEventListener("resize", function () {
          charts.resize();
        });
      };
      const flag = ref(2);
      const load = async () => {
        value1 = productMap.get(Number(flag.value)).value1;
        value2 = productMap.get(Number(flag.value)).value2;
        const data = await getScaleOfProduction({
          flag: flag.value,
          count: 5,
        });
        if (data) {
          xData = data.map((item) => {
            return item.city;
          });
          yData = data.map((item) => {
            return item[value1.column];
          });
          yData2 = data.map((item) => {
            return item[value2.column];
          });
          initCharts();
        }
      };

      const selectProduct = (event) => {
        flag.value = event.target.value;
        load();
      };
      return { productList, flag, selectProduct };
    },
  };
</script>

<style scoped></style>
