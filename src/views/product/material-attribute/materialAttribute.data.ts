import { BasicColumn } from "/@/components/general/Table";
import { FormSchema } from "/@/components/general/Table";

/**
 * @description: 产品属性表
 * @author cgli
 * @date: 2023-05-18
 * @version: V1.0.0
 */
export const columns: BasicColumn[] = [
  {
    title: "属性字段",
    dataIndex: "attributeField",
    width: 120
  },
  {
    title: "属性名",
    dataIndex: "attributeName",
    width: 120
  },
  {
    title: "属性值",
    dataIndex: "attributeValue",
    width: 120
  },
  {
    title: "归属组织id",
    dataIndex: "orgId",
    width: 120
  },
  {
    title: "0--未删除 1--已删除 DIC_NAME=DELETE_FLAG",
    dataIndex: "deletedFlag",
    width: 120
  },
  {
    title: "区分字段",
    dataIndex: "flag",
    width: 120
  },
];
//todo 查询条件暂时用来装样子，后面增加配置条件后修改模版
export const searchFormSchema: FormSchema[] = [
  {
    field: "attributeField",
    label: "属性字段",
    component: "Input",
    colProps: { lg: 4, md: 5 }
  },
  {
    field: "attributeName",
    label: "属性名",
    component: "Input",
    colProps: { lg: 4, md: 5 }
  },
  {
    field: "attributeValue",
    label: "属性值",
    component: "Input",
    colProps: { lg: 4, md: 5 }
  },
];
export const materialAttributeFormSchema: FormSchema[] = [
  {
    field: "id",
    label: "唯一ID",
    component: "Input",
    show: false
  },
  {
    field: "attributeField",
    label: "属性字段",
    component: "Input",
  },
  {
    field: "attributeName",
    label: "属性名",
    component: "Input",
  },
  {
    field: "attributeValue",
    label: "属性值",
    component: "Input",
  },
  {
    field: "orgId",
    label: "归属组织id",
    component: "Input",
  },
  {
    field: "deletedFlag",
    label: "0--未删除 1--已删除 DIC_NAME=DELETE_FLAG",
    component: "Input",
  },
  {
    field: "flag",
    label: "区分字段",
    component: "Input",
  },
];