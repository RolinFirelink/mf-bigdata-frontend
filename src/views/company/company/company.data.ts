// import { FieldNames } from "./../../../components/general/Tree/src/types/Tree";
import { BasicColumn } from "/@/components/general/Table";
import { FormSchema } from "/@/components/general/Table";
// import { h } from "vue";
// import { Tag } from "ant-design-vue";
import { getDictProps } from "/@/utils/DictUtils";

/**
 * @description: 企业、供货商、销售商和承运商
 * @author cgli
 * @date: 2023-05-24
 * @version: V1.0.0
 */
export const columns: BasicColumn[] = [
  {
    title: "公司名称",
    dataIndex: "companyName",
    width: 120,
  },
  {
    title: "法人",
    dataIndex: "juridicalPerson",
    width: 120,
  },
  {
    title: "法人电话",
    dataIndex: "juridicalPhone",
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
    title: "公司地址",
    dataIndex: "address",
    width: 120,
  },
];
//todo 查询条件暂时用来装样子，后面增加配置条件后修改模版
export const searchFormSchema: FormSchema[] = [
  {
    field: "companyName",
    label: "公司名称",
    component: "Input",
    colProps: { lg: 4, md: 5 },
  },
];
export const companyFormSchema: FormSchema[] = [
  {
    field: "id",
    label: "唯一ID",
    component: "Input",
    show: false,
  },
  {
    field: "companyName",
    label: "公司名称",
    component: "Input",
    required: true,
  },
  {
    field: "juridicalPerson",
    label: "法人",
    component: "Input",
  },
  {
    field: "juridicalPhone",
    label: "法人电话",
    component: "Input",
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
    field: "country",
    label: "国家",
    component: "Select",
    componentProps: {
      fieldNames: {
        label: "name",
        value: "id",
      },
    },
  },
  {
    field: "province",
    label: "省份",
    component: "Select",
    componentProps: {
      fieldNames: {
        label: "name",
        value: "id",
      },
    },
  },
  {
    field: "city",
    label: "城市",
    component: "Select",
    componentProps: {
      fieldNames: {
        label: "name",
        value: "id",
      },
    },
  },
  {
    field: "area",
    label: "地区",
    component: "Select",
    componentProps: {
      fieldNames: {
        label: "name",
        value: "id",
      },
    },
  },
  {
    field: "street",
    label: "街道",
    component: "Select",
    componentProps: {
      fieldNames: {
        label: "name",
        value: "id",
      },
    },
  },
  {
    field: "companyType",
    label: "公司类型",
    component: "ApiSelect",
    required: true,
    componentProps: getDictProps("mk_company_type"),
    colProps: { span: 12 },
  },
  {
    field: "remark",
    label: "备注",
    component: "Input",
    colProps: { span: 24 },
  },
];
