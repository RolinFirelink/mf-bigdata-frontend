<template>
  <div class="content">
    <div ref="charts" style="width: 400px; height: 350px; margin: -10px auto"></div>
  </div>
</template>

<script setup>
  import { onMounted, getCurrentInstance } from "vue";
  import * as echarts from "echarts";
  const { proxy } = getCurrentInstance();
  let data = [
    {
      value: 3661,
      name: "兰花",
    },
    {
      value: 5713,
      name: "菜心",
    },
    {
      value: 9938,
      name: "肉鸡",
    },
    {
      value: 17623,
      name: "柑橘",
    },
    {
      value: 3299,
      name: "对虾",
    },
  ];
  onMounted(() => {
    initCharts();
  });

  function initCharts() {
    const charts = echarts.init(proxy.$refs.charts);
    const option = {
      backgroundColor: "#fff",
      title: {
        text: "各品种销占比",
        subtext: "2023年",
        // x: "center",
        // y: "center",
        // textStyle: {
        //   fontWeight: "normal",
        //   fontSize: 16,
        // },
      },
      tooltip: {
        show: true,
        trigger: "item",
        formatter: "{b}: {c} ({d}%)",
      },
      legend: {
        orient: "horizontal",
        bottom: "0%",
        data: ["兰花", "菜心", "肉鸡", "柑橘", "对虾"],
      },
      series: [
        {
          type: "pie",
          selectedMode: "single",
          radius: ["20%", "48%"],
          color: ["#86D560", "#AF89D6", "#59ADF3", "#FF999A", "#FFCC67"],

          label: {
            normal: {
              position: "inner",
              formatter: "{d}%",

              textStyle: {
                color: "#fff",
                fontWeight: "bold",
                fontSize: 14,
              },
            },
          },
          labelLine: {
            normal: {
              show: false,
            },
          },
          data: data,
        },
        {
          type: "pie",
          radius: ["48%", "73%"],
          itemStyle: {
            normal: {
              color: "#F2F2F2",
            },
            emphasis: {
              color: "#ADADAD",
            },
          },
          label: {
            normal: {
              position: "inner",
              formatter: "{c}吨",
              textStyle: {
                color: "#777777",
                fontWeight: "bold",
                fontSize: 14,
              },
            },
          },
          data: data,
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
