// import { Textarea } from "ant-design-vue";
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
    title: "显示顺序",
    dataIndex: "sort",
    width: 120,
  },
  {
    title: "备注",
    dataIndex: "remark",
    width: 120,
  },
  // {
  //   title: "区分字段",
  //   dataIndex: "flag",
  //   width: 120,
  // },
];
//todo 查询条件暂时用来装样子，后面增加配置条件后修改模版
export const searchFormSchema: FormSchema[] = [
  {
    field: "name",
    label: "名称",
    component: "Input",
    colProps: { lg: 4, md: 5 },
  },
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
    component: "Select",
    componentProps: {
      options: [
        { label: "1", value: 1 },
        { label: "2", value: 2 },
        { label: "3", value: 3 },
        { label: "4", value: 4 },
      ],
    },
  },
  {
    field: "parentId",
    label: "上级分类",
    component: "TreeSelect",
    componentProps: {
      placeholder: "请选择上级分类",
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
    defaultValue: 10,
  },
  {
    field: "remark",
    label: "备注",
    component: "InputTextArea",
    componentProps: {
      maxlength: 120,
      showCount: true,
      placeholder: "请输入内容",
    },
    colProps: { lg: 24, md: 8 },
  },
  // {
  //   field: "orgId",
  //   label: "归属组织id",
  //   component: "Input",
  // },
  // {
  //   field: "flag",
  //   label: "区分字段",
  //   component: "Select",
  //   componentProps: {
  //     options: [
  //       { label: "肉鸡", value: 1 },
  //       { label: "柑橘", value: 2 },
  //       { label: "兰花", value: 3 },
  //       { label: "对虾", value: 4 },
  //       { label: "菜心", value: 5 },
  //       { label: "预制菜", value: 6 },
  //       { label: "鸽子", value: 7 },
  //     ],
  //   },
  // },
];
