import { BasicColumn } from "/@/components/general/Table";
import { FormSchema } from "/@/components/general/Table";
import { h } from "vue";
import { Tag } from "ant-design-vue";
/**
 * @description: 均价表
 * @author cgli
 * @date: 2023-05-30
 * @version: V1.0.0
 */
export const columns: BasicColumn[] = [
  {
    title: "关联产品",
    dataIndex: "flag",
    width: 120,
  },
  {
    title: "均价数值",
    dataIndex: "price",
    width: 120,
  },
  {
    title: "均价单位",
    dataIndex: "unit",
    width: 120,
  },
  {
    title: "统计时间",
    dataIndex: "averageDate",
    width: 120,
  },
  {
    title: "地区",
    dataIndex: "place",
    width: 120,
  },
];
//todo 查询条件暂时用来装样子，后面增加配置条件后修改模版
export const searchFormSchema: FormSchema[] = [
  {
    field: "flag",
    label: "关联产品",
    component: "Select",
    defaultValue: 1,
    componentProps: {
      options: [
        { label: "肉鸡", value: 1 },
        { label: "柑橘", value: 2 },
        { label: "兰花", value: 3 },
        { label: "对虾", value: 4 },
        { label: "菜心", value: 5 },
        { label: "预制蔡", value: 6 },
      ],
    },
    colProps: { lg: 5, md: 5 },
  },
];
export const shAveragePriceFormSchema: FormSchema[] = [
  {
    field: "id",
    label: "唯一ID",
    component: "Input",
    show: false,
  },
  {
    field: "flag",
    label: "关联产品",
    component: "Select",
    defaultValue: 1,
    componentProps: {
      options: [
        { label: "肉鸡", value: 1 },
        { label: "柑橘", value: 2 },
        { label: "兰花", value: 3 },
        { label: "对虾", value: 4 },
        { label: "菜心", value: 5 },
        { label: "预制蔡", value: 6 },
      ],
    },
    colProps: { lg: 12, md: 5 },
  },
  {
    field: "price",
    label: "均价",
    component: "InputNumber",
    colProps: { lg: 12, md: 8 },
  },
  {
    field: "unit",
    label: "均价单位",
    component: "Input",
    colProps: { lg: 12, md: 8 },
  },
  {
    field: "averageDate",
    label: "统计日期",
    component: "DatePicker",
    componentProps: {
      format: "YYYY-MM-DD HH:mm:ss",
      placeholder: "发布时间",
      showTime: true,
    },
    colProps: { lg: 12, md: 8 },
  },
  {
    field: "place",
    label: "地区",
    component: "Input",
    colProps: { lg: 12, md: 8 },
  },
];
