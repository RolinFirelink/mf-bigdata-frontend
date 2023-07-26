import { BasicColumn } from "/@/components/general/Table";
import { FormSchema } from "/@/components/general/Table";
import { h } from "vue";
import { Tag } from "ant-design-vue";

/**
 * @description: 城市销售量表
 * @author cgli
 * @date: 2023-07-17
 * @version: V1.0.0
 */
export const columns: BasicColumn[] = [
  {
    title: "城市",
    dataIndex: "city",
    width: 120,
  },
  {
    title: "销售量",
    dataIndex: "sales",
    width: 120,
  },
  {
    title: "单位",
    dataIndex: "unit",
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
  {
    title: "产品",
    dataIndex: "product",
    width: 120,
  },
  {
    title: "日期",
    dataIndex: "statisticsTime",
    width: 120,
  },
];
//todo 查询条件暂时用来装样子，后面增加配置条件后修改模版
export const searchFormSchema: FormSchema[] = [
  {
    field: "city",
    label: "城市",
    component: "Input",
    colProps: { lg: 4, md: 5 },
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
    colProps: { lg: 4, md: 5 },
  },
];
export const citySaleStatisticsFormSchema: FormSchema[] = [
  {
    field: "id",
    label: "唯一ID",
    component: "Input",
    show: false,
  },
  {
    field: "city",
    label: "城市",
    component: "Input",
  },
  {
    field: "sales",
    label: "销售量",
    component: "Input",
  },
  {
    field: "unit",
    label: "单位",
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
  {
    field: "product",
    label: "产品",
    component: "Input",
  },
  {
    field: "statisticsTime",
    label: "日期",
    component: "DatePicker",
    componentProps: {
      format: "YYYY-MM-DD",
      placeholder: "记录日期",
      showTime: true,
    },
  },
];
