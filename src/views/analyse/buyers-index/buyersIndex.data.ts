import { BasicColumn } from "/@/components/general/Table";
import { FormSchema } from "/@/components/general/Table";

import { getDictProps } from "/@/utils/DictUtils";

/**
 * @description: 采购商指数
 * @author cgli
 * @date: 2023-07-16
 * @version: V1.0.0
 */
export const columns: BasicColumn[] = [
  {
    title: "年份",
    dataIndex: "year",
    width: 120,
  },
  {
    title: "月份",
    dataIndex: "month",
    width: 120,
  },
  {
    title: "指数",
    dataIndex: "temp",
    width: 120,
  },
  {
    title: "产量类型",
    dataIndex: "flag",
    width: 120,
  },
  {
    title: "统计时间",
    dataIndex: "statisticalTime",
    width: 120,
  },
];
//todo 查询条件暂时用来装样子，后面增加配置条件后修改模版
export const searchFormSchema: FormSchema[] = [
  {
    field: "year",
    label: "年份",
    component: "Input",
    colProps: { lg: 4, md: 5 },
  },
  {
    field: "month",
    label: "月份",
    component: "Input",
    colProps: { lg: 4, md: 5 },
  },
  // {
  //   field: "temp",
  //   label: "指数",
  //   component: "Input",
  //   colProps: { lg: 4, md: 5 },
  // },
  {
    field: "flag",
    label: "产量类型",
    component: "ApiSelect",
    componentProps: getDictProps("mk_product_type"),
    colProps: { lg: 5, md: 5 },
  },
];
export const buyersIndexFormSchema: FormSchema[] = [
  {
    field: "id",
    label: "唯一ID",
    component: "Input",
    show: false,
  },
  {
    field: "year",
    label: "年份",
    component: "Input",
  },
  {
    field: "month",
    label: "月份",
    component: "Input",
  },
  {
    field: "temp",
    label: "指数",
    component: "Input",
  },
  {
    field: "flag",
    label: "产量类型",
    component: "ApiSelect",
    componentProps: getDictProps("mk_product_type"),
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
];
