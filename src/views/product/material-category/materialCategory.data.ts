import { BasicColumn } from "/@/components/general/Table";
import { FormSchema } from "/@/components/general/Table";

/**
 * @description: 产品类型表
 * @author cgli
 * @date: 2023-05-21
 * @version: V1.0.0
 */
export const columns: BasicColumn[] = [
  {
    title: "名称",
    dataIndex: "name",
    width: 120,
  },
  {
    title: "编号",
    dataIndex: "serialNo",
    width: 120,
  },
  {
    title: "等级",
    dataIndex: "categoryLevel",
    width: 120,
  },
  {
    title: "上级分类",
    dataIndex: "name",
    width: 120,
  },
  {
    title: "显示顺序",
    dataIndex: "sort",
    width: 120,
  },
  {
    title: "备注",
    dataIndex: "remark",
    width: 120,
  },
];
//todo 查询条件暂时用来装样子，后面增加配置条件后修改模版
export const searchFormSchema: FormSchema[] = [
  {
    field: "name",
    label: "名称",
    component: "Input",
    colProps: { lg: 4, md: 5 },
  },
  {
    field: "serialNo",
    label: "编号",
    component: "Input",
    colProps: { lg: 4, md: 5 },
  },
  // {
  //   field: "categoryLevel",
  //   label: "等级",
  //   component: "Input",
  //   colProps: { lg: 4, md: 5 },
  // },
];
export const materialCategoryFormSchema: FormSchema[] = [
  {
    field: "id",
    label: "唯一ID",
    component: "Input",
    show: false,
  },
  {
    field: "name",
    label: "名称",
    component: "Input",
    required: true,
  },
  {
    field: "serialNo",
    label: "编号",
    component: "Input",
  },
  {
    field: "categoryLevel",
    label: "等级",
    component: "Input",
    required: true,
  },
  {
    field: "parentId",
    label: "上级分类",
    component: "TreeSelect",
    required: true,
    componentProps: {
      fieldNames: {
        label: "name",
        key: "id",
        value: "id",
      },
      getPopupContainer: () => document.body,
    },
  },
  {
    field: "sort",
    label: "显示顺序",
    component: "Input",
  },
  {
    field: "remark",
    label: "备注",
    component: "Input",
  },
  {
    field: "orgId",
    label: "归属组织id",
    component: "Input",
  },
  // {
  //   field: "flag",
  //   label: "区分字段",
  //   component: "Input",
  // },
];
