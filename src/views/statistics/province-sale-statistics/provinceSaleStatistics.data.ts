/*
 * @Author: DuoLaAMeng Czf141931
 * @Date: 2023-07-15 18:53:54
 * @LastEditors: DuoLaAMeng Czf141931
 * @LastEditTime: 2023-07-15 20:14:03
 * @FilePath: \mf-bigdata-frontend\src\views\order\province-sale-statistics\provinceSaleStatistics.data.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { BasicColumn } from "/@/components/general/Table";
import { FormSchema } from "/@/components/general/Table";
import { dateUtil } from "/@/utils/DateUtil";
import { h } from "vue";
import { Tag } from "ant-design-vue";

/**
 * @description: 省份销售数据
 * @author cgli
 * @date: 2023-07-15
 * @version: V1.0.0
 */
export const columns: BasicColumn[] = [
  {
    title: "省份",
    dataIndex: "province",
    width: 120,
  },
  {
    title: "平均价格",
    dataIndex: "averagePrice",
    width: 120,
  },
  {
    title: "价格单位",
    dataIndex: "priceUnit",
    width: 120,
  },
  {
    title: "销售量",
    dataIndex: "sales",
    width: 120,
  },
  {
    title: "销售量单位",
    dataIndex: "saleUnit",
    width: 120,
  },
  {
    title: "产量类型",
    dataIndex: "flag",
    width: 120,
    customRender: ({ record }) => {
      let text = "";
      switch (record.flag) {
        case 1:
          text = "肉鸡";
          break;
        case 2:
          text = "柑橘";
          break;
        case 3:
          text = "兰花";
          break;
        case 4:
          text = "对虾";
          break;
        case 5:
          text = "菜心";
          break;
        case 6:
          text = "预制菜";
          break;
        case 7:
          text = "鸽子";
          break;
      }
      const color = "#FF9800";
      return h(Tag, { color: color }, () => text);
    },
  },
  // {
  //   title: "逻辑删除",
  //   dataIndex: "deleteFlag",
  //   width: 120,
  // },
  {
    title: "统计时间",
    dataIndex: "statisticalTime",
    width: 120,
  },
];
//todo 查询条件暂时用来装样子，后面增加配置条件后修改模版
export const searchFormSchema: FormSchema[] = [
  {
    field: "province",
    label: "省份",
    component: "Input",
    colProps: { lg: 4, md: 5 },
  },
  {
    field: "flag",
    label: "产量类型",
    component: "Select",
    componentProps: {
      options: [
        { label: "肉鸡", value: 1 },
        { label: "柑橘", value: 2 },
        { label: "兰花", value: 3 },
        { label: "对虾", value: 4 },
        { label: "菜心", value: 5 },
        { label: "预制菜", value: 6 },
        { label: "鸽子", value: 7 },
      ],
    },
  },
  // {
  //   field: "averagePrice",
  //   label: "平均价格",
  //   component: "Input",
  //   colProps: { lg: 4, md: 5 },
  // },
  // {
  //   field: "sales",
  //   label: "销售量",
  //   component: "Input",
  //   colProps: { lg: 4, md: 5 },
  // },
  {
    field: "[startTime, endTime]",
    label: "统计时间",
    component: "RangePicker",
    componentProps: {
      format: "YYYY-MM-DD HH:mm:ss",
      placeholder: ["开始时间", "结束时间"],
      showTime: {
        hideDisabledOptions: true,
        defaultValue: [dateUtil("00:00:00", "HH:mm:ss"), dateUtil("23:59:59", "HH:mm:ss")],
      },
      ranges: {
        ["今天"]: [dateUtil().startOf("day"), dateUtil()],
        ["昨天"]: [
          dateUtil().startOf("day").subtract(1, "days"),
          dateUtil().endOf("day").subtract(1, "days"),
        ],
        ["最近一周"]: [dateUtil().subtract(1, "weeks"), dateUtil()],
        ["最近两周"]: [dateUtil().subtract(2, "weeks"), dateUtil()],
        ["最近1个月"]: [dateUtil().subtract(1, "months"), dateUtil()],
        ["最近3个月"]: [dateUtil().subtract(3, "months"), dateUtil()],
      },
    },
    colProps: { lg: 10, md: 8 },
  },
];
export const provinceSaleStatisticsFormSchema: FormSchema[] = [
  {
    field: "id",
    label: "唯一ID",
    component: "Input",
    show: false,
  },
  {
    field: "province",
    label: "省份",
    component: "Input",
    required: true,
  },
  {
    field: "averagePrice",
    label: "平均价格",
    component: "Input",
    required: true,
  },
  {
    field: "priceUnit",
    label: "价格单位",
    component: "Input",
  },
  {
    field: "sales",
    label: "销售量",
    component: "Input",
    required: true,
  },
  {
    field: "saleUnit",
    label: "销售量单位",
    component: "Input",
    // required: true,
  },
  {
    field: "flag",
    label: "产量类型",
    component: "Select",
    componentProps: {
      options: [
        { label: "肉鸡", value: 1 },
        { label: "柑橘", value: 2 },
        { label: "兰花", value: 3 },
        { label: "对虾", value: 4 },
        { label: "菜心", value: 5 },
        { label: "预制菜", value: 6 },
        { label: "鸽子", value: 7 },
      ],
    },
  },
  {
    field: "statisticalTime",
    label: "统计时间",
    component: "Input",
  },
];
