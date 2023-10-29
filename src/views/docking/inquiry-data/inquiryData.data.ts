import { BasicColumn } from "/@/components/general/Table";
import { FormSchema } from "/@/components/general/Table";
import { getDictProps } from "/@/utils/DictUtils";
import { dateUtil } from "/@/utils/DateUtil";
/**
 * @description: 惠农网省份月采购数据
 * @author cgli
 * @date: 2023-09-15
 * @version: V1.0.0
 */
export const columns: BasicColumn[] = [
  {
    title: "月份",
    dataIndex: "date",
    width: 120,
  },
  {
    title: "产品分类",
    dataIndex: "flag",
    width: 120,
  },
  {
    title: "省份",
    dataIndex: "provinceName",
    width: 120,
  },
  {
    title: "该省占全国比重",
    dataIndex: "cntRatio",
    width: 120,
  },
];
//todo 查询条件暂时用来装样子，后面增加配置条件后修改模版
export const searchFormSchema: FormSchema[] = [
  {
    field: "[startMonth, endMonth]",
    label: "月份",
    component: "RangePicker",
    componentProps: {
      picker: "month",
      format: "YYYY-MM",
      placeholder: ["起始月份", "终止月份"],
      valueFormat: "YYYY-MM",
    },
    colProps: { lg: 8, md: 8 },
  },
  {
    field: "flag",
    label: "产品分类",
    component: "ApiSelect",
    componentProps: getDictProps("mk_product_type"),
    colProps: { lg: 4, md: 5 },
  },
  {
    field: "province",
    label: "省份",
    component: "Input",
    colProps: { lg: 4, md: 5 },
  },
];
export const inquiryDataFormSchema: FormSchema[] = [
  {
    field: "id",
    label: "唯一ID",
    component: "Input",
    show: false,
  },
  {
    field: "date",
    label: "月份",
    component: "DatePicker",
    componentProps: {
      picker: "month",
      format: "YYYY-MM",
      placeholder: "月份",
      valueFormat: "YYYY-MM",
    },
  },
  {
    field: "flag",
    label: "产品分类",
    component: "ApiSelect",
    componentProps: getDictProps("mk_product_type"),
  },
  {
    field: "provinceName",
    label: "省份",
    component: "Input",
  },
  {
    field: "cntRatio",
    label: "该省占全国比重",
    component: "Input",
  },
];
