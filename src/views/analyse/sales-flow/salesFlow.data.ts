import { BasicColumn } from "/@/components/general/Table";
import { FormSchema } from "/@/components/general/Table";
import { h } from "vue";
import { Tag } from "ant-design-vue";

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
];
