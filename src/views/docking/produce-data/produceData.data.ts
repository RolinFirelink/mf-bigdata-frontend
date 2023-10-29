import { BasicColumn } from "/@/components/general/Table";
import { FormSchema } from "/@/components/general/Table";
import { getDictProps } from "/@/utils/DictUtils";
/**
 * @description: 惠农网产量数据
 * @author cgli
 * @date: 2023-09-15
 * @version: V1.0.0
 */
export const columns: BasicColumn[] = [
  {
    title: "年份",
    dataIndex: "dateYear",
    width: 120,
  },
  {
    title: "地区",
    dataIndex: "startArea",
    width: 120,
  },
  {
    title: "产品分类",
    dataIndex: "flag",
    width: 120,
  },
  {
    title: "产量",
    dataIndex: "starQty",
    width: 120,
  },
  {
    title: "单位",
    dataIndex: "statUnit",
    width: 120,
  },
];
//todo 查询条件暂时用来装样子，后面增加配置条件后修改模版
export const searchFormSchema: FormSchema[] = [
  {
    field: "[startYear, endYear]",
    label: "年份",
    component: "RangePicker",
    componentProps: {
      picker: "year",
      format: "YYYY",
      placeholder: ["起始年份", "终止年份"],
      valueFormat: "YYYY",
    },
    colProps: { lg: 8, md: 8 },
  },
  {
    field: "region",
    label: "地区",
    component: "Input",
    colProps: { lg: 4, md: 5 },
  },
  {
    field: "flag",
    label: "产品分类",
    component: "ApiSelect",
    componentProps: getDictProps("mk_product_type"),
    colProps: { lg: 4, md: 5 },
  },
];
export const produceDataFormSchema: FormSchema[] = [
  {
    field: "id",
    label: "唯一ID",
    component: "Input",
    show: false,
  },
  {
    field: "dateYear",
    label: "年份",
    component: "DatePicker",
    componentProps: {
      picker: "year",
      format: "YYYY",
      placeholder: "年份",
      valueFormat: "YYYY",
    },
  },
  {
    field: "startArea",
    label: "地区",
    component: "Input",
  },
  {
    field: "flag",
    label: "产品分类",
    component: "ApiSelect",
    componentProps: getDictProps("mk_product_type"),
  },
  {
    field: "starQty",
    label: "产量",
    component: "Input",
  },
  {
    field: "statUnit",
    label: "单位",
    component: "Input",
  },
];
