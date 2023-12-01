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
    <div id="mapChart" ref="charts" style="width: 380px; height: 220px"></div>
  </div>
</template>

<script lang="ts">
  import { onMounted, ref } from "vue";
  import { ECharts, EChartsOption, init } from "echarts";
  import * as echarts from "echarts";
  import guangdong from "/@/assets/mapData/guangdong.json";
  import { getCityDatas } from "/@/api/statistics/ProductionData";
  //引入城市坐标数据
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
      const productMap = new Map();
      productMap.set(1, { unit: "万只" });
      productMap.set(2, { unit: "吨" });
      productMap.set(3, { unit: "万株" });
      productMap.set(4, { unit: "吨" });
      productMap.set(5, { unit: "吨" });
      productMap.set(8, { unit: "吨" });
      let unit = "吨";

      //tooltip框数据
      let pointdataGD: any = [];
      const flag = ref(2);
      let maxValue = 0;
      onMounted(() => {
        initCharts();
        load();
      });
      const selectProduct = (event) => {
        flag.value = event.target.value;
        load();
      };
      //请求数据
      const load = async () => {
        unit = productMap.get(Number(flag.value)).unit;
        const data = await getCityDatas({
          flag: flag.value,
        });
        if (data) {
          pointdataGD = data.map((item) => {
            maxValue = Math.max(item.value, maxValue);
            return { name: item.city, value: item.value };
          });
          initCharts();
        }
      };

      function initCharts() {
        const charEle = document.getElementById("mapChart") as HTMLElement;
        const charts: ECharts = init(charEle);
        function opt(max, min, vmp, unit) {
          let optn: EChartsOption = {
            layoutCenter: ["60%", "50%"], //位置
            layoutSize: "120%", //大小
            aspectScale: 1.1, //宽高比
            visualMap: {
              min: min,
              max: max,
              text: [vmp, "单位：" + unit],
              realtime: false,
              calculable: true,
              inRange: {
                color: ["#afe761", "#4ea220", "#057600"],
              },
              textStyle: {
                fontFamily: "Arial, sans-serif",
                fontSize: 13,
              },
              bottom: "10%",
            },
            tooltip: {
              formatter: function (params) {
                if (params.data) {
                  return params.name + ": " + params.value + unit;
                }
                return "";
              },
            },
            series: [
              {
                type: "map",
                map: "广东",
                // 设置虚拟数据
                data: pointdataGD,
                //series[] 类型:scatter 数据
                tooltip: {
                  show: true,
                },
                roam: true,
                label: {
                  show: true,
                },
              },
            ],
          };
          return optn;
        }
        var option: EChartsOption = opt(maxValue || 1350, 0, "城市生产规模", unit);
        echarts.registerMap("广东", guangdong);
        charts.setOption(option, true);
      }
      return { flag, productList, selectProduct };
    },
  };
</script>
