import { BasicColumn } from "/@/components/general/Table";
import { FormSchema } from "/@/components/general/Table";

/**
 * @description: 产品品牌表
 * @author cgli
 * @date: 2023-05-18
 * @version: V1.0.0
 */
export const columns: BasicColumn[] = [
  {
    title: "逻辑删除",
    dataIndex: "deletedFlag",
    width: 120,
  },
  {
    title: "品牌名",
    dataIndex: "name",
    width: 120,
  },
  {
    title: "品牌描述",
    dataIndex: "description",
    width: 120,
  },
  {
    title: "品牌价值观",
    dataIndex: "values",
    width: 120,
  },
  {
    title: "品牌官网",
    dataIndex: "website",
    width: 120,
  },
  {
    title: "品牌创立时间",
    dataIndex: "establishedDate",
    width: 120,
  },
  {
    title: "区分字段",
    dataIndex: "flag",
    width: 120,
  },
  {
    title: "品牌归属公司名",
    dataIndex: "companyName",
    width: 120,
  },
  {
    title: "品牌归属公司id",
    dataIndex: "companyId",
    width: 120,
  },
];
//todo 查询条件暂时用来装样子，后面增加配置条件后修改模版
export const searchFormSchema: FormSchema[] = [
  {
    field: "deletedFlag",
    label: "逻辑删除",
    component: "Input",
    colProps: { lg: 4, md: 5 },
  },
  {
    field: "name",
    label: "品牌名",
    component: "Input",
    colProps: { lg: 4, md: 5 },
  },
  {
    field: "description",
    label: "品牌描述",
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
    field: "deletedFlag",
    label: "逻辑删除",
    component: "Input",
  },
  {
    field: "name",
    label: "品牌名",
    component: "Input",
  },
  {
    field: "description",
    label: "品牌描述",
    component: "Input",
  },
  {
    field: "values",
    label: "品牌价值观",
    component: "Input",
  },
  {
    field: "website",
    label: "品牌官网",
    component: "Input",
  },
  {
    field: "establishedDate",
    label: "品牌创立时间",
    component: "Input",
  },
  {
    field: "flag",
    label: "区分字段",
    component: "Input",
  },
  {
    field: "companyName",
    label: "品牌归属公司名",
    component: "Input",
  },
  {
    field: "companyId",
    label: "品牌归属公司id",
    component: "Input",
  },
];
