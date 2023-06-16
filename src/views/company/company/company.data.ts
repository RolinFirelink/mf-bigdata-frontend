import { BasicColumn } from "/@/components/general/Table";
import { FormSchema } from "/@/components/general/Table";
import { h } from "vue";
import { Tag } from "ant-design-vue";
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
    title: "公司类型",
    dataIndex: "companyType",
    width: 120,
    customRender: ({ record }) => {
      let text = "";
      switch (record.companyType) {
        case 1:
          text = "供应商";
          break;
        case 2:
          text = "销售商";
          break;
        case 3:
          text = "承运商";
          break;
      }
      const color = "#FF9800";
      return h(Tag, { color: color }, () => text);
    },
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
    field: "companyNo",
    label: "公司编码",
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
    field: "address",
    label: "公司地址",
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
    label: "详细地址",
    component: "Input",
    colProps: { span: 24 },
  },
  {
    field: "companyType",
    label: "公司类型",
    component: "Select",
    required: true,
    componentProps: {
      options: [
        { label: "供货商", value: 1 },
        { label: "销售商", value: 2 },
        { label: "承运商", value: 3 },
      ],
    },
    colProps: { span: 12 },
  },
];
