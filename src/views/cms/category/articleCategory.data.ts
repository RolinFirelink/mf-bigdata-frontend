import { BasicColumn } from "/@/components/general/Table";
import { FormSchema } from "/@/components/general/Table";

/**
 * @description: 内容分类
 * @author cgli
 * @date: 2023-05-15
 * @version: V1.0.0
 */
export const columns: BasicColumn[] = [
  {
    title: "分类名称",
    dataIndex: "name",
    width: 120,
  },
  {
    title: "排序",
    dataIndex: "sort",
    width: 120,
  },
  {
    title: "文章数",
    dataIndex: "num",
    width: 120,
  },
];
//todo 查询条件暂时用来装样子，后面增加配置条件后修改模版
export const searchFormSchema: FormSchema[] = [
  {
    field: "name",
    label: "分类名称",
    component: "Input",
    colProps: { lg: 5, md: 5 },
  },
];
export const articleCategoryFormSchema: FormSchema[] = [
  {
    field: "id",
    label: "唯一ID",
    component: "Input",
    show: false,
  },
  {
    field: "name",
    label: "分类名称",
    component: "Input",
    required: true,
  },
  {
    field: "sort",
    label: "排序",
    component: "Input",
    required: true,
    defaultValue: 10,
  },
  {
    field: "num",
    label: "文章数",
    component: "Input",
    required: true,
  },
  {
    field: "parentId",
    label: "上级ID",
    component: "TreeSelect",
    required: false,
    componentProps: {
      fieldNames: {
        label: "name",
        key: "id",
        value: "id",
      },
      getPopupContainer: () => document.body,
    },
  },
];
