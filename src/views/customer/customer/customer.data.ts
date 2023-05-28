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
    title: "年龄",
    dataIndex: "age",
    width: 100,
  },
  {
    title: "性别",
    dataIndex: "gender",
    width: 100,
  },
  {
    title: "职业",
    dataIndex: "occupation",
    width: 150,
  },
  {
    title: "城市",
    dataIndex: "city",
    width: 100,
  },
  {
    title: "关联产品",
    dataIndex: "flag",
    width: 100,
  },
];
//todo 查询条件暂时用来装样子，后面增加配置条件后修改模版
export const searchFormSchema: FormSchema[] = [
  {
    field: "name",
    label: "客户名称",
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
    field: "flag",
    label: "关联产品",
    component: "Select",
  },
];
