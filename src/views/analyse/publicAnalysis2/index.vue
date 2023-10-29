<template>
  <div class="container">
    <Form style="display: flex">
      <FormItem label="发布时间" style="margin-right: 20px">
        <RangePicker valueFormat="YYYY-MM-DD" @change="selectDate" :ranges="ranges" />
      </FormItem>
      <FormItem label="产品类型" style="margin-right: 20px">
        <Select
          @change="load"
          allowClear
          v-model:value="flag"
          style="width: 100px"
          placeholder="请选择"
          :options="productList"
          :field-names="{ label: 'dictLabel', value: 'dictValue' }"
        />
      </FormItem>
      <!-- <FormItem label="来源映射词列表（用分号隔开，例如 报社：社、报;客户端：客户端）">
        <Input style="width: 400px" v-model:value="sourcesKey" />
      </FormItem> -->
      <FormItem label="文章标题">
        <Input v-model:value="title" style="width: 300px; margin-right: 20px" />
      </FormItem>
      <FormItem label="状态" style="margin-right: 20px">
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
      <Button @click="test" type="primary">生成文章内容并保存</Button>
      <!-- <Button @click="load">分析报表</Button> -->
    </Form>
    <div class="item">
      <div class="text" style="width: 1000px"
        >本分析报告基于{{ totalCount }}条数据进行分析，其中包含<span
          v-for="(item, index) in sourceValue.slice(0, sourceValue.length - 1)"
          :key="item"
        >
          {{ item.count }}条{{ item.name }}数据{{ index === sourceValue.length - 2 ? "。" : "、" }}
        </span></div
      >
      <div class="charts" ref="charts" id="charts" style="width: 1000px; height: 300px"></div>
    </div>
    <div class="item">
      <div class="text" style="width: 1000px"
        >基于关键词积分制对文章计算出情感倾向性得出情感正向占比{{
          ((totalCount == 0 ? 0 : inclineds[2] / totalCount) * 100).toFixed(2) + "%"
        }}，情感中性占比{{ ((inclineds[1] / totalCount) * 100).toFixed(2) + "%" }}，情感负向占比{{
          ((totalCount == 0 ? 0 : inclineds[0] / totalCount) * 100).toFixed(2) + "%"
        }}</div
      >
      <div class="charts" ref="charts2" id="charts2" style="width: 1000px; height: 300px"></div>
    </div>

    <div class="item">
      <div class="text" style="width: 1000px">词云</div>
      <div ref="charts" id="charts3" class="charts" style="width: 1000px; height: 300px"></div>
    </div>

    <div v-show="false">
      <div class="article" id="article">
        <p class="text" style="width: 1000px"
          >本分析报告基于{{ totalCount }}条数据进行分析，其中包含<span
            v-for="(item, index) in sourceValue.slice(0, sourceValue.length - 1)"
            :key="item"
          >
            {{ item.count }}条{{ item.name }}数据{{
              index === sourceValue.length - 2 ? "。" : "、"
            }}
          </span></p
        >
        <br />
        <p>
          <img class="img" :src="img1" style="width: 1000px; height: 300px" v-if="img1" />
        </p>
        <p class="text" style="width: 1000px"
          >基于关键词积分制对文章计算出情感倾向性得出情感正向占比{{
            ((totalCount == 0 ? 0 : inclineds[2] / totalCount) * 100).toFixed(2) + "%"
          }}，情感中性占比{{ ((inclineds[1] / totalCount) * 100).toFixed(2) + "%" }}，情感负向占比{{
            ((totalCount == 0 ? 0 : inclineds[0] / totalCount) * 100).toFixed(2) + "%"
          }}</p
        >
        <br />
        <p>
          <img class="img" :src="img2" style="width: 1000px; height: 300px" v-if="img2" />
        </p>
        <p>词云</p>
        <br />
        <p>
          <img class="img" :src="img3" style="width: 1000px; height: 300px" v-if="img3" />
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { Input, Form, FormItem, Button, RangePicker, Select } from "ant-design-vue";
  import { onMounted, ref } from "vue";
  import * as echarts from "echarts";
  import { analyseArticlePublic } from "/@/api/cms/Article";
  import { getDictItems } from "/@/api/sys/dictItem";
  import { uploadApi } from "/@/api/storage/Upload";
  import { dataURLtoBlob } from "/@/utils/file/Base64Conver";
  import { insertArticle } from "/@/api/cms/Article";
  import { dateUtil } from "/@/utils/DateUtil";
  import "echarts-wordcloud";
  export default {
    name: "PublicAnalysis2",
    components: { Input, Form, FormItem, Button, RangePicker, Select },
    setup() {
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
      const status = ref(0);
      const title = ref("周报");
      const img1 = ref("");
      const img2 = ref("");
      const img3 = ref("");
      const flag = ref("");
      const startTime = ref("");
      const endTime = ref("");
      //产品列表
      const productList = ref([]);
      //状态列表
      const statusList = ref([]);
      //总数据量
      const totalCount = ref(0);
      const sourcesKey = ref(
        "报社：社、报;客户端：客户端;网站：网;小程序：小程序;微信：微信;qq：qq;微博：微博",
      );
      const sources = ref([]);
      const sourceValue: any = ref([]);
      const inclineds = ref([]);
      let charts = null;
      let charts2 = null;
      let charts3 = null;
      onMounted(() => {
        load();
      });
      function isMatch(entry, item) {
        let flag = false;
        entry.values.forEach((value) => {
          if (item.source.indexOf(value) !== -1) {
            flag = true;
            return;
          }
        });
        return flag;
      }
      function selectDate(value) {
        startTime.value = value[0];
        endTime.value = value[1];
        load();
      }
      async function load() {
        //获取产品列表
        productList.value = await getDictItems("mk_product_type");
        //获取状态列表
        statusList.value = await getDictItems("mk_article_status");
        //来源数据
        const sourceKeyList = [];
        if (sourcesKey.value) {
          const sourceList = sourcesKey.value.split(";");
          sourceList.forEach((item) => {
            sourceKeyList.push({
              key: item.split("：")[0],
              values: item.split("：")[1].split("、"),
            });
          });
        }
        //获取分析数据
        const data = await analyseArticlePublic({
          flag: flag.value,
          startTime: startTime.value,
          endTime: endTime.value,
          status: 2,
        });

        inclineds.value = data.inclineds.map((item) => {
          return item.count;
        });
        sources.value = data.sources;
        const sourceMap = new Map();
        sourceKeyList.forEach((item) => {
          sourceMap.set(item.key, 0);
        });
        sourceMap.set("其他", 0);
        totalCount.value = 0;
        sources.value.forEach((item) => {
          let flag = false;
          totalCount.value += Number(item.count);
          sourceKeyList.forEach((entry) => {
            if (!flag) {
              if (isMatch(entry, item)) {
                flag = true;
                sourceMap.set(entry.key, sourceMap.get(entry.key) + item.count);
              }
            }
          });
          if (!flag) {
            sourceMap.set("其他", sourceMap.get("其他") + item.count);
          }
        });
        sourceValue.value = Array.from(sourceMap.entries()).map((item) => {
          return {
            name: item[0],
            count: item[1],
          };
        });
        initCharts(Array.from(sourceMap.entries()));
        //倾向性统计数据
        let inclinedValue = [];
        inclinedValue[0] = {
          name: "负面",
          value: inclineds.value[0],
          itemStyle: { color: "rgb(229,38,38)" },
        };
        inclinedValue[1] = {
          name: "中性",
          value: inclineds.value[1],
          itemStyle: { color: "rgb(255,156,0)" },
        };
        inclinedValue[2] = {
          name: "正面",
          value: inclineds.value[2],
          itemStyle: { color: "rgb(19,116,62)" },
        };
        initCharts2(inclinedValue);
        //词云数据
        const wordList = data.wordList.map((item) => {
          return { name: item.name, value: item.count };
        });
        initCharts3(wordList);
      }
      function initCharts(data) {
        charts = echarts.init(document.getElementById("charts")!);
        // 配置项
        let option = {
          title: {
            left: "330",
            textStyle: {
              //文字颜色
              //字体风格,'normal','italic','oblique'
              fontStyle: "normal",
              //字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
              fontWeight: "bold",
              //字体系列
              fontFamily: "sans-serif",
              //字体大小
              fontSize: 14,
            },
          },
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "shadow",
            },
          },
          //图表位置
          grid: {
            left: "5%",
            right: "10%",
            bottom: "5%",
            top: "5%",
            containLabel: true,
          },
          //X轴
          xAxis: {
            type: "value",
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            //不显示X轴刻度线和数字
            splitLine: { show: false },
            axisLabel: { show: false },
          },
          yAxis: {
            type: "category",
            data: data.map((item) => {
              return item[0];
            }),
            //升序
            inverse: true,
            splitLine: { show: false },
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              //y轴文字的配置
              textStyle: {
                margin: 20,

                fontSize: 12,
              },
            },
            // formatter: '{value} %'//y轴的每一个刻度值后面加上‘%’号
            //key和图间距
            offset: 10,
            //动画部分
            animationDuration: 300,
            animationDurationUpdate: 300,
            //key文字大小
            nameTextStyle: {
              fontSize: 5,
            },
          },
          series: [
            {
              //柱状图自动排序，排序自动让Y轴名字跟着数据动
              realtimeSort: true,
              type: "bar",
              data: data.map((item) => {
                return item[1];
              }),
              barWidth: 8,
              smooth: true,
              valueAnimation: true,
              //Y轴数字显示部分
              label: {
                normal: {
                  show: true,
                  position: "right",
                  valueAnimation: true,
                  offset: [5, -2],
                  textStyle: {
                    fontSize: 12,
                  },
                },
              },
              itemStyle: {
                emphasis: {
                  barBorderRadius: 7,
                },
                //颜色样式部分
                normal: {
                  barBorderRadius: 7,
                  color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                    { offset: 0, color: "#33ecd9 " },
                    { offset: 1, color: "#3cb3d3" },
                  ]),
                },
              },
            },
          ],
        };
        charts.setOption(option);
      }
      function initCharts2(data) {
        charts2 = echarts.init(document.getElementById("charts2")!);
        let option = {
          tooltip: {
            trigger: "item",
            formatter: "{b}: {c} ({d}%)",
          },
          series: [
            {
              type: "pie",
              radius: ["30%", "60%"], // 控制圆环的半径范围
              avoidLabelOverlap: false,
              label: {
                show: true,
                position: "outside", // 标签位置
                formatter: "{b}: {c} ({d}%)",
              },
              emphasis: {
                label: {
                  show: true,
                  fontSize: "12",
                  fontWeight: "bold",
                },
              },
              labelLine: {
                show: true,
              },
              data: data || [
                { name: "测试", value: 5 },
                { name: "测试2", value: 10 },
              ],
            },
          ],
        };
        charts2.setOption(option);
      }
      function initCharts3(data) {
        charts3 = echarts.init(document.getElementById("charts3")!);
        const option = {
          series: [
            {
              type: "wordCloud",
              // 要绘制云的形状,默认是 circle，可选的参数有 cardioid 、 diamond 、 triangle-forward 、 triangle 、 star
              shape: "circle",
              // 保持maskImage的纵横比或1:1的形状
              // 从echarts-wordcloud@2.1.0开始支持该选项
              keepAspect: false,
              // 左/上/宽/高/右/下用于字云的定位
              // 默认放置在中心，大小为75% x 80%。
              left: "center",
              top: "center",
              width: "70%",
              height: "80%",
              right: null,
              bottom: null,
              // 数据中的值将映射到的文本大小范围。
              // 默认值为最小12px，最大60px。
              sizeRange: [12, 60],
              // 文字旋转范围和步进程度。文本将通过rotationStep 45在[- 90,90]范围内随机旋转
              rotationRange: [-90, 90],
              rotationStep: 45,
              // 网格大小(以像素为单位)，用于标记画布的可用性
              // 网格大小越大，单词之间的间隔就越大
              gridSize: 8,
              // 设置为true允许文字部分地绘制在画布之外。
              // 允许画比画布大的字
              // 从echarts-wordcloud@2.1.0开始支持该选项
              drawOutOfBound: false,
              // 如果字体太大，无法显示文本，是否缩小文本。如果设置为false，则文本将不被渲染。如果设置为true，文本将被缩小。
              shrinkToFit: false,
              // 是否执行布局动画。
              //当单词较多时禁用会导致UI阻塞。
              layoutAnimation: true,
              // 全局文本样式
              textStyle: {
                fontFamily: "sans-serif",
                fontWeight: "bold",
                // Color可以是回调函数或颜色字符串
                color: function () {
                  // 任意颜色
                  return (
                    "rgb(" +
                    [
                      Math.round(Math.random() * 160),
                      Math.round(Math.random() * 160),
                      Math.round(Math.random() * 160),
                    ].join(",") +
                    ")"
                  );
                },
              },
              emphasis: {
                focus: "self",
                textStyle: {
                  textShadowBlur: 10,
                  textShadowColor: "#333",
                },
              },
              data: data,
            },
          ],
        };
        charts3.setOption(option);
      }
      async function test() {
        const opt = {
          pixelRatio: 1, // 导出的图片分辨率比例，默认为 1。
        };
        img1.value = await upload(charts.getDataURL(opt));
        img2.value = await upload(charts2.getDataURL(opt));
        img3.value = await upload(charts3.getDataURL(opt));
        console.log(img1.value, img2.value, img3.value);
        await sleep(1000); // 等待1秒（1000毫秒）
        test2();
      }
      async function upload(base64) {
        const data = await uploadApi({
          file: dataURLtoBlob(base64),
          fileName: "",
          path: "article",
          isPrivate: 0,
        });
        console.log(data.fileUrl);
        return data.fileUrl;
      }
      function sleep(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
      }
      async function test2() {
        const article = document.getElementById("article");
        console.log(article?.innerHTML);
        const content = encodeURIComponent(article?.innerHTML);
        const data = await insertArticle({
          title: title.value,
          content,
          flag: flag.value,
          categoryId: 6,
        });
        console.log(data);
      }
      return {
        ranges,
        status,
        title,
        selectDate,
        productList,
        statusList,
        flag,
        test,
        inclineds,
        sourcesKey,
        load,
        totalCount,
        sourceValue,
        img1,
        img2,
        img3,
        test2,
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
