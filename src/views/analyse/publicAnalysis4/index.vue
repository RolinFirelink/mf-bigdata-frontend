<template>
  <div class="container">
    <Form>
      <div style="display: flex">
        <FormItem label="发布时间" style="margin-right: 40px">
          <RangePicker valueFormat="YYYY-MM-DD" @change="selectDate" :ranges="ranges" />
        </FormItem>
        <FormItem label="产品类型" style="margin-right: 40px">
          <Select
            @change="load"
            v-model:value="flag"
            style="width: 100px"
            placeholder="请选择"
            :options="productList"
            :field-names="{ label: 'dictLabel', value: 'dictValue' }"
          />
        </FormItem>
        <FormItem label="文章分类" style="margin-right: 40px">
          <Select
            allowClear
            v-model:value="categoryId"
            style="width: 150px"
            placeholder="请选择"
            :options="categoryList"
            :field-names="{ label: 'label', value: 'value' }"
          />
        </FormItem>
        <FormItem label="文章标题">
          <Input v-model:value="title" style="width: 300px; margin-right: 20px" />
        </FormItem>
      </div>
      <div style="display: flex">
        <FormItem label="状态" style="margin-right: 40px">
          <Select
            @change="load"
            allowClear
            v-model:value="status"
            style="width: 100px"
            placeholder="请选择"
            :options="statusList"
            :field-names="{ label: 'dictLabel', value: 'dictValue' }"
          />
        </FormItem>
        <Button type="primary" @click="save">生成文章内容并保存</Button>
      </div>
    </Form>
    <div class="charts" ref="charts" id="charts" style="width: 1000px; height: 500px"></div>
  </div>
</template>

<script lang="ts">
  import { Input, Form, FormItem, Button, RangePicker, Select } from "ant-design-vue";
  import { onMounted, ref } from "vue";
  import * as echarts from "echarts";
  import { analyseArticlePublic } from "/@/api/cms/Article";
  import { uploadApi } from "/@/api/storage/Upload";
  import { getDictItems } from "/@/api/sys/dictItem";
  import { dataURLtoBlob } from "/@/utils/file/Base64Conver";
  import { insertArticle } from "/@/api/cms/Article";
  import { getDailyAvgPrice } from "/@/api/price/ProductPrice";
  import { dateUtil } from "/@/utils/DateUtil";
  import "echarts-wordcloud";
  export default {
    name: "PublicAnalysis2",
    components: { Input, Form, FormItem, Button, RangePicker, Select },
    setup() {
      let charts;
      const categoryList = ref([
        { label: "日报", value: 7 },
        { label: "周报", value: 8 },
        { label: "月报", value: 9 },
        { label: "年报", value: 10 },
        { label: "市场行情报告", value: 5 },
      ]);
      const ranges = {
        ["今天"]: [dateUtil().startOf("day"), dateUtil()],
        ["昨天"]: [
          dateUtil().startOf("day").subtract(1, "days"),
          dateUtil().endOf("day").subtract(1, "days"),
        ],
        ["最近一周"]: [dateUtil().subtract(1, "weeks"), dateUtil()],
        ["最近两周"]: [dateUtil().subtract(2, "weeks"), dateUtil()],
        ["最近1个月"]: [dateUtil().subtract(1, "months"), dateUtil()],
        ["最近3个月"]: [dateUtil().subtract(3, "months"), dateUtil()],
      };
      const unit = ref("元/斤");
      const categoryId = ref(7);
      const status = ref(0);
      const title = ref("周报");
      const flag = ref(2);
      const startTime = ref("2023-08-31");
      const endTime = ref("2023-09-06");
      const products = ref();
      //产品列表
      const productList = ref([]);
      //状态列表
      const statusList = ref([]);
      onMounted(() => {
        initData();
        load();
      });
      function selectDate(value) {
        startTime.value = value[0];
        endTime.value = value[1];
        load();
      }
      //兰花：香雪兰;铃兰;金边小神童;金边山墨兰;莲瓣兰;大果冠兰花;蕙兰;白兰;寒兰;墨兰企黑;四季兰;兰花
      async function initData() {
        //获取产品列表
        productList.value = await getDictItems("mk_product_type");
        //获取状态列表
        statusList.value = await getDictItems("mk_article_status");
      }
      async function load() {
        if (flag.value === 5) {
          products.value = "菜心";
          unit.value = "元/斤";
        } else if (flag.value === 3) {
          products.value =
            "香雪兰;铃兰;金边小神童;金边山墨兰;莲瓣兰;大果冠兰花;蕙兰;白兰;寒兰;墨兰企黑;四季兰;兰花";
          unit.value = "元/株";
        } else if (flag.value === 1) {
          products.value = "三黄鸡;山鸡;肉鸡;乌鸡;黑羽乌鸡;火鸡;白羽乌鸡;珍珠鸡;九斤鸡";
          unit.value = "元/斤";
        } else if (flag.value === 2) {
          products.value =
            "柑桔;蜜柑;沙糖桔;爱媛橙;沃柑;椪柑;皇帝柑;耙耙柑;不知火;青金桔;脆皮金桔;金桔";
          unit.value = "元/斤";
        } else if (flag.value === 8) {
          unit.value = "元/只";
        } else {
          products.value = undefined;
          unit.value = "元/斤";
        }
        const data = await getDailyAvgPrice({
          flag: flag.value,
          products: products.value,
          startTime: startTime.value,
          endTime: endTime.value,
        });
        console.log(data);
        const xData = [];
        const dataMap = new Map();
        const xSet = new Set();

        if (data) {
          data.forEach((item) => {
            let list = dataMap.get(item.product);
            if (!list) {
              list = [];
            }
            xSet.add(item.time);
            list.push(item.price);
            dataMap.set(item.product, list);
          });
        }
        initChart(dataMap, Array.from(xSet.values()));
      }
      function initChart(dataMap, xData) {
        console.log(xData);
        charts = echarts.init(document.getElementById("charts")!);
        const legendData = [];
        const seriesList = [];
        dataMap.forEach((value, key) => {
          seriesList.push({
            name: key,
            type: "line",
            smooth: true,
            data: value,
            lineStyle: {
              // color: "#00a651",
              width: 2,
            },
            // showSymbol: false, // 不显示圆点
            symbolSize: 5,
            // emphasis: {
            //   lineStyle: {
            //     color: "#00a651",
            //   },
            //   itemStyle: {
            //     color: "#00a651",
            //     borderColor: "white", // 圆点白色边框
            //     borderWidth: 1, // 边框宽度
            //     shadowColor: "rgba(0, 0, 0, 0.3)", // 圆点阴影颜色
            //     shadowBlur: 5, // 阴影模糊程度
            //   },
            // },
            // areaStyle: {
            //   color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            //     { offset: 0, color: "rgba(0, 128, 0, 0.3)" },
            //     { offset: 1, color: "rgba(0, 128, 0, 0)" },
            //   ]),
            // },
          });
          legendData.push(key);
        });

        console.log(seriesList, legendData);
        // 配置项
        const option = {
          grid: {
            containLabel: true, // 确保坐标轴标签完整显示
            left: "3%",
            right: "4%",
            top: "20%",
            borderColor: "#ccc", // 网格线颜色
          },
          legend: {
            bottom: "0%",
            data: legendData,
          },
          xAxis: {
            type: "category",
            axisLine: {
              lineStyle: {
                color: "#ccc", // x轴线颜色
              },
            },
            data: xData,
            axisLabel: {
              margin: 20, // 调整label与图表的间距
              color: "#666", // x轴标签颜色
            },
            boundaryGap: false, // 不留白
          },
          yAxis: {
            type: "value",
            name: unit.value,
            nameTextStyle: {
              fontWeight: "bold",
              fontSize: 16,
            },
            // 控制名称与轴线之间的距离
            nameGap: 30,
            axisLine: {
              show: false, // 隐藏y轴线
            },
            splitLine: {
              lineStyle: {
                type: "dashed", // y轴网格线类型改为虚线
                color: "#ccc",
              },
            },
            axisLabel: {
              margin: 20, // 调整label与图表的间距
              color: "rgb(75, 85, 99)",
            },
          },
          tooltip: {
            trigger: "axis",
            borderColor: "#54b065", // 设置边框颜色
            borderWidth: 1, // 设置边框宽度
          },
          series: seriesList,
        };
        charts.setOption(option, true);
      }
      function save() {}
      return {
        categoryId,
        categoryList,
        ranges,
        status,
        title,
        selectDate,
        productList,
        statusList,
        flag,
        load,
        save,
      };
    },
  };
</script>

<style lang="less" scoped>
  .container {
    margin: 20px;
    padding: 30px;
    background-color: white;
    width: 98%;
    min-height: 90%;
  }

  .item {
    .charts {
      margin: 20px;
      width: 500px;
    }

    .text {
      margin-top: 20px;
      width: 500px;
      font-size: 18px;
    }
  }
</style>
