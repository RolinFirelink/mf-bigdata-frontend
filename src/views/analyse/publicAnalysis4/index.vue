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
            @change="computeTitle"
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
            v-model:value="status"
            style="width: 100px"
            placeholder="请选择"
            :options="statusList"
            :field-names="{ label: 'dictLabel', value: 'dictValue' }"
          />
          <label style="margin: 5px 10px">模式：</label>
          <Select
            @change="load"
            v-model:value="model"
            style="width: 100px"
            placeholder="请选择"
            :options="modelList"
          />
        </FormItem>
        <Button type="primary" @click="create" style="margin: 0 20px">生成文章内容</Button>
        <Button type="primary" @click="save">保存文章</Button>
      </div>
    </Form>
    <Button type="primary" @click="autoCreate" style="margin-right: 20px">自动生成周报</Button>
    <RangePicker valueFormat="YYYY-MM-DD" @change="selectDate2" :ranges="ranges" />
    <div
      class="charts"
      ref="charts"
      id="charts"
      style="width: 1000px; height: 500px; margin-bottom: 100px"
    ></div>
    <div class="article" id="article">
      <p style="font-size: 20px; font-weight;: 600"> 一、{{ product }}价格分析 </p>
      <p style="width: 1000px; line-height: 30px; font-size: 18px; text-indent: 2em"> </p>
      <p style="width: 1000px; line-height: 30px; font-size: 18px; text-indent: 2em" v-html="text1">
      </p>
      <p v-if="img">
        <img :src="img" style="width: 1000px; height: 500px" />
      </p>
      <p style="font-size: 20px; font-weight;: 600;margin-top:35px"> 二、{{ product }}价格预测 </p>
      <p style="width: 1000px; line-height: 30px; font-size: 18px; text-indent: 2em">{{ text2 }}</p>
    </div>
  </div>
</template>

<script lang="ts">
  import { Input, Form, FormItem, Button, RangePicker, Select } from "ant-design-vue";
  import { onMounted, ref } from "vue";
  import * as echarts from "echarts";
  import { uploadApi } from "/@/api/storage/Upload";
  import { getDictItems } from "/@/api/sys/dictItem";
  import { dataURLtoBlob } from "/@/utils/file/Base64Conver";
  import { insertArticle } from "/@/api/cms/Article";
  import { getDailyAvgPrice, getMarketTrendForecast } from "/@/api/price/ProductPrice";
  import { dateUtil } from "/@/utils/DateUtil";
  import { getForeastText, weekDifference } from "./forest.js";
  import { getAnalyse, getAnalyse2 } from "./analyse.js";
  import { getProductData } from "./productData";
  import "echarts-wordcloud";
  export default {
    name: "PublicAnalysis2",
    components: { Input, Form, FormItem, Button, RangePicker, Select },
    setup() {
      let seriesList = [];
      const model = ref(1);
      const modelList = [
        { label: "模式一", value: 1 },
        { label: "模式二", value: 2 },
      ];
      const text1 = ref("");
      const text2 = ref("");
      const img = ref("");
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
      const categoryId = ref(8);
      const product = ref();
      const status = ref(0);
      const title = ref("周报");
      const flag = ref(3);
      const startTime = ref("2023-08-31");
      const endTime = ref("2023-09-06");
      const products = ref();
      let start = "2023-09-31";
      let end = "2023-09-31";
      let content = "";
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
      function selectDate2(value) {
        start = value[0];
        end = value[1];
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
          // products.value = "菜心";
          products.value = undefined;
          unit.value = "元/斤";
        } else if (flag.value === 3) {
          // products.value =
          // "香雪兰;铃兰;金边小神童;金边山墨兰;莲瓣兰;大果冠兰花;蕙兰;白兰;寒兰;墨兰企黑;四季兰;兰花";
          products.value = undefined;
          unit.value = "元/株";
        } else if (flag.value === 1) {
          // products.value = "三黄鸡;山鸡;肉鸡;乌鸡;黑羽乌鸡;火鸡;白羽乌鸡;珍珠鸡;九斤鸡";
          products.value = undefined;
          unit.value = "元/斤";
        } else if (flag.value === 2) {
          // products.value =
          //   "柑桔;蜜柑;沙糖桔;爱媛橙;沃柑;椪柑;皇帝柑;耙耙柑;不知火;青金桔;脆皮金桔;金桔";
          products.value = undefined;
          unit.value = "元/斤";
        } else if (flag.value === 8) {
          products.value = undefined;
          unit.value = "元/斤";
        } else {
          products.value = undefined;
          unit.value = "元/斤";
        }

        try {
          const data = await getDailyAvgPrice({
            flag: flag.value,
            products: products.value,
            startTime: startTime.value,
            endTime: endTime.value,
            region: "广东",
          });

          const dataMap = new Map();
          const xSet = new Set();

          if (data) {
            // 计算title
            computeTitle();
            data.forEach((item) => {
              let list = dataMap.get(item.product);
              if (!list) {
                list = [];
              }
              xSet.add(item.time);
              list.push(item.price.toFixed(2));
              dataMap.set(item.product, list);
            });
          }

          initChart(dataMap, Array.from(xSet.values()));

          return dataMap; // 返回包含异步操作结果的Promise
        } catch (error) {
          console.error("An error occurred:", error);
          throw error; // 抛出错误，可根据需要处理
        }
      }

      function formatStartDate(date) {
        date = new Date(date);
        const year = date.getFullYear();
        const month = date.getMonth() + 1; // 月份从0开始，所以要加1
        const day = date.getDate();
        return `${year}.${month}.${day}`;
      }
      function computeTitle() {
        productList.value.forEach((item) => {
          if (item.dictValue === flag.value) {
            product.value = item.dictLabel;
            title.value = "广东" + item.dictLabel + "产销形势";
          }
        });
        if (categoryId.value != null) {
          categoryList.value.forEach((item) => {
            if (item.value === categoryId.value) {
              title.value += item.label;
            }
          });
        } else {
          title.value += "报告";
        }
        if (startTime.value) {
          title.value +=
            "（" + formatStartDate(startTime.value) + "-" + formatStartDate(endTime.value) + "）";
        }
      }

      function initChart(dataMap, xData) {
        charts = echarts.init(document.getElementById("charts")!);
        const legendData = [];
        seriesList = [];
        dataMap.forEach((value, key) => {
          seriesList.push({
            name: key,
            type: "line",
            // smooth: true,
            symobl: "circle",
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
        seriesList = seriesList.filter((item) => {
          return item.data.length >= xData.length;
        });
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
            min: (value) => {
              return value.min;
            },
            max: (value) => {
              return value.max;
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
      function formatDate(date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        return `${year}-${month}-${day}`;
      }

      function autoCreate() {
        console.log(start, end);
        if (!start || !end) {
          return;
        }
        const startDate = new Date(start);
        const endDate = new Date(end);
        const oneDay = 24 * 60 * 60 * 1000; // 一天的毫秒数
        async function printDateRange() {
          // 打印本周的开始时间（星期一）
          startTime.value = formatDate(startDate);
          // 增加6天以获得本周的结束时间（星期天）
          startDate.setTime(startDate.getTime() + 6 * oneDay);
          endTime.value = formatDate(startDate);
          console.log(startTime.value, endTime.value);
          await load();
          await create();
          await save();
          if (flag.value === 8 || flag.value === 5) {
            model.value = model.value === 1 ? 2 : 1;
          }
          // 增加1天以获得下周的开始时间（下一个星期一）
          startDate.setTime(startDate.getTime() + oneDay);
          if (startDate <= endDate) {
            printDateRange();
          }
        }
        printDateRange();
      }
      async function create() {
        if (seriesList.length > 1) {
          const opt = {
            pixelRatio: 1, // 导出的图片分辨率比例，默认为 1。
          };
          img.value = await upload(charts.getDataURL(opt));
          text1.value = "";
          let i = 1;
          const productStatusMap = new Map();
          text1.value +=
            "<table style='font-size:15px;margin-top:10px;text-align:center;border:1px solid #ccc;'><thead><tr style='height:50px'><th style='width:300px;'>产品</th><th style='width:300px;border:'1px solid black;''>平均价格（" +
            unit.value +
            "）</th><th style='width:300px'>分析结果</th></tr></thead>";
          text1.value += "<tbody>";
          seriesList.forEach((item) => {
            let avgPrice = 0;
            item.data.forEach((item2) => (avgPrice += Number(item2)));
            avgPrice = (avgPrice / item.data.length).toFixed(2);
            const priceData = getPrice(item.data);
            const productData = getProductData(item.name);
            const status = getAnalyse2(item.data, productData.value1);
            let productStatusList = productStatusMap.get(status) || [];
            productStatusList.push({ name: item.name, avgPrice: avgPrice });
            productStatusMap.set(status, productStatusList);
            text1.value += "<tr style='height:50px'>";
            text1.value +=
              "<td style='border:1px solid #ccc;' >" +
              item.name +
              "</td>" +
              "<td style='border:1px solid #ccc;' >" +
              avgPrice +
              "</td>" +
              `<td style='border:1px solid #ccc;color:${
                status.indexOf("上") !== -1
                  ? "red"
                  : status?.indexOf("下") !== -1
                  ? "green"
                  : status?.indexOf("波动") !== -1
                  ? "blue"
                  : ""
              }'} >` +
              status +
              "</td></tr>";
            i++;
          });
          text1.value += "</tbody></table>";

          const text3 = getText2(productStatusMap);

          text1.value =
            (startTime.value != null ? startTime.value + " 至 " + endTime.value + "，" : "") +
            text3 +
            text1.value;
          text2.value = await getForecastInfo(calculateOverallState(productStatusMap));
        } else {
          // 模式一
          const opt = {
            pixelRatio: 1, // 导出的图片分辨率比例，默认为 1。
          };
          img.value = await upload(charts.getDataURL(opt));
          text1.value = "";
          let i = 1;
          const productStatusMap = new Map();
          seriesList.forEach((item) => {
            let avgPrice = 0;
            item.data.forEach((item2) => (avgPrice += Number(item2)));
            avgPrice = (avgPrice / item.data.length).toFixed(2);
            const priceData = getPrice(item.data);
            const productData = getProductData(item.name);
            const status = getAnalyse(item.data, productData.value1, productData.value2);
            let productStatusList = productStatusMap.get(status) || [];
            productStatusList.push({ name: item.name, avgPrice: avgPrice });
            productStatusMap.set(status, productStatusList);
            // text1.value +=
            //   item.name +
            //   "平均价格为" +
            //   avgPrice +
            //   unit.value +
            //   (i === seriesList.length ? "。" : "、");
            i++;
          });
          // console.log("productStatusMap", productStatusMap);
          const text3 = getText1(productStatusMap, seriesList);
          text1.value =
            (startTime.value != null ? startTime.value + " 至 " + endTime.value + "，" : "") +
            text3 +
            text1.value;
          text2.value = await getForecastInfo(calculateOverallState(productStatusMap));
        }
        const article = document.getElementById("article");
        content = encodeURIComponent(article?.innerHTML);
        return content;
      }

      function getText2(productStatusMap) {
        const totalStatus = calculateOverallState(productStatusMap);
        let j = 1;
        let text3 = "";
        if (seriesList.length > 1) {
          productStatusMap.forEach((value, key) => {
            let i = 1;
            value.forEach((product) => {
              text3 += product.name + (i == value.length ? "" : "、");
              i++;
            });
            text3 += key + (j == productStatusMap.size ? "。" : "，");
            j++;
          });
        }
        text3 += "总体价格呈现" + totalStatus + "态势。";
        return text3;
      }

      function getText1(productStatusMap, seriesList) {
        let text3 = "";
        if (seriesList.length === 1 && model.value === 1) {
          const data = seriesList[0].data;
          const priceData = getPrice(data);
          text3 +=
            product.value +
            "价格在" +
            priceData.min +
            unit.value +
            "和" +
            priceData.max +
            unit.value +
            "之间，平均价格为" +
            priceData.avgPrice +
            unit.value +
            "。";
          const totalStatus = calculateOverallState(productStatusMap);
          text3 += "总体价格呈现" + totalStatus + "态势。";
        } else if (seriesList.length === 1 && model.value === 2) {
          const data = seriesList[0].data;
          const priceData = getPrice(data);
          text3 +=
            product.value +
            "最高价格为" +
            priceData.max +
            unit.value +
            "，最低价格为" +
            priceData.min +
            unit.value +
            "，本周均价为" +
            priceData.avgPrice +
            unit.value +
            "。";
          const totalStatus = calculateOverallState(productStatusMap);
          text3 += "总体价格" + totalStatus + "。";
        }
        let j = 1;
        if (seriesList.length > 1) {
          productStatusMap.forEach((value, key) => {
            let i = 1;
            value.forEach((product) => {
              text3 += product.name + (i == value.length ? "" : "、");
              i++;
            });
            text3 += key + (j == productStatusMap.size ? "。" : "，");
            j++;
          });
        }
        return text3;
      }

      async function save() {
        const data = await insertArticle({
          title: title.value,
          content,
          flag: flag.value,
          categoryId: categoryId.value,
          status: status.value,
        });
        return data; // 返回包含异步操作结果的Promise
      }

      async function upload(base64) {
        const data = await uploadApi({
          file: dataURLtoBlob(base64),
          fileName: "",
          path: "article",
          isPrivate: 0,
        });
        return data.fileUrl;
      }
      function sleep(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
      }

      function getPrice(data) {
        let max = data[0];
        let min = data[0];
        let sum = 0;
        data.forEach((item) => {
          max = Math.max(item, max);
          min = Math.min(item, min);
          sum += Number(item);
        });
        const avgPrice = Number((sum / data.length).toFixed(2));
        return { max, min, avgPrice };
      }
      function computeStatus(data, value1, value2) {
        let sum = 0;
        for (let i = 1; i < data.length; i++) {
          sum += data[i] - data[i - 1];
        }
        const k = (sum / data.length) * 100;
        if (k >= value2) {
          return "上涨";
        } else if (k >= value1) {
          return "波动";
        } else if (k > -value1) {
          return "平稳";
        } else if (k > -value2) {
          return "波动";
        } else if (k <= -value2) {
          return "下跌";
        }
      }
      function calculateOverallState(productStatusMap) {
        let productStatusList = Array.from(productStatusMap.entries());
        const statusMap = new Map();
        statusMap.set("平稳", 0);
        statusMap.set("上涨", 0);
        statusMap.set("下跌", 0);
        statusMap.set("波动", 0);
        productStatusList.forEach((item) => {
          if (item[0].indexOf("平稳") !== -1) {
            let count = statusMap.get("平稳");
            statusMap.set("平稳", count + item[1].length / 5);
          }
          if (item[0].indexOf("上") !== -1) {
            let count = statusMap.get("上涨");
            statusMap.set("上涨", count + item[1].length);
          }
          if (item[0].indexOf("下") !== -1) {
            let count = statusMap.get("下跌");
            statusMap.set("下跌", count + item[1].length);
          }
          if (item[0].indexOf("波动") !== -1) {
            let count = statusMap.get("波动");
            statusMap.set("波动", count + item[1].length);
          }
        });
        productStatusList = Array.from(statusMap.entries());
        productStatusList.sort((a, b) => {
          return b[1] - a[1];
        });
        console.log("productStatusList", productStatusList);
        return productStatusList[0][0];
      }
      async function getForecastInfo(status) {
        let index1 = 0;
        if (status.indexOf("平") !== -1) {
          index1 = 0;
        } else if (status.indexOf("波动") !== -1) {
          index1 = 1;
        } else if (status.indexOf("上") !== -1) {
          index1 = 2;
        } else if (status.indexOf("下") !== -1) {
          index1 = 3;
        }
        // const data = await getMarketTrendForecast({
        //   flag: flag.value,
        //   startTime: startTime.value,
        //   endTime: endTime.value,
        //   product: product.value,
        // });
        // let list = [];
        // if (data) {
        //   data.forEach((item) => {
        //     if (Number(item.product) == flag.value) {
        //       list = item.productPriceTrends.map((item) => {
        //         return item.value;
        //       });
        //     }
        //   });
        // }
        // const status = computeStatus(list);
        // return "预计后续" + product.value + "价格将" + status + "，总体处于" + computeState(list);
        // const index2 = weekDifference(startTime.value, endTime.value);
        const index2 = Math.floor(Math.random() * 10);
        console.log(index2);
        return getForeastText(index1, index2, product.value);
      }
      // function computeState(list) {
      //   //得到平均价格
      //   let sum = 0;
      //   list.forEach((item) => {
      //     sum += Number(item);
      //   });
      //   const avgPrice = sum / list.length;
      //   let x = sum / 10;
      //   let y = 0;
      //   list.forEach((item) => {
      //     if (item - avgPrice >= x || item - avgPrice <= x) {
      //       y++;
      //     }
      //   });
      //   return y >= list.length / 2 ? "活跃态势" : "平稳态势";
      // }
      return {
        create,
        model,
        modelList,
        selectDate2,
        autoCreate,
        product,
        text1,
        img,
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
        computeTitle,
        text2,
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
