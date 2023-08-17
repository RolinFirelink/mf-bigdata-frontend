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
    title: "起始位置",
    dataIndex: "startAddress",
    width: 120,
  },
  {
    title: "终点位置",
    dataIndex: "endAddress",
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
    componentProps: {
      disabled: true,
    },
    colProps: { lg: 8, md: 10 },
  },
  {
    field: "startLng",
    label: "起点经度",
    component: "Input",
    componentProps: {
      disabled: true,
    },
    colProps: { lg: 8, md: 10 },
  },
  {
    field: "endLat",
    label: "终点纬度",
    component: "Input",
    componentProps: {
      disabled: true,
    },
    colProps: { lg: 8, md: 10 },
  },
  {
    field: "endLng",
    label: "终点经度",
    component: "Input",
    componentProps: {
      disabled: true,
    },
    colProps: { lg: 8, md: 10 },
  },
  {
    field: "startCountry",
    label: "起始国家",
    component: "Select",
    componentProps: {
      fieldNames: {
        label: "name",
        value: "id",
      },
    },
    colProps: { lg: 8, md: 10 },
  },
  {
    field: "startProvince",
    label: "起始省份",
    component: "Select",
    componentProps: {
      fieldNames: {
        label: "name",
        value: "id",
      },
    },
    colProps: { lg: 8, md: 10 },
  },
  {
    field: "startCity",
    label: "起始城市",
    component: "Select",
    componentProps: {
      fieldNames: {
        label: "name",
        value: "id",
      },
    },
    colProps: { lg: 8, md: 10 },
  },
  {
    field: "startArea",
    label: "起始地区",
    component: "Select",
    componentProps: {
      fieldNames: {
        label: "name",
        value: "id",
      },
    },
    colProps: { lg: 8, md: 10 },
  },
  {
    field: "startStreet",
    label: "起始街道",
    component: "Select",
    componentProps: {
      fieldNames: {
        label: "name",
        value: "id",
      },
    },
    colProps: { lg: 8, md: 10 },
  },
  {
    field: "endCountry",
    label: "终点国家",
    component: "Select",
    componentProps: {
      fieldNames: {
        label: "name",
        value: "id",
      },
    },
    colProps: { lg: 8, md: 10 },
  },
  {
    field: "endProvince",
    label: "终点省份",
    component: "Select",
    componentProps: {
      fieldNames: {
        label: "name",
        value: "id",
      },
    },
    colProps: { lg: 8, md: 10 },
  },
  {
    field: "endCity",
    label: "终点城市",
    component: "Select",
    componentProps: {
      fieldNames: {
        label: "name",
        value: "id",
      },
    },
    colProps: { lg: 8, md: 10 },
  },
  {
    field: "endArea",
    label: "终点地区",
    component: "Select",
    componentProps: {
      fieldNames: {
        label: "name",
        value: "id",
      },
    },
    colProps: { lg: 8, md: 10 },
  },
  {
    field: "endStreet",
    label: "终点街道",
    component: "Select",
    componentProps: {
      fieldNames: {
        label: "name",
        value: "id",
      },
    },
    colProps: { lg: 8, md: 10 },
  },
  {
    field: "flag",
    label: "产品类型",
    component: "ApiSelect",
    componentProps: getDictProps("mk_product_type"),
    colProps: { lg: 8, md: 10 },
  },
];
