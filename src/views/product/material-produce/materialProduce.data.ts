import { BasicColumn } from "/@/components/general/Table";
import { FormSchema } from "/@/components/general/Table";

/**
 * @description: 产品生产表
 * @author cgli
 * @date: 2023-05-21
 * @version: V1.0.0
 */
export const columns: BasicColumn[] = [
  {
    title: "公司id",
    dataIndex: "companyId",
    width: 120,
  },
  {
    title: "产品id",
    dataIndex: "materialId",
    width: 120,
  },
  {
    title: "生产批次",
    dataIndex: "batch",
    width: 120,
  },
  {
    title: "生产规模",
    dataIndex: "productionScale",
    width: 120,
  },
  {
    title: "规模单位",
    dataIndex: "unit",
    width: 120,
  },
  {
    title: "产品编号",
    dataIndex: "number",
    width: 120,
  },
  {
    title: "产品名称",
    dataIndex: "name",
    width: 120,
  },
  {
    title: "产品类型id",
    dataIndex: "categoryId",
    width: 120,
  },
  {
    title: "单位产量估算",
    dataIndex: "productEstimate",
    width: 120,
  },
  {
    title: "预计上市产量",
    dataIndex: "marketEstimate",
    width: 120,
  },
  {
    title: "预计上市时间",
    dataIndex: "timeEstimate",
    width: 120,
  },
  {
    title: "基地id",
    dataIndex: "baseId",
    width: 120,
  },
  {
    title: "生产数量",
    dataIndex: "quantity",
    width: 120,
  },
  {
    title: "是否卖出",
    dataIndex: "isSell",
    width: 120,
  },
  {
    title: "区分字段",
    dataIndex: "flag",
    width: 120,
  },
];
//todo 查询条件暂时用来装样子，后面增加配置条件后修改模版
export const searchFormSchema: FormSchema[] = [
  {
    field: "companyId",
    label: "公司id",
    component: "Input",
    colProps: { lg: 4, md: 5 },
  },
  {
    field: "materialId",
    label: "产品id",
    component: "Input",
    colProps: { lg: 4, md: 5 },
  },
  {
    field: "batch",
    label: "生产批次",
    component: "Input",
    colProps: { lg: 4, md: 5 },
  },
];
export const materialProduceFormSchema: FormSchema[] = [
  {
    field: "id",
    label: "唯一ID",
    component: "Input",
    show: false,
  },
  {
    field: "companyId",
    label: "公司id",
    component: "Input",
  },
  {
    field: "materialId",
    label: "产品id",
    component: "Input",
  },
  {
    field: "batch",
    label: "生产批次",
    component: "Input",
  },
  {
    field: "productionScale",
    label: "生产规模",
    component: "Input",
  },
  {
    field: "unit",
    label: "规模单位",
    component: "Input",
  },
  {
    field: "deletedFlag",
    label: "逻辑删除",
    component: "Input",
  },
  {
    field: "number",
    label: "产品编号",
    component: "Input",
  },
  {
    field: "name",
    label: "产品名称",
    component: "Input",
  },
  {
    field: "categoryId",
    label: "产品类型id",
    component: "Input",
  },
  {
    field: "productEstimate",
    label: "单位产量估算",
    component: "Input",
  },
  {
    field: "marketEstimate",
    label: "预计上市产量",
    component: "Input",
  },
  {
    field: "timeEstimate",
    label: "预计上市时间",
    component: "Input",
  },
  {
    field: "baseId",
    label: "基地id",
    component: "Input",
  },
  {
    field: "quantity",
    label: "生产数量",
    component: "Input",
  },
  {
    field: "isSell",
    label: "是否卖出",
    component: "Input",
  },
  {
    field: "flag",
    label: "区分字段",
    component: "Input",
  },
];
