import { BasicColumn } from "/@/components/general/Table";
import { FormSchema } from "/@/components/general/Table";
import { h } from "vue";
import { Tag } from "ant-design-vue";
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
  {
    title: "基地产品类型",
    dataIndex: "productType",
    width: 120,
    customRender: ({ record }) => {
      let text = "";
      switch (record.productType) {
        case "1":
          text = "肉鸡";
          break;
        case "2":
          text = "柑橘";
          break;
        case "3":
          text = "兰花";
          break;
        case "4":
          text = "对虾";
          break;
        case "5":
          text = "菜心";
          break;
        case "6":
          text = "预制菜";
          break;
      }
      const color = "#FF9800";
      return h(Tag, { color: color }, () => text);
    },
  },
];
//todo 查询条件暂时用来装样子，后面增加配置条件后修改模版
export const searchFormSchema: FormSchema[] = [
  {
    field: "companyName",
    label: "基地名称",
    component: "Input",
    colProps: { lg: 4, md: 5 },
  },
  {
    field: "companyNo",
    label: "基地编码",
    component: "Input",
    colProps: { lg: 4, md: 5 },
  },
  {
    field: "contacts",
    label: "联系人",
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
    field: "areaName",
    label: "行政区域名称",
    component: "Input",
  },
  {
    field: "areaCode",
    label: "行政区域编码",
    component: "Input",
  },
  {
    field: "address",
    label: "基地详细地址",
    component: "Input",
  },
  {
    field: "productType",
    label: "基地产品类型",
    required: true,
    component: "Select",
    componentProps: {
      options: [
        { label: "肉鸡", value: "1" },
        { label: "柑橘", value: "2" },
        { label: "兰花", value: "3" },
        { label: "对虾", value: "4" },
        { label: "菜心", value: "5" },
        { label: "预制菜", value: "6" },
      ],
    },
    colProps: { span: 12 },
  },
  {
    field: "enabled",
    label: "启用状态",
    required: true,
    component: "RadioButtonGroup",
    defaultValue: 0,
    componentProps: {
      options: [
        { label: "未启用", value: 0 },
        { label: "已启用", value: 1 },
      ],
    },
    colProps: { span: 12 },
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
