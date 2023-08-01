<template>
  <div class="content">
    <div ref="charts" style="width: 400px; height: 350px; margin: -10px auto"></div>
  </div>
</template>

<script setup>
  import { onMounted, getCurrentInstance } from "vue";
  import * as echarts from "echarts";
  const { proxy } = getCurrentInstance();
  var data = [
    {
      name: "兰花",
      value: 80,
    },
    {
      name: "对虾",
      value: 87.8,
    },
    {
      name: "肉鸡",
      value: 71,
    },
    {
      name: "菜心",
      value: 80,
    },
    {
      name: "鸽子",
      value: 66,
    },
    {
      name: "柑橘",
      value: 80,
    },
  ];
  var xData = [],
    yData = [];
  var min = 50;
  data.map(function (a) {
    xData.push(a.name);
    if (a.value === 0) {
      yData.push(a.value + min);
    } else {
      yData.push(a.value);
    }
  });

  onMounted(() => {
    initCharts();
  });

  function initCharts() {
    const charts = echarts.init(proxy.$refs.charts);
    const option = {
      backgroundColor: "rgb(255,255,255,0)",
      color: ["#3398DB"],
      title: {
        show: true,
        text: "各品种供应情况",
        subtext: "2023年",
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "line",
          lineStyle: {
            opacity: 0,
          },
        },
      },
      grid: {
        left: "0%",
        right: "0%",
        bottom: "5%",
        top: "20%",
        height: "80%",
        containLabel: true,
        z: 22,
      },
      xAxis: [
        {
          type: "category",
          gridIndex: 0,
          data: xData,
          axisTick: {
            alignWithLabel: true,
          },
          axisLine: {
            lineStyle: {
              color: "#0c3b71",
            },
          },
          axisLabel: {
            show: true,
            color: "rgb(170,170,170)",
            fontSize: 16,
          },
        },
      ],
      yAxis: [
        {
          type: "value",
          gridIndex: 0,
          splitLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          min: 40,
          max: 100,
          axisLine: {
            lineStyle: {
              color: "#0c3b71",
            },
          },
          axisLabel: {
            color: "rgb(170,170,170)",
            formatter: "{value} ",
          },
        },
        // {
        //   type: "value",
        //   gridIndex: 0,
        //   min: min,
        //   max: 100,
        //   splitNumber: 12,
        //   splitLine: {
        //     show: false,
        //   },
        //   axisLine: {
        //     show: false,
        //   },
        //   axisTick: {
        //     show: false,
        //   },
        //   axisLabel: {
        //     show: false,
        //   },
        //   splitArea: {
        //     show: true,
        //     areaStyle: {
        //       color: ["rgba(250,250,250,0.0)", "rgba(250,250,250,0.05)"],
        //     },
        //   },
        // },
      ],
      series: [
        {
          name: "供应量",
          type: "bar",
          barWidth: "30%",
          xAxisIndex: 0,
          yAxisIndex: 0,
          itemStyle: {
            normal: {
              barBorderRadius: 30,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "#00feff",
                },
                {
                  offset: 0.5,
                  color: "#027eff",
                },
                {
                  offset: 1,
                  color: "#0286ff",
                },
              ]),
            },
          },
          data: yData,
          zlevel: 11,
        },
      ],
    };
    charts.setOption(option);
  }
</script>

<style scoped>
  .content {
    margin-top: 10px;
    height: 100%;
  }
</style>
