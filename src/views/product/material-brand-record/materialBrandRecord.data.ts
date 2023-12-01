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
    title: "品牌",
    dataIndex: "brandName",
    width: 120,
  },
  {
    title: "产品",
    dataIndex: "materialName",
    width: 120,
  },
  {
    title: "规格",
    dataIndex: "productSpecifications",
    width: 120,
  },
  {
    title: "价格",
    dataIndex: "materialPrice",
    width: 120,
  },
];
//todo 查询条件暂时用来装样子，后面增加配置条件后修改模版
export const searchFormSchema: FormSchema[] = [
  {
    field: "brandName",
    label: "品牌",
    component: "Input",
    colProps: { lg: 4, md: 5 },
  },
  {
    field: "materialName",
    label: "产品",
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
    label: "品牌",
    component: "Select",
    componentProps: {
      fieldNames: {
        label: "name",
        value: "id",
      },
    },
  },
  {
    field: "materialId",
    label: "产品",
    component: "Select",
    componentProps: {
      fieldNames: {
        label: "name",
        value: "id",
      },
    },
  },
  {
    field: "productSpecifications",
    label: "规格",
    component: "Input",
  },
  {
    field: "materialPrice",
    label: "价格",
    component: "InputNumber",
  },
];
