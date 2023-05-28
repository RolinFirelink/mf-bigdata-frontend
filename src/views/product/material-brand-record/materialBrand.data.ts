import { BasicColumn } from "/@/components/general/Table";
import { FormSchema } from "/@/components/general/Table";
/**
 * @description: 产品品牌表
 * @author cgli
 * @date: 2023-05-21
 * @version: V1.0.0
 */
export const columns: BasicColumn[] = [
  {
    title: "产品",
    dataIndex: "materialName",
    width: 120,
  },
  {
    title: "品牌名",
    dataIndex: "name",
    width: 120,
  },
];
//todo 查询条件暂时用来装样子，后面增加配置条件后修改模版
export const searchFormSchema: FormSchema[] = [
  {
    field: "materialName",
    label: "产品名",
    component: "Input",
    colProps: { lg: 4, md: 5 },
  },
  {
    field: "name",
    label: "品牌名",
    component: "Input",
    colProps: { lg: 4, md: 5 },
  },
];
export const materialBrandFormSchema: FormSchema[] = [
  {
    field: "id",
    label: "唯一ID",
    component: "Input",
    show: false,
  },
  {
    field: "materialId",
    label: "产品",
    component: "Select",
    componentProps: {
      value: "id",
      label: "name",
    },
  },
  {
    field: "brandId",
    label: "品牌",
    component: "Select",
    componentProps: {
      value: "id",
      label: "name",
    },
  },
];
