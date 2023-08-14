import { BasicColumn } from "/@/components/general/Table";
import { FormSchema } from "/@/components/general/Table";
import { getDictProps } from "/@/utils/DictUtils";
/**
 * @description: 企业生产信息表
 * @author cgli
 * @date: 2023-07-11
 * @version: V1.0.0
 */
export const columns: BasicColumn[] = [
  {
    title: "企业",
    dataIndex: "companyName",
    width: 120,
  },
  {
    title: "产品类别",
    dataIndex: "flag",
    width: 120,
  },
  {
    title: "均价",
    dataIndex: "price",
    width: 120,
  },
  {
    title: "生产规模",
    dataIndex: "scale",
    width: 120,
  },
  {
    title: "生产规模单位",
    dataIndex: "scaleUnit",
    width: 120,
  },
  {
    title: "价格单位",
    dataIndex: "priceUnit",
    width: 120,
  },
  {
    title: "预计上市时间",
    dataIndex: "estimatedLaunchDate",
    width: 120,
  },
  {
    title: "预计产量",
    dataIndex: "projectedProduction",
    width: 120,
  },
  {
    title: "产品单位",
    dataIndex: "productUnit",
    width: 120,
  },
  {
    title: "标识（多个，用分号分割）",
    dataIndex: "identifiers",
    width: 120,
  },
];
//todo 查询条件暂时用来装样子，后面增加配置条件后修改模版
export const searchFormSchema: FormSchema[] = [
  {
    field: "companyName",
    label: "企业",
    component: "Input",
    colProps: { lg: 4, md: 5 },
  },
  {
    field: "flag",
    label: "产品类别",
    component: "ApiSelect",
    componentProps: getDictProps("mk_product_type"),
    colProps: { lg: 4, md: 5 },
  },
  // {
  //   field: "price",
  //   label: "均价",
  //   component: "Input",
  //   colProps: { lg: 4, md: 5 },
  // },
];
export const produceInfoFormSchema: FormSchema[] = [
  {
    field: "id",
    label: "唯一ID",
    component: "Input",
    show: false,
  },
  {
    field: "companyId",
    label: "公司",
    component: "Select",
    componentProps: {
      fieldNames: {
        label: "companyName",
        value: "id",
      },
    },
  },
  {
    field: "flag",
    label: "产品类别",
    component: "ApiSelect",
    componentProps: getDictProps("mk_product_type"),
  },
  {
    field: "price",
    label: "均价",
    component: "Input",
  },
  {
    field: "scale",
    label: "生产规模",
    component: "Input",
  },
  {
    field: "scaleUnit",
    label: "生产规模单位",
    component: "Input",
  },
  {
    field: "priceUnit",
    label: "价格单位",
    component: "Input",
  },
  {
    field: "estimatedLaunchDate",
    label: "预计上市时间",
    component: "DatePicker",
    componentProps: {
      format: "YYYY-MM-DD",
      placeholder: "记录日期",
      showTime: true,
    },
  },
  {
    field: "identifiers",
    label: "标识（多个，用分号分割）",
    component: "Input",
  },
  {
    field: "projectedProduction",
    label: "预计产量",
    component: "Input",
  },
  {
    field: "productUnit",
    label: "产品单位",
    component: "Input",
  },
];
