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
// import { h } from "vue";
// import { Tag } from "ant-design-vue";
import { getDictProps } from "/@/utils/DictUtils";
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
    component: "ApiSelect",
    componentProps: getDictProps("mk_product_type"),
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
    component: "ApiSelect",
    componentProps: getDictProps("mk_product_type"),
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
