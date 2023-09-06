import { BasicColumn } from "/@/components/general/Table";
import { FormSchema } from "/@/components/general/Table";
import { h } from "vue";
import { Tag } from "ant-design-vue";
import { getDictItems } from "/@/api/sys/DictItem";
/**
 * @description: 客户消费行为表
 * @author cgli
 * @date: 2023-05-24
 * @version: V1.0.0
 */
export const columns: BasicColumn[] = [
  {
    title: "客户ID",
    dataIndex: "customerId",
    width: 120,
  },
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
    title: "关联产品",
    dataIndex: "flag",
    width: 120,
  },
];
//todo 查询条件暂时用来装样子，后面增加配置条件后修改模版
export const searchFormSchema: FormSchema[] = [
  {
    field: "id",
    label: "唯一ID",
    component: "Input",
    show: false,
  },
  {
    field: "customerId",
    label: "客户ID",
    component: "Input",
  },
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
    field: "customerId",
    label: "客户ID",
    component: "Input",
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
    label: "关联产品",
    component: "Select",
    componentProps: getDictItems("mk_product_type"),
    colProps: { span: 12 },
  },
];
