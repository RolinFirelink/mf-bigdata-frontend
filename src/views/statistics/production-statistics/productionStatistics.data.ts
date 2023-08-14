import { BasicColumn } from "/@/components/general/Table";
import { FormSchema } from "/@/components/general/Table";
import { getDictProps } from "/@/utils/DictUtils";

import { dateUtil } from "/@/utils/DateUtil";

/**
 * @description: 生产统计
 * @author cgli
 * @date: 2023-07-15
 * @version: V1.0.0
 */
export const columns: BasicColumn[] = [
  {
    title: "生产规模(亩)",
    dataIndex: "produceScale",
    width: 120,
  },
  {
    title: "产量",
    dataIndex: "yield",
    width: 120,
  },
  {
    title: "统计时间",
    dataIndex: "statisticalTime",
    width: 120,
  },
  {
    title: "产量类型",
    dataIndex: "flag",
    width: 120,
  },
  {
    title: "月份",
    dataIndex: "month",
    width: 120,
  },
  {
    title: "年份",
    dataIndex: "year",
    width: 120,
  },
  {
    title: "产量单位",
    dataIndex: "yieldUnit",
    width: 120,
  },
  {
    title: "生产规模单位",
    dataIndex: "scaleUnit",
    width: 120,
  },
];
//todo 查询条件暂时用来装样子，后面增加配置条件后修改模版
export const searchFormSchema: FormSchema[] = [
  // {
  //   field: "produceScale",
  //   label: "生产规模(亩)",
  //   component: "Input",
  //   colProps: { lg: 4, md: 5 },
  // },
  // {
  //   field: "yield",
  //   label: "产量",
  //   component: "Input",
  //   colProps: { lg: 4, md: 5 },
  // },
  // {
  //   field: "statisticalTime",
  //   label: "统计时间",
  //   component: "Input",
  //   colProps: { lg: 4, md: 5 },
  // },
  {
    field: "flag",
    label: "产量类型",
    component: "ApiSelect",
    componentProps: getDictProps("mk_product_type"),
    colProps: { lg: 5, md: 3 },
  },
  {
    field: "[startTime, endTime]",
    label: "统计时间",
    component: "RangePicker",
    componentProps: {
      format: "YYYY-MM",
      placeholder: ["开始时间", "结束时间"],
      valueFormat: "YYYY-MM",
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
export const productionStatisticsFormSchema: FormSchema[] = [
  {
    field: "id",
    label: "唯一ID",
    component: "Input",
    show: false,
  },
  {
    field: "produceScale",
    label: "生产规模(亩)",
    component: "Input",
  },
  {
    field: "yield",
    label: "产量",
    component: "Input",
  },
  {
    field: "statisticalTime",
    label: "统计时间",
    component: "DatePicker",
    componentProps: {
      format: "YYYY-MM-DD",
      placeholder: "记录日期",
      showTime: true,
    },
  },
  {
    field: "flag",
    label: "产量类型",
    component: "ApiSelect",
    componentProps: getDictProps("mk_product_type"),
  },
  {
    field: "month",
    label: "月份",
    component: "Input",
  },
  {
    field: "year",
    label: "年份",
    component: "Input",
  },
  {
    field: "yieldUnit",
    label: "产量单位",
    component: "Input",
  },
  {
    field: "scaleUnit",
    label: "生产规模单位",
    component: "Input",
  },
];
