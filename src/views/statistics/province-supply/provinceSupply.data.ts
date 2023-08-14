/*
 * @Author: DuoLaAMeng Czf141931
 * @Date: 2023-07-16 12:56:24
 * @LastEditors: DuoLaAMeng Czf141931
 * @LastEditTime: 2023-07-30 17:07:43
 * @FilePath: \mf-bigdata-frontend\src\views\statistics\province-supply\provinceSupply.data.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { BasicColumn } from "/@/components/general/Table";
import { FormSchema } from "/@/components/general/Table";
import { getDictProps } from "/@/utils/DictUtils";

/**
 * @description: 省份供应表
 * @author cgli
 * @date: 2023-07-16
 * @version: V1.0.0
 */
export const columns: BasicColumn[] = [
  {
    title: "省份",
    dataIndex: "province",
    width: 120,
  },
  {
    title: "供应量单位",
    dataIndex: "upplyUnit",
    width: 120,
  },
  {
    title: "供应量类型",
    dataIndex: "flag",
    width: 120,
  },
  {
    title: "产量",
    dataIndex: "upply",
    width: 120,
  },
  {
    title: "产品",
    dataIndex: "product",
    width: 120,
  },
];
//todo 查询条件暂时用来装样子，后面增加配置条件后修改模版
export const searchFormSchema: FormSchema[] = [
  {
    field: "province",
    label: "省份",
    component: "Input",
    colProps: { lg: 4, md: 5 },
  },
  {
    field: "flag",
    label: "供应量类型",
    component: "ApiSelect",
    componentProps: getDictProps("mk_product_type"),
    colProps: { lg: 4, md: 5 },
  },
];
export const provinceSupplyFormSchema: FormSchema[] = [
  {
    field: "id",
    label: "唯一ID",
    component: "Input",
    show: false,
  },
  {
    field: "province",
    label: "省份",
    component: "Input",
  },
  {
    field: "upplyUnit",
    label: "供应量单位",
    component: "Input",
  },
  {
    field: "flag",
    label: "供应量类型",
    component: "ApiSelect",
    componentProps: getDictProps("mk_product_type"),
  },
  {
    field: "upply",
    label: "产量",
    component: "Input",
  },
  {
    field: "product",
    label: "产品",
    component: "Input",
    required: true,
  },
];
