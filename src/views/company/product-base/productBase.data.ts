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
    dataIndex: "baseName",
    width: 120,
  },
  {
    title: "基地编码",
    dataIndex: "baseNo",
    width: 120,
  },
  {
    title: "企业",
    dataIndex: "companyName",
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
    title: "备注",
    dataIndex: "remark",
    width: 120,
  },
  {
    title: "基地面积",
    dataIndex: "mainProduct",
    width: 120,
  },
  {
    title: "年产量",
    dataIndex: "annualOutput",
    width: 120,
  },
  {
    title: "认证情况",
    dataIndex: "attestation",
    width: 120,
    customRender: ({ record }) => {
      let text = "";
      switch (record.attestation) {
        case 1:
          text = "绿色";
          break;
        case 2:
          text = "无公害";
          break;
        case 3:
          text = "地理标志";
          break;
        case 4:
          text = "其他";
          break;
      }
      const color = "#FF9800";
      return h(Tag, { color: color }, () => text);
    },
  },
  {
    title: "封面图片",
    dataIndex: "img",
    width: 120,
  },
  {
    title: "官网地址",
    dataIndex: "websiteAddress",
    width: 120,
  },
  {
    title: "产品分类",
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
    title: "城市",
    dataIndex: "city",
    width: 120,
  },
  {
    title: "经度",
    dataIndex: "lat",
    width: 120,
  },
  {
    title: "维度",
    dataIndex: "lng",
    width: 120,
  },
  {
    title: "产量单位",
    dataIndex: "outputUnit",
    width: 120,
  },
  {
    title: "所在的区",
    dataIndex: "region",
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
    field: "baseName",
    label: "基地名称",
    component: "Input",
    required: true,
  },
  {
    field: "baseNo",
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
    field: "websiteAddress",
    label: "公司网址",
    component: "Input",
  },
  {
    field: "companyId",
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
  {
    field: "area",
    label: "基地面积",
    component: "Input",
  },
  {
    field: "mainProduct",
    label: "主要产品",
    component: "Input",
  },
  {
    field: "annualOutput",
    label: "年产量",
    component: "Input",
  },
  {
    field: "attestation",
    label: "认证情况",
    component: "Select",
    componentProps: {
      options: [
        { label: "绿色", value: 1 },
        { label: "无公害", value: 2 },
        { label: "地理标志", value: 3 },
        { label: "其他", value: 4 },
      ],
    },
  },
  {
    field: "img",
    label: "封面图片",
    component: "Input",
  },
  {
    field: "flag",
    label: "产品分类",
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
  {
    field: "city",
    label: "城市",
    component: "Input",
  },
  {
    field: "lat",
    label: "经度",
    component: "Input",
  },
  {
    field: "lng",
    label: "维度",
    component: "Input",
  },
  {
    field: "outputUnit",
    label: "产量单位",
    component: "Input",
  },
  {
    field: "region",
    label: "所在的区",
    component: "Input",
  },
];
