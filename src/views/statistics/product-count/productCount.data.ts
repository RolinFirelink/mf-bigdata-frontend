import { BasicColumn } from "/@/components/general/Table";
import { FormSchema } from "/@/components/general/Table";

import { dateUtil } from "/@/utils/DateUtil";
import { getDictProps } from "/@/utils/DictUtils";

/**
 * @description: 城市产品生产统计表
 * @author cgli
 * @date: 2023-07-16
 * @version: V1.0.0
 */
export const columns: BasicColumn[] = [
  {
    title: "产品类型",
    dataIndex: "flag",
    width: 120,
  },
  {
    title: "产品名称",
    dataIndex: "produce",
    width: 120,
  },
  {
    title: "城市",
    dataIndex: "city",
    width: 120,
  },
  {
    title: "生产规模",
    dataIndex: "productionScale",
    width: 120,
  },
  {
    title: "规模单位",
    dataIndex: "unit",
    width: 120,
  },
  {
    title: "统计时间",
    dataIndex: "time",
    width: 120,
  },
];
//todo 查询条件暂时用来装样子，后面增加配置条件后修改模版
export const searchFormSchema: FormSchema[] = [
  {
    field: "flag",
    label: "产品类型",
    component: "ApiSelect",
    componentProps: getDictProps("mk_product_type"),
    colProps: { lg: 4, md: 5 },
  },
  // {
  //   field: "produce",
  //   label: "产品名称",
  //   component: "Input",
  //   colProps: { lg: 4, md: 5 },
  // },
  {
    field: "city",
    label: "城市",
    component: "Input",
    colProps: { lg: 4, md: 5 },
  },
  {
    field: "[startTime, endTime]",
    label: "统计时间",
    component: "RangePicker",
    componentProps: {
      format: "YYYY-MM-DD",
      placeholder: ["开始时间", "结束时间"],
      valueFormat: "YYYY-MM-DD",
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
export const productCountFormSchema: FormSchema[] = [
  {
    field: "id",
    label: "唯一ID",
    component: "Input",
    show: false,
  },
  {
    field: "flag",
    label: "产品类型",
    component: "ApiSelect",
    componentProps: getDictProps("mk_product_type"),
  },
  {
    field: "produce",
    label: "产品名称",
    component: "Input",
  },
  {
    field: "city",
    label: "城市",
    component: "Input",
  },
  {
    field: "productionScale",
    label: "生产规模",
    component: "Input",
  },
  {
    field: "unit",
    label: "规模单位",
    component: "Input",
  },
  {
    field: "time",
    label: "统计时间",
    component: "DatePicker",
    componentProps: {
      format: "YYYY-MM-DD",
      placeholder: "记录日期",
      showTime: true,
    },
  },
];
