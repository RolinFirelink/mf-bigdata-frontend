<template>
  <div class="content">
    <div id="mapChart" ref="charts" style="width: 350px; height: 240px"></div>
  </div>
</template>

<script lang="ts">
  import { onMounted, getCurrentInstance, watch, ref } from "vue";
  import { ECharts, EChartsOption, init } from "echarts";
  import * as echarts from "echarts";
  import guangdong from "/@/assets/mapData/guangdong.json";
  import { getProductBaseInfo } from "/@/api/company/ProductBase";
  //引入城市坐标数据
  import { cityPoints } from "/@/assets/mapData";
  export default {
    setup() {
      let pointData = [];

      //tooltip框数据
      let pointdataGD = [
        {
          name: "广州市",
          value: 1350,
          coord: [113.264385, 23.129112],
          baseCount: 5,
        },
      ];
      const flag = ref(1);
      let maxProduce = 0;
      onMounted(() => {
        initCharts();
        load();
      });
      //请求数据
      const load = async () => {
        const data = await getProductBaseInfo({
          flag: flag.value,
        });
        console.log("采购导图的数据是：", data);
        // if (data) {
        //   //统计各城市数据（基地数量和总产量）
        //   const cityMap = new Map();
        //   // const scatterMap = new Map();
        //   data.forEach((item) => {
        //     let cityData = cityMap.get(item.city);
        //     console.log("222", item.city);
        //     if (!cityData) {
        //       cityData = {
        //         name: item.city,
        //         baseCount: 0,
        //         value: 0,
        //         unit: item.outputUnit,
        //         coord: cityPoints.get(item.city),
        //       };
        //     }
        //     cityData.baseCount++;
        //     cityData.value += Number(item.annualOutput || 0);
        //     cityMap.set(item.city, cityData);

        //     //散点
        //     const {
        //       city,
        //       baseName,
        //       lat,
        //       lng,
        //       annualOutput,
        //       region,
        //       outputUnit,
        //       iphoneNumber,
        //       mainProduct,
        //     } = item;
        //     pointData.push({
        //       value: [113, 23, annualOutput],
        //       baseName: baseName,
        //       phone: iphoneNumber ? iphoneNumber.slice(0, 3) + "******" + iphoneNumber.slice(9) : "无",
        //       mainProduct: mainProduct,
        //       outputUnit: outputUnit,
        //     });
        //   });
        //   console.log("pointData", pointData);
        //   pointdataGD = Array.from(cityMap.values());
        //   // 得出最大产量
        //   pointdataGD.forEach((item) => {
        //     maxProduce = Math.max(item.value, maxProduce);
        //   });
        //   console.log("pointdataGD", pointdataGD);
        //   initCharts();
        // }
        if (data) {
          const zoneMapping = {
            广州市: "珠三角地区",
            深圳市: "珠三角地区",
            佛山市: "珠三角地区",
            东莞市: "珠三角地区",
            中山市: "珠三角地区",
            珠海市: "珠三角地区",
            江门市: "珠三角地区",
            肇庆市: "珠三角地区",
            惠州市: "珠三角地区",
            汕头市: "粤东地区",
            潮州市: "粤东地区",
            揭阳市: "粤东地区",
            汕尾市: "粤东地区",
            韶关市: "粤北地区",
            清远市: "粤北地区",
            梅州市: "粤北地区",
            河源市: "粤北地区",
            湛江市: "粤西地区",
            茂名市: "粤西地区",
            阳江市: "粤西地区",
            云浮市: "粤西地区",
          };
          const cityMap = new Map();
          if (data) {
            data.forEach((item) => {
              let cityData = cityMap.get(item.city);
              if (!cityData) {
                // 根据城市查找对应的地区
                let zone = zoneMapping[item.city] || "";
                cityData = {
                  coord: cityPoints.get(item.city),
                  name: item.city,
                  // value: item.value,
                  value: item.annualOutput,
                  annualOutput: item.annualOutput,
                  region: item.region,
                  unit: item.outputUnit,
                  zone: zone,
                };
              }
              cityMap.set(item.city, cityData);
              //筛选后的数据给point
              console.log("cityData", cityData);
              // console.log("pointdataGD", pointdataGD);
            });
          }

          pointdataGD = Array.from(cityMap.values());
          //动态变化最大产量值
          pointdataGD.forEach((item) => {
            maxProduce = Math.max(item.value, maxProduce);
          });

          console.log("pointdataGD", pointdataGD);
          initCharts();
        }
      };

      function initCharts() {
        const charEle = document.getElementById("mapChart") as HTMLElement;
        const charts: ECharts = init(charEle);
        const data = [];
        // function switchMap(params) {
        //   const name = params.name;
        //   if (geoCoordMap[name]) {
        //     if (params.data) {
        //       echarts.registerMap(name, geoCoordMap[name]); //关键是如何用名字来置换地区
        //       option.series[0].map = name;
        //       option = opt(350, 0, "总产量", "吨", true, false);
        //       // option.series[0].zoom = 1;
        //       // option.series[0].center = undefined;
        //       // option.series[0].markPoint.data = switchPiontmap(pointData, params.data.code);
        //       // option.series[0].data = switchPiontmap(pointData, params.data.code);
        //       // option.series[0].markPoint.tooltip.show = true;
        //       // option.series[0].tooltip.show = false;
        //       charts.setOption(option);
        //     }
        //   }
        // }

        function opt(max, min, vmp, unit) {
          let optn: EChartsOption = {
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
                fontSize: 14,
                color: "#FFF",
              },
              bottom: "20%",
            },
            tooltip: {
              formatter: function (params) {
                return params.name + ": " + params.value + unit;
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
                  // formatter: function (item) {
                  //   let tipHtml = "";
                  //   if (item.data) {
                  //     tipHtml =
                  //     ' <table style="border-collapse: collapse;">' +
                  //       '<thead>' +
                  //         '<th style=" padding: 8px; background-color: #016831; color: #ffffff; font-weight: bold; border: 1px solid #b7d5ab;">' +
                  //        item.data.zone +
                  //       "</th>" +
                  //       '<th style=" padding: 8px; background-color: #016831; color: #ffffff; font-weight: bold;  border: 1px solid #b7d5ab;">' +
                  //         '预计产量' +
                  //         "("+
                  //         item.data.unit +
                  //         ")"+
                  //       "</th>" +
                  //       " </thead>" +
                  //       '<tbody>' +
                  //       '<tr>'+
                  //         '<td style=" border: 1px solid #b7d5ab; padding: 8px;">'+
                  //           item.data.name +
                  //           item.data.region+
                  //         '</td>'+
                  //         '<td  style=" border: 1px solid #b7d5ab; padding: 8px;">'+
                  //           item.data.annualOutput+
                  //         '</td>'+
                  //       '</tr>'+
                  //       "</tbody>" +
                  //   "</table>";
                  //   }
                  //   return tipHtml;
                  // },
                },
                roam: true,
                label: {
                  show: true,
                },
                // 添加itemStyle属性，定义没有数据时的颜色
                itemStyle: {},
              },
              {
                type: "effectScatter",
                name: "地图demo(城市空气质量)",
                coordinateSystem: "geo",
                data: [
                  { name: "北京", value: [113.46, 25.92, 1000] },
                  { name: "上海", value: [112.48, 22.22, 2000] },
                  { name: "深圳", value: [114.07, 22.62, 1000] },
                  { name: "广州", value: [113.23, 23.16, 2400] },
                  { name: "广州", value: [113.23, 24.16, 3500] },
                ],
                symbol: "circle",
                symbolSize: function (val) {
                  return 10 + val[2] * 0; //圆环大小
                },
                itemStyle: {
                  color: "green",
                },
              },
            ],
          };
          return optn;
        }
        var option: EChartsOption = opt(maxProduce || 1350, 0, "总产量", "吨");
        //设置提示框
        function tooltipHtml(data) {
          let tipHtml = "";
          if (data && data.length > 0) {
            tipHtml =
              `<table style="border-collapse: collapse;">` +
              `<thead>` +
              `<th style=" padding: 8px; background-color: #016831; color: #ffffff; font-weight: bold; border: 1px solid #b7d5ab;">` +
              `${data[0].zone}` +
              `</th>` +
              `<th style=" padding: 8px; background-color: #016831; color: #ffffff; font-weight: bold;  border: 1px solid #b7d5ab;">` +
              `预计产量(${data[0].unit})` +
              `</th>` +
              "</thead>" +
              `<tbody>`;
            //遍历里面的数据
            data.forEach((item) => {
              tipHtml +=
                `<tr>` +
                `<td style=" border: 1px solid #b7d5ab; padding: 8px;">` +
                `${item.name}${item.region}` +
                `</td>` +
                `<td style=" border: 1px solid #b7d5ab; padding: 8px;">` +
                `${item.annualOutput}` +
                `</td>` +
                `</tr>`;
            });
            tipHtml += "</tbody></table>";
          }
          return tipHtml;
        }
        //把提示框放入
        // option.tooltip.formatter = function (params) {
        //   //存在数据的时候就显示
        //   if (params.data && params.data.zone) {
        //     //筛选出所有的属于zone的属性
        //     const zoneData = pointdataGD.filter((item) => item.zone === params.data.zone);
        //     return tooltipHtml(zoneData);
        //   } else {
        //     return "";
        //   }
        // };
        echarts.registerMap("广东", guangdong);
        charts.setOption(option, true);
      }
    },
  };
</script>
