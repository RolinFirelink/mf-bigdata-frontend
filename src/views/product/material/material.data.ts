import { BasicColumn } from "/@/components/general/Table";
import { FormSchema } from "/@/components/general/Table";
import { Tag } from "ant-design-vue";
import { h } from "vue";
/**
 * @description: 产品表
 * @author cgli
 * @date: 2023-05-21
 * @version: V1.0.0
 */
export const columns: BasicColumn[] = [
  // {
  //   title: "产品类型",
  //   dataIndex: "categoryName",
  //   width: 120,
  // },
  {
    title: "产品类型",
    dataIndex: "flag",
    width: 120,
    customRender: ({ record }) => {
      let text = "";
      switch (record.flag) {
        case 1:
          text = "肉鸡";
          break;
        case 2:
          text = "柑橘";
          break;
        case 3:
          text = "兰花";
          break;
        case 4:
          text = "对虾";
          break;
        case 5:
          text = "菜心";
          break;
        case 6:
          text = "预制菜";
          break;
        case 7:
          text = "鸽儿";
          break;
      }
      const color = "#FF9800";
      return h(Tag, { color: color }, () => text);
    },
  },
  {
    title: "产品名称",
    dataIndex: "name",
    width: 120,
  },
  // {
  //   title: "型号",
  //   dataIndex: "model",
  //   width: 120,
  // },
  // {
  //   title: "规格",
  //   dataIndex: "standard",
  //   width: 120,
  // },
  // {
  //   title: "颜色",
  //   dataIndex: "color",
  //   width: 120,
  // },
  // {
  //   title: "单位",
  //   dataIndex: "unit",
  //   width: 120,
  // },
  // {
  //   title: "备注",
  //   dataIndex: "remark",
  //   width: 120,
  // },
  // {
  //   title: "保质期天数",
  //   dataIndex: "expiryNum",
  //   width: 120,
  // },
  // {
  //   title: "基础重量(kg)",
  //   dataIndex: "weight",
  //   width: 120,
  // },
  // {
  //   title: "是否启用",
  //   dataIndex: "enabled",
  //   width: 120,
  //   customRender: ({ record }) => {
  //     const status = record.enabled;
  //     const enable = ~~status === 1;
  //     const color = enable ? "green" : "grey";
  //     const text = enable ? "启用" : "禁止";
  //     return h(Tag, { color: color }, () => text);
  //   },
  // },
  // {
  //   title: "是否开启序列号",
  //   dataIndex: "enableSerialNumber",
  //   width: 120,
  //   customRender: ({ record }) => {
  //     const status = record.enableSerialNumber;
  //     const enable = ~~status === 1;
  //     const color = enable ? "green" : "grey";
  //     const text = enable ? "是" : "否";
  //     return h(Tag, { color: color }, () => text);
  //   },
  // },
  // {
  //   title: "是否开启批号",
  //   dataIndex: "enableBatchNumber",
  //   width: 120,
  //   customRender: ({ record }) => {
  //     const status = record.enableBatchNumber;
  //     const enable = ~~status === 1;
  //     const color = enable ? "green" : "grey";
  //     const text = enable ? "是" : "否";
  //     return h(Tag, { color: color }, () => text);
  //   },
  // },
  // {
  //   title: "归属组织id",
  //   dataIndex: "orgId",
  //   width: 120,
  // },
  // {
  //   title: "种植规模(㎡)",
  //   dataIndex: "scale",
  //   width: 120,
  // },
];
//todo 查询条件暂时用来装样子，后面增加配置条件后修改模版
export const searchFormSchema: FormSchema[] = [
  // {
  //   field: "categoryId",
  //   label: "产品类型",
  //   component: "TreeSelect",
  //   required: false,
  //   componentProps: {
  //     fieldNames: {
  //       label: "name",
  //       key: "id",
  //       value: "id",
  //     },
  //     getPopupContainer: () => document.body,
  //   },
  //   colProps: { lg: 4, md: 5 },
  // },
  {
    field: "name",
    label: "产品名称",
    component: "Input",
    colProps: { lg: 4, md: 5 },
  },
  // {
  //   field: "model",
  //   label: "型号",
  //   component: "Input",
  //   colProps: { lg: 4, md: 5 },
  // },
];
export const materialFormSchema: FormSchema[] = [
  {
    field: "id",
    label: "唯一ID",
    component: "Input",
    show: false,
  },
  {
    field: "categoryId",
    label: "产品类别",
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
    field: "name",
    label: "产品名称",
    component: "Input",
    required: true,
  },
  // {
  //   field: "model",
  //   label: "型号",
  //   component: "Input",
  // },
  // {
  //   field: "standard",
  //   label: "规格",
  //   component: "Input",
  // },
  // {
  //   field: "color",
  //   label: "颜色",
  //   component: "Input",
  // },
  // {
  //   field: "unit",
  //   label: "单位",
  //   component: "Input",
  // },
  // {
  //   field: "remark",
  //   label: "备注",
  //   component: "Input",
  // },
  // {
  //   field: "expiryNum",
  //   label: "保质期天数",
  //   component: "Input",
  // },
  // {
  //   field: "weight",
  //   label: "基础重量(kg)",
  //   component: "Input",
  // },
  // {
  //   field: "enabled",
  //   label: "是否启用",
  //   component: "RadioButtonGroup",
  //   defaultValue: 0,
  //   componentProps: {
  //     options: [
  //       { label: "禁用", value: 0 },
  //       { label: "启用", value: 1 },
  //     ],
  //   },
  // },
  // {
  //   field: "extendField",
  //   label: "自定义扩展字段JSON结构",
  //   component: "Input",
  // },
  // {
  //   field: "enableSerialNumber",
  //   label: "是否开启序列号",
  //   component: "RadioButtonGroup",
  //   defaultValue: 0,
  //   componentProps: {
  //     options: [
  //       { label: "否", value: 0 },
  //       { label: "是", value: 1 },
  //     ],
  //   },
  // },
  // {
  //   field: "enableBatchNumber",
  //   label: "是否开启批号",
  //   component: "RadioButtonGroup",
  //   defaultValue: 0,
  //   componentProps: {
  //     options: [
  //       { label: "否", value: 0 },
  //       { label: "是", value: 1 },
  //     ],
  //   },
  // },
  // {
  //   field: "orgId",
  //   label: "归属组织id",
  //   component: "Input",
  // },
  // {
  //   field: "scale",
  //   label: "种植规模(㎡)",
  //   component: "Input",
  // },
  {
    field: "flag",
    label: "区分字段",
    component: "Select",
    componentProps: {
      options: [
        { label: "肉鸡", value: 1 },
        { label: "柑橘", value: 2 },
        { label: "兰花", value: 3 },
        { label: "对虾", value: 4 },
        { label: "菜心", value: 5 },
        { label: "预制菜", value: 6 },
        { label: "鸽子", value: 7 },
      ],
    },
  },
];
