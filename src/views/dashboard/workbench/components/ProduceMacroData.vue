<template>
  <div class="content">
    <div id="produceCharts" ref="charts" style="width: 350px; height: 260px"></div>
  </div>
</template>

<script lang="ts">
  import { onMounted } from "vue";
  import { ECharts, EChartsOption, init } from "echarts";
  import * as echarts from "echarts";
  export default {
    setup() {
      onMounted(() => {
        initCharts();
        // load();
      });
      const initCharts = () => {
        const charEle = document.getElementById("produceCharts") as HTMLElement;
        const charts: ECharts = init(charEle);
        charts.setOption(option);
      };
      // const load = async () => {
      //   const data = await getProduceData({
      //     flag: props.config.flag,
      //     searchType: 0,
      //     count: 5,
      //     endTime: getSpecificMonth(0), //获取当前月份
      //   });
      //   // if (data.length === 2) {
      //   //   option.xAxis.data[0] = props.config.xData0;
      //   //   option.xAxis.data[1] = props.config.xData1;
      //   //   option.series[0].data = props.config.yData2;
      //   //   option.series[1].data = props.config.yData2;
      //   //   option.series[2].data = props.config.yData2;
      //   //   option.series[3].data = props.config.yData;
      //   //   initCharts();
      //   // }

      //   if (data && data.length > 2) {
      //     // data.sort((a, b) => {
      //     //   return a.month - b.month;
      //     // });
      //     // data.forEach((item) => {
      //     //   xData.push(item.month + "月");
      //     //   yData.push(item.yield);
      //     //   yData2.push(item.produceScale / 10000);
      //     // });
      //     option.xAxis.data = props.config.xData0;

      //     option.series[0].data = props.config.yData2;
      //     option.series[1].data = props.config.yData2;
      //     option.series[2].data = props.config.yData2;
      //     option.series[3].data = props.config.yData;
      //     initCharts();
      //   }
      // };

      let xData = ["增城", "连州"];
      let yData = [12, 6];
      let yData2 = [6, 10.3];

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
                name: "生产规模",
                icon: "rect",
              },
            ],
          },
          {
            data: [
              {
                name: "产量",
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
          top: "80",
          left: "50",
          bottom: "70",
          right: "50",
        },

        xAxis: {
          type: "category",
          axisLabel: {
            color: "black",
            interval: 0,
            fontSize: 18,
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
              color: "#195384",
              type: "dotted",
            },
          },
          data: xData,
        },
        yAxis: [
          {
            type: "value",
            name: "万亩",
            min: 0,
            nameTextStyle: {
              color: "black",
              fontSize: 18,
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
            name: "吨",
            min: 0,
            nameTextStyle: {
              color: "red",
              fontSize: 18,
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
            name: "生产规模",
            type: "pictorialBar",
            symbolSize: [20, 10],
            symbolOffset: [0, -6],
            symbolPosition: "end",
            z: 12,
            tooltip: {
              show: false,
            },
            color: "red",
            data: yData2,
          },
          {
            name: "生产规模",
            type: "pictorialBar",
            symbolSize: [20, 10],
            symbolOffset: [0, 7],
            z: 12,
            tooltip: {
              show: false,
            },
            color: "black",
            data: yData2,
          },
          {
            name: "生产规模",
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
            data: yData2,
          },
          {
            name: "产量",
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
            data: yData,
          },
        ],
      };
    },
  };
</script>

<style scoped></style>
