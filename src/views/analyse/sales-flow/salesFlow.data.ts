import { BasicColumn } from "/@/components/general/Table";
import { FormSchema } from "/@/components/general/Table";

import { getDictProps } from "/@/utils/DictUtils";

/**
 * @description: 销售流向
 * @author cgli
 * @date: 2023-07-20
 * @version: V1.0.0
 */
export const columns: BasicColumn[] = [
  {
    title: "起点纬度",
    dataIndex: "startLat",
    width: 120,
  },
  {
    title: "起点经度",
    dataIndex: "startLng",
    width: 120,
  },
  {
    title: "终点纬度",
    dataIndex: "endLat",
    width: 120,
  },
  {
    title: "终点经度",
    dataIndex: "endLng",
    width: 120,
  },
  {
    title: "产品类型",
    dataIndex: "flag",
    width: 120,
  },
];
//todo 查询条件暂时用来装样子，后面增加配置条件后修改模版
export const searchFormSchema: FormSchema[] = [
  // {
  //   field: "startLat",
  //   label: "起点纬度",
  //   component: "Input",
  //   colProps: { lg: 4, md: 5 },
  // },
  // {
  //   field: "startLng",
  //   label: "起点经度",
  //   component: "Input",
  //   colProps: { lg: 4, md: 5 },
  // },
  // {
  //   field: "endLat",
  //   label: "终点纬度",
  //   component: "Input",
  //   colProps: { lg: 4, md: 5 },
  // },
  {
    field: "flag",
    label: "产品类型",
    component: "ApiSelect",
    componentProps: getDictProps("mk_product_type"),
  },
];
export const salesFlowFormSchema: FormSchema[] = [
  {
    field: "id",
    label: "唯一ID",
    component: "Input",
    show: false,
  },
  {
    field: "startLat",
    label: "起点纬度",
    component: "Input",
  },
  {
    field: "startLng",
    label: "起点经度",
    component: "Input",
  },
  {
    field: "endLat",
    label: "终点纬度",
    component: "Input",
  },
  {
    field: "endLng",
    label: "终点经度",
    component: "Input",
  },
  {
    field: "flag",
    label: "产品类型",
    component: "ApiSelect",
    componentProps: getDictProps("mk_product_type"),
  },
];
