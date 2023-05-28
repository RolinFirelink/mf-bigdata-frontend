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
    title: "公司产品类型",
    dataIndex: "productType",
    width: 120,
    customRender: ({ record }) => {
      let text = "";
      switch (record.productType) {
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
    title: "公司地址",
    dataIndex: "address",
    width: 120,
  },
  // {
  //   title: "启用状态",
  //   dataIndex: "enabled",
  //   width: 120,
  //   customRender: ({ record }) => {
  //     let text = "";
  //     let color = "";
  //     switch (record.productType) {
  //       case 1:
  //         text = "已启用";
  //         color = "black";
  //         break;
  //       case 2:
  //         text = "未启用";
  //         color = "grey";
  //         break;
  //     }
  //     return h(Tag, { color: color }, () => text);
  //   },
  // },
  // {
  //   title: "备注",
  //   dataIndex: "remark",
  //   width: 120,
  // },
];
//todo 查询条件暂时用来装样子，后面增加配置条件后修改模版
export const searchFormSchema: FormSchema[] = [
  {
    field: "companyName",
    label: "公司名称",
    component: "Input",
    colProps: { lg: 4, md: 5 },
  },
  {
    field: "companyNo",
    label: "公司编码",
    component: "Input",
    colProps: { lg: 4, md: 5 },
  },
  {
    field: "juridicalPerson",
    label: "法人",
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
    field: "country",
    label: "",
    component: "Input",
  },
  // {
  //   field: "areaName",
  //   label: "行政区域名称",
  //   component: "Input",
  // },
  // {
  //   field: "areaCode",
  //   label: "行政区域编码",
  //   component: "Input",
  // },
  {
    field: "address",
    label: "公司地址",
    component: "Input",
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
  {
    field: "productType",
    label: "公司产品类型",
    component: "Select",
    componentProps: {
      options: [
        { label: "肉鸡", value: 1 },
        { label: "柑橘", value: 2 },
        { label: "兰花", value: 3 },
        { label: "对虾", value: 4 },
        { label: "菜心", value: 5 },
        { label: "预制菜", value: 6 },
      ],
    },
    colProps: { span: 12 },
  },
  // {
  //   field: "enabled",
  //   label: "是否启用",
  //   component: "RadioButtonGroup",
  //   defaultValue: 0,
  //   componentProps: {
  //     options: [
  //       { label: "未启用", value: 0 },
  //       { label: "已启用", value: 1 },
  //     ],
  //   },
  //   colProps: { span: 12 },
  // },
  // {
  //   field: "extendField",
  //   label:
  //     "自定义拓展字段JSON 结构(如果公司类型为承运商，要在该字段加上承运商商业性质标识（1=物流公司、2=运输公司、3=快递公司）)",
  //   component: "Input",
  // },
  // {
  //   field: "remark",
  //   label: "备注",
  //   component: "Input",
  // },
];
