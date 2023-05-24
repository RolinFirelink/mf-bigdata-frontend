import { BasicColumn } from "/@/components/general/Table";
import { FormSchema } from "/@/components/general/Table";

/**
 * @description: 客户表
 * @author cgli
 * @date: 2023-05-17
 * @version: V1.0.0
 */
export const columns: BasicColumn[] = [
  {
    title: "客户名称",
    dataIndex: "name",
    width: 120,
  },
  {
    title: "平台id",
    dataIndex: "platformId",
    width: 120,
  },
  {
    title: "第三方用户id",
    dataIndex: "platformUserId",
    width: 120,
  },
];
//todo 查询条件暂时用来装样子，后面增加配置条件后修改模版
export const searchFormSchema: FormSchema[] = [
  {
    field: "isDeleted",
    label: "",
    component: "Input",
    colProps: { lg: 4, md: 5 },
  },
  {
    field: "name",
    label: "客户名称",
    component: "Input",
    colProps: { lg: 4, md: 5 },
  },
  {
    field: "platformId",
    label: "平台id",
    component: "Input",
    colProps: { lg: 4, md: 5 },
  },
];
export const customerFormSchema: FormSchema[] = [
  {
    field: "id",
    label: "唯一ID",
    component: "Input",
    show: false,
  },
  {
    field: "name",
    label: "客户名称",
    component: "Input",
  },
  {
    field: "platformId",
    label: "平台id",
    component: "Input",
  },
  {
    field: "platformUserId",
    label: "第三方用户id",
    component: "Input",
  },
];
