import { BasicColumn } from "/@/components/general/Table";
import { FormSchema } from "/@/components/general/Table";

/**
 * @description: 客户消费行为表
 * @author cgli
 * @date: 2023-05-24
 * @version: V1.0.0
 */
export const columns: BasicColumn[] = [
  {
    title: "行为类型",
    dataIndex: "type",
    width: 120,
  },
  {
    title: "扩展信息",
    dataIndex: "extendInfo",
    width: 120,
  },
  {
    title: "备注",
    dataIndex: "remark",
    width: 120,
  },
  {
    title: "产品分类",
    dataIndex: "flag",
    width: 120,
  },
  {
    title: "",
    dataIndex: "deleteFlag",
    width: 120,
  },
  {
    title: "乐观锁",
    dataIndex: "version",
    width: 120,
  },
];
//todo 查询条件暂时用来装样子，后面增加配置条件后修改模版
export const searchFormSchema: FormSchema[] = [
  {
    field: "type",
    label: "行为类型",
    component: "Input",
    colProps: { lg: 4, md: 5 },
  },
  {
    field: "extendInfo",
    label: "扩展信息",
    component: "Input",
    colProps: { lg: 4, md: 5 },
  },
  {
    field: "remark",
    label: "备注",
    component: "Input",
    colProps: { lg: 4, md: 5 },
  },
];
export const customerBehaviorFormSchema: FormSchema[] = [
  {
    field: "id",
    label: "唯一ID",
    component: "Input",
    show: false,
  },
  {
    field: "type",
    label: "行为类型",
    component: "Input",
  },
  {
    field: "extendInfo",
    label: "扩展信息",
    component: "Input",
  },
  {
    field: "remark",
    label: "备注",
    component: "Input",
  },
  {
    field: "flag",
    label: "产品分类",
    component: "Input",
  },
  {
    field: "deleteFlag",
    label: "",
    component: "Input",
  },
  {
    field: "version",
    label: "乐观锁",
    component: "Input",
  },
];
