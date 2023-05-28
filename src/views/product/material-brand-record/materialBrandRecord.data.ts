import { BasicColumn } from "/@/components/general/Table";
import { FormSchema } from "/@/components/general/Table";

/**
 * @description: 品牌产品中间表
 * @author cgli
 * @date: 2023-05-21
 * @version: V1.0.0
 */
export const columns: BasicColumn[] = [
  {
    title: "品牌id",
    dataIndex: "brandId",
    width: 120,
  },
  {
    title: "产品id",
    dataIndex: "materialId",
    width: 120,
  },
];
//todo 查询条件暂时用来装样子，后面增加配置条件后修改模版
export const searchFormSchema: FormSchema[] = [
  {
    field: "brandId",
    label: "品牌id",
    component: "Input",
    colProps: { lg: 4, md: 5 },
  },
  {
    field: "materialId",
    label: "产品id",
    component: "Input",
    colProps: { lg: 4, md: 5 },
  },
];
export const materialBrandRecordFormSchema: FormSchema[] = [
  {
    field: "id",
    label: "唯一ID",
    component: "Input",
    show: false,
  },
  {
    field: "brandId",
    label: "品牌id",
    component: "Select",
  },
  {
    field: "materialId",
    label: "产品id",
    component: "Select",
  },
];
