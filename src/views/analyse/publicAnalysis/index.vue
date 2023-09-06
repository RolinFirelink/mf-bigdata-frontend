<template>
  <Form class="container" :labelCol="{ style: { width: '70px' } }">
    <FormItem label="发布时间" :v-model="formData">
      <RangePicker v-model:value="dateValue" valueFormat="YYYY-MM-DD" />
    </FormItem>
    <FormItem label="来源" name="source">
      <Input style="width: 150px" placeholder="请输入来源" v-model:value="formData.source" />
    </FormItem>
    <FormItem label="关键词" name="key">
      <Input style="width: 150px" placeholder="请输入关键词" v-model:value="formData.key" />
    </FormItem>
    <FormItem label="倾向性" name="inclined">
      <Select
        allowClear
        v-model:value="formData.inclined"
        style="width: 100px"
        placeholder="请选择"
        :options="inclinedList"
        :field-names="{ label: 'dictLabel', value: 'dictValue' }"
      />
    </FormItem>
    <Button @click="analyse">分析舆情</Button>
    <FormItem label="词云" />
    <div ref="charts" id="charts" style="width: 500px; height: 250px"></div>
    <FormItem label="分析报告" />
    <div>{{ report }}</div>
  </Form>
</template>

<script lang="ts">
  import { RangePicker, Form, FormItem, Input, Select, Button } from "ant-design-vue";
  import * as echarts from "echarts/core";
  import { ref, onMounted, reactive } from "vue";
  import { getDictItems } from "/@/api/sys/DictItem";
  import { DictItem } from "/@/api/sys/model/DictItemModel";
  import { analyseArticle } from "/@/api/cms/Article";
  import "echarts-wordcloud";
  import { ReqArticle } from "/@/api/cms/model/ArticleModel";
  export default {
    name: "PublicAnalsis",
    components: { RangePicker, Form, FormItem, Input, Select, Button },
    setup() {
      //倾向性
      interface Word {
        name: string;
        value: number;
      }
      const dateValue = ref("");
      const inclinedList = ref<DictItem[]>([]);
      const wordList = ref<Word[]>([]);
      const report = ref("");
      const dateFormat = "YYYY-MM-DD";
      const formData = reactive<ReqArticle>({
        categoryId: 6,
        title: "",
        author: "",
        key: "",
        source: "",
        startTime: "",
        endTime: "",
        inclined: undefined,
      });
      onMounted(() => {
        load();
      });
      async function analyse() {
        if (dateValue.value) {
          formData.startTime = dateValue.value[0];
          formData.endTime = dateValue.value[1];
        }
        const data = await analyseArticle(formData);
        wordList.value = data.map((item) => {
          return { name: item.name, value: item.count };
        });
        const { startTime, endTime, source, key, inclined } = formData;
        report.value = "";
        if (startTime && endTime) {
          report.value += startTime + " 至 " + endTime;
        }
        if (source) {
          report.value += " 来源：" + source;
        }
        if (key) {
          report.value += " 关键词：" + key;
        }
        if (inclined) {
          inclinedList.value.forEach((item) => {
            if (Number(item.dictValue) === Number(inclined)) {
              report.value += " 倾向性：" + item.dictLabel;
            }
          });
        }
        report.value += " 词云数据：";
        wordList.value.forEach((item) => {
          report.value += item.name + " ";
        });
        initCharts();
      }
      async function load() {
        //获取倾向性字典
        inclinedList.value = await getDictItems("mk_article_inclined");
        initCharts();
      }
      function initCharts() {
        const charts = echarts.init(document.getElementById("charts")!);
        const data = wordList.value;
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
        charts.setOption(option);
      }
      return {
        inclinedList,
        analyse,
        formData,
        report,
        dateValue,
      };
    },
  };
</script>

<style scoped>
  .container {
    width: 97.5%;
    margin: 1.25%;
    padding: 1.5%;
    height: 95%;
    min-height: 95%;
    background: white;
  }
</style>
