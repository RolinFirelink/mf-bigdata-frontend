import { BasicColumn } from "/@/components/general/Table";
import { FormSchema } from "/@/components/general/Table";
import { getDictProps } from "/@/utils/DictUtils";
/**
 * @description: 惠农网广东月供应数据
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
    title: "广东该月占全年比重",
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
];
export const supplyDataGuangDongFormSchema: FormSchema[] = [
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
    field: "cntRatio",
    label: "广东该月占全年比重",
    component: "Input",
  },
];
