/*
 * @Author: DuoLaAMeng Czf141931
 * @Date: 2023-07-10 20:24:00
 * @LastEditors: DuoLaAMeng Czf141931
 * @LastEditTime: 2023-07-20 20:27:28
 * @FilePath: \mf-bigdata-frontend\src\views\price\originPrice\originPrice.data.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8
 */
import { BasicColumn } from "/@/components/general/Table";
import { FormSchema } from "/@/components/general/Table";
import { h } from "vue";
import { Tag } from "ant-design-vue";
/**
 * @description: 产地价格
 * @author cgli
 * @date: 2023-07-10
 * @version: V1.0.0
 */
export const columns: BasicColumn[] = [
  {
    title: "公司",
    dataIndex: "companyName",
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
    title: "主要销售城市",
    dataIndex: "mainCity",
    width: 120,
  },
  {
    title: "价格",
    dataIndex: "price",
    width: 120,
  },
  {
    title: "价格单位",
    dataIndex: "unit",
    width: 120,
  },
];
//todo 查询条件暂时用来装样子，后面增加配置条件后修改模版
export const searchFormSchema: FormSchema[] = [
  {
    field: "companyName",
    label: "公司",
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
  {
    field: "cityName",
    label: "主要销售城市",
    component: "Input",
    colProps: { lg: 4, md: 5 },
  },
];
export const originPriceFormSchema: FormSchema[] = [
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
    field: "cityCode",
    label: "主要销售城市",
    component: "Input",
  },
  {
    field: "price",
    label: "价格",
    component: "Input",
  },
  {
    field: "unit",
    label: "价格单位",
    component: "Input",
  },
];
