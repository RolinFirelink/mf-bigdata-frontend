import { BasicColumn } from "/@/components/general/Table";
import { FormSchema } from "/@/components/general/Table";
import { h } from "vue";
import { Tag } from "ant-design-vue";
/**
 * @description: 产品表
 * @author cgli
 * @date: 2023-05-21
 * @version: V1.0.0
 */
export const columns: BasicColumn[] = [
  {
    title: "产品类型id",
    dataIndex: "categoryId",
    width: 120,
  },
  {
    title: "产品名称",
    dataIndex: "name",
    width: 120,
  },
  {
    title: "型号",
    dataIndex: "model",
    width: 120,
  },
  {
    title: "规格",
    dataIndex: "standard",
    width: 120,
  },
  {
    title: "颜色",
    dataIndex: "color",
    width: 120,
  },
  {
    title: "单位",
    dataIndex: "unit",
    width: 120,
  },
  {
    title: "备注",
    dataIndex: "remark",
    width: 120,
  },
  {
    title: "保质期天数",
    dataIndex: "expiryNum",
    width: 120,
  },
  {
    title: "基础重量(kg)",
    dataIndex: "weight",
    width: 120,
  },
  {
    title: "启用状态",
    dataIndex: "enabled",
    width: 120,
    customRender: ({ record }) => {
      const status = record.enabled;
      const enable = ~~status === 1;
      const color = enable ? "green" : "red";
      const text = enable ? "启用" : "禁用";
      return h(Tag, { color: color }, () => text);
    },
  },
  {
    title: "自定义扩展字段JSON结构",
    dataIndex: "extendField",
    width: 120,
  },
  {
    title: "种植规模(单位为㎡)",
    dataIndex: "scale",
    width: 120,
  },
  {
    title: "区分字段",
    dataIndex: "flag",
    width: 120,
  },
];
//todo 查询条件暂时用来装样子，后面增加配置条件后修改模版
export const searchFormSchema: FormSchema[] = [
  {
    field: "categoryId",
    label: "产品类型id",
    component: "Input",
    colProps: { lg: 4, md: 5 },
  },
  {
    field: "name",
    label: "产品名称",
    component: "Input",
    colProps: { lg: 4, md: 5 },
  },
  {
    field: "model",
    label: "型号",
    component: "Input",
    colProps: { lg: 4, md: 5 },
  },
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
    label: "产品类型id",
    component: "Input",
    required: true,
  },
  {
    field: "name",
    label: "产品名称",
    component: "Input",
    required: true,
  },
  {
    field: "model",
    label: "型号",
    component: "Input",
  },
  {
    field: "standard",
    label: "规格",
    component: "Input",
  },
  {
    field: "color",
    label: "颜色",
    component: "Input",
  },
  {
    field: "unit",
    label: "单位",
    component: "Input",
  },
  {
    field: "remark",
    label: "备注",
    component: "Input",
  },
  {
    field: "expiryNum",
    label: "保质期天数",
    component: "Input",
  },
  {
    field: "weight",
    label: "基础重量(kg)",
    component: "Input",
  },
  {
    field: "enabled",
    label: "启用状态",
    component: "RadioButtonGroup",
    defaultValue: 0,
    componentProps: {
      options: [
        { label: "禁用", value: 0 },
        { label: "启用", value: 1 },
      ],
    },
    colProps: { span: 12 },
  },
  {
    field: "extendField",
    label: "自定义扩展字段JSON结构",
    component: "Input",
  },
  {
    field: "enableSerialNumber",
    label: "开启序列号",
    component: "RadioButtonGroup",
    defaultValue: 0,
    componentProps: {
      options: [
        { label: "否", value: 0 },
        { label: "是", value: 1 },
      ],
    },
    colProps: { span: 12 },
  },
  {
    field: "enableBatchNumber",
    label: "开启批号",
    component: "RadioButtonGroup",
    defaultValue: 0,
    componentProps: {
      options: [
        { label: "否", value: 0 },
        { label: "是", value: 1 },
      ],
    },
    colProps: { span: 12 },
  },
  {
    field: "orgId",
    label: "归属组织id",
    component: "Input",
  },
  {
    field: "scale",
    label: "种植规模(单位为㎡)",
    component: "Input",
  },
  {
    field: "flag",
    label: "区分字段",
    component: "Input",
  },
];
