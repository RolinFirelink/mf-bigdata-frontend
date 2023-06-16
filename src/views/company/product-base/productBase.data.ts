import { BasicColumn } from "/@/components/general/Table";
import { FormSchema } from "/@/components/general/Table";
/**
 * @description: 产品基地
 * @author cgli
 * @date: 2023-05-24
 * @version: V1.0.0
 */
export const columns: BasicColumn[] = [
  {
    title: "基地名称",
    dataIndex: "companyName",
    width: 120,
  },
  {
    title: "基地编码",
    dataIndex: "companyNo",
    width: 120,
  },
  {
    title: "联系人",
    dataIndex: "contacts",
    width: 120,
  },
  {
    title: "联系电话",
    dataIndex: "contactPhone",
    width: 120,
  },
  {
    title: "电子邮箱",
    dataIndex: "email",
    width: 120,
  },
  {
    title: "行政区域名称",
    dataIndex: "areaName",
    width: 120,
  },
  {
    title: "行政区域编码",
    dataIndex: "areaCode",
    width: 120,
  },
  {
    title: "基地详细地址",
    dataIndex: "address",
    width: 120,
  },
];
//todo 查询条件暂时用来装样子，后面增加配置条件后修改模版
export const searchFormSchema: FormSchema[] = [
  {
    field: "baseName",
    label: "基地名称",
    component: "Input",
    colProps: { lg: 4, md: 5 },
  },
];
export const productBaseFormSchema: FormSchema[] = [
  {
    field: "id",
    label: "唯一ID",
    component: "Input",
    show: false,
  },
  {
    field: "companyName",
    label: "基地名称",
    component: "Input",
    required: true,
  },
  {
    field: "companyNo",
    label: "基地编码",
    component: "Input",
    required: true,
  },
  {
    field: "contacts",
    label: "联系人",
    component: "Input",
  },
  {
    field: "contactPhone",
    label: "联系电话",
    component: "Input",
  },
  {
    field: "email",
    label: "电子邮箱",
    component: "Input",
  },
  {
    field: "address",
    label: "地址",
    component: "Cascader",
    componentProps: {
      fieldNames: {
        label: "name",
        value: "id",
        children: "children",
      },
    },
    required: true,
    colProps: { span: 24 },
  },
  {
    field: "detail",
    label: "基地详细地址",
    component: "Input",
  },
  {
    field: "parentId",
    label: "企业",
    component: "Select",
    required: true,
    componentProps: {
      fieldNames: {
        label: "companyName",
        value: "id",
      },
      getPopupContainer: () => document.body,
    },
  },
  {
    field: "extendField",
    label: "自定义拓展字段JSON 结构",
    component: "Input",
  },
  {
    field: "remark",
    label: "备注",
    component: "Input",
  },
];
